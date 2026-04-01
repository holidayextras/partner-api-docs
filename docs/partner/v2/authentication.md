# Authentication

This guide explains how to authenticate with our API using OAuth 2.0 client credentials flow.

## Overview

Our API uses OAuth 2.0 with the client credentials grant type. This flow is designed for server-to-server authentication where no user interaction is required.

## Prerequisites

To use OAuth authentication, you must first obtain client credentials:

* **client_id**: Your unique application identifier
* **client_secret**: Your application's secret key

Contact us to register your application and receive credentials.

## Base URL

| Environment | Base URL |
|-------------|----------|
| Production  | `https://auth.holidayextras.com` |
| Staging     | `https://auth-staging.holidayextras.com` |

## Discovery

OAuth server metadata is available at the well-known endpoint:

```http
GET /.well-known/oauth-authorization-server
```

This returns a JSON document describing the OAuth server configuration:

```json
{
  "issuer": "https://auth.holidayextras.com",
  "token_endpoint": "https://auth.holidayextras.com/oauth2/token",
  "revocation_endpoint": "https://auth.holidayextras.com/oauth2/revoke",
  "token_endpoint_auth_methods_supported": ["client_secret_basic"],
  "grant_types_supported": ["client_credentials"],
  "response_types_supported": [],
  "scopes_supported": []
}
```

## Token Generation

### Token Endpoint

```http
POST /oauth2/token
```

### Token Authentication

Use HTTP Basic authentication with your credentials encoded as base64:

```http
Authorization: Basic {base64(client_id:client_secret)}
```

### Request

| Header | Value |
|--------|-------|
| Authorization | `Basic {base64_encoded_credentials}` |
| Content-Type | `application/x-www-form-urlencoded` |

| Body Parameter | Value |
|----------------|-------|
| grant_type     | `client_credentials` |

### Response

A successful request returns `200 OK` with a JSON body:

```json
{
  "access_token": "abc123xyz...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "",
  "status": "approved"
}
```

| Field | Description |
|-------|-------------|
| access_token | The token to use for API requests |
| token_type | Always `Bearer` |
| expires_in | Token lifetime in seconds (3600 = 1 hour) |
| scope | Granted scopes (if applicable) |
| status | Token status |

### Token Example

```bash
curl -X POST "https://auth.holidayextras.com/oauth2/token" \
  -H "Authorization: Basic $(echo -n 'your_client_id:your_client_secret' | base64)" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials"
```

## Using Access Tokens

Include the access token in the `Authorization` header for all API requests:

```http
Authorization: Bearer {access_token}
```

### Usage Example

```bash
curl "https://api.holidayextras.com/endpoint" \
  -H "Authorization: Bearer abc123xyz..."
```

### Token Expiry

Access tokens expire after **1 hour** (3600 seconds / 3600000 milliseconds).

The `expires_in` field in the token response indicates the remaining lifetime in seconds. Your application should:



1. Store the token and its expiry time
2. Request a new token before the current one expires
3. Handle 401 responses by requesting a new token

## Rate Limits

The OAuth token endpoints are limited to **100 requests per hour** per client.

If you exceed this limit, you will receive a `429 Too Many Requests` response.

If you anticipate needing higher rate limits, contact your account representative to discuss your requirements.

## Token Revocation

To invalidate an access token before it expires, use the revocation endpoint.

### Revoke Endpoint

```http
POST /oauth2/revoke
```

### Revoke Authentication

Use HTTP Basic authentication with the **same credentials that generated the token**:

```http
Authorization: Basic {base64(client_id:client_secret)}
```

### Revoke Request

| Header | Value |
|--------|-------|
| Authorization | `Basic {base64_encoded_credentials}` |
| Content-Type | `application/x-www-form-urlencoded` |

| Body Parameter | Value |
|----------------|-------|
| token          | The access token to revoke |

### Revoke Response

A successful revocation returns `200 OK` with no body.

Per RFC 7009, the endpoint returns 200 for both valid and invalid tokens to prevent token enumeration.

### Revoke Example

```bash
curl -X POST "https://auth.holidayextras.com/oauth2/revoke" \
  -H "Authorization: Basic $(echo -n 'your_client_id:your_client_secret' | base64)" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "token=abc123xyz..."
```

## Error Responses

Error responses follow RFC 6749 format:

```json
{
  "error": "error_code"
}
```

### Error Codes

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `invalid_request` | 400         | Missing or invalid request parameters (e.g., missing Authorization header) |
| `invalid_client` | 401         | Client authentication failed (invalid client_id or client_secret) |

### Example Error Response

```json
{
  "error": "invalid_client"
}
```
