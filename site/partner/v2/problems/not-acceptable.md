# Not Acceptable

| Field | Value |
|-------|-------|
| **Status** | 406 |
| **Code** | `not_acceptable` |

The server cannot produce a response matching the `Accept` header sent in the request.

## Common causes

- Setting the `Accept` header to a content type other than `application/json`

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/not-acceptable",
  "title": "Not Acceptable",
  "status": 406,
  "code": "not_acceptable",
  "errors": []
}
```

## How to resolve

Set the `Accept` header to `application/json`.
