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

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | --------- | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
 | Email | String | [0-9] 4 chars | Y        | Email address used to make the booking (i.e. the email address of the lead passenger)|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

## View Booking Response

The view booking response will return all of the details against that booking record in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are 5 char alphanumeric (including 1/I and 0/O/Q).|
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
| API_Header/Request  | A list of parameters that were sent in the view booking request. |

## Worked Examples

Below are worked examples of both the request and response for view a booking.

### UK Products View Booking Request (for a car park)

```html
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&Email=test@test.com
```

### UK Products View Booking Response (for a car park)

```xml
<?xml version="1.0"?>
<API_Reply System="ABC" Version="1.0" Product="General" Customer="A" Session="703010076" RequestCode="7" Result="OK">
    <Agent>YourABTA</Agent>
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <Amendable>Y</Amendable>
        <CanxDate/>
        <CCode/>
        <BasketRef/>
        <AgentComm>4.49</AgentComm>
        <VATonComm>0.00</VATonComm>
        <Brand>HX</Brand>
        <Domain/>
        <Lang/>
        <Platform/>
        <FraudBooking/>
        <SupplierReference/>
        <Cancellable/>
        <BookingDate>2018-02-09</BookingDate>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=YourBookingRef&amp;product_type=carparks</PdfUrl>
    </Booking>
    <Itinerary>
        <Product>Parking</Product>
        <ArrivalDate>2018-12-01</ArrivalDate>
        <LastAmendDate/>
        <Remarks/>
        <FlightNum>EZY8985</FlightNum>
        <ArrivalTime>1200</ArrivalTime>
        <Location>MAN</Location>
        <ReturnDate/>
        <CarDropoffTime>1200</CarDropoffTime>
        <CarPickupDate>2018-12-08</CarPickupDate>
        <CarPickupTime>1200</CarPickupTime>
        <ParkingDays/>
        <ParkingSpaces>01</ParkingSpaces>
        <ReturnFlight>EZY8982</ReturnFlight>
        <TerminalCode>N</TerminalCode>
        <CarParkCode>MAR1</CarParkCode>
        <DepartDate>2018-12-08</DepartDate>
        <DepartTime>1200</DepartTime>
        <Duration>8</Duration>
        <NumberOfPax>1</NumberOfPax>
        <ValetParking>N</ValetParking>
        <PPTS/>
        <ParkStart/>
        <ParkTo/>
        <Code>MAR1</Code>
        <Name>APH</Name>
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
        <Postcode/>
        <DayPhone>01234567890</DayPhone>
        <EvePhone>01234567890</EvePhone>
        <Email>test@test.com</Email>
        <DataProtection/>
        <HistoryText/>
        <SourceRef/>
    </ClientDetails>
    <Pricing>
        <AmountPaid>35.92</AmountPaid>
        <AmountDue>0.00</AmountDue>
        <TotalPrice>35.92</TotalPrice>
        <CCardSurchargeAmount>0.00</CCardSurchargeAmount>
        <BasePrice>35.92</BasePrice>
        <Refund/>
        <GrossPrice>35.92</GrossPrice>
        <Currency>GBP</Currency>
    </Pricing>
    <VAT>
        <BKgexcVAT>29.93</BKgexcVAT>
        <CWexcVAT>0.00</CWexcVAT>
        <CCexcVAT>0.00</CCexcVAT>
        <BkgExemptVAT>0.00</BkgExemptVAT>
        <Nettotal>29.93</Nettotal>
        <VATAMT>5.99</VATAMT>
        <GrossTotal>35.92</GrossTotal>
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
        <Registration>TE17 STS</Registration>
        <CarMake>RANGE ROVER</CarMake>
        <CarModel>EVOQUE</CarModel>
        <CarColour>WHITE</CarColour>
        <OutFlight>EZY8985</OutFlight>
        <OutTerminal>N</OutTerminal>
        <RetTerminal>N</RetTerminal>
        <Mobile>01234567890</Mobile>
        <Destination>MUNICH</Destination>
    </CarDetails>
    <CurrentSupplements/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <Email>test@test.com</Email>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### European Products View Booking Request (for a hotel room only)

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&Email=test@test.com&System=ABG
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
            <token>YourToken</token>
            <Email>test@test.com</Email>
            <System>ABG</System>
            <v>1</v>
            <lang>de</lang>
        </Request>
    </API_Header>
</API_Reply>
```
