# Error Responses

This page is the reference for the problem `type` URIs the API returns. For guidance on how your integration should respond to each one -- when to retry, what to show the customer -- see the [error handling guide](https://github.com/holidayextras/partner-api-documentation/blob/main/docs/errors.md) in [partner-api-documentation](https://github.com/holidayextras/partner-api-documentation), which is the source of truth for Partner API documentation.

Every error returned by Partner API v2 uses the same problem details body, served as `application/problem+json`:

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/conflict",
  "title": "Conflict",
  "status": 409,
  "detail": "The amendment token has expired",
  "code": "token_expired",
  "trace_id": "abc123def456",
  "errors": []
}
```

| Field | Description |
|-------|-------------|
| `type` | A stable URI identifying the class of problem. It resolves to the page for that problem, listed below. |
| `title` | A short, human-readable summary of the problem class. |
| `status` | The HTTP status code, repeated in the body. |
| `detail` | A human-readable explanation of this specific occurrence. Always `null` on a `5xx`. |
| `code` | A machine-readable value for this specific occurrence. Branch on this, not on `title` or `detail`. |
| `trace_id` | The identifier to quote when contacting support. Present whenever a trace is available. |
| `errors` | Field-level failures, each with `field`, `message` and an optional `code`. Always empty on a `5xx`. |

## `type` and `code` are not the same thing

`type` names the class of problem and is drawn from the fixed list below. `code` names the specific occurrence and can be more precise than the `type`. In the example above, an expired amendment token is a conflict, so `type` is `.../conflict`, but `code` is the narrower `token_expired`.

Treat `type` as the stable link to documentation and `code` as the value your integration switches on. A new `code` can appear within an existing `type` without the `type` changing, so match `code` values you know and fall back on `status` for the rest rather than failing closed on an unrecognised value.

## Problem types

| Status | Canonical `code` | Problem |
|--------|------------------|---------|
| 400 | `bad_request` | [Bad Request](/partner/v2/problems/bad-request/) |
| 401 | `unauthorized` | [Unauthorized](/partner/v2/problems/unauthorized/) |
| 403 | `forbidden` | [Forbidden](/partner/v2/problems/forbidden/) |
| 404 | `resource_not_found` | [Resource Not Found](/partner/v2/problems/resource-not-found/) |
| 405 | `method_not_allowed` | [Method Not Allowed](/partner/v2/problems/method-not-allowed/) |
| 406 | `not_acceptable` | [Not Acceptable](/partner/v2/problems/not-acceptable/) |
| 408 | `request_timeout` | [Request Timeout](/partner/v2/problems/request-timeout/) |
| 409 | `conflict` | [Conflict](/partner/v2/problems/conflict/) |
| 410 | `gone` | [Gone](/partner/v2/problems/gone/) |
| 415 | `unsupported_media_type` | [Unsupported Media Type](/partner/v2/problems/unsupported-media-type/) |
| 422 | `unprocessable_entity` | [Unprocessable Entity](/partner/v2/problems/unprocessable-entity/) |
| 425 | `too_early` | [Too Early](/partner/v2/problems/too-early/) |
| 429 | `too_many_requests` | [Too Many Requests](/partner/v2/problems/too-many-requests/) |
| 500 | `internal_error` | [Internal Server Error](/partner/v2/problems/internal-error/) |
| 502 | `bad_gateway` | [Bad Gateway](/partner/v2/problems/bad-gateway/) |
| 502 | `upstream_error` | [Upstream Error](/partner/v2/problems/upstream-error/) |
| 503 | `service_unavailable` | [Service Unavailable](/partner/v2/problems/service-unavailable/) |
| 503 | `dependency_unavailable` | [Dependency Unavailable](/partner/v2/problems/dependency-unavailable/) |
| 504 | `gateway_timeout` | [Gateway Timeout](/partner/v2/problems/gateway-timeout/) |

## Retrying

`4xx` problems describe something about the request and will fail again unchanged -- fix the request rather than retrying it. The exceptions are [Request Timeout](/partner/v2/problems/request-timeout/), [Too Early](/partner/v2/problems/too-early/) and [Too Many Requests](/partner/v2/problems/too-many-requests/), where the request itself was never processed and a later attempt can succeed.

`5xx` problems are server-side and usually transient. Retry with exponential backoff (e.g. 2s, 4s, 8s) and stop after 3 attempts, then contact support with the `trace_id`.

When retrying a write -- creating a booking, or confirming an amendment or cancellation -- always send the **same** `Idempotency-Key` as the original request. A retry with a fresh key can duplicate an operation that had already succeeded.
