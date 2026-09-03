# Unauthorized

| Field | Value |
|-------|-------|
| **Status** | 401 |
| **Code** | `unauthorized` |

The request did not carry credentials the API could verify. Responses to this problem also carry a `WWW-Authenticate: Bearer` header.

## Common causes

- No `Authorization` header was sent, or it was not in the form `Bearer {token}`
- The access token has expired
- The token was issued by a different environment to the one being called (a staging token against production, or the reverse)
- The token's signature could not be verified

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Invalid or expired token",
  "code": "unauthorized",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Request a fresh access token from the token endpoint and retry once with the new token. See the [Authentication integration guide](https://github.com/holidayextras/partner-api-documentation/blob/main/docs/integration-guides/02-authentication.md) for the client credentials flow. Do not retry with the same token -- it will fail again. If a newly issued token is still rejected, check that the token and the API host belong to the same environment, then contact support with the `trace_id`.
