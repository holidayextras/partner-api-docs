---

---

# Transfers Availability

## Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/transfers/search
```

Here is an example:
```
https://api.holidayextras.co.uk/v1/transfers/search?token=[TOKEN]&key=[KEY]&ABTANumber=[ABTA]&FromDate=2020-08-01&FromTime=1000&ReturnDate=2020-08-07&ReturnTime=1730&PickUp=AGP&PickUpType=IATA&DropOff=85101062&DropOffType=TTI&OutFlight=U28605&ReturnFlight=U28602&Adults=2
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name               | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                       |
|--------------------|-----------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber         | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                  |
| Password           | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br />This will be confirmed to you by your Account Manager during set up.                                                                                                                            |
| Initials           | String    | [A-Z] 3 chars    | N          | The initials of the Operator/Agent.                                                                                                                                                                                                                                                          |
| key                | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                          |
| token              | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                   |
| PickUpType         | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI`, `postal-address` or `PC` (Postcode) (i.e `PickUpType=IATA`).                                                                                                                                                                                           |
| PickUp             | String    | [A-Z0-9]         | Y*         | The IATA, TTI or Postcode (i.e `PickUp=AGP`).<br />Not required for `postal-address`                                                                                                                                                                                                         |
| PickUpName         | String    | [A-Z0-9]         | Y [^1]     | The pick up location name.                                                                                                                                                                                                                                                                   |
| PickUpAddress[]    | String    | [A-Z0-9]         | Y [^1]     | First line of address (house name / number and road) of the destination.<br />If you require more than one address line, then you can replicate this field and increment the number in square brackets, i.e. "PickUpAddress[1]" for address line two. Up to a maximum of two address lines.  |
| PickUpTown         | String    | [A-Z0-9]         | Y [^1]     | The pick up town name.                                                                                                                                                                                                                                                                       |
| PickUpCounty       | String    | [A-Z0-9]         | Y [^1]     | The pick up county name.                                                                                                                                                                                                                                                                     |
| PickUpPostcode     | String    | [A-Z0-9]         | Y [^1]     | The pick up postcode.                                                                                                                                                                                                                                                                        |
| PickUpCountryCode  | String    | [A-Z] 2 chars    | Y [^1]     | The pick up country code in [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) format.                                                                                                                                                                                    |
| PickUpLongitude    | Float     | [0-9]            | Y [^1]     | The pick up location longitude.                                                                                                                                                                                                                                                              |
| PickUpLatitude     | Float     | [0-9]            | Y [^1]     | The pick up location latitude.                                                                                                                                                                                                                                                               |
| DropOffType        | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI`, `postal-address` or `PC` (Postcode) (i.e `DropOffType=TTI`).                                                                                                                                                                                           |
| DropOff            | String    | [A-Z0-9]         | Y*         | The IATA, TTI or Postcode (i.e `DropOff=85101062`).<br />Not required for `postal-address`                                                                                                                                                                                                   |
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

#### Dates and Times
It's important to note that availability should be requested with accurate dates and times. A good scenario would be if an Airport Transfer is required, where the `PickUp` would be an Airport and the `DropOff` would be a Hotel. The `FromDate` and `FromTime` should be the flight arrival date and time. If a return transfer is requested, then the `ReturnDate` and `ReturnTime` should be the flight departure date and time, our system will calculate an estimated pickup time from the Hotel.

## Availability Response

If availability has been found for the requested parameters, the response will contain a `Transfers` field with all the nested Transfers available. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

| Field                      | Additional Information                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------|
| Transfers/Name             | The name of the Transfer.                                                                                   |
| Transfers/Code             | The product code for the transfer, which must be used in the booking request.                               |
| Transfers/BookingURL       | The URL to POST the booking request to for this particular product.                                         |
| Transfers/TotalPrice       | The total price of the Transfer/s.                                                                          |
| Transfers/NonDiscPrice     | If a discount has been applied, this is the total price before discount.                                    |
| Transfers/SalesCurrency    | Three character identifier for the sale currency to qualify the price.                                      |
| Transfers/Images/Src       | Link to a image for the product. Prefix with `https:`.                                                      |
| Transfers/Images/Alt       | The alt tag for the image.                                                                                  |
| Transfers/Category         | The category assigned to the Transfer/s, for the full list of categories [please see below](/hxapi/transfers/av/#transfer-categories). |
| Transfers/Disclaimer       | Depending on supplier and transfer type, the Disclaimer will contain pickup details.                        |
| Transfers/ProviderDetails  | Shows the providers name and rating (if applicable).                                                        |
| Transfers/Cancellation     | Shows the cancellation period before pickup date/time.                                                      |
| Transfers/VehicleDetails   | Details about the vehicle being used for the Transfer/s.                                                    |
| Transfers/OutboundTransfer | Details about the outbound transfer.                                                                        |
| Transfers/ReturnTransfer   | Details about the return transfer (This field will be `null` if no return was requested).                   |

#### [Transfer Categories](#transfer-categories)

Here are the available categories which may be returned, there will only be one category assigned to each Transfer:

- shared_shuttle
- speedy_shuttle
- private_transfer
- wheelchair_adapted
- helicopter_transfer
- water_taxi
- shared_water_taxi
- limo_transfer
- private_coach
- private_minibus
- private_executive
- land_and_water
- train
- suv

### Example

```json
{
    "API_Reply": {
        "ATTRIBUTES": {
            "Product": "Transfers",
            "RequestCode": 1,
            "Result": "OK",
            "cached": true,
            "expires": "2020-07-21 15:20:14"
        },
        "Transfers": [
            {
                "ATTRIBUTES": [],
                "Name": "Shuttle",
                "Code": "TBHT39",
                "BookingURL": "/v1/transfers/TBHT39.js",
                "MoreInfoURL": null,
                "TotalPrice": 103.52,
                "NonDiscPrice": 103.52,
                "SalesCurrency": "GBP",
                "Images": [
                    {
                        "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/shuttlebus.jpeg",
                        "Alt": "shuttlebus"
                    }
                ],
                "Category": "shared_shuttle",
                "Disclaimer": {
                    "Title": null,
                    "Message": null
                },
                "ProviderDetails": {
                    "ProviderName": "",
                    "ProviderRating": ""
                },
                "Cancellation": {
                    "Period": 72,
                    "Percentage": 100,
                    "Fee": 0
                },
                "VehicleDetails": {
                    "MinCapacity": "",
                    "MaxCapacity": "",
                    "MinStops": "",
                    "MaxStops": "",
                    "Bags": 1,
                    "NumberOfVehicles": 1,
                    "IsPrivate": "",
                    "Supplier": ""
                },
                "OutboundTransfer": {
                    "SupplierRef": "",
                    "Origin": "Málaga Airport",
                    "OriginAddress": "Málaga Airport, Málaga",
                    "OriginIata": "AGP",
                    "Destination": "BlueBay Banús",
                    "DestinationAddress": "Carretera Cadiz, 29660, Marbella",
                    "DestinationIata": "",
                    "JourneyTime": 90,
                    "ArrivalDate": "2020-08-01",
                    "ArrivalTime": "09:00",
                    "ReturnDate": null,
                    "ReturnTime": null,
                    "PickupDate": "2020-08-01",
                    "PickupTime": "09:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "ReturnTransfer": {
                    "SupplierRef": "",
                    "Origin": "BlueBay Banús",
                    "OriginAddress": "Carretera Cadiz, 29660, Marbella",
                    "OriginIata": "",
                    "Destination": "Málaga Airport",
                    "DestinationAddress": "Málaga Airport, Málaga",
                    "DestinationIata": "AGP",
                    "JourneyTime": 90,
                    "ArrivalDate": null,
                    "ArrivalTime": null,
                    "ReturnDate": "2020-08-07",
                    "ReturnTime": "16:30",
                    "PickupDate": "2020-08-07",
                    "PickupTime": "12:30",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "advance_purchase": true
            },
            {
                "ATTRIBUTES": [],
                "Name": "Speedy Shuttle",
                "Code": "TBHT519",
                "BookingURL": "/v1/transfers/TBHT519.js",
                "MoreInfoURL": null,
                "TotalPrice": 134.8,
                "NonDiscPrice": 134.8,
                "SalesCurrency": "GBP",
                "Images": [
                    {
                        "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/shuttlebus.jpeg",
                        "Alt": "shuttlebus"
                    }
                ],
                "Category": "speedy_shuttle",
                "Disclaimer": {
                    "Title": null,
                    "Message": null
                },
                "ProviderDetails": {
                    "ProviderName": "",
                    "ProviderRating": ""
                },
                "Cancellation": {
                    "Period": 72,
                    "Percentage": 100,
                    "Fee": 0
                },
                "VehicleDetails": {
                    "MinCapacity": "",
                    "MaxCapacity": "",
                    "MinStops": "",
                    "MaxStops": "",
                    "Bags": 1,
                    "NumberOfVehicles": 1,
                    "IsPrivate": "",
                    "Supplier": ""
                },
                "OutboundTransfer": {
                    "SupplierRef": "",
                    "Origin": "Málaga Airport",
                    "OriginAddress": "Málaga Airport, Málaga",
                    "OriginIata": "AGP",
                    "Destination": "BlueBay Banús",
                    "DestinationAddress": "Carretera Cadiz, 29660, Marbella",
                    "DestinationIata": "",
                    "JourneyTime": 75,
                    "ArrivalDate": "2020-08-01",
                    "ArrivalTime": "09:00",
                    "ReturnDate": null,
                    "ReturnTime": null,
                    "PickupDate": "2020-08-01",
                    "PickupTime": "09:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "ReturnTransfer": {
                    "SupplierRef": "",
                    "Origin": "BlueBay Banús",
                    "OriginAddress": "Carretera Cadiz, 29660, Marbella",
                    "OriginIata": "",
                    "Destination": "Málaga Airport",
                    "DestinationAddress": "Málaga Airport, Málaga",
                    "DestinationIata": "AGP",
                    "JourneyTime": 75,
                    "ArrivalDate": null,
                    "ArrivalTime": null,
                    "ReturnDate": "2020-08-07",
                    "ReturnTime": "16:30",
                    "PickupDate": "2020-08-07",
                    "PickupTime": "12:45",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "advance_purchase": true
            },
            {
                "ATTRIBUTES": [],
                "Name": "Private Car",
                "Code": "TBHT43",
                "BookingURL": "/v1/transfers/TBHT43.js",
                "MoreInfoURL": null,
                "TotalPrice": 201.72,
                "NonDiscPrice": 201.72,
                "SalesCurrency": "GBP",
                "Images": [
                    {
                        "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg",
                        "Alt": "private standard"
                    }
                ],
                "Category": "private_transfer",
                "Disclaimer": {
                    "Title": null,
                    "Message": null
                },
                "ProviderDetails": {
                    "ProviderName": "",
                    "ProviderRating": ""
                },
                "Cancellation": {
                    "Period": 72,
                    "Percentage": 100,
                    "Fee": 0
                },
                "VehicleDetails": {
                    "MinCapacity": 1,
                    "MaxCapacity": 4,
                    "MinStops": "",
                    "MaxStops": "",
                    "Bags": 4,
                    "NumberOfVehicles": 1,
                    "IsPrivate": true,
                    "Supplier": ""
                },
                "OutboundTransfer": {
                    "SupplierRef": "",
                    "Origin": "Málaga Airport",
                    "OriginAddress": "Málaga Airport, Málaga",
                    "OriginIata": "AGP",
                    "Destination": "BlueBay Banús",
                    "DestinationAddress": "Carretera Cadiz, 29660, Marbella",
                    "DestinationIata": "",
                    "JourneyTime": 60,
                    "ArrivalDate": "2020-08-01",
                    "ArrivalTime": "09:00",
                    "ReturnDate": null,
                    "ReturnTime": null,
                    "PickupDate": "2020-08-01",
                    "PickupTime": "09:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "ReturnTransfer": {
                    "SupplierRef": "",
                    "Origin": "BlueBay Banús",
                    "OriginAddress": "Carretera Cadiz, 29660, Marbella",
                    "OriginIata": "",
                    "Destination": "Málaga Airport",
                    "DestinationAddress": "Málaga Airport, Málaga",
                    "DestinationIata": "AGP",
                    "JourneyTime": 60,
                    "ArrivalDate": null,
                    "ArrivalTime": null,
                    "ReturnDate": "2020-08-07",
                    "ReturnTime": "16:30",
                    "PickupDate": "2020-08-07",
                    "PickupTime": "13:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "advance_purchase": true
            },
            {
                "ATTRIBUTES": [],
                "Name": "Private Executive Car",
                "Code": "TBHT18",
                "BookingURL": "/v1/transfers/TBHT18.js",
                "MoreInfoURL": null,
                "TotalPrice": 291.86,
                "NonDiscPrice": 291.86,
                "SalesCurrency": "GBP",
                "Images": [
                    {
                        "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_luxury.jpeg",
                        "Alt": "private luxury"
                    }
                ],
                "Category": "private_executive",
                "Disclaimer": {
                    "Title": null,
                    "Message": null
                },
                "ProviderDetails": {
                    "ProviderName": "",
                    "ProviderRating": ""
                },
                "Cancellation": {
                    "Period": 72,
                    "Percentage": 100,
                    "Fee": 0
                },
                "VehicleDetails": {
                    "MinCapacity": 1,
                    "MaxCapacity": 4,
                    "MinStops": "",
                    "MaxStops": "",
                    "Bags": 4,
                    "NumberOfVehicles": 1,
                    "IsPrivate": true,
                    "Supplier": ""
                },
                "OutboundTransfer": {
                    "SupplierRef": "",
                    "Origin": "Málaga Airport",
                    "OriginAddress": "Málaga Airport, Málaga",
                    "OriginIata": "AGP",
                    "Destination": "BlueBay Banús",
                    "DestinationAddress": "Carretera Cadiz, 29660, Marbella",
                    "DestinationIata": "",
                    "JourneyTime": 60,
                    "ArrivalDate": "2020-08-01",
                    "ArrivalTime": "09:00",
                    "ReturnDate": null,
                    "ReturnTime": null,
                    "PickupDate": "2020-08-01",
                    "PickupTime": "09:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "ReturnTransfer": {
                    "SupplierRef": "",
                    "Origin": "BlueBay Banús",
                    "OriginAddress": "Carretera Cadiz, 29660, Marbella",
                    "OriginIata": "",
                    "Destination": "Málaga Airport",
                    "DestinationAddress": "Málaga Airport, Málaga",
                    "DestinationIata": "AGP",
                    "JourneyTime": 60,
                    "ArrivalDate": null,
                    "ArrivalTime": null,
                    "ReturnDate": "2020-08-07",
                    "ReturnTime": "16:30",
                    "PickupDate": "2020-08-07",
                    "PickupTime": "13:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "advance_purchase": true
            },
            {
                "ATTRIBUTES": [],
                "Name": "Private Minibus",
                "Code": "TBHT2",
                "BookingURL": "/v1/transfers/TBHT2.js",
                "MoreInfoURL": null,
                "TotalPrice": 295.32,
                "NonDiscPrice": 295.32,
                "SalesCurrency": "GBP",
                "Images": [
                    {
                        "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg",
                        "Alt": "private standard"
                    }
                ],
                "Category": "private_minibus",
                "Disclaimer": {
                    "Title": null,
                    "Message": null
                },
                "ProviderDetails": {
                    "ProviderName": "",
                    "ProviderRating": ""
                },
                "Cancellation": {
                    "Period": 72,
                    "Percentage": 100,
                    "Fee": 0
                },
                "VehicleDetails": {
                    "MinCapacity": 5,
                    "MaxCapacity": 8,
                    "MinStops": "",
                    "MaxStops": "",
                    "Bags": 8,
                    "NumberOfVehicles": 1,
                    "IsPrivate": true,
                    "Supplier": ""
                },
                "OutboundTransfer": {
                    "SupplierRef": "",
                    "Origin": "Málaga Airport",
                    "OriginAddress": "Málaga Airport, Málaga",
                    "OriginIata": "AGP",
                    "Destination": "BlueBay Banús",
                    "DestinationAddress": "Carretera Cadiz, 29660, Marbella",
                    "DestinationIata": "",
                    "JourneyTime": 60,
                    "ArrivalDate": "2020-08-01",
                    "ArrivalTime": "09:00",
                    "ReturnDate": null,
                    "ReturnTime": null,
                    "PickupDate": "2020-08-01",
                    "PickupTime": "09:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "ReturnTransfer": {
                    "SupplierRef": "",
                    "Origin": "BlueBay Banús",
                    "OriginAddress": "Carretera Cadiz, 29660, Marbella",
                    "OriginIata": "",
                    "Destination": "Málaga Airport",
                    "DestinationAddress": "Málaga Airport, Málaga",
                    "DestinationIata": "AGP",
                    "JourneyTime": 60,
                    "ArrivalDate": null,
                    "ArrivalTime": null,
                    "ReturnDate": "2020-08-07",
                    "ReturnTime": "16:30",
                    "PickupDate": "2020-08-07",
                    "PickupTime": "13:00",
                    "JoiningInstructions": null,
                    "ContactNumbers": null
                },
                "advance_purchase": true
            }
        ],
        "Pricing": {},
        "SepaID": "",
        "API_Header": {
            "Request": {
                "ABTANumber": "YourABTANumber",
                "Password": "YourPassword",
                "Initials": "YourInitials",
                "key": "YourKey",
                "token": "YourToken",
                "FromDate": "2020-08-01",
                "FromTime": 1000,
                "ReturnDate": "2020-08-07",
                "ReturnTime": 1730,
                "PickUp": "AGP",
                "PickUpType": "IATA",
                "DropOff": 85101062,
                "DropOffType": "TTI",
                "OutFlight": "U28605",
                "ReturnFlight": "U28602",
                "Adults": 2,
                "v": 1,
                "format": "js"
            }
        }
    }
}
```

### Worked Examples

Below are some worked examples of both the request and response when requesting transfers avalability.

#### Airport to TTI
##### Request

{% codetabs %}
{% codetab XML %}
```
https:///api.holidayextras.co.uk/v1/transfers/search?ABTANumber=YourABTANumber&Password=YourABTANumber&Initials=YourInitials&key=YourKey&token=YourToken&PickUp=ALC&PickUpType=IATA&DropOffType=TTI&DropOff=10147575&FromDate=2022-03-16&FromTime=1115&ReturnDate=2022-03-23&ReturnTime=1115&Adults=2&OutFlight=U28605&ReturnFlight=U28602
```
{% endcodetab %}
{% codetab JSON %}
```
https:///api.holidayextras.co.uk/v1/transfers/search.js?ABTANumber=YourABTANumber&Password=YourABTANumber&Initials=YourInitials&key=YourKey&token=YourToken&PickUp=ALC&PickUpType=IATA&DropOffType=TTI&DropOff=10147575&FromDate=2022-03-16&FromTime=1115&ReturnDate=2022-03-23&ReturnTime=1115&Adults=2&OutFlight=U28605&ReturnFlight=U28602
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

##### Response

NB: This is a shortened example compiled from a full availability response.

{% codetabs %}
{% codetab XML %}
```xml
<API_Reply Product="Transfers" RequestCode="1" Result="OK" cached="1" expires="2021-12-07 13:06:41">
  <Transfers>
    <Name>Private Standard Car</Name>
    <Code>TBHT1169922</Code>
    <BookingURL>/transfers/TBHT1169922</BookingURL>
    <MoreInfoURL/>
    <TotalPrice>87.96</TotalPrice>
    <NonDiscPrice>87.96</NonDiscPrice>
    <SalesCurrency>GBP</SalesCurrency>
    <Images>
    <Src>//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg</Src>
    <Alt>private standard</Alt>
    </Images>
    <Category>private_transfer</Category>
    <Disclaimer>
    <Title/>
    <Message/>
    </Disclaimer>
    <ProviderDetails>
    <ProviderName/>
    <ProviderRating/>
    </ProviderDetails>
    <Cancellation>
    <Period>72</Period>
    <Percentage>100</Percentage>
    <Fee>0</Fee>
    </Cancellation>
    <VehicleDetails>
      <MinCapacity>1</MinCapacity>
      <MaxCapacity>4</MaxCapacity>
      <MinStops/>
      <MaxStops/>
      <Bags>4</Bags>
      <NumberOfVehicles>1</NumberOfVehicles>
      <IsPrivate>1</IsPrivate>
      <Supplier/>
      <Make/>
    </VehicleDetails>
    <OutboundTransfer>
      <SupplierRef/>
      <Origin>Alicante International Airport (Benidorm)</Origin>
      <OriginAddress>Alicante International Airport (Benidorm), Alicante</OriginAddress>
      <OriginIata>ALC</OriginIata>
      <Destination>Hotel Rural Castillo De Biar</Destination>
      <DestinationAddress>s/n, Carretera de Banyeres, 03410, Biar</DestinationAddress>
      <DestinationIata/>
      <JourneyTime>60</JourneyTime>
      <DepartureDate/>
      <DepartureTime/>
      <ArrivalDate>16/03/2022</ArrivalDate>
      <ArrivalTime>11:15</ArrivalTime>
      <ReturnDate/>
      <ReturnTime/>
      <PickupDate>16/03/2022</PickupDate>
      <PickupTime>11:15</PickupTime>
      <JoiningInstructions/>
      <ContactNumbers/>
    </OutboundTransfer>
    <ReturnTransfer>
      <SupplierRef/>
      <Origin>Hotel Rural Castillo De Biar</Origin>
      <OriginAddress>s/n, Carretera de Banyeres, 03410, Biar</OriginAddress>
      <OriginIata/>
      <Destination>Alicante International Airport (Benidorm)</Destination>
      <DestinationAddress>Alicante International Airport (Benidorm), Alicante</DestinationAddress>
      <DestinationIata>ALC</DestinationIata>
      <JourneyTime>60</JourneyTime>
      <DepartureDate/>
      <DepartureTime/>
      <ArrivalDate/>
      <ArrivalTime/>
      <ReturnDate>23/03/2022</ReturnDate>
      <ReturnTime>11:15</ReturnTime>
      <PickupDate>23/03/2022</PickupDate>
      <PickupTime>07:45</PickupTime>
      <JoiningInstructions/>
      <ContactNumbers/>
    </ReturnTransfer>
    <advance_purchase>1</advance_purchase>
  </Transfers>
  <Pricing/>
  <SepaID/>
  <API_Header>
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <Initials>YourInitials</Initials>
      <key>YourKey</key>
      <token>YourToken</token>
      <PickUp>ALC</PickUp>
      <PickUpType>IATA</PickUpType>
      <DropOffType>TTI</DropOffType>
      <DropOff>10147575</DropOff>
      <FromDate>2022-03-16</FromDate>
      <FromTime>1115</FromTime>
      <ReturnDate>2022-03-23</ReturnDate>
      <ReturnTime>1115</ReturnTime>
      <Adults>2</Adults>
      <OutFlight>U28605</OutFlight>
      <ReturnFlight>U28602</ReturnFlight>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "ATTRIBUTES": {
      "Product": "Transfers",
      "RequestCode": 1,
      "Result": "OK",
      "cached": true,
      "expires": "2021-12-07 14:50:30"
    },
    "Transfers": [
      {
        "ATTRIBUTES": [],
        "Name": "Private Standard Car",
        "Code": "TBHT1169922",
        "BookingURL": "/transfers/TBHT1169922.js",
        "MoreInfoURL": null,
        "TotalPrice": 87.96,
        "NonDiscPrice": 87.96,
        "SalesCurrency": "GBP",
        "Images": [
          {
            "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg",
            "Alt": "private standard"
          }
        ],
        "Category": "private_transfer",
        "Disclaimer": {
          "Title": null,
          "Message": null
        },
        "ProviderDetails": {
          "ProviderName": "",
          "ProviderRating": ""
        },
        "Cancellation": {
          "Period": 72,
          "Percentage": 100,
          "Fee": 0
        },
        "VehicleDetails": {
          "MinCapacity": 1,
          "MaxCapacity": 4,
          "MinStops": "",
          "MaxStops": "",
          "Bags": 4,
          "NumberOfVehicles": 1,
          "IsPrivate": true,
          "Supplier": "",
          "Make": ""
        },
        "OutboundTransfer": {
          "SupplierRef": "",
          "Origin": "Alicante International Airport (Benidorm)",
          "OriginAddress": "Alicante International Airport (Benidorm), Alicante",
          "OriginIata": "ALC",
          "Destination": "Hotel Rural Castillo De Biar",
          "DestinationAddress": "s/n, Carretera de Banyeres, 03410, Biar",
          "DestinationIata": "",
          "JourneyTime": 60,
          "DepartureDate": null,
          "DepartureTime": null,
          "ArrivalDate": "2022-03-16",
          "ArrivalTime": "11:15",
          "ReturnDate": null,
          "ReturnTime": null,
          "PickupDate": "2022-03-16",
          "PickupTime": "11:15",
          "JoiningInstructions": null,
          "ContactNumbers": null
        },
        "ReturnTransfer": {
          "SupplierRef": "",
          "Origin": "Hotel Rural Castillo De Biar",
          "OriginAddress": "s/n, Carretera de Banyeres, 03410, Biar",
          "OriginIata": "",
          "Destination": "Alicante International Airport (Benidorm)",
          "DestinationAddress": "Alicante International Airport (Benidorm), Alicante",
          "DestinationIata": "ALC",
          "JourneyTime": 60,
          "DepartureDate": null,
          "DepartureTime": null,
          "ArrivalDate": null,
          "ArrivalTime": null,
          "ReturnDate": "2022-03-23",
          "ReturnTime": "11:15",
          "PickupDate": "2022-03-23",
          "PickupTime": "07:45",
          "JoiningInstructions": null,
          "ContactNumbers": null
        },
        "advance_purchase": true
      },
    ],
    "Pricing": {},
    "SepaID": "",
    "API_Header": {
      "Request": {
        "ABTANumber": "YourABTANumber",
        "Password": "YourPassword",
        "Initials": "YourInitials",
        "key": "YourKey",
        "token": "YourToken",
        "PickUp": "ALC",
        "PickUpType": "IATA",
        "DropOffType": "TTI",
        "DropOff": 10147575,
        "FromDate": "2022-03-16",
        "FromTime": 1115,
        "ReturnDate": "2022-03-23",
        "ReturnTime": 1115,
        "Adults": 2,
        "OutFlight": "U28605",
        "ReturnFlight": "U28602",
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}


#### Airport to Postal Address
##### Request
{% codetabs %}
{% codetab XML %}
```
https:///api.holidayextras.co.uk/v1/transfers/search?ABTANumber=YourABTANumber&Password=YourABTANumber&Initials=YourInitials&key=YourKey&token=YourToken&PickUp=ALC&PickUpType=IATA&DropOffType=postal-address&DropOffName=Hotel%20Rural%20Castillo%20De%20Biar&DropOffAddress[0]=Carretera%20de%20Banyeres&DropOffAddress[1]=s/n&DropOffTown=%20Biar&DropOffCounty=Alicante&DropOffPostcode=03410&DropOffCountryCode=ES&DropOffLongitude=-0.76832006&DropOffLatitude=38.63852215&Adults=2&FromDate=2022-03-16&FromTime=1115&ReturnDate=2022-03-23&ReturnTime=1115&OutFlight=U28605&ReturnFlight=U28602
```
{% endcodetab %}
{% codetab JSON %}
```
https:///api.holidayextras.co.uk/v1/transfers/search.js?ABTANumber=YourABTANumber&Password=YourABTANumber&Initials=YourInitials&key=YourKey&token=YourToken&PickUp=ALC&PickUpType=IATA&DropOffType=postal-address&DropOffName=Hotel%20Rural%20Castillo%20De%20Biar&DropOffAddress[0]=Carretera%20de%20Banyeres&DropOffAddress[1]=s/n&DropOffTown=%20Biar&DropOffCounty=Alicante&DropOffPostcode=03410&DropOffCountryCode=ES&DropOffLongitude=-0.76832006&DropOffLatitude=38.63852215&Adults=2&FromDate=2022-03-16&FromTime=1115&ReturnDate=2022-03-23&ReturnTime=1115&OutFlight=U28605&ReturnFlight=U28602
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

##### Response

NB: This is a shortened example compiled from a full availability response.

{% codetabs %}
{% codetab XML %}
```xml
<API_Reply Product="Transfers" RequestCode="1" Result="OK" cached="1" expires="2021-12-07 16:31:35">
  <Transfers>
    <Name>Private Standard Car</Name>
    <Code>TBHT1169922</Code>
    <BookingURL>/transfers/TBHT1169922</BookingURL>
    <MoreInfoURL/>
    <TotalPrice>87.96</TotalPrice>
    <NonDiscPrice>87.96</NonDiscPrice>
    <SalesCurrency>GBP</SalesCurrency>
    <Images>
      <Src>//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg</Src>
      <Alt>private standard</Alt>
    </Images>
    <Category>private_transfer</Category>
    <Disclaimer>
      <Title/>
      <Message/>
    </Disclaimer>
    <ProviderDetails>
      <ProviderName/>
      <ProviderRating/>
    </ProviderDetails>
    <Cancellation>
      <Period>72</Period>
      <Percentage>100</Percentage>
      <Fee>0</Fee>
    </Cancellation>
    <VehicleDetails>
      <MinCapacity>1</MinCapacity>
      <MaxCapacity>4</MaxCapacity>
      <MinStops/>
      <MaxStops/>
      <Bags>4</Bags>
      <NumberOfVehicles>1</NumberOfVehicles>
      <IsPrivate>1</IsPrivate>
      <Supplier/>
      <Make/>
    </VehicleDetails>
    <OutboundTransfer>
      <SupplierRef/>
      <Origin>Alicante International Airport (Benidorm)</Origin>
      <OriginAddress>Alicante International Airport (Benidorm), Alicante</OriginAddress>
      <OriginIata>ALC</OriginIata>
      <Destination>Hotel Rural Castillo De Biar</Destination>
      <DestinationAddress>Hotel Rural Castillo De Biar, Carretera de Banyeres, s/n, Biar, Alicante, 03410, ES</DestinationAddress>
      <DestinationIata/>
      <JourneyTime>60</JourneyTime>
      <DepartureDate/>
      <DepartureTime/>
      <ArrivalDate>16/03/2022</ArrivalDate>
      <ArrivalTime>11:15</ArrivalTime>
      <ReturnDate/>
      <ReturnTime/>
      <PickupDate>16/03/2022</PickupDate>
      <PickupTime>11:15</PickupTime>
      <JoiningInstructions/>
      <ContactNumbers/>
    </OutboundTransfer>
    <ReturnTransfer>
      <SupplierRef/>
      <Origin>Hotel Rural Castillo De Biar</Origin>
      <OriginAddress>Hotel Rural Castillo De Biar, Carretera de Banyeres, s/n, Biar, Alicante, 03410, ES</OriginAddress>
      <OriginIata/>
      <Destination>Alicante International Airport (Benidorm)</Destination>
      <DestinationAddress>Alicante International Airport (Benidorm), Alicante</DestinationAddress>
      <DestinationIata>ALC</DestinationIata>
      <JourneyTime>60</JourneyTime>
      <DepartureDate/>
      <DepartureTime/>
      <ArrivalDate/>
      <ArrivalTime/>
      <ReturnDate>23/03/2022</ReturnDate>
      <ReturnTime>11:15</ReturnTime>
      <PickupDate>23/03/2022</PickupDate>
      <PickupTime>07:45</PickupTime>
      <JoiningInstructions/>
      <ContactNumbers/>
    </ReturnTransfer>
    <advance_purchase>1</advance_purchase>
  </Transfers>
  <Pricing/>
  <SepaID/>
  <API_Header>
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <Initials>YourInitials</Initials>
      <key>YourKey</key>
      <token>YourToken</token>
      <PickUp>ALC</PickUp>
      <PickUpType>IATA</PickUpType>
      <DropOffType>postal-address</DropOffType>
      <DropOffName>Hotel Rural Castillo De Biar</DropOffName>
      <DropOffAddress>Carretera de Banyeres</DropOffAddress>
      <DropOffAddress>s/n</DropOffAddress>
      <DropOffTown>Biar</DropOffTown>
      <DropOffCounty>Alicante</DropOffCounty>
      <DropOffPostcode>03410</DropOffPostcode>
      <DropOffCountryCode>ES</DropOffCountryCode>
      <DropOffLongitude>-0.76832006</DropOffLongitude>
      <DropOffLatitude>38.63852215</DropOffLatitude>
      <FromDate>2022-03-16</FromDate>
      <FromTime>1115</FromTime>
      <ReturnDate>2022-03-23</ReturnDate>
      <ReturnTime>1115</ReturnTime>
      <Adults>2</Adults>
      <OutFlight>U28605</OutFlight>
      <ReturnFlight>U28602</ReturnFlight>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "ATTRIBUTES": {
      "Product": "Transfers",
      "RequestCode": 1,
      "Result": "OK",
      "cached": true,
      "expires": "2021-12-07 16:26:43"
    },
    "Transfers": [
      {
        "ATTRIBUTES": [],
        "Name": "Private Standard Car",
        "Code": "TBHT1169922",
        "BookingURL": "/transfers/TBHT1169922.js",
        "MoreInfoURL": null,
        "TotalPrice": 87.96,
        "NonDiscPrice": 87.96,
        "SalesCurrency": "GBP",
        "Images": [{
          "Src": "//dfgkosjf6iw47.cloudfront.net/resortTransfers/private_standard.jpeg",
          "Alt": "private standard"
        }],
        "Category": "private_transfer",
        "Disclaimer": {
          "Title": null,
          "Message": null
        },
        "ProviderDetails": {
          "ProviderName": "",
          "ProviderRating": ""
        },
        "Cancellation": {
          "Period": 72,
          "Percentage": 100,
          "Fee": 0
        },
        "VehicleDetails": {
          "MinCapacity": 1,
          "MaxCapacity": 4,
          "MinStops": "",
          "MaxStops": "",
          "Bags": 4,
          "NumberOfVehicles": 1,
          "IsPrivate": true,
          "Supplier": "",
          "Make": ""
        },
        "OutboundTransfer": {
          "SupplierRef": "",
          "Origin": "Alicante International Airport (Benidorm)",
          "OriginAddress": "Alicante International Airport (Benidorm), Alicante",
          "OriginIata": "ALC",
          "Destination": "Hotel Rural Castillo De Biar",
          "DestinationAddress": "Hotel Rural Castillo De Biar, Carretera de Banyeres, s/n,  Biar, Alicante, 03410, ES",
          "DestinationIata": "",
          "JourneyTime": 60,
          "DepartureDate": null,
          "DepartureTime": null,
          "ArrivalDate": "2022-03-16",
          "ArrivalTime": "11:15",
          "ReturnDate": null,
          "ReturnTime": null,
          "PickupDate": "2022-03-16",
          "PickupTime": "11:15",
          "JoiningInstructions": null,
          "ContactNumbers": null
        },
        "ReturnTransfer": {
          "SupplierRef": "",
          "Origin": "Hotel Rural Castillo De Biar",
          "OriginAddress": "Hotel Rural Castillo De Biar, Carretera de Banyeres, s/n,  Biar, Alicante, 03410, ES",
          "OriginIata": "",
          "Destination": "Alicante International Airport (Benidorm)",
          "DestinationAddress": "Alicante International Airport (Benidorm), Alicante",
          "DestinationIata": "ALC",
          "JourneyTime": 60,
          "DepartureDate": null,
          "DepartureTime": null,
          "ArrivalDate": null,
          "ArrivalTime": null,
          "ReturnDate": "2022-03-23",
          "ReturnTime": "11:15",
          "PickupDate": "2022-03-23",
          "PickupTime": "07:45",
          "JoiningInstructions": null,
          "ContactNumbers": null
        },
        "advance_purchase": true
      }
    ],
    "Pricing": {},
    "SepaID": "",
    "API_Header": {
      "Request": {
        "ABTANumber": "YourABTANumber",
        "Password": "YourPassword",
        "Initials": "YourInitials",
        "key": "YourKey",
        "token": "YourToken",
        "PickUp": "ALC",
        "PickUpType": "IATA",
        "DropOffType": "postal-address",
        "DropOffName": "Hotel Rural Castillo De Biar",
        "DropOffAddress": [
          "Carretera de Banyeres",
          "s/n"
        ],
        "DropOffTown": " Biar",
        "DropOffCounty": "Alicante",
        "DropOffPostcode": "03410",
        "DropOffCountryCode": "ES",
        "DropOffLongitude": -0.76832006,
        "DropOffLatitude": 38.63852215,
        "FromDate": "2022-03-16",
        "FromTime": 1115,
        "ReturnDate": "2022-03-23",
        "ReturnTime": 1115,
        "Adults": 2,
        "OutFlight": "U28605",
        "ReturnFlight": "U28602",
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}

[^1]: Only required when the location type is `postal-address`.
