---

---

# Amend Hotel Booking

## /booking/foo

where foo is the booking reference

e.g. http://api.holidayextras.co.uk/v1/booking/ABCDE

You should typically do a view request before an amend. In this way you'll have the booking details to prepopulate fields for your user.



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

ArrivalDate:2016-11-21

ParkingDays:8

RoomCode[]:DBL

Rooms:1

Adults:2

Children:0

Infants:0

This request does not affect the booking, no changes are confirmed at this point, you ought to make this clear to the customer.


### Parameters

 | Name           | Type   | Format             | Example    | Required
 | ----           | ----   | ------             | -------    | --------
 | ABTANumber     | String | [A-Z][0-9]{5}      | your agent | Y        | 
 | key            | String | [A-Z]{3}[0-9]      | mytestkey  | Y        | 
 | System         | String | [A-Z]{3}           | ABG        | Y*       | 
 | Password       | String | [A-Z]{5}           | PASSWORD   | Y        | 
 | Nights         | Int    | [0-9]              | 1          | Y        | 
 | HotelCode      | String | [A-Z]{6}           | FRAMAX     | Y        | 
 | ArrivalDate    | Date   | YYYY-MM-DD         | 2016-11-21 | Y        | 
 | ParkingDays    | Int    | [0-9]              | 8          | Y        | 
 | ParkingSpaces  | Int    | 1                  | 1          | Y        | 
 | BoardBasis     | String | [A-Z]{2}           | RO         | Y        | 
 | RoomCode[]     | String | [A-Z]{2-3}         | DBL        | Y        | 
 | TerminalCode   | String | [A-Z][0-9]{2}      | S or 1     | N        | 
 | ReturnFlight   | String | [A-Z]{2-3}[0-9]{3} | ABC123     | N        | 
 | Rooms          | Int    | [0-9]              | 1          | Y        | 
 | Adults         | Int    | [0-9]              | 2          | Y        | 
 | Children       | Int    | [0-9]              | 0          | Y        | 
 | Infants        | Int    | [0-9]              | 0          | Y        | 
 | Title          | String | [A-Z]              | Mr         | Y        | 
 | Initial        | String | [A-Z]              | T          | Y        | 
 | Surname        | String | [A-Z]              | Test       | Y        | 
 | NonSmoking     | String | [A-Z]{1}           | Y          | Y        | 
 | CarPickupDate  | Date   | YYYY-MM-DD         | 2016-11-19 | Y+       | 
 | CarPickupTime  | Time   | HHII               | 1200       | Y+       | 
 | CarDropOffTime | Time   | HHII               | 1200       | Y+       | 
 | ParkStart      | Date   | YYYY-MM-DD         | 2016-11-19 | Y+       | 
 | token          | String | [A-Z]              | generate   | Y        | 

* Only required if your need European based products - pass in System=ABG
+ Required for Hotels with Parking



### Request

```html
http://api.holidayextras.co.uk/booking/{REF}?ABTANumber=AGENT&key=mytestkey&Password=Password&Nights=1&HotelCode=FRAMAX&ArrivalDate=20Nov16&ParkingDays=8&ParkingSpaces=1&RoomCode[]=DZ&Rooms=1&Adults=2&Children=0&Infants=0
```

add System=ABG for European products

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="Hotel" RequestCode="13" Result="OK">
    <Itinerary>
        <ArrivalDate>2016-11-20</ArrivalDate>
        <Nights>1</Nights>
        <BoardBasis>U</BoardBasis>
        <Code>FRAMAX</Code>
    </Itinerary>
    <Room>
        <Rooms>1</Rooms>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Price>89.00</Price>
        <Code>DZ</Code>
    </Room>
    <Pricing>
        <OriginalPrice>109.00</OriginalPrice>
        <NewPrice>89.00</NewPrice>
        <PriceDifference>20.00-</PriceDifference>
    </Pricing>
</API_Reply>
```








## Confirm amend

This request actually changes the details of the booking. It is a good idea to ask the customer to confirm the changes before making this request. Use the booking details retrieved from a request 7 to prepopulate the form.












### Parameters

 | Name           | Type   | Format             | Example    | Required | 
 | ----           | ----   | ------             | -------    | -------- | 
 | ABTANumber     | String | [A-Z][0-9]{5}      | your agent | Y        | 
 | key            | String | [A-Z]{3}[0-9]      | mytestkey  | Y        | 
 | System         | String | [A-Z]{3}           | ABG        | Y*       | 
 | Password       | String | [A-Z]{5}           | PASSWORD   | Y        | 
 | Nights         | Int    | [0-9]              | 1          | Y        | 
 | HotelCode      | String | [A-Z]{6}           | FRAMAX     | Y        | 
 | ArrivalDate    | Date   | YYYY-MM-DD         | 2016-11-21 | Y        | 
 | ParkingDays    | Int    | [0-9]              | 8          | Y        | 
 | ParkingSpaces  | Int    | 1                  | 1          | Y        | 
 | BoardBasis     | String | [A-Z]{2}           | RO         | Y        | 
 | RoomCode[]     | String | [A-Z]{2-3}         | DBL        | Y        | 
 | TerminalCode   | String | [A-Z][0-9]{2}      | S or 1     | N        | 
 | ReturnFlight   | String | [A-Z]{2-3}[0-9]{3} | ABC123     | N        | 
 | Rooms          | Int    | [0-9]              | 1          | Y        | 
 | Adults         | Int    | [0-9]              | 2          | Y        | 
 | Children       | Int    | [0-9]              | 0          | Y        | 
 | Infants        | Int    | [0-9]              | 0          | Y        | 
 | Title          | String | [A-Z]              | Mr         | Y        | 
 | Initial        | String | [A-Z]              | T          | Y        | 
 | Surname        | String | [A-Z]              | Test       | Y        | 
 | NonSmoking     | String | [A-Z]{1}           | Y          | Y        | 
 | CarPickupDate  | Date   | YYYY-MM-DD         | 2016-11-19 | Y+       | 
 | CarPickupTime  | Time   | HHII               | 1200       | Y+       | 
 | CarDropOffTime | Time   | HHII               | 1200       | Y+       | 
 | ParkStart      | Date   | YYYY-MM-DD         | 2016-11-19 | Y+       | 
 | token          | String | [A-Z]              | generate   | Y        | 

* Only required if you need European based products - pass in System=ABG
+ Required for Hotels with Parking only

### Request

```
POST /booking/{REF} HTTP/1.1
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

ABTANumber:AGENT
key:mytestkey
Password:PASSWORD
Nights:1
HotelCode:FRAMAX
ArrivalDate:2016-11-19
ParkingDays:8
ParkingSpaces:1
BoardBasis:U
RoomCode[]:DBL
TerminalCode:
ReturnFlight:
Rooms:1
Adults:2
Children:0
Infants:0
Title:Herr
Initial:T
Surname:Test
NonSmoking:Y
CarPickupDate:2016-11-28
CarPickupTime:1200
CarDropOffTime:1200
ParkStart:2016-11-19
token:generate

```



### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="Hotel" RequestCode="14" Result="OK">
    <Booking>
        <BookingRef>FBGCR</BookingRef>
        <AgentComm>8.47</AgentComm>
        <VATonComm>1.35</VATonComm>
        <RETURNFLIGHT></RETURNFLIGHT>
        <BOOKNO>FBGCR</BOOKNO>
    </Booking>
    <Itinerary>
        <ArrivalDate>2016-11-19</ArrivalDate>
        <Nights>1</Nights>
        <BoardBasis>U</BoardBasis>
        <NonSmoking></NonSmoking>
        <CarPickupDate>2016-11-28</CarPickupDate>
        <CarDropoffTime>1200</CarDropoffTime>
        <ParkingDays>8</ParkingDays>
        <ParkingSpaces>1</ParkingSpaces>
        <Remarks></Remarks>
        <Code>FRAMAX</Code>
    </Itinerary>
    <Room>
        <Rooms>1</Rooms>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Code>DZ</Code>
    </Room>
    <ClientDetails>
        <Title>HERR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Fax>Y</Fax>
    </ClientDetails>
    <Pricing>
        <OriginalPrice>109.00</OriginalPrice>
        <NewPrice>89.00</NewPrice>
        <PriceDifference>-20.00</PriceDifference>
    </Pricing>
    
</API_Reply>
```

