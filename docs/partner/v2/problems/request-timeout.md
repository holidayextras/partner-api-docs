# Request Timeout

| Field | Value |
|-------|-------|
| **Status** | 408 |
| **Code** | `request_timeout` |

The request was not completed within the time the server was prepared to wait for it. Nothing was processed, so no booking or amendment will have been made.

## Common causes

- The request body was sent too slowly, or the connection stalled part-way through
- A connection was opened and held without a complete request being sent
- Network conditions between your client and the API delayed the request

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/request-timeout",
  "title": "Request Timeout",
  "status": 408,
  "detail": "Request Timeout",
  "code": "request_timeout",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Retry the request on a new connection. Because nothing was processed, a retry is safe. If timeouts recur, check for network issues or proxies between your client and the API, and confirm your client sends the full request body without long pauses.
