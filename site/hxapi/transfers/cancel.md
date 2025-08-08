---

---

# Transfers Cancel Booking

## Important Notes

- **Check cancellation fees first**: Before cancelling, use the [Cancellation Policy](/hxapi/transfers/cancellation-policy/) endpoint to check if the booking is cancellable and to see any applicable fees and refund amounts
- This DELETE request will immediately cancel the booking - ensure you want to proceed before making the request
- Cancellation fees and refund amounts will depend on the booking's cancellation policy
- Once cancelled, a booking cannot be uncancelled or modified

## Cancel Booking Request

### Method

DELETE

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.com/v1/transfers/booking/[BookingRef]
```

Where ```[BookingRef]``` is the booking reference you received when making the original booking.

For example:
```
https://api.holidayextras.com/v1/transfers/booking/TBBGNHMT
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

| Name               | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                       |
|--------------------|-----------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber         | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                  |
| Password           | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br />This will be confirmed to you by your Account Manager during set up.                                                                                                                            |
| key                | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                          |
| token              | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                   |
| CancelRef          | String    | [A-Z0-9]         | Y          | Reference number for the cancellation provided by your system.                                                                                                                                                                                                                               |

## Cancel Booking Response

If the cancellation is successful, the response will contain booking and cancellation details including any fees and refund information.

For a detailed explanation of the fields returned, please see below:

| Field                                     | Additional Information                                                                                                                                     |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                        | Unique identifier for the transfer booking.                                                                                                               |
| Booking/Status                            | Current status of the booking after cancellation (e.g., Cancelled).                                                                                      |
| Cancel/CancelFee                          | Fee charged for the cancellation, if applicable (formatted as currency string).                                                                           |
| Cancel/CancelRef                          | Reference number for the cancellation.                                                                                                                    |
| Cancel/CancelInfo                         | Information about the cancellation.                                                                                                                       |
| Cancel/RefundAmount                       | Amount refunded for the cancellation, if applicable.                                                                                                      |

### Example

{% codetabs %}
{% codetab XML %}
```xml
<Booking>
  <BookingRef>TBBGNHMT</BookingRef>
  <Status>Cancelled</Status>
</Booking>
<Cancel>
  <CancelFee>10.50</CancelFee>
  <CancelRef>CANCEL123456</CancelRef>
  <CancelInfo>Booking cancelled successfully</CancelInfo>
  <RefundAmount>93.02</RefundAmount>
</Cancel>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "Booking": {
    "BookingRef": "TBBGNHMT",
    "Status": "Cancelled"
  },
  "Cancel": {
    "CancelFee": "10.50",
    "CancelRef": "CANCEL123456",
    "CancelInfo": "Booking cancelled successfully",
    "RefundAmount": 93.02
  }
}
```
{% endcodetab %}
{% endcodetabs %}

## Error Responses

The API will return error responses in the following scenarios:

### Already Cancelled Booking (409 Conflict)

If the booking has already been cancelled and cannot be cancelled again:

```json
{
  "Code": "ConflictError",
  "Message": "Booking has already been cancelled"
}
```

### Invalid Parameters (400 Bad Request)

If required parameters are missing or malformed:

```json
{
  "Code": "ValidationError",
  "Message": "Missing or invalid required parameter"
}
```

### Booking Not Found (404 Not Found)

If no booking is found with the provided reference:

```json
{
  "Code": "NotFound",
  "Message": "Booking not found with provided reference"
}
```
