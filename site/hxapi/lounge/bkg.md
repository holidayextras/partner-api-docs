---

---

# Book Lounge

## Lounge Booking Request

### Method

POST

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.com/v1/lounge/LoungeCode
```

For example, for _Plaza Premium T5 lounge - 3 hours at London Heathrow Airport_ the endpoint is:

```
https://api.holidayextras.com/v1/lounge/LHRPA5
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

| Name            | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------|-----------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber      | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Password        | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                  |
| Initials        | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| key             | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| token           | String    | [0-9] 9 chars     | Y          | This is the same token used in the availability request.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalDate     | Date      | YYYY-MM-DD        | Y          | Date customer wishes to enter the lounge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ArrivalTime     | Time      | HHMM              | Y          | Time customer wishes to enter the lounge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Adults          | Integer   | [0-4] 1 char      | Y          | Number of adults requiring entry to the lounge. Please note: a maximum of 6 passengers is permitted on any one booking.                                                                                                                                                                                                                                                                                                                                                                                          |
| Children        | Integer   | [0-3] 1 char      | N          | Number of children requiring entry to the lounge. Please note: a maximum of 6 passengers is permitted on any one booking.                                                                                                                                                                                                                                                                                                                                                                                        |
| Infants         | Integer   | 1 char            | Y          | Number of infants requiring entry to the lounge. Please note: a maximum of 6 passengers is permitted on any one booking.                                                                                                                                                                                                                                                                                                                                                                                         |
| Title           | String    | [A-Z] 4 chars     | Y          | Title of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Initial         | String    | [A-Z] 1 chars     | Y          | Initial of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Surname         | String    | [A-Z] 20 chars    | Y          | Surname of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Address[]       | String    | [A-Z0-9] 25 chars | Y          | First line of address (house name / number and road) of lead passenger <br>If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on.<br>NB: This field can be set to NA                                                                                                                                                                                                                           |
| Town            | String    | [A-Z] 20 chars    | Y          | Town of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| County          | String    | [A-Z] 20 chars    | Y          | County of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| PostCode        | String    | [A-Z0-9] 10 chars | Y          | Post code of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Email           | String    | [A-Z0-9] 50 chars | Y          | Email of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MobileNum       | String    | [0-9] 20 char     | Y          | Mobile phone number of lead passenger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| CustomerRef     | String    | [A-Z0-9] 20 chars | N          | A unique reference code associated with the customer's booking for tracking and reference purposes.                                                                                                                                                                                                                                                                                                                                                                                                              |
| PriceCheckFlag  | String    | Y                 | Y          | Indicates a price check will be carried out prior to booking. <br>If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price. |
| PriceCheckPrice | Float     | [0-9] 8 chars     | Y          | Price of the product, received from the availability request or price check.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| System          | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                                   |
| Waiver          | Boolean   | [0,1]             | Y          | Defaults to 0 if not supplied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
{% include _booking_request_supplement_params.md %}

{% include _bookingUpgrades.md productType="lounge" productCode="LHRNN3" %}

### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.


## Lounge Booking Response

The lounge booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field               | Additional Information                                                                                                                                                                                        |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q). |
| Booking/AgentComm   | Commission you have earned from this booking.                                                                                                                                                                 |
| Booking/MoreInfoURL | The URL for viewing the booking. See [view booking](/hxapi/viewamendcancel/view) for more details.                                                                                                            |
{% include _booking_response_supplements.md %}
| API_Header/Request  | A list of parameters that were sent in the booking request.                                                                                                                                                   |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response.

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

## Worked Examples

Below are worked examples of both the request and response for booking a lounge.

### UK Products Booking

#### Request

```
https://api.holidayextras.com/v1/lounge/LHRPO3
```

```xml
{% include_relative examples/_uk_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_uk_booking_response.xml %}
```

---

### European Products Booking

#### Request

```
https://api.holidayextras.com/v1/lounge/HAMLHL
```

```xml
{% include_relative examples/_eu_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_eu_booking_response.xml %}
```

---

### UK Product Booking with Upgrades

#### Request

```
https://api.holidayextras.com/v1/lounge/LHRPO3
```

```xml
{% include_relative examples/_uk_upgrade_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_uk_upgrade_booking_response.xml %}
```
