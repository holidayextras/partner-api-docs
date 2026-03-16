# Bad Gateway

| Field | Value |
|-------|-------|
| **Status** | 502 |
| **Code** | `bad_gateway` |

An upstream service returned an invalid response. This is a transient error and can be retried.

## Common causes

- A downstream booking system is temporarily unavailable
- Network issues between internal services

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/bad-gateway",
  "title": "Bad Gateway",
  "status": 502,
  "code": "bad_gateway",
  "errors": []
}
```

## How to resolve

Retry the request with exponential backoff (e.g. 2s, 4s, 8s). If the error persists after 3 attempts, contact support with the `trace_id`.
