---

---

# Transfers View Booking

## Important Notes

- This endpoint provides comprehensive booking details including journey information, contact numbers, and cancellation policies
- Use this endpoint to retrieve up-to-date booking status and transfer details
- The response includes both outbound and return transfer information (if applicable)

## View Booking Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.com/v1/transfers/booking/[BookingRef]
```

Where ```[BookingRef]``` is the booking reference you received when making the original booking.

For example:
```
https://api.holidayextras.com/v1/transfers/booking/TBBGNHMT
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name               | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                       |
|--------------------|-----------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber         | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                  |
| Password           | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br />This will be confirmed to you by your Account Manager during set up.                                                                                                                            |
| key                | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                          |
| token              | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                   |

## View Booking Response

If the booking is found, the response will contain detailed information about the transfer booking including journey details, cancellation policy, and contact information.

For a detailed explanation of the fields returned, please see below:

| Field                                     | Additional Information                                                                                                                                     |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef                        | The reference for the booking.                                                                                                                             |
| Booking/SupplierRef                       | Reference number provided by the transfer supplier (for the overall booking).                                                                              |
| Booking/Status                            | Current status of the booking (e.g., Confirmed, Pending, Cancelled).                                                                                      |
| Booking/DateBooked                        | Date and time when the booking was made (ISO 8601 format, UTC timezone).                                                                                  |
| Booking/DateCancelled                     | Date and time when the booking was cancelled, if applicable (ISO 8601 format, UTC timezone).                                                              |
| Booking/Email                             | Email address associated with the booking.                                                                                                                 |
| Booking/Product/Price                     | Total price for the transfer booking.                                                                                                                      |
| Booking/Product/Currency                  | Currency in which the price is denominated.                                                                                                                |
| Booking/Product/Category                  | Category of the transfer product. See [Transfer Categories](/hxapi/transfers/av/#transfer-categories) for available options.                              |
| Booking/Product/TransferCode              | Unique code for the transfer product.                                                                                                                      |
| Booking/Product/DeparturePointType        | Type of the departure point.                                                                                                                               |
| Booking/Product/ArrivalPointType          | Type of the arrival point.                                                                                                                                 |
| Booking/Product/Cancellation             | Cancellation policy details including period (in hours), percentage, and fee. For full cancellation details including refund calculations, use the [Cancellation Policy](/hxapi/transfers/cancellation-policy/) endpoint. |
| Booking/Product/VehicleDetails           | Details about the vehicle including capacity, stops, bags allowed, and whether it's private.                                                               |
| Booking/Product/OutboundTransfer         | Details of the outbound transfer journey including origin, destination, journey time, and pickup/arrival times.                                           |
| Booking/Product/ReturnTransfer           | Details of the return transfer journey (only present if the booking includes a return transfer).                                                           |

### Transfer Details Fields

Both `OutboundTransfer` and `ReturnTransfer` contain the following detailed information:

| Field                | Additional Information                                                        |
|----------------------|-------------------------------------------------------------------------------|
| JourneyId            | Unique identifier for the transfer journey.                                  |
| SupplierRef          | Reference provided by the transfer supplier (specific to this journey leg). |
| Origin               | Starting point of the transfer.                                              |
| OriginAddress        | Address of the origin location.                                               |
| OriginIata           | IATA code of the origin location.                                             |
| Destination          | Destination point of the transfer.                                            |
| DestinationAddress   | Address of the destination location.                                          |
| DestinationIata      | IATA code of the destination location.                                        |
| JourneyTime          | Duration of the journey in minutes.                                           |
| FlightDetails        | Flight information associated with the transfer.                              |
| Pickup               | Pickup time for the transfer vehicle as an ISO 8601 timestamp in UTC (Zulu time). |
| InformationUrl       | URL with additional transfer information (when available from supplier).     |
| JoiningInstruction   | Instructions on where and how to join the transfer.                          |
| ContactNumbers       | Contact information including UkEmergencyTel, ReconfirmationTel, and EmergencyTel phone numbers. |

### FlightDetails Fields

The `FlightDetails` object contains flight information when the transfer is associated with a flight:

| Field                                | Additional Information                                                        |
|--------------------------------------|-------------------------------------------------------------------------------|
| FlightDetails/Code                   | Flight number/code (e.g., "U28605").                                         |
| FlightDetails/Origin                 | Origin airport IATA code (e.g., "LGW").                                      |
| FlightDetails/Destination            | Destination airport IATA code (e.g., "AGP").                                 |
| FlightDetails/Departure              | Flight departure time as ISO 8601 timestamp in UTC (Zulu time).              |
| FlightDetails/Arrival                | Flight arrival time as ISO 8601 timestamp in UTC (Zulu time).                |

**Important Notes:**
- All timestamps use UTC timezone and are formatted as ISO 8601 with 'Z' suffix (e.g., "2025-08-01T10:00:00Z")
- For airport pickup transfers, the `Arrival` time represents when passengers land and need pickup
- For airport drop-off transfers, the `Departure` time represents when passengers need to be at the airport
- The `FlightDetails` object and its individual fields can be null when flight information is not available or unknown

### Example

{% codetabs %}
{% codetab XML %}
```xml
<Booking>
  <BookingRef>TBBGNHMT</BookingRef>
  <SupplierRef>123456</SupplierRef>
  <Status>Confirmed</Status>
  <DateBooked>2025-01-15T10:30:00Z</DateBooked>
  <DateCancelled/>
  <Email>customer@example.com</Email>
  <Product>
    <Price>103.52</Price>
    <Currency>GBP</Currency>
    <Category>private_car</Category>
    <TransferCode>TBHT1169922</TransferCode>
    <DeparturePointType>Airport</DeparturePointType>
    <ArrivalPointType>Hotel</ArrivalPointType>
    <Cancellation>
      <Period>24</Period>
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
      <IsPrivate>true</IsPrivate>
      <Supplier>Transfer Company Ltd</Supplier>
      <Make>Mercedes</Make>
    </VehicleDetails>
    <OutboundTransfer>
      <JourneyId>OUT123456</JourneyId>
      <SupplierRef>ABC123</SupplierRef>
      <Origin>Málaga Airport</Origin>
      <OriginAddress>Málaga Airport, Málaga</OriginAddress>
      <OriginIata>AGP</OriginIata>
      <Destination>Hotel Sol Marbella</Destination>
      <DestinationAddress>Av. del Mar, 29600, Marbella</DestinationAddress>
      <DestinationIata/>
      <JourneyTime>60</JourneyTime>
      <FlightDetails>
        <Code>U28605</Code>
        <Origin>LGW</Origin>
        <Destination>AGP</Destination>
        <Departure/>
        <Arrival>2025-08-01T10:00:00Z</Arrival>
      </FlightDetails>
      <Pickup>2025-08-01T10:30:00Z</Pickup>
      <InformationUrl>https://example.com/transfer-info</InformationUrl>
      <JoiningInstruction>Meet at Terminal 3 Arrivals Hall</JoiningInstruction>
      <ContactNumbers>
        <UkEmergencyTel>+44 20 7123 4567</UkEmergencyTel>
        <ReconfirmationTel>+34 952 123 456</ReconfirmationTel>
        <EmergencyTel>+34 952 999 888</EmergencyTel>
      </ContactNumbers>
    </OutboundTransfer>
    <ReturnTransfer>
      <JourneyId>RET123456</JourneyId>
      <SupplierRef>DEF456</SupplierRef>
      <Origin>Hotel Sol Marbella</Origin>
      <OriginAddress>Av. del Mar, 29600, Marbella</OriginAddress>
      <OriginIata/>
      <Destination>Málaga Airport</Destination>
      <DestinationAddress>Málaga Airport, Málaga</DestinationAddress>
      <DestinationIata>AGP</DestinationIata>
      <JourneyTime>60</JourneyTime>
      <FlightDetails>
        <Code>U28602</Code>
        <Origin>AGP</Origin>
        <Destination>LGW</Destination>
        <Departure>2025-08-07T13:30:00Z</Departure>
        <Arrival/>
      </FlightDetails>
      <Pickup>2025-08-07T10:00:00Z</Pickup>
      <InformationUrl>https://example.com/transfer-info</InformationUrl>
      <JoiningInstruction>Meet in hotel lobby 10 minutes before pickup</JoiningInstruction>
      <ContactNumbers>
        <UkEmergencyTel>+44 20 7123 4567</UkEmergencyTel>
        <ReconfirmationTel>+34 952 123 456</ReconfirmationTel>
        <EmergencyTel>+34 952 999 888</EmergencyTel>
      </ContactNumbers>
    </ReturnTransfer>
  </Product>
</Booking>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "Booking": {
    "BookingRef": "TBBGNHMT",
    "SupplierRef": 123456,
    "Status": "Confirmed",
    "DateBooked": "2025-01-15T10:30:00Z",
    "DateCancelled": null,
    "Email": "customer@example.com",
    "Product": {
      "Price": 103.52,
      "Currency": "GBP",
      "Category": "private_car",
      "TransferCode": "TBHT1169922",
      "DeparturePointType": "Airport",
      "ArrivalPointType": "Hotel",
      "Cancellation": {
        "Period": 24,
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
        "Supplier": "Transfer Company Ltd",
        "Make": "Mercedes"
      },
      "OutboundTransfer": {
        "JourneyId": "OUT123456",
        "SupplierRef": "ABC123",
        "Origin": "Málaga Airport",
        "OriginAddress": "Málaga Airport, Málaga",
        "OriginIata": "AGP",
        "Destination": "Hotel Sol Marbella",
        "DestinationAddress": "Av. del Mar, 29600, Marbella",
        "DestinationIata": "",
        "JourneyTime": 60,
        "FlightDetails": {
          "Code": "U28605",
          "Origin": "LGW",
          "Destination": "AGP",
          "Departure": null,
          "Arrival": "2025-08-01T10:00:00Z"
        },
        "Pickup": "2025-08-01T10:30:00Z",
        "InformationUrl": "https://example.com/transfer-info",
        "JoiningInstruction": "Meet at Terminal 3 Arrivals Hall",
        "ContactNumbers": {
          "UkEmergencyTel": "+44 20 7123 4567",
          "ReconfirmationTel": "+34 952 123 456",
          "EmergencyTel": "+34 952 999 888"
        }
      },
      "ReturnTransfer": {
        "JourneyId": "RET123456",
        "SupplierRef": "DEF456",
        "Origin": "Hotel Sol Marbella",
        "OriginAddress": "Av. del Mar, 29600, Marbella",
        "OriginIata": "",
        "Destination": "Málaga Airport",
        "DestinationAddress": "Málaga Airport, Málaga",
        "DestinationIata": "AGP",
        "JourneyTime": 60,
        "FlightDetails": {
          "Code": "U28602",
          "Origin": "AGP",
          "Destination": "LGW",
          "Departure": "2025-08-07T13:30:00Z",
          "Arrival": null
        },
        "Pickup": "2025-08-07T10:00:00Z",
        "InformationUrl": "https://example.com/transfer-info",
        "JoiningInstruction": "Meet in hotel lobby 10 minutes before pickup",
        "ContactNumbers": {
          "UkEmergencyTel": "+44 20 7123 4567",
          "ReconfirmationTel": "+34 952 123 456",
          "EmergencyTel": "+34 952 999 888"
        }
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}
