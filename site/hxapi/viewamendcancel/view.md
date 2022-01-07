---

---

# View Booking

[API Docs](/hxapi/) > product:[view](/hxapi/viewamendcancel/view)

## View Booking Request

This method works for bookings made for any product type using our API.

### Method

GET

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef.js
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### Request Parameters

NB: All parameter names are case sensitive.

| Name       | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                          |
|------------|-----------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                 |
| Password   | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
| Initials   | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                           |
| key        | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                             |
| Email      | String    | [A-Z0-9] 50 chars | Y          | Email address used to make the booking (i.e. the email address of the lead passenger)                                                                           |
| System     | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                  |

## View Booking Response

The view booking response will return all of the details against that booking record in our system.

For a detailed explanation of the fields returned, please see below:

| Field                                          | Additional Information                                                                                                                                                                                        |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                             | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q). |
| Booking/Amendable                              | This will return one of the following: `Y` = booking can be amended; `N` = booking cannot be amended; `C` = booking has been cancelled; `S` = booking is same day so cannot be amended or cancelled.          |
| Booking/CanxDate                               | If the booking has been cancelled, the date on which it was will return here.                                                                                                                                 |
| Booking/AgentComm                              | Commission you have earned from this booking.                                                                                                                                                                 |
| Booking/BookingDate                            | The date the booking was originally made on.                                                                                                                                                                  |
| Booking/PdfURL                                 | A link to generate a pdf version of the booking confirmation.                                                                                                                                                 |
| Itinerary                                      | This block will return details of the original booking, as per the booking response for each product type. Please see the respective booking guides for further details on the fields.                        |
| ClientDetails                                  | This block will return details of the lead passenger.                                                                                                                                                         |
| Pricing                                        | This block will return details of the price paid by the customer.                                                                                                                                             |
| VAT                                            | Please ignore this block.                                                                                                                                                                                     |
| CustRef                                        | If you have passed in a Customer Reference with your original booking request, it will return here.                                                                                                           |
| BarCode                                        | A link to generate a bar code for the booking confirmation.                                                                                                                                                   |
| CurrentSupplements[]                           | Array of upgrades on the booking                                                                                                                                                                              |
| CurrentSupplements/Supplement/Code             | Upgrade product code                                                                                                                                                                                          |
| CurrentSupplements/Supplement/Price            | The price paid for the upgrade                                                                                                                                                                                |
| CurrentSupplements/Supplement/NonDiscPrice     | The price of the upgrade before any discounts                                                                                                                                                                 |
| CurrentSupplements/Supplement/DiscAmt          | The value of any discount applied                                                                                                                                                                             |
| CurrentSupplements/Supplement/Supplier         | Code for the supplier of the upgrade                                                                                                                                                                          |
| CurrentSupplements/Supplement/Rule             | Internal field                                                                                                                                                                                                |
| CurrentSupplements/Supplement/Req              | The purchased quantity of the upgrade                                                                                                                                                                         |
| CurrentSupplements/Supplement/Per              | The pricing basis of the upgrade                                                                                                                                                                              |
| CurrentSupplements/Supplement/Adults           | The number of adult passes purchased                                                                                                                                                                          |
| CurrentSupplements/Supplement/Children         | The number of chlid passes purchased                                                                                                                                                                          |
| CurrentSupplements/Supplement/Date             | The date of use for the upgrade                                                                                                                                                                               |
| CurrentSupplements/Supplement/Canx             | Whether the upgrade is cancellable                                                                                                                                                                            |
| CurrentSupplements/Supplement/Remarks          | Notes field. Used to store arrival time for lounge upgrades                                                                                                                                                   |
| AvailableSupplements[]                         | Array of upgrades available to purchase post booking                                                                                                                                                          |
| AvailableSupplements/Supplement/Code           | Upgrade product code                                                                                                                                                                                          |
| AvailableSupplements/Supplement/Supplier       | Code for the supplier of the upgrade                                                                                                                                                                          |
| AvailableSupplements/Supplement/Per            | The pricing basis of the upgrade                                                                                                                                                                              |
| AvailableSupplements/Supplement/Canx           | Whether the upgrade is cancellable                                                                                                                                                                            |
| AvailableSupplements/Supplement/Name           | The name of the upgrade product                                                                                                                                                                               |
| AvailableSupplements/Supplement/Price          | The price of the upgrade                                                                                                                                                                                      |
| AvailableSupplements/Supplement/NonDiscPrice   | The price of the upgrade before any discounts                                                                                                                                                                 |
| AvailableSupplements/Supplement/DiscAmt        | The value of any discount applied                                                                                                                                                                             |
| AvailableSupplements/Supplement/AdPrice        | The per adult price minus any discounts. Only present for per person upgrades                                                                                                                                 |
| AvailableSupplements/Supplement/NonDiscAdPrice | The per adult price before any discounts. Only present for per person upgrades                                                                                                                                |
| AvailableSupplements/Supplement/AdDiscAmt      | The amount of discount applied to the per adult price. Only present for per person upgrades                                                                                                                   |
| AvailableSupplements/Supplement/ChPrice        | The per child price minus any discounts. Only present for per person upgrades                                                                                                                                 |
| AvailableSupplements/Supplement/NonDiscChPrice | The per child price before any discounts. Only present for per person upgrades                                                                                                                                |
| AvailableSupplements/Supplement/ChDiscAmt      | The amount of discount applied to the child price. Only present for per person upgrades                                                                                                                       |
| AvailableSupplements/Supplement/PerNight       | Whether the upgrade is charged per night of a stay                                                                                                                                                            |
| API_Header/Request                             | A list of parameters that were sent in the view booking request.                                                                                                                                              |

### Fields Explained

Most of these should be self explanatory, just the values from the booking.

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test@holidayextras.com&booking_ref=HPABCDE&product_type=carparks&ABTANumber=WT314&Password=redacted&key=mytestkey

#### /Booking/Amendable

Possible values

*  Y - booking can be amended or cancelled

*  N - booking cannot be amended or cancelled (advance purchase product etc)

*  C - booking has been cancelled

## Worked Examples

Below are worked examples of both the request and response for view a booking.

### UK Products View Booking (for a car park)

#### Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
{% codetab XML %}
```xml
{% include_relative examples/_view_uk_booking_response.xml %}
```
{% endcodetab %}
{% codetab JSON %}
```json
{% include_relative examples/_view_uk_booking_response.json %}
```
{% endcodetab %}
{% endcodetabs %}

---

### UK Products View Booking (for a transfer)

#### Request
{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
{% codetab XML %}
```xml
{% include_relative examples/_view_uk_transfers_booking_response.xml %}
```
{% endcodetab %}
{% codetab JSON %}
```json
{% include_relative examples/_view_uk_transfers_booking_response.json %}
```
{% endcodetab %}
{% endcodetabs %}

---

### European Products View Booking (for a hotel room only)

#### Request

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com&System=ABG
```

#### Response

```xml
{% include_relative examples/_view_eu_booking_response.xml %}
```
