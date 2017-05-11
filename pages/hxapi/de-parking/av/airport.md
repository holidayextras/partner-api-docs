---

---

# Availability At Airport








## /carpark/foo

where foo is the location (airport) code

e.g. http://api.holidayextras.co.uk/de-start/v1/carpark/FRA

### Method

GET
















### Parameters

 | Name          | Type    | Format     | Required | 
 | ----          | ----    | ------     | -------- | 
 | StartCustomer | String  | [0-9]{6}   | Y        | 
 | BusinessUnit  | String  | [0-9]{3}   | Y        | 
 | Operator      | String  | [A-Z]{3}   | Y        | 
 | ArrivalDate   | Date    | YYYY-MM-DD | Y        | 
 | ArrivalTime   | Time    | HHSS       | Y        | 
 | DepartDate    | Date    | YYYY-MM-DD | Y        | 
 | DepartTime    | Time    | HHSS       | Y        | 
 | NumberOfPax   | Integer |            | N        | 
 | filter        | String  | [A-Z]      | N§      | 
 | key           | String  |            | Y        | 
 | token         | String  | [0-9]{9}   | Y        | 

* Password only required for agent requests. If sending this you should make your availability requests over https.

§ Pass in filter=on_airport or filter=recommended or filter=meet_and_greet to only show car parks meeting those criteria. You can filter by any field that comes back in the filter section of the xml.

[Example form](http://api.holidayextras.co.uk/form/carpark1?key=mytestkey)




### Request

```html
http://api.holidayextras.co.uk/de-start/sandbox/v1/carpark/FRA?StartCustomer=111111&BusinessUnit=222&Initials=BJT&ArrivalDate=2010-02-20&ArrivalTime=1200&DepartDate=2010-02-27&DepartTime=1400&NumberOfPax=2&key=mytestkey&token=000001234
```














### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK">
  <CarPark c="1">
    <CarDetails>N</CarDetails>
    <TotalPrice>160.00</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <Name>Airparks Parkhaus Frankfurt - Winterspecial</Name>
    <Code>FRA2</Code>
    <Filter>
      <recommended>1</recommended>
    </Filter>
    <BookingURL>/sandbox/carpark/FRA2</BookingURL>
    <MoreInfoURL>/sandbox/product/FRA2</MoreInfoURL>
  </CarPark>
  <API_Header>
    <Request>
      <StartCustomer>111111</StartCustomer>
      <BusinessUnit>222</BusinessUnit>
      <Initials>BJT</Initials>
      <ArrivalDate>2010-02-20</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2010-02-27</DepartDate>
      <DepartTime>1400</DepartTime>
      <NumberOfPax>2</NumberOfPax>
      <key>mytestkey</key>
      <token>000001234</token>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
</API_Reply>

```























### Fields Explained

#### CarPark/TotalPrice

The price of product **WITHOUT** any surcharges/fees added.

#### CarPark/RequestFlags

Flags listing which details the car park operator requires from the customer. If a flag is returned with a 'Y' your application should send the corresponding field/value in the booking request. These are not compulsory, the booking should still be made without these details, but it greatly reduces administrative work if they are completed. Flags are only returned when positive, if a field is not required the field will not be returned.

The flags which can be returned are:


*  Registration

*  CarMake

*  CarModel

*  CarColour

*  OutFlight

*  ReturnFlight

*  OutTerminal

*  ReturnTerminal

*  Destination

*  MobileNum

#### CarPark/Filter

We have a filter mechanism on our site, to show only meet and greet products etc. The filters that apply to a product are returned here. Possible values are:


*  meet_and_greet

*  recommended

*  on_airport

*  terminal

*  valet_included

*  car_parked_for_you


#### CarPark/BookingURL

The URL to go to book this product.

#### CarPark/MoreInfoURL

Link to the product library information for this product.


#### API_Header/Request

**HXAPI** returns every parameter you sent in the previous request, as you sent it. This is so your app doesn't have to remember anything not replied in the XML reply.



