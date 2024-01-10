---

---

# Errors

List of errors that can be returned from the API.

Please ensure that your application can handle the errors by inspecting the error code only, do not use the error message as this is for debugging purposes only.

| Error code           | Example message                                                                                                                                                                               | Description                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| TokenError           | Missing token in request                                                                                                                                                                      | Missing auth token in the request.                                                          |
| HtmlToPdfError       | Failed to generate pdf                                                                                                                                                                        | Faild to generate confirmation pdf.                                                         |
| Invalid agentCode    | Invalid agent code                                                                                                                                                                            | Agent code is not valid/provided in agent lookup request.                                   |
| Agent Lookup Error   | Unable to retrieve agent details - are you missing a password?                                                                                                                                | Agent lookup failed to retrieve agent details.                                              |
| TerminalError        | Failed to find any terminals                                                                                                                                                                  | Request failed to retriave terminals data.                                                  |
| SMS Error            | Missing params to reply to a customer<br>Message too long at {message.length} characters<br>No customerInteraction supplier<br>Failed to send sms message                                     | Failed to send sms message.                                                                 |
| MissingParameter     | BookingRef is required<br>Address is required in url<br>Mobile number is required in url<br>location is required<br>registration is required                                                  | Required parameter is not provided in the request.                                          |
| group-booking        | For bookings of 7 or more people, please contact us to discuss your requirements                                                                                                              |                                                                                             |
| chauntry-unavailable | Chauntry: Server Unavailable                                                                                                                                                                  | Request failed because Chauntry service is unavailable.                                     |
| NoRows               | Found nothing matching                                                                                                                                                                        | Lookup return empty resultset.                                                              |
| 405                  | To confirm a cancellation request you must use the POST method.                                                                                                                               | HTTP method is not allowed.                                                                 |
| 0000                 | Invalid Email Address                                                                                                                                                                         | Missing email param while ammending a booking.                                              |
| 0004                 | Product is not available                                                                                                                                                                      | Availability lookup product is not available.                                               |
| 0037                 | Sorry, we have no availability for the dates and times selected.                                                                                                                              | Availability lookup does not find availability for dates and times provided in the request. |
| 0037                 | Sorry, the availability timeout has been reached. Please try again.                                                                                                                              | Availability lookup does not find availability due to end supplier latency. |
| 0051                 | Invalid Booking Number                                                                                                                                                                        |                                                                                             |
| 0052                 | Your email address was not the one used to make this booking, please try again.                                                                                                               |                                                                                             |
| 0053                 | This booking cannot be displayed.  If you are a Travel Agent please login and try again, or check you're logged in as the correct agent.  For additional assistance please call 0871 360 2422 |                                                                                             |
| 0071                 | Invalid ABTANumber and/or password                                                                                                                                                            |                                                                                             |
| 0071                 | No Upgrades for this Site                                                                                                                                                                     |                                                                                             |
| 1435                 | Missing or empty mandatory Itinerary/ArrivalDate parameter                                                                                                                                    |                                                                                             |
| 1441                 | Please make sure you have entered a depart date.                                                                                                                                              |                                                                                             |
| 1466                 | Missing or empty mandatory Adults field                                                                                                                                                       |                                                                                             |
| 9999                 | An unknown error occurred                                                                                                                                                                     | Internal error occurred.                                                                    |
| F0071                | Availability requests require the following parameters: From, To, ArrivalTime, DepartTime, PickupLocation, DropoffLocation, DateOfBirth                                                       |                                                                                             |
| F0071                | Invalid arrival date                                                                                                                                                                          |                                                                                             |
| F0071                | Invalid arrival date and/or time                                                                                                                                                              |                                                                                             |
| F0071                | Bookings cannot be made for stays before today                                                                                                                                                |                                                                                             |
| CRS000               | Booking not found                                                                                                                                                                             |                                                                                             |
| CRS001               | Could not look up booking details                                                                                                                                                             |                                                                                             |
| CRS002               | Saved name does not match one entered                                                                                                                                                         |                                                                                             |

## Reply

```xml
<API_Reply Result="OK">
    <?xml version="1.0"?>
    <API_Header>
        ...
    </API_Header>
    <Error>
        <Code>ErrorCode</Code>
        <Message>ErrorMessage</Message>
    </Error>
</API_Reply>
```
