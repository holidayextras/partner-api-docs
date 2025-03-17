---

---

# Cancel Booking

[API Docs](/hxapi/) > product:[cancel](/hxapi/viewamendcancel/cancel)

## Cancel Booking Request

Cancelling a booking is a two-stage process:

1. Check if the booking is cancellable, and any charges for doing so, using the GET method outlined below;
2. Cancel the booking using the POST method outlined below.

### Method

GET / POST

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```

### Request Parameters

#### Step 1: Check if booking is cancellable (GET)

NB: All parameter names are case sensitive.

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
| Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
| Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
| ConfirmCancel      | String  | 1 chars | Y       | Set this to `N` for this initial step. |
| CancelRef | String | [A-Z0-9] 10 chars | Y | The reference for the cancellation, e.g. agent's initials.

#### Step 2: Cancel booking (POST)

NB: All parameter names are case sensitive.

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
| Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
| Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
| ConfirmCancel      | String  | 1 chars | Y       | Set this to `Y` for the cancellation step. |
| CancelRef | String | [A-Z0-9] 10 chars | Y | The reference for the cancellation, e.g. agent's initials.


## Cancel Booking Response

The cancel booking response will confirm that a booking has been cancelled in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q).|
| Cancel/RefundAmount | This shows the amount to be refunded to the customer. |
| API_Header/Request  | A list of parameters that were sent in the booking request. |

### Credit Card Fees

As of 12th January 2018 we no longer charge credit card fees, in line with the Payment Services Directive (PSD2). This applies to both UK and EU products.

## Worked examples

Below are worked examples of both the request and response for cancelling a booking.

### Cancel Booking Request - Step 1

```html
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&ConfirmCancel=N&CancelRef=YourCancelRef
```

### Cancel Booking Response - Step 1

```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
    </Booking>
    <Cancel>
        <CancelFee>0.00</CancelFee>
        <CancelRef/>
        <CancelInfo>There is no charge for cancelling this booking</CancelInfo>
        <RefundAmount>35.92</RefundAmount>
    </Cancel>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <ConfirmCancel>N</ConfirmCancel>
            <CancelRef>YourCancelRef</CancelRef>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### Cancel Booking Request - Step 2

```html
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```

```xml
    <Request>
        <ABTANumber>YourABTA</ABTANumber>
        <Password>YourPassword</Password>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <ConfirmCancel>Y</ConfirmCancel>
        <CancelRef>YourCancelRef</CancelRef>
    </Request>
```

### Cancel Booking Response - Step 2

```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
    </Booking>
    <Cancel>
        <CancelFee>0.00</CancelFee>
        <CancelRef>06684</CancelRef>
        <CancelInfo>Please retrieve your client's copy of voucher as booking will be reinstated if used</CancelInfo>
        <RefundAmount>35.92</RefundAmount>
    </Cancel>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <ConfirmCancel>Y</ConfirmCancel>
            <CancelRef>YourCancelRef</CancelRef>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

## Cancelling bookings made with a credit or debit card

A small number of agents in Europe pass through payment details in our API (for historic reasons). The method for cancelling these products differs slightly in that an extra parameter is required to authenticate against the booking. The extra parameter is identified below.

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| CreditCardLast4 | Integer | [0-9] 4 chars | Y | These are the last 4 digits on the card that the customer used to make payment. |

The cancellation request must be POSTed against the following endpoint:

```
https://payment.holidayextras.co.uk/legacy/
```
