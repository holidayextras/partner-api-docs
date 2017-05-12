---

---

# Hotel Availability

## /hotel/foo

where foo is the location (airport) code

e.g. http://api.holidayextras.co.uk/v1/hotel/LHR

or the hotel code

e.g. http://api.holidayextras.co.uk/v1/hotel/LHRHIL

### Method

GET

### Parameters

 | Name           | Type    | Format           | Required | Notes                                                                                                                                       | 
 | ----           | ----    | ------           | -------- | -----                                                                                                                                       | 
 | key            | String  |                  | Y        |                                                                                                                                             | 
 | token          | String  | [0-9]{9}         | Y        |                                                                                                                                             | 
 | ABTANumber     | String  | [A-Z0-9]{5}      | Y        |                                                                                                                                             | 
 | Password       | String  | [A-Z0-9]{5}      | N        | Password required for Agents                                                                                                                | 
 | Initials       | String  | [A-Z]{3}         | Y        |                                                                                                                                             | 
 | ArrivalDate    | Date    | YYYY-MM-DD       | Y        |                                                                                                                                             | 
 | DepartDate     | Date    | YYYY-MM-DD       | N        |                                                                                                                                             | 
 | FlightDate     | Date    | YYYY-MM-DD       | N        |                                                                                                                                             | 
 | Nights         | Integer | [1,2,3]          | Y        |                                                                                                                                             | 
 | RoomType       | String  | [A-Z]{1}[0-9]{2} | Y        | See [RoomCodes](/hxapi/types/roomcode) for a list of valid codes                                                                             | 
 | SecondRoomType | String  | [A-Z]{1}[0-9]{2} | N        | See [RoomCodes](/hxapi/types/roomcode) for a list of valid codes                                                                             | 
 | ParkingDays    | Integer | [0,8,15]         | N        |                                                                                                                                             | 
 | System         | Char    | [A-Z]{3}         | N        | Send ABG if looking for products based in Europe and prices in Euros                                                                        | 
 | lang           | Char    | [A-Z]{2}         | N        | Send either en,de,nl,fr,es,pt to return any particular product information is respective language; used only when passing in a fields array | 
 | Supplements    | String  | [Y/N]            | N        | Only for searches by hotel code - pass Y to retrieve a list of possible [upgrades](/hxapi/upgrade)                                  | 

### Request (one room)

```
http://api.holidayextras.co.uk/hotel/LGW?ABTANumber=FOO&Initials=BJT&key=mytestkey&token=999999999&ArrivalDate=2011-10-15&Nights=1&ParkingDays=8&RoomType=T20
```

Please use system=ABG to request European products

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK">
  <Hotel>
    <RequestFlags></RequestFlags>
    <Name>Russ Hill</Name>
    <Code>LGWRHP</Code>
    <BookingURL>/hotel/LGWRHP</BookingURL>
    <MoreInfoURL>/product/LGWRHP</MoreInfoURL>
    <Price>55.00</Price>
    <PriceWithSurcharge>56.50</PriceWithSurcharge>
    <RoomCode>TWN</RoomCode>
    <BoardBasis>RO</BoardBasis>
    <Adults>2</Adults>
    <Children>0</Children>
    <ParkingDays>8</ParkingDays>
  </Hotel>
  <Hotel>
    <RequestFlags>
      <Registration>1</Registration>
      <CarMake>1</CarMake>
      <CarModel>1</CarModel>
      <CarColour>1</CarColour>
      <CarDropoffTime>1</CarDropoffTime>
      <CarPickupTime>1</CarPickupTime>
      <ReturnFlight>1</ReturnFlight>
    </RequestFlags>
    <Name>Arora International Gatwick</Name>
    <Code>LGWARA</Code>
    <Filter>
      <car_park_assocLGV9>1</car_park_assocLGV9>
    </Filter>
    <BookingURL>/hotel/LGWARA</BookingURL>
    <MoreInfoURL>/product/LGWARA</MoreInfoURL>
    <CarPark>LGV9</CarPark>
    <Price>74.00</Price>
    <PriceWithSurcharge>75.50</PriceWithSurcharge>
    <RoomCode>TWN</RoomCode>
    <BoardBasis>RO</BoardBasis>
    <Adults>2</Adults>
    <Children>0</Children>
    <ParkingDays>8</ParkingDays>
  </Hotel>
  ...
  <Hotel>
    <RequestFlags></RequestFlags>
    <Name>Arora International Gatwick</Name>
    <Code>LGWARO</Code>
    <BookingURL>/hotel/LGWARO</BookingURL>
    <MoreInfoURL>/product/LGWARO</MoreInfoURL>
    <Price>99.00</Price>
    <PriceWithSurcharge>100.98</PriceWithSurcharge>
    <RoomCode>TWN</RoomCode>
    <BoardBasis>RO</BoardBasis>
    <Adults>2</Adults>
    <Children>0</Children>
    <ParkingDays>8</ParkingDays>
  </Hotel>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <Initials>BJT</Initials>
      <key>mytestkey</key>
      <token>999999999</token>
      <ArrivalDate>2009-10-15</ArrivalDate>
      <Nights>1</Nights>
      <ParkingDays>8</ParkingDays>
      <RoomType>T20</RoomType>
    </Request>
  </API_Header>
  <Pricing>
    <CCardSurchargePercent>2.00</CCardSurchargePercent>
    <CCardSurchargeMin>1.50</CCardSurchargeMin>
    <CCardSurchargeMax>4.00</CCardSurchargeMax>
    <DiscountType></DiscountType>
    <DiscountValue>0</DiscountValue>
    <WaiverValue>2.49</WaiverValue>
  </Pricing>
</API_Reply>
```

### Request (two rooms)

only for UK

```html
http://api.holidayextras.co.uk/hotel/LGW?ABTANumber=FOO&Initials=BJT&key=mytestkey&token=999999999&ArrivalDate=2011-10-15&Nights=1&ParkingDays=8&RoomType=T20&SecondRoomType=D20
```

### Reply (two rooms)

only for UK

```xml
<?xml version="1.0" ?>
<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK">
  <Hotel>
    <Code>LGWSOP</Code>
    <Name>Sofitel London Gatwick</Name>
    <Filter>
      <car_park_assocLGV9>1</car_park_assocLGV9>
    </Filter>
    <single_car_only>1</single_car_only>
    <car_park_assoc>LGV9</car_park_assoc>
    <BookingURL>/hotel/LGWSOP/preview</BookingURL>
    <MoreInfoURL>/product/LGWSOP/preview</MoreInfoURL>
    <RequestFlags></RequestFlags>
    <CarPark>LGV9</CarPark>
    <Price>342.00</Price>
    <PriceWithSurcharge>346.00</PriceWithSurcharge>
    <RoomCode>TWN</RoomCode>
    <BoardBasis>RO</BoardBasis>
    <Adults>4</Adults>
    <Children>0</Children>
    <ParkingDays>8</ParkingDays>
    <FirstRoomAdults>2</FirstRoomAdults>
    <FirstRoomChildren>0</FirstRoomChildren>
    <SecondRoomCode>DBL</SecondRoomCode>
    <SecondRoomAdults>2</SecondRoomAdults>
    <SecondRoomChildren>0</SecondRoomChildren>
  </Hotel>
  ...
  <Hotel>
    <Code>LGWLFH</Code>
    <Name>Little Foxes Hotel</Name>
    <Filter>
      <car_park_assocLGV9>1</car_park_assocLGV9>
    </Filter>
    <car_park_assoc>LGV9</car_park_assoc>
    <BookingURL>/hotel/LGWLFH</BookingURL>
    <MoreInfoURL>/product/LGWLFH</MoreInfoURL>
    <RequestFlags></RequestFlags>
    <CarPark>LGV9</CarPark>
    <Price>218.00</Price>
    <PriceWithSurcharge>222.00</PriceWithSurcharge>
    <RoomCode>TWN</RoomCode>
    <BoardBasis>RO</BoardBasis>
    <Adults>4</Adults>
    <Children>0</Children>
    <ParkingDays>8</ParkingDays>
    <FirstRoomAdults>2</FirstRoomAdults>
    <FirstRoomChildren>0</FirstRoomChildren>
    <SecondRoomCode>DBL</SecondRoomCode>
    <SecondRoomAdults>2</SecondRoomAdults>
    <SecondRoomChildren>0</SecondRoomChildren>
  </Hotel>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <ArrivalDate>2011-10-15</ArrivalDate>
      <Initials>BJT</Initials>
      <Nights>1</Nights>
      <ParkingDays>8</ParkingDays>
      <RoomType>T20</RoomType>
      <SecondRoomType>D20</SecondRoomType>
      <key>mytestkey</key>
      <token>999999999</token>
    </Request>
  </API_Header>
  <Pricing>
    <CCardSurchargePercent>2.00</CCardSurchargePercent>
    <CCardSurchargeMin>1.50</CCardSurchargeMin>
    <CCardSurchargeMax>4.00</CCardSurchargeMax>
    <DiscountType></DiscountType>
    <DiscountValue>0</DiscountValue>
    <WaiverValue>2.49</WaiverValue>
  </Pricing>
</API_Reply>
```

### Fields Explained

#### Two rooms

The additional fields SecondRoomCode, SecondRoomAdults, FirstRoomAdults, SecondRoomChildren and FirstRoomChildren are returned if the search is for two rooms. The Adults and Children fields contain the total number of Adults & Children across both rooms.

#### Hotel/RequestFlags

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

#### Hotel/Filter

A filter mechanism to identify different types of products which is used on the Holiday Extras site. We suggest you ignore this. If filtering of products by type, we suggest using the fields=field_a,field_b,field_c mechanism to return fields you are interested in.

#### Hotel/ParkingDays

Returns the value sent in. Or if not set then valid values returned vary depending on the hotel packages available, values such as 0,4, 8 and 15 will be returned(as specified in table above).

#### Hotel/BoardBasis

Returns board basis for given hotel. Each hotel code is restricted to one BoardBasis.


*  RO - Room only

*  BB - Continental buffet breakfast

*  BD - Breakfast & dinner

*  BG - Breakfast to go

*  CB - Continental breakfast

*  DR - Dinner

*  EB - English breakfast

*  SB - Scottish breakfast

#### Hotel/BookingURL

The URL to POST to to book this product.

#### Hotel/MoreInfoURL

Link to the product library information for this product.

#### Pricing/CreditCardSurcharge

Only relevant for intermediaries, agents levy their own fees. This element should be ignored by agents.

Comprises of 3 elements

*  CCardSurchargePercent

*  CCardSurchargeMin

*  CCardSurchargeMax

The credit card surcharge IS applied to the TotalPrice + the Cancellation Waiver (see below). To prevent the surcharge from exceeding certain boundaries, we have min and max thresholds. If the amount does not come between those two figures, you should use the relevant threshold value.

Pseudo code
```
x = ((TotalPrice + CanxWaiver) / 100 ) * CCardSurchargePercent
if( x < CCardSurchargeMin) 
  x = CCardSurchargeMin
else if x > CCardSurchargeMax
  x = CCardSurchargeMax
```


#### API_Header/Request

**HXAPI** returns every parameter you sent in the previous request, as you sent it. This is so your app doesn't have to remember anything not replied in the XML reply.


