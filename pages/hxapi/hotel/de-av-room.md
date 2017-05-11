---

---

# German Hotel Room Availability



## /hotel/foo

where foo is the specific hotel code

e.g. http://api.holidayextras.co.uk/v1/de-start/hotel/FRAAST

### Method

GET







### Parameters

 | Name          | Type   | Format      | Required | 
 | ----          | ----   | ------      | -------- | 
 | StartCustomer | String | [0-9]{6}    | Y        | 
 | BusinessUnit  | String | [0-9]{3}    | Y        | 
 | Operator      | String | [A-Z]{3}    | Y        | 
 | ArrivalDate   | Date   | YYYY-MM-DD  | Y        | 
 | ParkingDays   | Int    | [0,8,15,22] | Y        | 
 | key           | String |             | Y        | 
 | token         | String | [0-9]{9}    | Y        | 




#### RoomType codes

In the response to this request, the RoomType values change to the variety used for actual bookings. 
Permissible room types are:


*  EZ - Single room

*  DZ - Double room

*  ZZ - Twin room

*  TZ - Triple room

*  VZ - Quad / family room


For bookings, you should send these codes.

#### Rooms

This will normally contain an integer, except for cases where the room is only available on request. In this instance, you will see...

```xml
<Rooms>R</Rooms>
```










### Request

```html
http://api.holidayextras.co.uk/de-start/sandbox/v1/hotel/FRAAST?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=foo&ArrivalDate=15Mar10&token=123456789&ParkingDays=8
```


api -> chauntry
```xml
<?xml version="1.0" ?>
<API_Request System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" RequestCode="2" Session="123456789">
  <Agent>
    <StartCustomer>111111</StartCustomer>
    <BusinessUnit>222</BusinessUnit>
    <Operator>JMB</Operator>
  </Agent>
  <Itinerary>
    <ArrivalDate>15Mar10</ArrivalDate>
    <HotelCode>FRAAST</HotelCode>
    <ParkingDays>8</ParkingDays>
  </Itinerary>
</API_Request>
```
























### Reply

**Please note** - this reply currently shows BoardBasis varying per room type. When the data on live is copied to our dev environmet, this will be corrected, all rooms at a single hotel will share a common, single board basis.

```xml

<?xml version="1.0" ?>

<API_Reply Product="HotelWithParking" RequestCode="2" Result="OK">
  <Hotel>
    <NonSmokingRooms>N</NonSmokingRooms>
    <TerminalDetail>
      <TerminalCode>1</TerminalCode>
      <TerminalName>Terminal 1</TerminalName>
    </TerminalDetail>
    <Code>FRAAST</Code>
    <BookingURL>/sandbox/hotel/FRAAST</BookingURL>
    <MoreInfoURL>/sandbox/product/FRAAST</MoreInfoURL>
  </Hotel>
  <Room>
    <Rooms>9</Rooms>
    <BoardBasis>F</BoardBasis>
    <Price>102.00</Price>
    <Code>DZ</Code>
  </Room>
  <Room>
    <Rooms>9</Rooms>
    <BoardBasis>F</BoardBasis>
    <Price>102.00</Price>
    <Code>EZ</Code>
  </Room>
  <Room>
    <Rooms>9</Rooms>
    <BoardBasis>F</BoardBasis>
    <Price>120.00</Price>
    <Code>TZ</Code>
  </Room>
  <Room>
    <Rooms>9</Rooms>
    <BoardBasis>F</BoardBasis>
    <Price>102.00</Price>
    <Code>VZ</Code>
  </Room>
  <Room>
    <Rooms>9</Rooms>
    <BoardBasis>F</BoardBasis>
    <Price>102.00</Price>
    <Code>ZZ</Code>
  </Room>
  <RequestFlags>
    <Registration>N</Registration>
    <CarMake>N</CarMake>
    <CarModel>N</CarModel>
    <CarColour>N</CarColour>
    <CarPickupDate>2010-02-15</CarPickupDate>
    <CarDropoffTime>N</CarDropoffTime>
    <CarPickupTime>N</CarPickupTime>
    <CreditCard>N</CreditCard>
    <ReturnFlight>N</ReturnFlight>
    <Terminal>N</Terminal>
  </RequestFlags>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <Password>TESTA</Password>
      <Initials>BJT</Initials>
      <key>foo</key>
      <ArrivalDate>2010-03-15</ArrivalDate>
      <token>123456789</token>
      <ParkingDays>1</ParkingDays>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <Pricing>
    <WaiverValue></WaiverValue>
  </Pricing>
</API_Reply>

```

#### Rooms

The value in the Rooms node will be either


*  number - signifying how many rooms are available

*  R - signifying that the room type is available only on request.

#### BoardBasis codes

The valid values for the BoardBasis element are:


*  F - with breakfast (equivalent to **UF** in Start)

*  U - without breakfast



