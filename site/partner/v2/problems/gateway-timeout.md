# Gateway Timeout

| Field | Value |
|-------|-------|
| **Status** | 504 |
| **Code** | `gateway_timeout` |

A service the request depended on did not respond within the time budget for the request. The call was abandoned, not refused -- so unlike a `503`, the downstream operation may or may not have completed.

## Common causes

- A downstream booking or content service was slow to respond
- The time budget for the request was already exhausted by earlier calls in the chain
- A dependency was recovering from load and responding well below its usual speed

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/gateway-timeout",
  "title": "Gateway Timeout",
  "status": 504,
  "detail": null,
  "code": "gateway_timeout",
  "trace_id": "abc123def456",
  "errors": []
}
```

`detail` is always `null` and `errors` always empty on a `5xx` -- server-side failures are described by `code` and `trace_id`, not by a message.

## How to resolve

For reads, retry with exponential backoff (e.g. 2s, 4s, 8s) and stop after 3 attempts.

For writes -- creating a booking, or confirming an amendment or cancellation -- a `504` does not tell you whether the operation completed. Retry the request with the **same** `Idempotency-Key` rather than a new one, so a request that did land is returned to you instead of being duplicated. If the error persists, look the booking up before creating it again, and contact support with the `trace_id`.
