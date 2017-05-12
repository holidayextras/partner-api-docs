---

---

# German Booking Search

## Simple search, with Start booking reference




## /booking/foo

where foo is the Start booking reference


e.g. http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/10051848







## The PaymentOutstanding Element

This element is to be used to indicate the amount left payable, by the customer, if Direktinkasso is chosen. It is the **full amount** of the booking. It should not be confused with what the agent is due to pay HX if the customer does not pay Direktinkasso.

If the booking has been paid in full, PaymentOutstanding = 0.00.

If PaymentOutstanding reaches a negative figure, something has gone wrong. Your application must ensure that the correct value is taken at point of payment, this is not currently enforced by HXAPI.







### Parameters

 | Name          | Type   | Format   | Required | 
 | ----          | ----   | ------   | -------- | 
 | StartCustomer | String | [0-9]{6} | Y        | 
 | BusinessUnit  | String | [0-9]{3} | Y        | 
 | Operator      | String | [A-Z]{3} | Y        | 
 | StartDate     | Date   |          | N        | 
 | EndDate       | Date   |          | N*       | 
 | PartyName     | String |          | N        | 
 | Location      | String |          | N        | 
 | Product       | String |          | N        | 
 | key           | String |          | Y        | 
 | token         | String | [0-9]{9} | Y        | 

* EndDate parameter is required IF StartDate has a value.

### Request

```html
http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/10213905?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=mytestkey
```

















### Response

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="11" Result="OK">
  <BookingRef>DZN40</BookingRef>
  <StartRef>10213905</StartRef>
  <BookingDate>25FEB10</BookingDate>
  <Status>OK</Status>
  <BookingTime>10:15</BookingTime>
  <StartDate>21APR10</StartDate>
  <EndDate>27APR10</EndDate>
  <Adults>2</Adults>
  <Children>0</Children>
  <Infants>0</Infants>
  <TotalPrice>30.00</TotalPrice>
  <PaymentOutstanding>0.00</PaymentOutstanding>
  <AgentName>Test German Agent</AgentName>
  <Strasse s="1">Strasse 1</Strasse>
  <Strasse s="2">Strasse 2</Strasse>
  <PLZ>12345</PLZ>
  <Ort>Ort (Town)</Ort>
  <SiteCode>FRA9</SiteCode>
  <CarPickUpDate></CarPickUpDate>
  <ParkingDays>7</ParkingDays>
  <Pax p="1">
    <Title>MR</Title>
    <Initial>T</Initial>
    <LastName>THOMPSON</LastName>
    <Age></Age>
  </Pax>
  <Pax p="2">
    <Title></Title>
    <Initial></Initial>
    <LastName></LastName>
    <Age></Age>
  </Pax>
  <Confirmation c="1"></Confirmation>
  <API_Header>
    <Request>
      <StartCustomer>111111</StartCustomer>
      <BusinessUnit>222</BusinessUnit>
      <Operator>BJT</Operator>
      <key>foo</key>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark></CarPark>
</API_Reply>

```

## Simple search, with no booking reference







### Request

```
http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=mytestkey
```






### Response

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="11" Result="OK">
  <BookingRef>DZN41</BookingRef>
  <StartRef>10213906</StartRef>
  <BookingDate>25FEB10</BookingDate>
  <Status>OK</Status>
  <BookingTime>10:15</BookingTime>
  <StartDate>23APR10</StartDate>
  <EndDate>28APR10</EndDate>
  <Adults>2</Adults>
  <Children>0</Children>
  <Infants>0</Infants>
  <TotalPrice>30.00</TotalPrice>
  <PaymentOutstanding>30.00</PaymentOutstanding>
  <AgentName>Test German Agent</AgentName>
  <Strasse s="1">Strasse 1</Strasse>
  <Strasse s="2">Strasse 2</Strasse>
  <PLZ>12345</PLZ>
  <Ort>Ort (Town)</Ort>
  <SiteCode>FRA9</SiteCode>
  <CarPickUpDate></CarPickUpDate>
  <ParkingDays>6</ParkingDays>
  <Pax p="1">
    <Title>MR</Title>
    <Initial>T</Initial>
    <LastName>THOMPSON</LastName>
    <Age></Age>
  </Pax>
  <Pax p="2">
    <Title></Title>
    <Initial></Initial>
    <LastName></LastName>
    <Age></Age>
  </Pax>
  <Confirmation c="1"></Confirmation>
  <API_Header>
    <Request>
      <StartCustomer>111111</StartCustomer>
      <BusinessUnit>222</BusinessUnit>
      <Operator>BJT</Operator>
      <key>foo</key>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark></CarPark>
</API_Reply>
```







## Multi parameter searches, with no booking reference






### Date range

ZNT -> API
```
http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/?StartCustomer=111111&BusinessUnit=222&Operator=BJT&StartDate=01Jun09&EndDate=01Mar10&key=mytestkey
```

API -> Chauntry
```xml
<API_Request System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" RequestCode="11" Session="111222333">                                                                                                  <Agent>                                                                         
	<StartCustomer>111111</StartCustomer>                                           
	<BusinessUnit>222</BusinessUnit>                                                
	<Operator>JMB</Operator>                                                        
</Agent>                                                                        
<Itinerary>                                                                     
	<StartRef></StartRef>
        <StartDate>01JUN09</StartDate>
        <EndDate>01APR10</EndDate>
</Itinerary>                                                                    
</API_Request>
```

CHAUNTRY -> API
```xml
<?xml version="1.0"?>
<API_Reply System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" Session="111222333" RequestCode="11" Result="OK">
  <Booking b="1">
    <BookingRef>T5828</BookingRef>
    <StartRef>10051763</StartRef>
    <BookingDate>12MAY09</BookingDate>
    <StayDate>01AUG09</StayDate>
    <LeadName>Mr  TTesr</LeadName>
  </Booking>
  <Booking b="2">
    <BookingRef>T5829</BookingRef>
    <StartRef>10051764</StartRef>
    <BookingDate>12MAY09</BookingDate>
    <StayDate>01AUG09</StayDate>
    <LeadName>Mr  TTest</LeadName>
  </Booking>
.
.
.
</API_Reply>

```


API -> ZNT
```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="11" Result="OK">
  <Booking>
    <BookingRef>T5828</BookingRef>
    <StartRef>10051763</StartRef>
    <BookingDate>090512</BookingDate>
    <StayDate>090801</StayDate>
    <LeadName>Mr  TTesr</LeadName>
  </Booking>
  <Booking>
    <BookingRef>T5829</BookingRef>
    <StartRef>10051764</StartRef>
    <BookingDate>090512</BookingDate>
    <StayDate>090801</StayDate>
    <LeadName>Mr  TTest</LeadName>
  </Booking>
.
.
.
</API_Reply>
```







### All params

When performing this search, please pass StartDate and EndDate. If none are entered by the customer, use the default values below:


*  StartDate: -2 years

*  EndDate: +2 years

This search will return up to 100 results, in the order of booking eg oldest first. If more recent bookings are required please adjust the date range.

znt -> api
```
http://api.holidayextras.co.uk/de-start/sandbox/v1/booking/?StartCustomer=111111&BusinessUnit=222&Operator=BJT&StartDate=23JUN09&EndDate=23MAR10&PartyName=TEST&Product=HotelWithParking&Location=DUS6&key=mytestkey
```

api -> chauntry
```xml
<API_Request System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" RequestCode="11" Session="111222333">
<Agent>
	<StartCustomer>111111</StartCustomer>
	<BusinessUnit>222</BusinessUnit>
	<Operator>JMB</Operator>
</Agent>
<Itinerary>
	<StartRef></StartRef>                                                           
	<StartDate>23Dec09</StartDate>
	<EndDate>23Mar10</EndDate>
	<PartyName>Test</PartyName>
	<Location>DUSDOR</Location>
	<Product>HotelWithParking</Product>
</Itinerary>
</API_Request>
```

chauntry -> api
```xml
<?xml version="1.0"?>
<API_Reply System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" Session="111222333" RequestCode="11" Result="OK">
  <Booking b="1">
    <BookingRef>T6361</BookingRef>
    <StartRef>10051848</StartRef>
    <BookingDate>091214</BookingDate>
    <StayDate>091223</StayDate>
    <LeadName>HERRTTEST</LeadName>
  </Booking>
.
.
.
  <Booking b="26">
    <BookingRef>T6497</BookingRef>
    <StartRef>10051926</StartRef>
    <BookingDate>100126</BookingDate>
    <StayDate>100301</StayDate>
    <LeadName>MR  TTEST</LeadName>
  </Booking>
</API_Reply>

```

api -> ZNT
```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="11" Result="OK">
  <Booking>
    <BookingRef>T6361</BookingRef>
    <StartRef>10051848</StartRef>
    <BookingDate>091214</BookingDate>
    <StayDate>091223</StayDate>
    <LeadName>HERRTTEST</LeadName>
  </Booking>
.
.
.
  <Booking>
    <BookingRef>T6497</BookingRef>
    <StartRef>10051926</StartRef>
    <BookingDate>100126</BookingDate>
    <StayDate>100301</StayDate>
    <LeadName>MR  TTEST</LeadName>
  </Booking>
</API_Reply>
```



