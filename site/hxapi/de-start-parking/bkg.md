---

---

# Make booking at car park

This must be a POST, as you are making a booking. It must be made over HTTPS, you must enforce this.

## /carpark/foo

where foo is the carpark code

e.g. /carpark/FRA2

### Method

POST




### Parameters

 | Name          | Data Type | Format     | Required | 
 | ----          | --------- | ------     | -------- | 
 | StartCustomer | String    | [0-9]{6}   | Y        | 
 | BusinessUnit  | String    | [0-9]{3}   | Y        | 
 | Operator      | String    | [A-Z]{3}   | Y        | 
 | ArrivalDate   | Date      | YYYY-MM-DD | Y        | 
 | ArrivalTime   | Time      | HHMM       | Y        | 
 | DepartDate    | Date      | YYYY-MM-DD | Y        | 
 | DepartTime    | Time      | HHMM       | Y        | 
 | Registration  | String    |            | N §     | 
 | CarMake       | String    |            | N §     | 
 | CarModel      | String    |            | N §     | 
 | CarColour     | String    |            | N §     | 
 | Title         | String    |            | Y        | 
 | Initial       | String    | [A-Z]{1}   | Y        | 
 | Surname       | String    |            | Y        | 
 | NumberOfPax   | Number    |            | Y        | 
 | Remarks       | String    |            | N        | 
 | key           | String    |            | Y        | 
 | token         | String    | [0-9]{9}   | Y        | 

§ The fields required by the carpark are returned in the availability request, in the `<RequestFlags>` element.










### Request


You will need to turn this into a POST (Firefox / UrlParams / Get -> Post) to make a booking, or use CURL.

znt -> api
```html
http://api.holidayextras.co.uk/de-start/sandbox/v1/carpark/FRA8?StartCustomer=111111&ArrivalDate=2010-10-19&ArrivalTime=1200&DepartDate=2010-10-27&DepartTime=1400&Initial=T&Operator=BJT&NumberOfPax=2&BusinessUnit=222&Registration=CP54JOV&Surname=Thompson&Title=Mr&key=foo&token=123456789
```



api -> chauntry
```xml

<API_Request System="ABG" Version="1.0" Product="CarPark" Customer="A" RequestCode="5" Session="123456789">
  <Agent>
    <StartCustomer>111111</StartCustomer>
    <BusinessUnit>222</BusinessUnit>
    <Operator>BJT</Operator>
  </Agent>
  <Itinerary>
    <ArrivalDate>19Oct10</ArrivalDate>
    <DepartDate>27Oct10</DepartDate>
    <ArrivalTime>1200</ArrivalTime>
    <DepartTime>1400</DepartTime>
    <Duration>8.0833333333333</Duration>
    <CarParkCode>FRA8</CarParkCode>
    <NumberOfPax>2</NumberOfPax>
    <ReturnFlight></ReturnFlight>
  </Itinerary>
  <CarDetails>
    <Registration>CP54JOV</Registration>
  </CarDetails>
  <ClientDetails>
    <Title>Mr</Title>
    <Initial>T</Initial>
    <Surname>Thompson</Surname>
    <Town></Town>
    <County></County>
    <PostCode></PostCode>
    <DayPhone></DayPhone>
    <EvePhone></EvePhone>
    <Email></Email>
    <Secemail></Secemail>
    <Remarks>carpark test</Remarks>
    <CustomerRef>N/A</CustomerRef>
  </ClientDetails>
</API_Request>


```









### Reply

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="5" Result="OK">
  <Booking>
    <BookingRef>DZM89</BookingRef>
    <AgentComm>5.47-</AgentComm>
    <VATonComm>0.87-</VATonComm>
    <StartRef>10213858</StartRef>
  </Booking>
  <CarDetails>
    <Registration>CP54JOV</Registration>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>THOMPSON</Surname>
    <CustomerRef>N/A</CustomerRef>
    <Remarks>CARPARK TEST</Remarks>
  </ClientDetails>
  <API_Header>
    <Request>
      <ArrivalDate>2010-10-19</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <BusinessUnit>222</BusinessUnit>
      <DepartDate>2010-10-27</DepartDate>
      <DepartTime>1400</DepartTime>
      <Initial>T</Initial>
      <NumberOfPax>2</NumberOfPax>
      <Operator>BJT</Operator>
      <Registration>CP54JOV</Registration>
      <Remarks>carpark test</Remarks>
      <StartCustomer>111111</StartCustomer>
      <Surname>Thompson</Surname>
      <Title>Mr</Title>
      <key>foo</key>
      <token>123456789</token>
      <debug>1</debug>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark>
    <ArrivalDate>19OCT10</ArrivalDate>
    <DepartDate>27OCT10</DepartDate>
    <ArrivalTime>1200</ArrivalTime>
    <DepartTime>1400</DepartTime>
    <Duration>8</Duration>
    <NumberOfPax>2</NumberOfPax>
    <Code>FRA8</Code>
    <BookingURL>/api/sandbox/carpark/FRA8/debug</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRA8/debug</MoreInfoURL>
  </CarPark>
</API_Reply>


```



### Fields Explained

#### API_Header/Request/DataProtection

Indicates whether customer has opted to receive Holiday Extras offers.

Y = opted OUT ie data is protected
N = opted IN

#### Booking/MoreInfoURL

In this context a link to view the booking details.

#### CarPark/MoreInfoURL

Product library information about the car park.

#### Booking/AgentComm

The amount of commission earned on the booking.

#### Booking/VATonComm

VAT payable on the commission.


