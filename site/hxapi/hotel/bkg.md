---

---

# Hotel Booking Request

## Method

POST

## Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/hotel/LocationCode
```

For example, for _Mercure at London Heathrow_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA
```

## Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

| Name                   | Data Type | Format             | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------------|-----------|--------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber             | String    | [A-Z0-9] 5 chars   | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                              |
| Password               | String    | [A-Z0-9] 5 chars   | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                              |
| Initials               | String    | [A-Z] 3 chars      | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| key                    | String    | [A-Z]              | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| token                  | String    | [0-9] 9 chars      | Y          | This is the same token used in the availability request.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ArrivalDate            | Date      | YYYY-MM-DD         | Y          | Date customer arrives at hotel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Nights                 | Integer   | 1, 2, 3, etc       | Y          | Number of nights the customer wants to stay in the hotel. NB: For European products it is only possible to book one night stays.                                                                                                                                                                                                                                                                                                                                                                             |
| RoomCode               | String    | [A-Z0-9] 3 chars   | Y          | See [RoomCodes](/hxapi/types/roomcode) for a list of valid codes.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Adults                 | Integer   | [1-5] 1 char       | Y          | The number of adults occupying the room.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Children               | Integer   | [0-4] 1 char       | Y          | The number of children occupying the room.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ParkingDays            | Integer   | [0-9] 2 chars      | Y          | NB: The maximum duration accepted for ParkingDays is 30.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Title                  | String    | [A-Z] 4 chars      | Y          | Title of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Initial                | String    | [A-Z] 1 chars      | Y          | Initial of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Surname                | String    | [A-Z] 20 chars     | Y          | Surname of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Address[]              | String    | [A-Z0-9] 25 chars  | Y          | First line of address (house name / number and road) of lead passenger. If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on. NB: This field can be set to NA                                                                                                                                                                                                                             |
| Town                   | String    | [A-Z] 20 chars     | Y          | Town of address. NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| County                 | String    | [A-Z] 20 chars     | Y          | County of address. NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PostCode               | String    | [A-Z0-9] 10 chars  | Y          | Post code of address. NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| DayPhone               | Integer   | [0-9] 20 chars max | N          | The customer's telephone number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Email                  | String    | [A-Z0-9] 50 chars  | Y          | The email address of customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CustomerRef            | String    | [A-Z0-9] 20 chars  | N          | Enter your Customer Reference to help match bookings for accounting purposes.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Remarks                | String    | [A-Z0-9] 60 chars  | N          | Pass in Remarks for notification such as COT REQUESTED in ROOM                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Waiver                 | Boolean   | [0,1]              | Y          | Defaults to 0 if not supplied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| DataProtection         | String    | [Y,N]              | N          | Does the customer consent to receiving offers from Holiday Extras? Y = Yes, will receive offers, N = No, customer data is protected. Defaults to No if not supplied.                                                                                                                                                                                                                                                                                                                                         |
| PriceCheckFlag         | String    | [Y]                | Y          | Indicates a price check will be carried out prior to booking. If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price. |
| PriceCheckPrice        | Float     | [0-9]              | Y          | Price of the product, received from the availability request or price check.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| System                 | String    | [A-Z] 3 chars      | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                               |
| lang                   | String    | [A-Z] 2 chars      | Y*         | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)                                                                                                                                                                                                                                                                                                                                                                                                   |
{% include _booking_request_supplement_params.md %}

{% include _bookingUpgrades.md productType="hotel" productCode="LGWSOF" %}

## Multiple rooms on same booking

Currently, we can only accept a maximum of 2 rooms per booking. If the customer needs more, you will need to make multiple requests. If an intermediary account, you should note that this would lead to multiple transactions on the credit card, and multiple charges, and therefore we advise against it.

The additional parameters for including a second room are:

| Name               | Data Type | Format                              | Mandatory? | Additional Information                                                                                                                                |
|--------------------|-----------|-------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| SecondRoomType     | String    | [A-Z0-9] 2 chars                    | N*         | This parameter is mandatory if the customer wishes to book two rooms at the same time. The room codes are as per [Room Codes](/hxapi/types/roomcode). |
| SecondRoomCode     | String    | [Room Codes](/hxapi/types/roomcode) | N          | NB: Please note that the room codes differ between availability and booking requests.                                                                 |
| SecondRoomAdults   | Integer   | [1-5] 1 char                        | N          | The number of adults occupying the second room.                                                                                                       |
| SecondRoomChildren | Integer   | [0-4] 1 char                        | N          | The number of children occupying the second room.                                                                                                     |

## UK Hotels with parking

The additional parameters for hotel with parking (where parking > 0 days) are:

| Name           | Data Type | Format            | Mandatory? |
|----------------|-----------|-------------------|------------|
| CarDropoffDate | Date      | YYYY-MM-DD        | Y          |
| CarDropoffTime | Time      | HHMM              | Y          |
| CarPickupDate  | Date      | YYYY-MM-DD        | Y          |
| CarPickupTime  | Time      | HHMM              | Y          |
| ReturnFlight   | String    | [A-Z0-9] 10 chars | N          |
| TerminalCode   | String    | [A-Z0-9] 2 chars  | N          |
| Registration   | String    | [A-Z0-9] 20 chars | N          |
| CarMake        | String    | [A-Z0-9] 20 chars | N          |
| CarModel       | String    | [A-Z0-9] 20 chars | N          |
| CarColour      | String    | [A-Z0-9] 20 chars | N          |

## Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

## Booking Terms and Conditions

It is important that the customer has access to the Terms and Conditions at the time of placing their booking and after. We highly recommend that these are made clear to the customer _before_ booking.

For European products, please use the following link:

```
http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
```

If you require translations of Terms and Conditions into other languages, you can simply change ``/de-hx/`` (German) into ``nl-hx`` (Dutch), ``it-hex`` (Italian), ``pt-hx`` (Portuguese), ``fr-hx`` (French), ``es-hx`` (Spanish) or ``en-hx`` (English).


# Hotel Booking Response

The hotel booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                                      | Additional Information                                                                                                                                                                                    |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                         | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q). |
| Booking/AgentComm                          | Commission you have earned from this booking.                                                                                                                                                             |
| Itinerary                                  | This section confirms details of the hotel on the booking.                                                                                                                                                |
| Room                                       | This section confirms details of the room booked at the hotel.                                                                                                                                            |
| ClientDetails                              | Confirmation of the customer's details that were sent in the booking request.                                                                                                                             |
| Pricing                                    | Confirmation of the price paid by the customer for the hotel room.                                                                                                                                        |
| Booking/BookingStatus    (Future)          | Indicates the current status of the booking (`Pending`, `Confirmed`, `Cancelled`, or `Error`).                                                                                                            |
| Booking/SuggestedPollingInterval  (Future) | Specifies the recommended interval in seconds for polling the view booking endpoint. The polling frequency varies based on the product type and supplier.)                                                |
{% include _booking_response_supplements.md %}
| API_Header/Request | A list of parameters that were sent in the booking request.                                                                                                                                               |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response.

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

## Worked Examples

Below are worked examples of both the request and response for booking hotels.

### UK Hotel Booking - Room Only

#### Request

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA
```

```xml
{% include_relative examples/_uk_booking_room_only_request.xml %}
```

#### Response

```xml
{% include_relative examples/_uk_booking_room_only_response.xml %}
```

---

### European Hotel Booking

#### Request

```
https://api.holidayextras.co.uk/v1/hotel/MUCLAN
```

```xml
{% include_relative examples/_eu_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_eu_booking_response.xml %}
```

---

### UK Hotel booking with Upgrades

#### Request

```http
https://api.holidayextras.co.uk/v1/hotel/LGWSOF
```

```xml
{% include_relative examples/_uk_upgrade_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_uk_upgrade_booking_response.xml %}
```
