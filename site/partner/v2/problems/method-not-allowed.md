# Method Not Allowed

| Field | Value |
|-------|-------|
| **Status** | 405 |
| **Code** | `method_not_allowed` |

The requested HTTP method is not supported for this endpoint. The resource exists, but it does not accept the method used in the request.

## Common causes

- Sending a PATCH, PUT, or DELETE request to a read-only endpoint
- Sending a GET request to a write-only endpoint
- Using the wrong HTTP method for the intended operation

## Example response

The response includes an `Allow` header listing the HTTP methods that the endpoint supports.

```http
HTTP/1.1 405 Method Not Allowed
Allow: GET, HEAD
Content-Type: application/json
```

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/method-not-allowed",
  "title": "Method Not Allowed",
  "status": 405,
  "code": "method_not_allowed",
  "errors": []
}
```

## How to resolve

Check the `Allow` header in the response to see which HTTP methods the endpoint supports. Refer to the API documentation for the correct method for your intended operation.
