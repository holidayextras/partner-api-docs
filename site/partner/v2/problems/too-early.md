# Too Early

| Field | Value |
|-------|-------|
| **Status** | 425 |
| **Code** | `too_early` |

The request was made too early. The booking or resource is not yet in a state where this operation can be performed.

## Common causes

- Attempting to view or modify a booking that is still being processed
- Polling for a booking status before the asynchronous creation has completed

## Example response

```json
{
  "type": "https://docs.holidayextras.co.uk/partner/v2/problems/too-early",
  "title": "Too Early",
  "status": 425,
  "code": "too_early",
  "errors": [
    {
      "message": "Booking is still being processed"
    }
  ]
}
```

## How to resolve

Wait and retry using the `recommended_polling_seconds` value from the booking creation response. Use exponential backoff if the error persists.
