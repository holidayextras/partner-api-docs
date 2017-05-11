---

---

# View Booking



## /booking/foo

where foo is the booking reference

e.g. http://api.holidayextras.co.uk/v1/booking/ABCDE

### Method

GET








### Parameters

 | Name       | Type   | Format      | Required | 
 | ----       | ----   | ------      | -------- | 
 | ABTANumber | String | [A-Z0-9]{5} | Y        | 
 | Password   | String | [A-Z0-9]{5} | N*       | 
 | Initials   | String | [A-Z]{3}    | N        | 
 | Email      | email  | Valid email | Y        | 
 | key        | String |             | Y        | 


This is a general request, is is therefore not product specific. So a booking of any type, i,e parking, hotel, lounge can be cancelled using the booking reference and the same request parameters it does not need to vary by product.

* Required for agents Agent bookings need not pass in the Email parameter.

### Request

```html
http://api.holidayextras.co.uk/v1/booking/ABCDE?Email=email@address.com&key=mytestkey
```

For European products please use
```html
http://api.holidayextras.co.uk/sandbox/v1/booking/BLBTS?key=mytestkey&ABTANumber=32877&Password=RADEN&System=ABG
```

delete sandbox to be directed to production



### Reply

```xml
<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="General" Customer="A" Session="999999999" RequestCode="7" Result="OK">
  <Agent>WT314</Agent>
  <Booking>
    <BookingRef>ABCDE</BookingRef>
    <AgentComm>0.10</AgentComm>
    <VATonComm>0.02</VATonComm>
    <Amendable>C</Amendable>
  </Booking>
  <Itinerary>
    <Product>Parking</Product>
    <ArrivalDate>2009-05-24</ArrivalDate>
    <DepartDate>2009-05-31</DepartDate>
    <ArrivalTime>1130</ArrivalTime>
    <DepartTime>1230</DepartTime>
    <Duration>8</Duration>
    <CarParkCode>LPX0</CarParkCode>
    <ValetParking>N</ValetParking>
    <CarPickupDate>2009-05-31</CarPickupDate>
    <CarDropoffTime>1130</CarDropoffTime>
    <CarPickupTime>1230</CarPickupTime>
    <ParkingSpaces>01</ParkingSpaces>
    <TerminalCode>....</TerminalCode>
    <NumberOfPax>1</NumberOfPax>
  </Itinerary>
  <CarDetails>
    <Registration>ABCDE 12F</Registration>
    <CarMake>Fiat</CarMake>
    <CarModel>126</CarModel>
    <CarColour>White</CarColour>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Address a="1">N/A</Address>
    <Town>N/A</Town>
    <County>N/A</County>
    <Postcode>CT21 4JF</Postcode>
    <DayPhone>01303222222</DayPhone>
    <Email>email@address.com</Email>
    <DataProtection>Y</DataProtection>
  </ClientDetails>
  <Pricing>
    <AmountPaid>1.50</AmountPaid>
    <TotalPrice>0.00</TotalPrice>
    <CCardSurchargeAmount>1.50</CCardSurchargeAmount>
  </Pricing>
  <API_Header>
    <Request>
      <Email>email@address.com</Email>
      <key>mytestkey</key>
    </Request>
  </API_Header>
</API_Reply>
```


### Fields Explained

Most of these should be self explanatory, just the values from the booking.

#### /Booking/Amendable

Possible values


*  Y - booking can be amended or cancelled

*  N - booking cannot be amended or cancelled (advance purchase product etc)

*  C - booking has been cancelled

*  S - Same day - booking is for arrival the same day so cannot be amended or cancelled

