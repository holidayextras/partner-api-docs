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

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | ABTANumber | String | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. This will be confirmed to you by your Account Manager during set up. |
 | Password | String | [A-Z0-9] 5 chars | Y* | Password required for retail agent requests - intermediaries do not require a password. This will be confirmed to you by your Account Manager during set up.|
 | key | String | [A-Z] | Y | This will be assigned to you by your Account Manager during set up.|
 | token | String | [0-9] 9 chars | Y | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 | notification_url | String | URL | N | Details of updates sent back to partner |

NB: All parameter names are case sensitive.

#### Notification URL

If a `notification_url` *is* provided, the endpoint will return immediately, and asynchronously send the status for the requested booking once they have been actioned.

If a `notification_url` *is not* provided, the endpoint will process the request data synchronously and return the result of the process in the response.

### Request Body Object Properties

The body should be a well formatted JSON array, containing items which are objects with the following properties.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | hx_booking_ref | String | [A-Z0-9] 5 chars | Y | HX full booking reference. |
 | partner_booking_ref | String  | [A-Z] | Y | The unique reference for the partner's booking. |
 | email | String | email | Y | The email address registered with the booking. |
 | arrival | String | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) | Y | New or current parking arrival date and time. |
 | depart | String | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) | Y | New or current parking departure date and time. |
 | price | integer | | Y | Booking amount in pence |

NB: All property names are case sensitive.

### Request Body Example

The above below shows two booking being sent, which each booking object as an element of the array:

```json
[
  {
    "hx_booking_ref": "HX123",
    "partner_booking_ref": "AB123",
    "email": "customer1@hx.com",
    "arrival": "2017-03-04T12:12:12Z",
    "depart": "2017-03-04T12:12:12Z",
    "price": 1234
  },
  {
    "hx_booking_ref": "HX124",
    "partner_booking_ref": "AB124",
    "email": "customer2@hx.com",
    "arrival": "2017-03-04T12:12:12+0100",
    "depart": "2017-03-04T12:12:12+0100",
    "price": 1234
  }
]
```

## Partner Notification

Once the bookings contained in a request have been processed the status will be POST'ed back to the partner using the given `notification_url`.

The body of this POST request will contain well formed JSON in the following format:

```json
[
  {
    "partner_booking_ref": "AB123",
    "status": "OK",
    "message": "Success"
  },
  {
    "partner_booking_ref": "AB124",
    "status": "ERR",
    "message": "booking not found"
  }
]
```

The example above shows two bookings that have been processed, the first update has succeeded, but the second has failed.
