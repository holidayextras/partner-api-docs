# Service Unavailable

| Field | Value |
|-------|-------|
| **Status** | 503 |
| **Code** | `service_unavailable` |

The service is temporarily unable to handle the request. This is a transient, server-side condition and can be retried.

## Common causes

- A service is being deployed or restarted
- A service is shedding load while it recovers
- A downstream booking or content service reported itself unavailable

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/service-unavailable",
  "title": "Service Unavailable",
  "status": 503,
  "detail": null,
  "code": "service_unavailable",
  "trace_id": "abc123def456",
  "errors": []
}
```

`detail` is always `null` and `errors` always empty on a `5xx` -- server-side failures are described by `code` and `trace_id`, not by a message.

## How to resolve

Retry the request with exponential backoff (e.g. 2s, 4s, 8s) and stop after 3 attempts. If the error persists, contact support with the `trace_id` from the response. See also [Dependency Unavailable](/partner/v2/problems/dependency-unavailable/), the other `503` this API can return.
