# Flight update

This allows partners to update the flight time on existing bookings.

## Booking flight update request

This request is used when one or more bookings need to be updated with a new flight time.

### Method

POST

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/flightUpdate
```

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up.|
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |

### Request Body

The body should be a well formatted JSON array:

```json
[
  {
    "hx_booking_ref": "HX123",
    "partner_booking_ref": "TUI123",
    "arrival": "2017-03-04T12:12:12Z",
    "depart": "2017-03-04T12:12:12Z",
    "price": 1234
  },
  {
    "surname": "Jones",
    "hx_booking_ref": "HX124",
    "partner_booking_ref": "TUI124",
    "arrival": "2017-03-04T12:12:12+0100",
    "depart": "2017-03-04T12:12:12+0100",
    "price": 1234
  }
]
```

Please use [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format for dates.

## Partner Notification

TBC
