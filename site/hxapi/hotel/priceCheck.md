---

---

# Hotel Price Check

The price check is an optional step to retrieve an up-to-date total price prior to booking.

The parameters are similar to the Book request; the total price retrieved will include all ugprades specified.

## Method

GET

## Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/hotel/LocationCode/priceCheck
```

For example, for _Mercure at London Heathrow_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA/priceCheck
```

## Request Parameters

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
| CustomerRef            | String    | [A-Z0-9] 20 chars  | N          | Enter your Customer Reference to help match bookings for accounting purposes.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Remarks                | String    | [A-Z0-9] 60 chars  | N          | Pass in Remarks for notification such as COT REQUESTED in ROOM                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Waiver                 | Boolean   | [0,1]              | Y          | Defaults to 0 if not supplied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| DataProtection         | String    | [Y,N]              | N          | Does the customer consent to receiving offers from Holiday Extras? Y = Yes, will receive offers, N = No, customer data is protected. Defaults to No if not supplied.                                                                                                                                                                                                                                                                                                                                         |
| System                 | String    | [A-Z] 3 chars      | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                               |
| lang                   | String    | [A-Z] 2 chars      | Y*         | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)                                                                                                                                                                                                                                                                                                                                                                                                   |
{% include _booking_request_supplement_params.md %}

For further details on the upgrade parameters, see the [Booking request](/hxapi/hotel/bkg).

## Multiple rooms on same booking

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

# Hotel Price Check Response

| Field                   | Additional Information                                                                                                                                                                                        |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TotalPrice      | This is the total price for the booking including all upgrades |
| API_Header/Request | A list of parameters that were sent in the booking request.                                                                                                                                               |

# Worked Examples

Below are worked examples of both the request and response for the price check for hotels.

## UK Hotel price check

### Request

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA/priceCheck?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2025-07-01&Nights=1&RoomCode=DBL&ParkingDays=0&Adults=2&Children=0
```

### Response

```xml
{% include_relative examples/_uk_room_only_price_check_response.xml %}
```

## UK Hotel price check with Upgrades

### Request

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA/priceCheck?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2025-07-10&Nights=1&RoomCode=DBL&ParkingDays=0&Adults=2&Children=0&Supplements[0][Code]=LGWSOE&Supplements[0][Date]=2025-07-10&Supplements[0][Quantity]=1&Supplements[0][TotalPrice]=40.00&Supplements[1][Code]=LGWASC&Supplements[1][Date]=2025-07-11&Supplements[1][Adults]=2&Supplements[1][Children]=0&Supplements[1][TotalPrice]=82.00
```

### Response

```xml
{% include_relative examples/_uk_upgrade_price_check_response.xml %}
```
