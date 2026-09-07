# Forbidden

| Field | Value |
|-------|-------|
| **Status** | 403 |
| **Code** | `forbidden` |

The credentials are valid, but the account they belong to is not permitted to perform this operation. Unlike a `401`, refreshing the token will not help.

## Common causes

- The account is not entitled to the product or operation being requested
- The requested resource belongs to a different account
- The operation is enabled for some environments or brands on the account but not the one being called

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Not permitted to perform this operation",
  "code": "forbidden",
  "trace_id": "abc123def456",
  "errors": []
}
```

## How to resolve

Do not retry -- the outcome will not change. Check that the resource being requested belongs to the authenticating account. If the operation should be available to you, contact your account manager or support with the `trace_id` to have the entitlement reviewed.
