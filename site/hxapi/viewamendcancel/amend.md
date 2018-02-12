---

---

# Amend Booking - no reprice

[API Docs](/hxapi/) > product:[amend](/hxapi/amend)

## Amend Booking Request - no reprice

This method works for bookings made for any product type using our API. We recommend using the [view booking](/hxapi/viewamendcancel/view) method first, to ensure that you have all the details required from the most up to date record of the booking.

### Method

POST

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```

### Request Parameters

NB: All parameter names are case sensitive.

For all amend booking requests, you will need to send these parameters:

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | --------- | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
 | Email | String | [0-9] 4 chars | Y        | Email address used to make the booking (i.e. the email address of the lead passenger)|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

In order to amend the booking with the new details, you only need to pass in the specific parameters you want to amend. For an amend no re-price, these are as follows:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| Title | String | [0-9] 4 chars | Y        | Title of lead passenger|
| Initial | String | [A-Z] 1 chars | Y        | Initial of lead passenger|
| Surname | String | [0-9] 20 chars | Y        | Surname of lead passenger|
| Address[] | String | [0-9] 20 chars | Y        | First line of address (house name / number and road) of lead passenger. NB: This field can be set to NA|
| Town | String | [0-9] 4 chars | Y        | Town of address. NB: This field can be set to NA|
| County | String | [0-9] 4 chars | Y        | County of address. NB: This field can be set to NA|
| PostCode | String | [0-9] 4 chars | Y        | Post code of address. NB: This field can be set to NA|
| DayPhone | Integer | [0-9] 15 chars max  | N                 | The customer's telephone number. |  
| Email | String | [0-9] 4 chars | Y        | The email address of customer. |

Your

#### For parking bookings:

You may change any of the car details, as indicated in the [car park availability response.](/hxapi/parking/av/carpark)

#### For hotel bookings:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| Adults | Integer       | [1-5] 1 char                           | Y                 | The number of adults occupying the room (subject to a minimum or maximum occupancy). |
| Children | Integer       | [0-4] 1 char                           | Y                 | The number of children occupying the room (subject to a minimum or maximum occupancy). |


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


---

---

# Amend Parking Booking















## /booking/foo

where foo is the booking reference

e.g. https://api.holidayextras.co.uk/v1/booking/ABCDE

You should typically do a view request before an amend. In this way you'll have the booking details to prepopulate fields for your user.



####  At present, the API only allows access to amend a car parking booking. This means that you will not be able to amend a hotel, hotel with car parking or lounge booking using the API.




## How to amend a booking

Amending a booking is a two stage process, made to the same endpoint but with different parameters and via different methods.


*  GET - Price check request - Optional. For changes which will affect the cost..

*  POST - Commit changes and charge or credit the card used to make the booking. Requires all other parameters shown below. As you can see there are a lot of parameters so it is best to use the values retrieved from a view request rather than ask the customer to fill them all in.

One way to implement this would be:

 1.  Present the user with the view of their booking details in a web form.
 2.  User edits whatever editable fields they need to change, then submits form.
 3.  If no fields which change the price are altered, application posts the whole form.
 4.  If any fields which alter the price have been changed, your application does a GET and presents the new price, asking the customer to confirm they're happy with the new price.
 5.  If user confirms the new price, post the entire form including non-price sensitive changes.


You could present the user with their changes before sending the HTTP request, giving them a chance to confirm or return to editing their booking again.







## Price alteration request

Some edits may alter the price. You must send a GET request to discern whether the price has changed and present this information to the customer, giving them the option to confirm or reject the new price. The fields which may affect price are:


*  ArrivalDate

*  ArrivalTime

*  DepartDate

*  DepartTime

*  NumberOfPax

This request does not affect the booking, no changes are confirmed at this point, you ought to make this clear to the customer.






### Parameters

 | Name         | Type   | Format           | Required |
 | ----         | ----   | ------           | -------- |
 | ArrivalDate  | Date   | YYYY-MM-DD       | Y        |
 | ArrivalTime  | Time   | HHSS             | Y        |
 | DepartDate   | Date   | YYYY-MM-DD       | Y        |
 | DepartTime   | Time   | HHSS             | Y        |
 | CarParkCode* | String | [A-Z]{3}[0-9]{1} | Y        |
 | NumberOfPax* | Int    | [0-9]            | Y        |
 | ABTANumber*  | String | [A-Z0-9]{5}      | Y        |
 | key          | String |                  | Y        |

* Required field, cannot be altered.




### Request

```html
https://api.holidayextras.co.uk/sandbox/booking/A8LUM?ArrivalDate=2009-02-10&ArrivalTime=1800&DepartDate=2009-02-20&DepartTime=2000&CarParkCode=MAN3&NumberOfPax=2&ABTANumber=FOO&key=mytestkey
```

add System=ABG for European products

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="13" Result="OK">
  <Pricing>
    <MinPricingDuration>1</MinPricingDuration>
    <Duration>11</Duration>
    <OriginalPrice>48.00</OriginalPrice>
    <NewPrice>52.80</NewPrice>
    <PriceDifference>4.80</PriceDifference>
  </Pricing>
  <API_Header>
    <Request>
      <ArrivalDate>2009-02-10</ArrivalDate>
      <ArrivalTime>1800</ArrivalTime>
      <DepartDate>2009-02-20</DepartDate>
      <DepartTime>2000</DepartTime>
      <NumberOfPax>2</NumberOfPax>
      <ABTANumber>FOO</ABTANumber>
      <key>mytestkey</key>
      <Code>MAN3</Code>
    </Request>
  </API_Header>
  <CarPark>
    <Code>MAN3</Code>
    <Name>Airparks Handforth Dean</Name>
    <Filter>
      <recommended>1</recommended>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
    <BookingURL>/sandbox/carpark/MAN3</BookingURL>
    <MoreInfoURL>/sandbox/product/MAN3</MoreInfoURL>
  </CarPark>
</API_Reply>
```








## Confirm amend

This request actually changes the details of the booking. It is a good idea to ask the customer to confirm the changes before making this request. Use the booking details retrieved from a request 7 to prepopulate the form.












### Parameters

 | Name         | Type        | Format           | Required |
 | ----         | ----        | ------           | -------- |
 | ArrivalDate  | Date        | YYYY-MM-DD       | Y        |
 | ArrivalTime  | Time        | HHSS             | Y        |
 | DepartDate   | Date        | YYYY-MM-DD       | Y        |
 | DepartTime   | Time        | HHSS             | Y        |
 | CarParkCode  | String      | [A-Z]{3}[0-9]{1} | Y        |
 | NumberOfPax  | Int         | [0-9]            | Y        |
 | ABTANumber   | String      | [A-Z0-9]{5}      | Y        |
 | Registration | String      |                  | N        |
 | CarMake      | String      |                  | N        |
 | CarModel     | String      |                  | N        |
 | CarColour    | String      |                  | N        |
 | Email        | Valid email |                  | Y        |
 | Title        | String      |                  | Y        |
 | Initial      | String      | [A-Z]{1}         | Y        |
 | Surname      | String      |                  | Y        |
 | Address[]    | String      |                  | Y        |
 | Town         | String      |                  | Y        |
 | County       | String      |                  | Y        |
 | PostCode     | String      |                  | Y        |
 | Confirmation | Char        | [Y,N]{1}         | Y*       |
 | key          | String      |                  | Y        |

* Determines whether customer will be sent a non-branded system email confirming changes. If you prefer, you can send 'N' and create your own email.

### Request

```
POST /booking/RSE3F HTTP/1.1
Host: api.holidayextras.co.uk
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 297

ABTANumber=FOO&Address%5B%5D=45%20Test%20Street&ArrivalDate=2009-04-16&ArrivalTime=1200&CarParkCode=LGV4&Confirmation=Y&County=Kent&DepartDate=2009-04-23&DepartTime=1500&Email=test%40test.com&Initial=B&NumberOfPax=3&PostCode=CT202TT&Surname=Test&Title=Mr&Town=Test&key=mytestkey

```



### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="14" Result="OK">
  <Booking>
    <BookingRef>A8LUM</BookingRef>
    <PdfUrl>/v1/confirmation?email=test%40holidayextras.com&amp;booking_ref=HPA8LUM&amp;product_type=carparks</PdfUrl>
  </Booking>
  <CarDetails>
    <Registration></Registration>
    <CarMake></CarMake>
    <CarModel></CarModel>
    <CarColour></CarColour>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Address a="1">Test Street</Address>
    <Email>BEN.THOMPSON@HOLIDAYEXTRAS.COM</Email>
    <DataProtection></DataProtection>
  </ClientDetails>
  <Pricing>
    <OriginalPrice>48.00</OriginalPrice>
    <NewPrice>52.80</NewPrice>
    <PriceDifference>N/A</PriceDifference>
  </Pricing>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <ArrivalDate>2009-02-10</ArrivalDate>
      <ArrivalTime>1800</ArrivalTime>
      <Confirmation>Y</Confirmation>
      <DepartDate>2009-02-20</DepartDate>
      <DepartTime>2000</DepartTime>
      <Initial>T</Initial>
      <NumberOfPax>2</NumberOfPax>
      <Surname>Test</Surname>
      <Title>Mr</Title>
      <key>mytestkey</key>
      <Email>ben.thompson@holidayextras.com</Email>
      <Code>MAN3</Code>
    </Request>
  </API_Header>
  <CarPark>
    <ArrivalDate>2009-02-10</ArrivalDate>
    <DepartDate>2009-02-20</DepartDate>
    <ArrivalTime>1800</ArrivalTime>
    <DepartTime>2000</DepartTime>
    <Duration>10</Duration>
    <NumberOfPax>2</NumberOfPax>
    <ReturnFlight></ReturnFlight>
    <Code>MAN3</Code>
    <Name>Airparks Handforth Dean</Name>
    <Filter>
      <recommended>1</recommended>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
    <BookingURL>/sandbox/carpark/MAN3</BookingURL>
    <MoreInfoURL>/sandbox/product/MAN3</MoreInfoURL>
  </CarPark>
</API_Reply>
```

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test%40holidayextras.com&booking_ref=HPA8LUM&product_type=carparks&ABTANumber=TESTG&Password=redacted&key=mytestkey
