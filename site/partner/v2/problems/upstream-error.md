# Upstream Error

| Field | Value |
|-------|-------|
| **Status** | Mirrors the upstream service (typically `5xx`) |
| **Code** | `upstream_error` |

An upstream service returned an error that has been surfaced through the API. The HTTP status code on the response reflects the status returned by that upstream service. This is usually a transient, server-side error and can be retried.

## Common causes

- A downstream booking or content service returned an error
- A dependency was temporarily unavailable or timed out

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/upstream-error",
  "title": "Upstream Error",
  "status": 502,
  "code": "upstream_error",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

For `5xx` statuses, retry the request with exponential backoff (e.g. 2s, 4s, 8s) and stop after 3 attempts. If the error persists, contact support with the `trace_id` from the response. A `4xx` status indicates a problem with the request itself -- review the request and the `errors` array before retrying.
