# Unsupported Media Type

| Field | Value |
|-------|-------|
| **Status** | 415 |
| **Code** | `unsupported_media_type` |

The request body uses a content type that the server does not support.

## Common causes

- Sending a request body with a `Content-Type` other than `application/json`
- Missing the `Content-Type` header on POST/PATCH requests

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/unsupported-media-type",
  "title": "Unsupported Media Type",
  "status": 415,
  "code": "unsupported_media_type",
  "errors": []
}
```

## How to resolve

Set the `Content-Type` header to `application/json` for all POST and PATCH requests.
