# Conflict

| Field | Value |
|-------|-------|
| **Status** | 409 |
| **Code** | `conflict` |

The request conflicts with the current state of the resource. This typically means a duplicate operation was attempted.

## Common causes

- Attempting to create a booking with a duplicate idempotency key
- Attempting to cancel a booking that is already cancelled
- Concurrent modification of the same resource

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/conflict",
  "title": "Conflict",
  "status": 409,
  "code": "conflict",
  "errors": [
    {
      "message": "Booking has already been cancelled"
    }
  ]
}
```

## How to resolve

Check the current state of the resource before retrying. If using idempotency keys, verify the original request completed successfully.
