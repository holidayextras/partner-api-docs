# Dependency Unavailable

| Field | Value |
|-------|-------|
| **Status** | 503 |
| **Code** | `dependency_unavailable` |

A service the request depended on could not be reached. This is the second of two `503` problems: [Service Unavailable](/partner/v2/problems/service-unavailable/) says the service itself cannot serve the request, while `dependency_unavailable` says the service is healthy but something it needed is not answering.

## Common causes

- A downstream booking, content or supply service was unreachable
- Repeated failures caused the API to stop calling a struggling dependency for a short period, so the call fails immediately rather than waiting
- The authentication service could not be reached to verify your token

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/dependency-unavailable",
  "title": "Dependency Unavailable",
  "status": 503,
  "detail": null,
  "code": "dependency_unavailable",
  "trace_id": "abc123def456",
  "errors": []
}
```

`detail` is always `null` and `errors` always empty on a `5xx` -- server-side failures are described by `code` and `trace_id`, not by a message.

## How to resolve

Retry the request with exponential backoff (e.g. 2s, 4s, 8s) and stop after 3 attempts. Because the call may have been rejected without being attempted, retries are cheap, but keep the backoff -- retrying immediately will only extend the period the dependency is treated as unavailable. If the error persists, contact support with the `trace_id`.
