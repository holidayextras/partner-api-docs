---

---

# Book Car Park

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > [Make Booking](/hxapi/parking/bkg)

## Car Park Booking Request

### Method

POST

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/carpark/CarParkCode
```

For example, for _Maple Manor Meet and Greet at London Gatwick North terminal_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/carpark/LGW4
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

| Name                   | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|-----------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber             | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Address[]              | String    | [A-Z0-9] 25 chars | Y          | First line of address (house name / number and road) of lead passenger <br>If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on.<br>NB: This field can be set to NA                                                                                                                                                                                                                           |
| ArrivalDate            | Date      | YYYY-MM-DD        | Y          | Date customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalTime            | Time      | HHMM              | Y          | Time customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| County                 | String    | [A-Z] 20 chars    | Y          | County of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CustomerRef            | String    | [A-Z0-9] 20 chars | N          | A unique reference code associated with the customer’s booking for tracking and reference purposes.                                                                                                                                                                                                                                                                                                                                                                                                              |
| DepartDate             | Date      | YYYY-MM-DD        | Y          | Date customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DepartTime             | Time      | HHMM              | Y          | Time customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Email                  | String    | [A-Z0-9] 50 chars | Y          | Email of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Initial                | String    | [A-Z] 1 chars     | Y          | Initial of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Initials               | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| key                    | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| NumberOfPax            | Integer   | [0-9] 2 chars     | Y          | Number of passengers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Password               | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                  |
| PostCode               | String    | [A-Z0-9] 10 chars | Y          | Post code of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| PriceCheckFlag         | String    | Y                 | Y          | Indicates a price check will be carried out prior to booking. <br>If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price. |
| PriceCheckPrice        | Float     | [0-9]             | Y          | Price of the product, received from the availability request or price check.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Surname                | String    | [A-Z] 20 chars    | Y          | Surname of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| System                 | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                                   |
| Title                  | String    | [A-Z] 4 chars     | Y          | Title of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| token                  | String    | [0-9] 9 chars     | Y          | This is the same token used in the availability request.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Town                   | String    | [A-Z] 20 chars    | Y          | Town of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                |
{% include _booking_request_supplement_params.md %}

{% include _bookingUpgrades.md productType="carpark" productCode="STN5" %}

### Request flags

When you receive the availability response, it will indicate which request flags are required to be sent as part of the booking request.

The request flags differ depending on the product's region and the supplier's requirements. A summary is below, but please see the relevant sections in the [availability endpoint documentation](/hxapi/parking/av/airport).

#### UK Products

The `<RequestFlags>` field dictates which fields need to be sent as part of the booking request.

#### European Products

The availability response will return a list of 18 flags in the `<CarDetFlags>` field with a yes/no response to indicate if required. The order of the flags is always the same.

### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

### Booking Terms and Conditions

It is important that the customer has access to the Terms and Conditions at the time of placing their booking and after. We highly recommend that these are made clear to the customer _before_ booking.

For European products, please use the following link:
```
http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
```

If you require translations of Terms and Conditions into other languages, you can simply change ``/de-hx/`` (German) into ``nl-hx`` (Dutch), ``it-hex`` (Italian), ``pt-hx`` (Portuguese), ``fr-hx`` (French), ``es-hx`` (Spanish) or ``en-hx`` (English).


## Car Park Booking Response

The car park booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                                      | Additional Information                                                                                                                                                                                        |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                         | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q). |
| Booking/AgentComm                          | Commission you have earned from this booking.                                                                                                                                                                 |
| CarDetails                                 | Confirmation of the vehicle details that were sent in the booking request.                                                                                                                                    |
| CarDetails/Registration                    |                                                                                                                                                                                                               |
| CarDetails/CarMake                         |                                                                                                                                                                                                               |
| CarDetails/CarModel                        |                                                                                                                                                                                                               |
| CarDetails/CarColour                       |                                                                                                                                                                                                               |
| CarDetails/OutFlight                       |                                                                                                                                                                                                               |
| CarDetails/Destination                     |                                                                                                                                                                                                               |
| CarDetails/MobileNum                       |                                                                                                                                                                                                               |
| ClientDetails                              | Confirmation of the lead passenger's details that were sent in the booking request.                                                                                                                           |
| ClientDetails/Title                        |                                                                                                                                                                                                               |
| ClientDetails/Initials                     |                                                                                                                                                                                                               |
| ClientDetails/Surname                      |                                                                                                                                                                                                               |
| ClientDetails/Email                        |                                                                                                                                                                                                               |
| HandlingFee                                | Any booking fees that are applicable for processing this transaction. Currently, we do not charge for processing bookings, so this figure will be zero.                                                       |
| MoreInfoURL                                | The URL for viewing the booking. See [view booking](/hxapi/viewamendcancel/view) for more details.                                                                                                            |
| CarPark                                    | Details of the car park that were sent in the booking request.                                                                                                                                                |
| CarPark/ArrivalDate                        |                                                                                                                                                                                                               |
| CarPark/DepartDate                         |                                                                                                                                                                                                               |
| CarPark/ArrivalTime                        |                                                                                                                                                                                                               |
| CarPark/DepartTime                         |                                                                                                                                                                                                               |
| CarPark/Duration                           |                                                                                                                                                                                                               |
| CarPark/NumberOfPax                        |                                                                                                                                                                                                               |
| CarPark/ReturnFlight                       |                                                                                                                                                                                                               |
| CarPark/Code                               |                                                                                                                                                                                                               |
| CarPark/TotalPrice                         |                                                                                                                                                                                                               |
| CarPark/Name                               |                                                                                                                                                                                                               |
| CarPark/introduction                       | Production description text                                                                                                                                                                                   |
| CarPark/logo                               | Product logo. Prepend with `https:`                                                                                                                                                                           |
| CarPark/RequiresQRCode                     | Whether the QR Code needs to be used for this carpark, instead of the barcode                                                                                                                                 |
| CarPark/BookingUrl                         | Prepend with `https://api.holidayextras.co.uk/`                                                                                                                                                               |
| CarPark/MoreInfoUrl                        | Prepend with `https://api.holidayextras.co.uk/`                                                                                                                                                               |
| BarCode                                    | URL to the barcode for the booking. Prepend with `https://api.holidayextras.co.uk/`                                                                                                                           |
| QRCode                                     | URL to the QR code for the booking. Prepend with `https://api.holidayextras.co.uk/`                                                                                                                           |
| QRCodeValue                                | (EU only) Value of the QR code that comes with email confirmation. [More details about QR Code](/hxapi/barcode#qr_code)                                                                                       |
| QRCodeValueStr                             | (EU only) Value of the QR code that comes with email confirmation, when returning as part of a JSON resposne this value will be a string. [More details about QR Code](/hxapi/barcode#qr_code)                |
| FastTrackVouchers/Name                     | *Only present if Fast track products have been purchased* - Name used to separate multiple voucher products                                                                                                   |
| FastTrackVouchers/Source                   | Link to the voucher document to be embeded in the client email                                                                                                                                                |
| FastTrackVouchers/type                     | Content type qualifier for the `Source`                                                                                                                                                                       |
| Booking/BookingStatus  (Future)            | Indicates the current status of the booking (`PENDING`, `CONFIRMED`, or `FAILED`).                                                                                                                            |
| Booking/SuggestedPollingInterval (Future)  | Specifies the recommended interval in seconds for polling the view booking endpoint. The polling frequency varies based on the product type and supplier.)                                                    |
{% include _booking_response_supplements.md %}
| API_Header/Request      | A list of parameters that were sent in the booking request.                                                                                                                                                   |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response.

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

## Worked Examples

Below are worked examples of both the request and response for booking car parking.

### UK Products Booking

#### Request

```html
https://api.holidayextras.co.uk/carpark/LGW4
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
https://api.holidayextras.co.uk/carpark/MU01
```

```xml
{% include_relative examples/_eu_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_eu_booking_response.xml %}
```

---

### UK Product booking With Upgrades

#### Request

```
https://api.holidayextras.co.uk/carpark/STN5
```

```xml
{% include_relative examples/_uk_upgrade_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_uk_upgrade_booking_response.xml %}
```
