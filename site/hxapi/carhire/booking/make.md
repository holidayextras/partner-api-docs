---

---

# Make Booking

[API Docs](/hxapi/) > product:[Car Hire](/hxapi/carhire) > endpoint:[make booking](make)

```html
GET: /carHire/<productCode>
```

## Request

The following POST parameters are mandatory:

```javascript
"key": 1,
"ABTANumber": "AgentCode",
"Password": "xxxxxxxx",
"ArrivalTime": "HHmm", // 24 hour time format
"ArrivalDate": "YYYY-MM-DD",
"DepartTime": "HHmm", // 24 hour time format
"DepartDate": "YYYY-MM-DD",
"PickupLocation": "FL965",
"DropoffLocation": "FL965",
"FlightNumber": "TBA",
"Title": "Mr",
"FirstName": "FirstName",
"Surname": "LastName",
"DateOfBirth": "YYYY-MM-DD",
"Email": "example@email.com",
"DayPhone": "01111 111111",
"token": "123456789" // user token
```

The following POST parameters are optional:
```html
"ERPRequired": "true/false"
```

## Response

Successful bookings will respond with the booking reference and commission details, which can then be used to Lookup Bookings.

```json
{
  "API_Reply": {
    "Booking": {
      "BookingRef": "XXXXX-XXXXXXXX",
      "AgentComm": "0.00",
      "VATonComm": "0.00",
      "MoreInfoURL": "/booking/XXXXX-XXXXXXXX.js"
     },
   "ATTRIBUTES": {
     "Product": "CarHire",
     "RequestCode": 5,
     "Result": "OK"
   },
    "API_Header": {
      "Request": {
        "key": 1,
        "ArrivalDate": "2016-12-16",
        "ArrivalTime": 1200,
        "DepartDate": "2016-12-22",
        "DepartTime": 1200,
        "DateOfBirth": "1990-01-01",
        "PickupLocation": "FL965",
        "DropoffLocation": "FL965",
        "FlightNumber": "TBA",
        "Title": "Mr",
        "FirstName": "FirstName",
        "Surname": "LastName",
        "ERPRequired": "false",
        "Email": "email@email.com",
        "DayPhone": "01234123123",
        "ABTANumber": "TESTL",
        "Password": "Redacted",
        "format": "js"
      }
    }
  }
}
```
