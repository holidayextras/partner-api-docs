# Too Many Requests

| Field | Value |
|-------|-------|
| **Status** | 429 |
| **Code** | `too_many_requests` |

The request rate limit for your account has been exceeded. The request was rejected before it was processed, so nothing was created or changed.

## Common causes

- Sustained request volume above the rate agreed for your account
- A burst of parallel requests, such as a batch job started all at once
- A retry loop with no backoff, which multiplies the original request rate

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "Rate limit exceeded",
  "code": "too_many_requests",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Back off before retrying. If the response carries a `Retry-After` header, wait at least that long; otherwise retry with exponential backoff (e.g. 1s, 2s, 4s) and add jitter so parallel clients do not retry in lockstep. Cap the number of concurrent in-flight requests rather than relying on retries alone. If your integration needs a higher limit, contact your account manager.
