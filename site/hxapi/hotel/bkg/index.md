---

---

# Hotel Booking Request

## Method

POST

## Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/hotel/locationCode
```

For example, for _Mercure at London Heathrow_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA
```

## Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | --------- | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        | Date customer arrives at hotel. |
 | Nights | Integer  | 1, 2, 3, etc                                  | Y        | Number of nights the customer wants to stay in the hotel. NB: For European products it is only possible to book one night stays. |
 | RoomCode      | String  | [A-Z0-9] 2 chars | Y        | See [RoomCodes](/hxapi/types/roomcode) for a list of valid codes. |
 | Adults | Integer       | [1-5] 1 char                           | Y                 | The number of adults occupying the room. |
 | Children | Integer       | [0-4] 1 char                           | Y                 | The number of children occupying the room. |
 | ParkingDays       | Integer  | [0-9] 2 chars | Y        | NB: The maximum duration accepted for ParkingDays is 30.|
| Title | String | [0-9] 4 chars | Y        | Title of lead passenger|
| Initial | String | [A-Z] 1 chars | Y        | Initial of lead passenger|
| Surname | String | [0-9] 20 chars | Y        | Surname of lead passenger|
| Address[] | String | [0-9] 20 chars | Y        | First line of address (house name / number and road) of lead passenger. If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on. NB: This field can be set to NA|
| Town | String | [0-9] 4 chars | Y        | Town of address. NB: This field can be set to NA|
| County | String | [0-9] 4 chars | Y        | County of address. NB: This field can be set to NA|
| PostCode | String | [0-9] 4 chars | Y        | Post code of address. NB: This field can be set to NA|
| DayPhone | Integer | [0-9] 15 chars max  | N                 | The customer's telephone number. |  
| Email | String | [0-9] 4 chars | Y        | The email address of customer. |
| CustomerRef | String | [0-9A-Z]| N | Enter your Customer Reference to help match bookings for accounting purposes. |
| Remarks | String | [0-9A-Z] | N | Pass in Remarks for notification such as COT REQUESTED in ROOM |
| Waiver | Boolean | [0,1]  | Y | Defaults to 0 if not supplied. |
| DataProtection | String | [Y,N] | N | Does the customer consent to receiving offers from Holiday Extras? Y = Yes, will receive offers, N = No, customer data is protected. Defaults to No if not supplied. |                   
| PriceCheckFlag | String | [Y] | Y | Indicates a price check will be carried out prior to booking. If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price.|                     
| PriceCheckPrice | Float | [0-9] | Y        | Price of the product, received from the availability request or price check. |
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
| lang        | String  | [A-Z] 2 chars | Y*       | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)|

## Multiple rooms on same booking

Currently, we can only accept a maximum of 2 rooms per booking. If the customer needs more, you will need to make multiple requests. If an intermediary account, you should note that this would lead to multiple transactions on the credit card, and multiple charges, and therefore we advise against it.

The additional parameters for including a second room are:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ------------ | ------------- | -------- | ---------------------- |
| SecondRoomType        | String  | [A-Z0-9] 2 chars | N*        | This parameter is mandatory if the customer wishes to book two rooms at the same time. The room codes are as per [Room Codes](/hxapi/types/roomcode). |
| SecondRoomCode        | String        | [Room Codes](/hxapi/types/roomcode) | N                 | NB: Please note that the room codes differ between availability and booking requests. |
| SecondRoomAdults      | Integer       | [1-5] 1 char | N | The number of adults occupying the second room. |
| SecondRoomChildren    | Integer       | [0-4] 1 char | N | The number of children occupying the second room. |

## UK Hotels with parking

The additional parameters for hotel with parking (where parking > 0 days) are:

| Name        | Data Type    | Format | Mandatory? |
| ----        | ----    | --------- | -------- |
| CarDropoffDate        | Date   | YYYY-MM-DD    | Y  |
| CarDropoffTime        | Time   | HHMM    | Y  |
| CarPickupDate         | Date   | YYYY-MM-DD | Y  |
| CarPickupTime         | Time   | HHMM    | Y  |
| ReturnFlight          | String | [0-9A-Z] 10 chars | N |
| TerminalCode          | String | [0-9A-Z] 3 chars  | N |
| Registration          | String | [0-9A-Z] 10 chars | N |
| CarMake               | String | [0-9A-Z] 15 chars | N |
| CarModel              | String | [0-9A-Z] 15 chars | N |
| CarColour             | String | [A-Z] 15 chars    | N |

## Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

## Booking Terms and Conditions

It is important that the customer has access to the Terms and Conditions at the time of placing their booking and after. We highly recommend that these are made clear to the customer _before_ booking. 

For European products, please use the following link:

```
http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
```

If you require translations of Terms and Conditions into other languages, you can simply change ``/de-hx/`` (German) into ``nl-hx`` (Dutch), ``it-hex`` (Italian), ``pt-hx`` (Portuguese), ``fr-hx`` (French), ``es-hx`` (Spanish) or ``en-hx`` (English).


# Hotel Booking Response

The hotel booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. NB: Our booking references are 5 char alphanumeric (including 1/I and 0/O/Q).|
| Booking/AgentComm  | Commission you have earned from this booking. |
| Itinerary | This section confirms details of the hotel on the booking. |
| Room | This section confirms details of the room booked at the hotel. |
| ClientDetails  | Confirmation of the customer's details that were sent in the booking request. |
| Pricing |  Confirmation of the price paid by the customer for the hotel room. |
| API_Header/Request  | A list of parameters that were sent in the booking request. |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response. 

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

# Worked Examples

Below are worked examples of both the request and response for booking hotels.

## UK Hotel Booking Request - Room Only

```
https://api.holidayextras.co.uk/v1/hotel/LHRMEA
```

```xml
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <key>YourKey</key>        
      <token>YourToken</token>
      <ArrivalDate>2017-12-01</ArrivalDate>        
      <Nights>1</Nights>
      <RoomCode>DBL</RoomCode>
      <ParkingDays>0</ParkingDays>
      <Adults>2</Adults>
      <Children>0</Children>
      <Title>Mr</Title>
      <Initial>T</Initial>
      <Surname>TEST</Surname>
      <Address >1 Test Street</Address >
      <Town>Testville</Town>
      <County>Testshire</County>
      <Postcode>TE1 STS</Postcode>
      <DayPhone>01234567890</DayPhone>
      <Email>test@test.com</Email>
      <DataProtection>N</DataProtection>
      <PriceCheckFlag>Y</PriceCheckFlag>
      <PriceCheckPrice>55.00</PriceCheckPrice>
      <v>1</v>
    </Request>
```

## UK Hotel Booking Response - Room Only

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="5" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <AgentComm>6.53</AgentComm>
        <VATonComm>0.00</VATonComm>
        <MoreInfoURL>/v1/booking/YourBookingRef</MoreInfoURL>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=HPABCDE&amp;product_type=hotels</PdfUrl>
    </Booking>
    <Hotel/>
    <Itinerary>
        <TotalPrice>55.00</TotalPrice>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <Nights>1</Nights>
        <BoardBasis>RO</BoardBasis>
        <NonSmoking>N</NonSmoking>
        <ReturnFlight/>
        <TerminalCode/>
        <Code>LHRMEA</Code>
        <Name>Mercure</Name>
        <ParkingDays>0</ParkingDays>
        <ParkingSpaces>0</ParkingSpaces>
    </Itinerary>
    <Room>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Code>DBL</Code>
    </Room>
    <CarDetails>
        <Registration/>
        <CarMake/>
        <CarModel/>
        <CarColour/>
    </CarDetails>
    <ClientDetails>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Email>test@test.com</Email>
        <Address/>
        <Town/>
        <County/>
        <Postcode/>
        <EvePhone/>
    </ClientDetails>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <Nights>1</Nights>
            <RoomCode>DBL</RoomCode>
            <ParkingDays>0</ParkingDays>
            <Adults>2</Adults>
            <Children>0</Children>
            <Title>Mr</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address >1 Test Street</Address >
            <Town>Testville</Town>
            <County>Testshire</County>
            <Postcode>TE1 STS</Postcode>
            <DayPhone>01234567890</DayPhone>
            <Email>test@test.com</Email>
            <DataProtection>N</DataProtection>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>55.00</PriceCheckPrice>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test%40holidayextras.com&booking_ref=HPABCDE&product_type=hotels&ABTANumber=WT314&Password=redacted&key=mytestkey

## European Hotel Booking Request

```
https://api.holidayextras.co.uk/v1/hotel/MUCLAN
```

```xml
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <key>YourKey</key>        
      <token>YourToken</token>
      <ArrivalDate>2017-12-01</ArrivalDate>        
      <Nights>1</Nights>
      <RoomCode>DZ</RoomCode>
      <ParkingDays>0</ParkingDays>
      <Adults>2</Adults>
      <Children>0</Children>
      <Title>Mr</Title>
      <Initial>T</Initial>
      <Surname>TEST</Surname>
      <Address >1 Test Street</Address >
      <Town>Testville</Town>
      <County>Testshire</County>
      <Postcode>TE1 STS</Postcode>
      <DayPhone>01234567890</DayPhone>
      <Email>test@test.com</Email>
      <DataProtection>N</DataProtection>
      <PriceCheckFlag>Y</PriceCheckFlag>
      <PriceCheckPrice>120.00</PriceCheckPrice>
      <v>1</v>
    </Request>
```

## European Hotel Booking Response

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="4" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <MoreInfoURL>/v1/booking/YourBookingRef.de</MoreInfoURL>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=FRABCDE&amp;product_type=hotels</PdfUrl>
    </Booking>
    <Hotel/>
    <Itinerary>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <Nights>1</Nights>
        <BoardBasis>F</BoardBasis>
        <NonSmoking>N</NonSmoking>
        <ParkingDays>0</ParkingDays>
        <ParkingSpaces>0</ParkingSpaces>
        <Code>MUCLAN</Code>
        <Name>Schweigers Landgasthof</Name>
    </Itinerary>
    <Room>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Code>DZ</Code>
    </Room>
    <ClientDetails>
        <Title>Herr</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Email>TEST@TEST.COM</Email>
        <Town>TESTVILLE</Town>
        <Postcode>TE1 STS</Postcode>
        <DayPhone>01234567890</DayPhone>
        <Remarks/>
        <Address0>1 Test Street</Address0>
        <Address1>TBC</Address1>
        <DataProtection>N</DataProtection>
        <County>TESTSHIRE</County>
    </ClientDetails>
    <Pricing>
        <Price>120.00</Price>
    </Pricing>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <Nights>1</Nights>
            <RoomCode>DBL</RoomCode>
            <ParkingDays>0</ParkingDays>
            <Adults>2</Adults>
            <Children>0</Children>
            <Title>Mr</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address0>1 Test Street</Address0>
            <Town>Testville</Town>
            <County>Testshire</County>
            <Postcode>TE1 STS</Postcode>
            <DayPhone>01234567890</DayPhone>
            <Email>test@test.com</Email>
            <DataProtection>N</DataProtection>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>120.00</PriceCheckPrice>
            <System>ABG</System>
            <lang>de</lang>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test%40holidayextras.com&booking_ref=FRABCDE&product_type=hotels&ABTANumber=WT314&Password=redacted&key=mytestkey
