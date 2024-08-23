---

---

# Car Park Price Check

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > [Price Check](/hxapi/parking/priceCheck)

## Car Park Pre-booking Price Check Request

The price check is an optional step to retrieve an up-to-date total price prior to booking.

The parameters are similar to the Book request; the total price retrieved will include all ugprades specified.


### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/carpark/CarParkCode/priceCheck
```

For example, for _Maple Manor Meet and Greet at London Gatwick North terminal_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/carpark/LGW4/priceCheck
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name                   | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|-----------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber             | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Password               | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                  |
| Initials               | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| key                    | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| token                  | String    | [0-9] 9 chars     | Y          | This is the same token used in the availability request.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalDate            | Date      | YYYY-MM-DD        | Y          | Date customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalTime            | Time      | HHMM              | Y          | Time customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| DepartDate             | Date      | YYYY-MM-DD        | Y          | Date customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DepartTime             | Time      | HHMM              | Y          | Time customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| NumberOfPax            | Integer   | [0-9] 2 chars     | Y          | Number of passengers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| System                 | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                                   |
{% include _booking_request_supplement_params.md %}

For further details on the upgrade parameters, see the [Booking request](/hxapi/parking/bkg).

## Car Park Price Check Response

| Field                   | Additional Information                                                                                                                                                                                        |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TotalPrice      | This is the total price for the booking including all upgrades |
