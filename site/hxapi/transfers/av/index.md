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
https://api.holidayextras.co.uk/v1/transfers/search?token=[TOKEN]&key=[KEY]&ABTANumber=[ABTA]&FromDate=2020-08-01&FromTime=1000&ToDate=2020-08-07&ToTime=1730&PickUp=AGP&PickUpType=IATA&DropOff=85101062&DropOffType=TTI&OutFlight=U28605&ReturnFlight=U28602&Adults=2
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type | Format           | Mandatory? | Additional Information                                                                                                |
|-------------|-----------|------------------|------------|-----------------------------------------------------------------------------------------------------------------------|
| ABTANumber  | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.           |
| Password    | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                            |
| Initials    | String    | [A-Z] 3 chars    | N          | The initials of the Operator/Agent.                                                                                   |
| key         | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                   |
| token       | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                            |
| PickUp      | String    | [A-Z0-9]         | Y          | The IATA, TTI or Postcode (i.e `PickUp=AGP`).                                                                         |
| PickUpType  | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI` or `PC` (Postcode) (i.e `PickUpType=IATA`).                                      |
| DropOff     | String    | [A-Z0-9]         | Y          | The IATA, TTI or Postcode (i.e `DropOff=85101062`).                                                                   |
| DropOffType | String    | [A-Z0-9]         | Y          | The type can either be `IATA`, `TTI` or `PC` (Postcode) (i.e `DropOffType=TTI`).                                      |
| FromDate    | Date      | YYYY-MM-DD       | Y          | Flight Arrival Date (`PickUpType` = `IATA`), Flight Departure Date (`DropOffType` = `IATA`), Preferred Date.          |
| FromTime    | Time      | HHMM             | Y          | Flight Arrival Time (`PickUpType` = `IATA`), Flight Departure Time (`DropOffType` = `IATA`), Preferred Time.          |
| ReturnDate  | Date      | YYYY-MM-DD       | N          | Flight Arrival Date (`DropOffType` = `IATA`), Flight Departure Date (`PickUpType` = `IATA`), Preferred Date.          |
| ReturnTime  | Time      | HHMM             | N          | Flight Arrival Time (`DropOffType` = `IATA`), Flight Departure Time (`PickUpType` = `IATA`), Preferred Time.          |
| Adults      | Integer   | [0-9]            | Y          | Number of Adults requiring a transfer.                                                                                |
| Children    | Integer   | [0-9]            | N          | Number of Children requiring a transfer.                                                                              |
| Infants     | Integer   | [0-9]            | N          | Number of Infants requiring a transfer.                                                                               |
| OutFlight   | String    | [A-Z0-9]         | Y*         | A flight number is required if the journey involves being picked up or dropped off at an Airport.                     |
| ReturnFlight| String    | [A-Z0-9]         | N*         | A flight number is required if the return journey involves being picked up or dropped off at an Airport.              |

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
| Transfers/MoreInfoURL      | N/A for Transfers.                                                                                          |
| Transfers/TotalPrice       | The total price of the Transfer/s.                                                                          |
| Transfers/NonDiscPrice     | If a discount has been applied, this is the total price before discount.                                    |
| Transfers/SalesCurrency    | Three character identifier for the sale currency to qualify the price.                                      |
| Transfers/Images/Src       | Link to a image for the product. Prefix with `https:`.                                                      |
| Transfers/Images/Alt       | The alt tag for the image.                                                                                  |
| Transfers/Category         | This is the category of the Transfer/s (i.e `private_transfer`).                                            |
| Transfers/Disclaimer       | Depending on supplier and transfer type, the Disclaimer will contain pickup details.                        |
| Transfers/ProviderDetails  | Shows the providers name and rating (if applicable).                                                        |
| Transfers/Cancellation     | Shows the cancellation period before pickup date/time.                                                      |
| Transfers/VehicleDetails   | Details about the vehicle being used for the Transfer/s.                                                    |
| Transfers/OutboundTransfer | Details about the outbound transfer.                                                                        |
| Transfers/ReturnTransfer   | Details about the return transfer (This field will be `null` if no return was requested).                   |

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
                "token": "d2d6dedd-606f-4f00-aa8c-526a358e927c",
                "key": "TESTL",
                "agent": "TESTL",
                "Password": "Redacted",
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
