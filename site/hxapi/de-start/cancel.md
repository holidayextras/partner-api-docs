---

---

# Cancel Booking - DE Start Method

## Cancel Booking Request

Cancelling a booking is a two-stage process:

1. Check if the booking is cancellable, and any charges for doing so, using the GET method outlined below;
2. Cancel the booking using the POST method outlined below.

### Method

GET / POST

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

```
https://payment.holidayextras.co.uk/legacy/booking/YourBookingRef
```

### Request Parameters

#### Step 1: Check if booking is cancellable (GET)

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | --------- | -------- | ---------------------- |
 | StartCustomer  | String  | [0-9] 6 chars | Y | This will be assigned to you by your Account Manager during set up.|
 | BusinessUnit   | String  | [0-9] 3 chars  | Y | This will be assigned to you by your Account Manager during set up.|
 | Operator       | String  | [A-Z] 3 chars | Y | This always defaults to `BJT`. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
| ConfirmCancel      | String  | 1 chars | Y       | Set this to `N` for this initial step. |
| CancelRef | String | [A-Z] 10 chars | Y | The reference for the cancellation, e.g. agent's initials. |

#### Step 2: Cancel booking (POST)

NB: All parameter names are case sensitive.

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| StartCustomer  | String  | [0-9] 6 chars | Y | This will be assigned to you by your Account Manager during set up.|
| BusinessUnit   | String  | 0-9] 3 chars  | Y | This will be assigned to you by your Account Manager during set up.|
| Operator       | String  | [A-Z] 3 chars | Y | This always defaults to `BJT`. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
| ConfirmCancel      | String  | 1 chars | Y       | Set this to `N` for this initial step. |
| CancelRef | String | [A-Z0-9] 10 chars | Y | The reference for the cancellation, e.g. agent's initials. |

## Cancel Booking Response - DE-Start Method

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
https://payment.holidayextras.co.uk/legacy/booking/YourBookingRef?BusinessUnit=YourBusinessUnit&ConfirmCancel=N&Operator=BJT&SStartCustomer=YourStartCustomer&key=YourKey&token=YourToken&CancelRef=YourCancelRef
```

### Cancel Booking Response - Step 1

```xml
<?xml version="1.0" ?>
<API_Reply System="ABG" Version="1.0" Product="Cancel" Customer="A" Session="123456789" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>YourBookingRef</BookingRef>
    <StartRef>YourStartRef</StartRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelInfo>Es gibt keine Geb&#252;hr f&#252;r die Stornierung dieser Buchung</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <BusinessUnit>YourBusinessUnit</BusinessUnit>
      <ConfirmCancel>N</ConfirmCancel>
      <Operator>BJT</Operator>
      <StartCustomer>YourStartCustomer</StartCustomer>
      <key>YourKey</key>
      <token>YourToken</token>
      <CancelRef>YourCancelRef</CancelRef>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
</API_Reply>
```

### Cancel Booking Request - Step 2

```html
https://payment.holidayextras.co.uk/legacy/booking/YourBookingRef
```

```xml
    <Request>
        <BusinessUnit>YourBusinessUnit</BusinessUnit>
        <ConfirmCancel>Y</ConfirmCancel>
        <Operator>BJT</Operator>
        <StartCustomer>YourStartCustomer</StartCustomer>
        <key>YourKey</key>
        <token>YourToken</token>
        <CancelRef>YourCancelRef</CancelRef>
    </Request>
```

### Cancel Booking Response - Step 2

```xml
<?xml version="1.0" ?>
<API_Reply System="ABG" Version="1.0" Product="Cancel" Customer="A" Session="123456789" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>YourBookingRef</BookingRef>
    <StartRef>YourStartRef</StartRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelRef>YourCancelRef</CancelRef>
    <CancelInfo>Bitten Sie um R&#252;ckgabe des Kundenvouchers, da er seine G&#252;ltigkeit nicht verliert</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <BusinessUnit>YourBusinessUnit</BusinessUnit>
      <CancelRef>YourCancelRef</CancelRef>
      <ConfirmCancel>Y</ConfirmCancel>
      <Operator>BJT</Operator>
      <StartCustomer>YourStartCustomer</StartCustomer>
      <key>YourKey</key>
      <token>YourToken</token>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
</API_Reply>
```
