# Internal Server Error

| Field | Value |
|-------|-------|
| **Status** | 500 |
| **Code** | `internal_error` |

An unexpected error occurred on the server. This is a transient error and can be retried.

## Retry guidance

- Wait at least 2 seconds before the first retry
- Use exponential backoff (e.g. 2s, 4s, 8s)
- Stop retrying after 3 attempts

If the error persists, contact support with the `trace_id` from the response.

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/internal-error",
  "title": "Internal Server Error",
  "status": 500,
  "code": "internal_error",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Retry the request with exponential backoff. If the error persists after multiple retries, raise it with your Holiday Extras integration contact and include the `trace_id` value.
