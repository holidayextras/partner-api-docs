---

---

# Transfers Booking

## Booking Request

### Method

POST

### Endpoint

The endpoint to use is:
```
https://api.holidayextras.co.uk/v1/transfers/[CODE]
```
Where ```[CODE]``` is the product code received in the availability request of the product you want to book.

Here is an example for the following Availability response:
```
<Code>TBHT1169922</Code>
<BookingURL>/transfers/TBHT1169922</BookingURL>
...
```
Your Make Booking request will have the following URL: https://api.holidayextras.co.uk/v1/transfers/TBHT1169922

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.


NB: All parameter names are case sensitive.

| Name               | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                       |
|--------------------|-----------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber         | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                  |
| Password           | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br />This will be confirmed to you by your Account Manager during set up.                                                                                                                            |
| Initials           | String    | [A-Z] 3 chars    | N          | The initials of the Operator/Agent.                                                                                                                                                                                                                                                          |
| key                | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                          |
| token              | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                   |
| PickUpType         | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI`, `GIATA`, `postal-address` or `PC` (Postcode) (i.e `PickUpType=IATA`).                                                                                                                                                                                  |
| PickUp             | String    | [A-Z0-9]         | Y*         | The IATA, TTI, GIATA or Postcode (i.e `PickUp=AGP`).<br />Not required for `postal-address`                                                                                                                                                                                                  |
| PickUpName         | String    | [A-Z0-9]         | Y [^1]     | The pick up location name.                                                                                                                                                                                                                                                                   |
| PickUpAddress[]    | String    | [A-Z0-9]         | Y [^1]     | First line of address (house name / number and road) of the destination.<br />If you require more than one address line, then you can replicate this field and increment the number in square brackets, i.e. "PickUpAddress[1]" for address line two. Up to a maximum of two address lines.  |
| PickUpTown         | String    | [A-Z0-9]         | Y [^1]     | The pick up town name.                                                                                                                                                                                                                                                                       |
| PickUpCounty       | String    | [A-Z0-9]         | Y [^1]     | The pick up county name.                                                                                                                                                                                                                                                                     |
| PickUpPostcode     | String    | [A-Z0-9]         | Y [^1]     | The pick up postcode.                                                                                                                                                                                                                                                                        |
| PickUpCountryCode  | String    | [A-Z] 2 chars    | Y [^1]     | The pick up country code in [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) format.                                                                                                                                                                                    |
| PickUpLongitude    | Float     | [0-9]            | Y [^1]     | The pick up location longitude.                                                                                                                                                                                                                                                              |
| PickUpLatitude     | Float     | [0-9]            | Y [^1]     | The pick up location latitude.                                                                                                                                                                                                                                                               |
| DropOffType        | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI`, `GIATA`, `postal-address` or `PC` (Postcode) (i.e `DropOffType=TTI`).                                                                                                                                                                                  |
| DropOff            | String    | [A-Z0-9]         | Y*         | The IATA, TTI, GIATA or Postcode (i.e `DropOff=85101062`).<br />Not required for `postal-address`                                                                                                                                                                                            |
| DropOffName        | String    | [A-Z0-9]         | Y [^1]     | The drop off location name.                                                                                                                                                                                                                                                                  |
| DropOffAddress[]   | String    | [A-Z0-9]         | Y [^1]     | First line of address (house name / number and road) of the destination.<br />If you require more than one address line, then you can replicate this field and increment the number in square brackets, i.e. "DropOffAddress[1]" for address line two. Up to a maximum of two address lines. |
| DropOffTown        | String    | [A-Z0-9]         | Y [^1]     | The drop off town name.                                                                                                                                                                                                                                                                      |
| DropOffCounty      | String    | [A-Z0-9]         | Y [^1]     | The drop off county name.                                                                                                                                                                                                                                                                    |
| DropOffPostcode    | String    | [A-Z0-9]         | Y [^1]     | The drop off postcode.                                                                                                                                                                                                                                                                       |
| DropOffCountryCode | String    | [A-Z] 2 chars    | Y [^1]     | The drop off country code in [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) format.                                                                                                                                                                                   |
| DropOffLongitude   | Float     | [0-9]            | Y [^1]     | The drop off location longitude.                                                                                                                                                                                                                                                             |
| DropOffLatitude    | Float     | [0-9]            | Y [^1]     | The drop off location latitude.                                                                                                                                                                                                                                                              |
| FromDate           | Date      | YYYY-MM-DD       | Y          | Flight Arrival Date (`PickUpType` = `IATA`), Flight Departure Date (`DropOffType` = `IATA`), Preferred Date.                                                                                                                                                                                 |
| FromTime           | Time      | HHMM             | Y          | Flight Arrival Time (`PickUpType` = `IATA`), Flight Departure Time (`DropOffType` = `IATA`), Preferred Time.                                                                                                                                                                                 |
| ReturnDate         | Date      | YYYY-MM-DD       | N          | Flight Arrival Date (`DropOffType` = `IATA`), Flight Departure Date (`PickUpType` = `IATA`), Preferred Date.                                                                                                                                                                                 |
| ReturnTime         | Time      | HHMM             | N          | Flight Arrival Time (`DropOffType` = `IATA`), Flight Departure Time (`PickUpType` = `IATA`), Preferred Time.                                                                                                                                                                                 |
| Adults             | Integer   | [0-9]            | Y          | Number of Adults requiring a transfer.                                                                                                                                                                                                                                                       |
| Children           | Integer   | [0-9]            | N          | Number of Children requiring a transfer.                                                                                                                                                                                                                                                     |
| Infants            | Integer   | [0-9]            | N          | Number of Infants requiring a transfer.                                                                                                                                                                                                                                                      |
| OutFlight          | String    | [A-Z0-9]         | Y*         | A flight number is required if the journey involves being picked up or dropped off at an Airport.                                                                                                                                                                                            |
| ReturnFlight       | String    | [A-Z0-9]         | N*         | A flight number is required if the return journey involves being picked up or dropped off at an Airport.                                                                                                                                                                                     |
| Title              | String    | [A-Z]            | Y          | The lead passenger's title (i.e 'Mr', 'Mrs', etc.).                                                                                                                                                                                                                                          |
| FirstName          | String    | [A-Z]            | Y          | The lead passenger's first name.                                                                                                                                                                                                                                                             |
| LastName           | String    | [A-Z]            | Y          | The lead passenger's last name.                                                                                                                                                                                                                                                              |
| Email              | String    | [A-Z] 50 chars   | Y          | The lead passenger's email address.                                                                                                                                                                                                                                                          |
| DayPhone           | Integer   | [0-9] 20 chars   | Y          | The lead passenger's contact telephone number.                                                                                                                                                                                                                                               |
| Price              | Float     | [0-9]            | Y          | The total price of the Transfer/s (This will be the value of the `TotalPrice` property returned in the availability response).                                                                                                                                                               |

#### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

## Booking Response

If the booking has been successful, the response will contain a `Booking` field which will have a `BookingRef` property. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

| Field                                     | Additional Information                                                                                                                                     |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                        | The reference for the booking, use this reference in all communication with us relating to this booking.                                                   |
| Booking/AgentComm                         | Commission earned from this booking.                                                                                                                       |
| Booking/MoreInfoURL                       | The URL to GET more information about the booking (view [View Booking Request](/hxapi/viewamendcancel/view/) for more information).                        |
| Booking/BookingStatus (Future)            | Indicates the current status of the booking (`PENDING`, `CONFIRMED`, or `FAILED`).                                                                         |
| Booking/SuggestedPollingInterval (Future) | Specifies the recommended interval in seconds for polling the view booking endpoint. The polling frequency varies based on the product type and supplier.) |


### Example

```json
{
    "API_Reply": {
        "Booking": {
            "BookingRef": "TBBGNHMT",
            "AgentComm": "0.17",
            "VATonComm": "0.00",
            "MoreInfoURL": "/v1/booking/TBBGNHMT.js",
            "BookingStatus": "PENDING",
            "SuggestedPollingInterval": 3600
        },
        "ATTRIBUTES": {
            "Product": "Transfers",
            "RequestCode": 5,
            "Result": "OK"
        },
        "API_Header": {
            "Request": {
                "key": "TEST",
                "token": "d2d6dedd-606f-4f00-aa8c-526a358e927c",
                "ABTANumber": "TESTL",
                "Password": "Redacted",
                "FromDate": "2020-08-01",
                "FromTime": 1255,
                "ReturnDate": "2020-08-10",
                "ReturnTime": 1355,
                "PickUp": "AGP",
                "PickUpType": "IATA",
                "DropOff": 85101062,
                "DropOffType": "TTI",
                "Adults": 2,
                "Title": "MR",
                "FirstName": "Test",
                "LastName": "Test",
                "Email": "test@holidayextras.com",
                "DayPhone": "07123456789",
                "Price": 103.52,
                "OutFlight": "LS1405",
                "ReturnFlight": "LS1406",
                "v": 1,
                "format": "js"
            }
        }
    }
}
```

[^1]: Only required when the location type is `postal-address`.
