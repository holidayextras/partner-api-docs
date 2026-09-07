# Gone

| Field | Value |
|-------|-------|
| **Status** | 410 |
| **Code** | `gone` |

The resource was once available but has been permanently removed. Unlike a `404`, this is a statement that the resource will not come back, so there is nothing to poll for.

## Common causes

- The endpoint belongs to a retired API version
- The resource was permanently deleted rather than cancelled

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/gone",
  "title": "Gone",
  "status": 410,
  "detail": "This resource is no longer available",
  "code": "gone",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Do not retry. If the endpoint has been retired, move to the current version -- see [Versioning](/versioning/) for how versions are published and withdrawn. Otherwise stop requesting the resource and remove any stored reference to it.
