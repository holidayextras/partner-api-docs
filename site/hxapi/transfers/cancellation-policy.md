---

---

# Transfers Cancellation Policy

## Important Notes

- This endpoint is for checking cancellation policy only - it does not perform any cancellation
- Use this endpoint before cancelling a booking to check if it's cancellable and to understand any fees
- The response shows the exact refund amount you would receive after cancellation
- Cancellation policies vary by supplier and may change based on how close to the travel date you are

## Cancellation Policy Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/transfers/[BookingRef]/cancellation-policy
```

Where ```[BookingRef]``` is the booking reference you received when making the original booking.

For example:
```
https://api.holidayextras.co.uk/v1/transfers/TBBGNHMT/cancellation-policy
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name               | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                       |
|--------------------|-----------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber         | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                  |
| Password           | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br />This will be confirmed to you by your Account Manager during set up.                                                                                                                            |
| key                | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                          |
| token              | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                   |

## Cancellation Policy Response

This endpoint provides detailed cancellation policy information for a transfers booking, including refund calculations, cancellable status, and terms & conditions.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information                                                                                                                                     |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BookingRef           | Unique identifier for the transfer booking.                                                                                                               |
| Cancellable          | Boolean indicating whether the booking can be cancelled.                                                                                                  |
| CancellationFee      | Fee charged for cancellation (formatted as currency string).                                                                                              |
| Currency             | Currency code from the booking (e.g., GBP, EUR, USD).                                                                                                    |
| RefundableAmount     | Amount that will be refunded after cancellation (formatted as currency string).                                                                           |

### Example

{% codetabs %}
{% codetab XML %}
```xml
<BookingRef>TBBGNHMT</BookingRef>
<Cancellable>true</Cancellable>
<CancellationFee>10.50</CancellationFee>
<Currency>GBP</Currency>
<RefundableAmount>93.02</RefundableAmount>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "BookingRef": "TBBGNHMT",
  "Cancellable": true,
  "CancellationFee": "10.50",
  "Currency": "GBP",
  "RefundableAmount": "93.02"
}
```
{% endcodetab %}
{% endcodetabs %}

### Example - Non-Cancellable Booking

{% codetabs %}
{% codetab XML %}
```xml
<BookingRef>TBBGNHMT</BookingRef>
<Cancellable>false</Cancellable>
<CancellationFee>103.52</CancellationFee>
<Currency>GBP</Currency>
<RefundableAmount>0.00</RefundableAmount>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "BookingRef": "TBBGNHMT",
  "Cancellable": false,
  "CancellationFee": "103.52",
  "Currency": "GBP",
  "RefundableAmount": "0.00"
}
```
{% endcodetab %}
{% endcodetabs %}

## Error Responses

The API will return error responses in the following scenarios:

### Invalid Booking Reference

If the booking reference format is invalid (must be 5-7 characters):

```json
{
  "Code": "Validation Error",
  "Message": "Invalid booking reference format"
}
```

### Booking Not Found

If no booking is found with the provided reference:

```json
{
  "Code": "NoRows",
  "Message": "No booking found with reference"
}
```

### Invalid Product Type

If the booking reference exists but is not for a transfers booking:

```json
{
  "Code": "Validation Error",
  "Message": "Not a transfers booking"
}
```