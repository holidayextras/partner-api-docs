---

---

# View Booking

[API Docs](/hxapi/) > product:[view](/hxapi/viewamendcancel/view)

## View Booking Request

This method works for bookings made for any product type using our API.

### Method

GET

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef.js
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
| Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
| Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| Email | String | [A-Z0-9] 50 chars | Y        | Email address used to make the booking (i.e. the email address of the lead passenger)|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

## View Booking Response

The view booking response will return all of the details against that booking record in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q).|
| Booking/Amendable | This will return one of the following: `Y` = booking can be amended; `N` = booking cannot be amended; `C` = booking has been cancelled; `S` = booking is same day so cannot be amended or cancelled. |
| Booking/CanxDate | If the booking has been cancelled, the date on which it was will return here. |
| Booking/AgentComm  | Commission you have earned from this booking. |
| Booking/BookingDate | The date the booking was originally made on. |
| Booking/PdfURL | A link to generate a pdf version of the booking confirmation. |
| Itinerary | This block will return details of the original booking, as per the booking response for each product type. Please see the respective booking guides for further details on the fields. |
| ClientDetails | This block will return details of the lead passenger. |
| Pricing | This block will return details of the price paid by the customer. |
| VAT | Please ignore this block. |
| CustRef | If you have passed in a Customer Reference with your original booking request, it will return here. |
| BarCode | A link to generate a bar code for the booking confirmation. |
| API_Header/Request  | A list of parameters that were sent in the view booking request. |

## Worked Examples

Below are worked examples of both the request and response for view a booking.

### UK Products View Booking Request (for a car park)

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### UK Products View Booking Response (for a car park)

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply System="ABC" Version="1.0" Product="General" Customer="A" Session="037862022" RequestCode="7" Result="OK">
  <Agent>YourABTA</Agent>
  <Booking>
    <BookingRef>YourBookingRef</BookingRef>
    <Amendable>Y</Amendable>
    <CanxDate/>
    <CCode/>
    <BasketRef/>
    <CustomerCode/>
    <AgentComm>4.49</AgentComm>
    <VATonComm>0.00</VATonComm>
    <Brand>HX</Brand>
    <Domain/>
    <Lang/>
    <Platform/>
    <FraudBooking/>
    <SupplierReference/>
    <Cancellable/>
    <BookingDate>2019-12-18</BookingDate>
    <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=YourBookingRef&amp;product_type=carparks</PdfUrl>
  </Booking>
  <Itinerary>
    <Product>Parking</Product>
    <ArrivalDate>2020-01-01</ArrivalDate>
    <LastAmendDate/>
    <Remarks/>
    <FlightNum/>
    <ArrivalTime>1200</ArrivalTime>
    <Location>LBA</Location>
    <ReturnDate/>
    <CarDropoffTime>1200</CarDropoffTime>
    <CarPickupDate>2020-01-02</CarPickupDate>
    <CarPickupTime>1300</CarPickupTime>
    <ParkingDays/>
    <ParkingSpaces>01</ParkingSpaces>
    <ReturnFlight>-</ReturnFlight>
    <TerminalCode>....</TerminalCode>
    <CarParkCode>LBY6</CarParkCode>
    <DepartDate>2020-01-02</DepartDate>
    <DepartTime>1300</DepartTime>
    <Duration>2</Duration>
    <NumberOfPax>2</NumberOfPax>
    <ValetParking>N</ValetParking>
    <PPTS/>
    <ParkStart/>
    <ParkTo/>
    <Code>LBY6</Code>
    <Name>Short Stay</Name>
  </Itinerary>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Address/>
    <Address/>
    <Address/>
    <Town/>
    <County/>
    <Postcode>CT214JF</Postcode>
    <DayPhone>01234567890</DayPhone>
    <EvePhone>01234567890</EvePhone>
    <Email>test@test.com</Email>
    <DataProtection/>
    <HistoryText/>
    <GUID/>
    <SourceRef/>
  </ClientDetails>
  <Pricing>
    <AmountPaid>20.00</AmountPaid>
    <AmountDue>0.00</AmountDue>
    <TotalPrice>20.00</TotalPrice>
    <CCardSurchargeAmount>0.00</CCardSurchargeAmount>
    <BasePrice>20.00</BasePrice>
    <Refund/>
    <GrossPrice>20.00</GrossPrice>
    <SourcePriced>Y</SourcePriced>
    <Currency>GBP</Currency>
  </Pricing>
  <VAT>
    <BKgexcVAT>16.67</BKgexcVAT>
    <CWexcVAT>0.00</CWexcVAT>
    <CCexcVAT>0.00</CCexcVAT>
    <BkgExemptVAT>0.00</BkgExemptVAT>
    <Nettotal>16.67</Nettotal>
    <VATAMT>3.33</VATAMT>
    <GrossTotal>20.00</GrossTotal>
    <VATNo>844 2814 25</VATNo>
  </VAT>
  <CustRef/>
  <RequestFlags>
    <Registration>Y</Registration>
    <CarMake>Y</CarMake>
    <CarModel>Y</CarModel>
    <CarColour>Y</CarColour>
    <CreditCard>N</CreditCard>
    <ReturnFlight>Y</ReturnFlight>
    <Terminal>N</Terminal>
    <Destination>N</Destination>
    <MobileNum>N</MobileNum>
    <OutFlight>N</OutFlight>
    <OutTerminal>N</OutTerminal>
    <ReturnTerminal>N</ReturnTerminal>
  </RequestFlags>
  <CarDetails>
    <Registration>S585RRW</Registration>
    <CarMake>VAUXHALL</CarMake>
    <CarModel>CORSA</CarModel>
    <CarColour>WHITE</CarColour>
    <OutFlight>-</OutFlight>
    <OutTerminal/>
    <RetTerminal/>
    <Mobile>01234567890</Mobile>
    <Destination>-</Destination>
  </CarDetails>
  <CurrentSupplements/>
  <BarCode/>
  <QRCode/>
  <API_Header>
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <key>YourKey</key>
      <Email>test@test.com</Email>
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
      "System": "ABC",
      "Version": 1,
      "Product": "General",
      "Customer": "A",
      "Session": 825247870,
      "RequestCode": 7,
      "Result": "OK"
    },
    "Agent": "YourABTA",
    "Booking": {
      "BookingRef": "YourBookingRef",
      "Amendable": "Y",
      "CanxDate": "",
      "CCode": "",
      "BasketRef": "",
      "CustomerCode": " ",
      "AgentComm": "4.49",
      "VATonComm": "0.00",
      "Brand": "HX",
      "Domain": "",
      "Lang": "",
      "Platform": "",
      "FraudBooking": "",
      "SupplierReference": "",
      "Cancellable": "",
      "BookingDate": "2019-12-18",
      "PdfUrl": "/v1/confirmation?email=test%40test.com&amp;booking_ref=YourBookingRef&amp;product_type=carparks"
    },
    "Itinerary": {
      "Product": "Parking",
      "ArrivalDate": "2020-01-01",
      "LastAmendDate": "2019-12-18",
      "Remarks": "",
      "FlightNum": "",
      "ArrivalTime": 1200,
      "Location": "LBA",
      "ReturnDate": "",
      "CarDropoffTime": 1200,
      "CarPickupDate": "2020-01-02",
      "CarPickupTime": 1300,
      "ParkingDays": "",
      "ParkingSpaces": "01",
      "ReturnFlight": "-",
      "TerminalCode": "....",
      "CarParkCode": "LBY6",
      "DepartDate": "2020-01-02",
      "DepartTime": 1300,
      "Duration": 2,
      "NumberOfPax": 2,
      "ValetParking": "N",
      "PPTS": "",
      "ParkStart": "",
      "ParkTo": "",
      "Code": "LBY6",
      "Name": "Short Stay",
      "_longitude": -1.659618,
      "_latitude": 53.869218
    },
    "ClientDetails": {
      "Title": "MR",
      "Initial": "T",
      "Surname": "TEST",
      "Address": [
        "TBC",
        "TBC",
        ""
      ],
      "Town": "",
      "County": "",
      "Postcode": "CT214JF",
      "DayPhone": 01234567890,
      "EvePhone": 01234567890,
      "Email": "test@test.com",
      "DataProtection": "N",
      "HistoryText": "",
      "GUID": "",
      "SourceRef": ""
    },
    "Pricing": {
      "AmountPaid": 20,
      "AmountDue": "0.00",
      "TotalPrice": 20,
      "CCardSurchargeAmount": "0.00",
      "BasePrice": 20,
      "Refund": "",
      "GrossPrice": 20,
      "SourcePriced": "Y",
      "Currency": "GBP"
    },
    "VAT": {
      "BKgexcVAT": 16.67,
      "CWexcVAT": "0.00",
      "CCexcVAT": "0.00",
      "BkgExemptVAT": "0.00",
      "Nettotal": 16.67,
      "VATAMT": 3.33,
      "GrossTotal": 20,
      "VATNo": "844 2814 25"
    },
    "CustRef": "TAU113190",
    "RequestFlags": {
      "Registration": "Y",
      "CarMake": "Y",
      "CarModel": "Y",
      "CarColour": "Y",
      "CreditCard": "N",
      "ReturnFlight": "Y",
      "Terminal": "N",
      "Destination": "N",
      "MobileNum": "N",
      "OutFlight": "N",
      "OutTerminal": "N",
      "ReturnTerminal": "N"
    },
    "CarDetails": {
      "Registration": "S585RRW",
      "CarMake": "VAUXHALL",
      "CarModel": "CORSA",
      "CarColour": "WHITE",
      "OutFlight": "-",
      "OutTerminal": "",
      "RetTerminal": "",
      "Mobile": 01234567890,
      "Destination": "-"
    },
    "CurrentSupplements": "",
    "BarCode": "",
    "QRCode": "",
    "API_Header": {
      "Request": {
        "ABTANumber": "YourABTANumber",
        "Password": "YourPassword",
        "key": "YourKey",
        "Email": "test@test.com",
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}

### Fields Explained

Most of these should be self explanatory, just the values from the booking.

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test@holidayextras.com&booking_ref=HPABCDE&product_type=carparks&ABTANumber=WT314&Password=redacted&key=mytestkey

#### /Booking/Amendable

Possible values


*  Y - booking can be amended or cancelled

*  N - booking cannot be amended or cancelled (advance purchase product etc)

*  C - booking has been cancelled

### European Products View Booking Request (for a hotel room only)

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&Email=test@test.com&System=ABG
```

### European Products View Booking Response (for a hotel room only)

```xml
<?xml version="1.0"?>
<API_Reply System="ABG" Version="1.0" Product="General" Customer="A" Session="379895136" RequestCode="7" Result="OK">
    <Agent>YourABTANumber</Agent>
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <Amendable>Y</Amendable>
        <BookingDate>2018-02-09</BookingDate>
        <CanxDate/>
        <VoucherRef>YourVoucherRef</VoucherRef>
        <Brand>HX</Brand>
        <Domain/>
        <Lang/>
        <Platform/>
        <AgentComm>11.42</AgentComm>
        <VATonComm>1.82</VATonComm>
        <MidocoBasket/>
        <MidocoCustRef/>
        <MidocoId/>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=YourBookingRef&amp;product_type=hotels</PdfUrl>
    </Booking>
    <Itinerary>
        <Product>Hotel</Product>
        <ArrivalDate>2018-12-01</ArrivalDate>
        <LastAmendDate/>
        <Remarks/>
        <BoardBasis>F</BoardBasis>
        <HotelCode>MUCLAN</HotelCode>
        <Nights>1</Nights>
        <NonSmoking>Y</NonSmoking>
        <FlightNum/>
        <Code>MUCLAN</Code>
        <Name>Schweigers Landgasthof</Name>
    </Itinerary>
    <ClientDetails>
        <Title>HERR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Address>TBC</Address>
        <Address>TBC</Address>
        <Address/>
        <Town>TESTVILLE</Town>
        <County>TESTSHIRE</County>
        <Postcode>TE1 STS</Postcode>
        <DayPhone>01234567890</DayPhone>
        <EvePhone>01234567890</EvePhone>
        <Email>test@test.com</Email>
        <DataProtection/>
        <CustInvReqd>N</CustInvReqd>
        <SecEmail/>
    </ClientDetails>
    <Pricing>
        <AmountPaid>120.00</AmountPaid>
        <AmountDue>0.00</AmountDue>
        <Refund/>
        <BasePrice>120.00</BasePrice>
    </Pricing>
    <CarDetails>
        <Registration>-</Registration>
        <Make>-</Make>
        <Model>-</Model>
        <Colour>-</Colour>
        <OutTerm>MUC</OutTerm>
        <RetTerm/>
        <OutFltNo/>
        <RetFltNo/>
        <Mobile/>
        <Pax>2</Pax>
        <OutFltTime/>
        <InFltTime/>
        <Ship/>
        <Pier/>
        <ChildSeat/>
        <AddlServices/>
        <ParkingDays/>
        <ParkingSpaces/>
        <CarArrTime>0030</CarArrTime>
        <CarDetFlags/>
        <CarDepTime>2330</CarDepTime>
    </CarDetails>
    <Room>
        <RoomCode>DZ</RoomCode>
        <Rooms>1</Rooms>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
    </Room>
    <CurrentSupplements/>
    <SepaEncashment/>
    <SepaID/>
    <CustRef/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <Email>test@test.com</Email>
            <System>ABG</System>
            <v>1</v>
            <lang>de</lang>
        </Request>
    </API_Header>
</API_Reply>
```
