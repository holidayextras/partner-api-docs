---

---

## Hotel Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/hotel/<locationCode>
```

For example, for London Heathrow the endpoint is:

```
https://api.holidayextras.co.uk/v1/hotel/LHR
```

If you know the specific hotel code, then you can request availability by entering that into the endpoint. For example, for the Hilton at London Heathrow the endpoint is:

```
https://api.holidayextras.co.uk/v1/hotel/LHRHIL
```

To find the airport locations available for hotels, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | Y*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        | Date customer arrives at hotel. |
 | Nights      | Integer  | 1, 2, 3, etc                                  | Y        | Number of nights the customer wants to stay in the hotel. NB: For European products it is only possible to book one night stays.|
 | RoomType      | String  | [A-Z0-9] 2 chars | Y        | See [RoomCodes](/hxapi/types/roomcode) for a list of valid codes. |
 | SecondRoomType        | String  | [A-Z0-9] 2 chars | N*        | NB: This feature is only available in the UK. <br>This parameter is mandatory if the customer wishes to book two rooms at the same time. <br>The room codes are as per RoomType. |
 | ParkingDays       | Integer  | [0-9] 2 chars | Y        | NB: The maximum duration accepted for ParkingDays is 30.|
 | System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
 | lang        | String  | [A-Z] 2 chars | Y*       | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)|


## Hotel Availability Response

For a detailed explanation of the fields returned, please see below:

 | Field                | Additional Information |
 |----------------------|------------------------|
 | Hotel/BookingURL | The URL to POST the booking request to for this particular product. |
 | Hotel/MoreInfoURL | The link to more information about this product, sourced from the Product Library. |
 | Hotel/RequestFlags |  These flags list which details the car park operator requires from the customer. If a flag is returned with a ‘Y’ your application should send the corresponding field/value in the booking request. <br>Flags are only returned when required. The flags which can be returned are: `Registration`, `CarMake`, `CarModel`, `CarColour`, `OutFlight`, `ReturnFlight`, `OutTerminal`, `ReturnTerminal`, `Destination`, `MobileNum` |
 | Hotel/Price | The price of product without any surcharges/fees added.|
 | Hotel/PriceWithSurcharge | *NB: Please ignore this field - we no longer accept new agents sending payment details via our API.* |
 | Hotel/Adults* | The maximum number of adults included in the room occupancy. |
 | Hotel/Children* | The maximum number of children included in the room occupancy. |
 | Hotel/RoomCode | *NB: Please ignore this field as it relates to internal systems.* |
 | Hotel/BoardBasis | *NB: Please ignore this field as it is no longer used and will be deprecated in future versions of the API.* |
 | Hotel/ParkingDays | This returns the number of days parking available. <br>NB: This may differ from the value requested, due to parking packages usually being set up in the system as either 4, 8 or 15 days. |
 | Hotel/CarPark | If your request included car parking, this is the car park code. |
 | Hotel/Filter | *NB: Please ignore this field as it is for internal use only.* |
 | API_Header/Request | The API returns every parameter and value you sent in the previous request.  |

 \* Where two rooms have been requested, these fields represent the total of adults and children across all rooms. Additional fields will show the individual room occupancy:  `FirstRoomAdults`, `FirstRoomChildren`, `SecondRoomAdults` and `SecondRoomChildren`.

## Key Information on Hotels

Please read this section through carefully, as it contains useful information about restrictions on how hotels must be sold.

### Advance purchase

Advance purchase products are non-refundable and non-cancellable. As a result, Cancellation Waiver must *not* be sold to customers purchasing a product with `advance_purchase` set to 1.

### Day Use Only

There is a field in the product library for hotels, named `day_use_only`. Day use products must not be sold to customers wishing to have an overnight stay where `day_use_only` is set to 1.


### Parking Includes Arrival

In order to establish whether the package includes parking for the night of the hotel stay the `parking_includes_arrival` field needs to be taken into account.

Where this field is set to 0, this means the night of the hotel stay is not included as there is free overnight parking. Parking stay will start from the following day. Where it is set to 1, this means that parking starts from the date the customer checks into the hotel.

### Mystery / Un-named Products

There are some hotels in which the name field will not provide the name of the hotel e.g `<Name>Mystery 4-star hotel</Name>`.  The name of these hotels should not be provided to the customer until the booking is made, along with other identifying details such as address, hotel images, restaurant names etc.

## Worked Examples

Below are worked examples of both the requests and responses for hotel availability.

### UK Hotel Availability Request - Room Only (zero days parking)

```
https://api.holidayextras.co.uk/v1/hotel/LHR?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&Nights=1&RoomType=T21&ParkingDays=0
```

### UK Hotel Availability Response - Room Only (zero days parking)

NB: This is a shortened example compiled from a full availability response.

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK" cached="1" expires="2017-07-09 18:48:46">
    <Hotel>
        <Name>Mercure</Name>
        <Code>LHRMEA</Code>
        <BookingURL>/v1/hotel/HPLHRMEA</BookingURL>
        <MoreInfoURL>/v1/product/LHRMEA</MoreInfoURL>
        <RequestFlags>
            <ParkingIncludesArrival>1</ParkingIncludesArrival>
        </RequestFlags>
        <Price>45.00</Price>
        <PriceWithSurcharge>45.90</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>1</Children>
        <RoomCode>TRL</RoomCode>
        <BoardBasis>RO</BoardBasis>
        <ParkingDays>0</ParkingDays>
        <NonDiscPrice>45.00</NonDiscPrice>
        <parking_includes_arrival>1</parking_includes_arrival>
        <noncancellable_nonrefundable>1</noncancellable_nonrefundable>
        <advance_purchase>1</advance_purchase>
    </Hotel>
    <Hotel>
        <Name>Thistle T5</Name>
        <Code>LHRPAA</Code>
        <BookingURL>/v1/hotel/HPLHRPAA</BookingURL>
        <MoreInfoURL>/v1/product/LHRPAA</MoreInfoURL>
        <RequestFlags/>
        <Price>85.50</Price>
        <PriceWithSurcharge>87.21</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>1</Children>
        <RoomCode>TRL</RoomCode>
        <BoardBasis>RO</BoardBasis>
        <ParkingDays>0</ParkingDays>
        <NonDiscPrice>85.50</NonDiscPrice>
        <noncancellable_nonrefundable>1</noncancellable_nonrefundable>
        <Filter>
            <day_use_only>0</day_use_only>
        </Filter>
        <advance_purchase>1</advance_purchase>
    </Hotel>
    <Hotel>
        <Name>Hilton T5</Name>
        <Code>LHRHLT</Code>
        <BookingURL>/v1/hotel/HPLHRHLT</BookingURL>
        <MoreInfoURL>/v1/product/LHRHLT</MoreInfoURL>
        <RequestFlags>
            <CarDropoffTime>1</CarDropoffTime>
            <CarPickupTime>1</CarPickupTime>
            <Registration>1</Registration>
        </RequestFlags>
        <Price>99.00</Price>
        <PriceWithSurcharge>100.98</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>1</Children>
        <RoomCode>TRL</RoomCode>
        <BoardBasis>RO</BoardBasis>
        <ParkingDays>0</ParkingDays>
        <NonDiscPrice>99.00</NonDiscPrice>
    </Hotel>
    <Pricing>
        <CCardSurchargePercent>2.00</CCardSurchargePercent>
        <CCardSurchargeMin>0.00</CCardSurchargeMin>
        <CCardSurchargeMax>4.00</CCardSurchargeMax>
        <DCardSurchargePercent>0.00</DCardSurchargePercent>
        <DCardSurchargeMin>0.00</DCardSurchargeMin>
        <DCardSurchargeMax>0.00</DCardSurchargeMax>
        <WaiverValue>2.99</WaiverValue>
    </Pricing>
    <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <Nights>1</Nights>
            <RoomType>T21</RoomType>
            <ParkingDays>0</ParkingDays>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### UK Hotel Availability Request - Room with Parking

```
https://api.holidayextras.co.uk/v1/hotel/LHR?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&Nights=1&RoomType=T21&ParkingDays=8
```

### UK Hotel Availability Response - Room with Parking

NB: This is a shortened example compiled from a full availability response.

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK" cached="1" expires="2017-07-09 18:55:56">
    <Hotel>
        <Name>Mercure with Purple Parking Meet and Greet</Name>
        <Code>LHRMPU</Code>
        <BookingURL>/v1/hotel/HPLHRMPU</BookingURL>
        <MoreInfoURL>/v1/product/LHRMPU</MoreInfoURL>
        <RequestFlags>
            <CarColour>1</CarColour>
            <CarDropoffTime>1</CarDropoffTime>
            <CarMake>1</CarMake>
            <CarModel>1</CarModel>
            <CarPickupTime>1</CarPickupTime>
            <Registration>1</Registration>
            <ReturnFlight>1</ReturnFlight>
        </RequestFlags>
        <Price>129.00</Price>
        <PriceWithSurcharge>131.58</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>1</Children>
        <RoomCode>TRL</RoomCode>
        <BoardBasis>RO</BoardBasis>
        <ParkingDays>8</ParkingDays>
        <NonDiscPrice>129.00</NonDiscPrice>
        <CarPark>LHR5</CarPark>
        <car_park_assoc>LHR5</car_park_assoc>
        <Filter>
            <car_park_assoc>1</car_park_assoc>
        </Filter>
    </Hotel>
    <Hotel>
        <Name>Thistle T5 with parking at the hotel and breakfast</Name>
        <Code>LHRPAT</Code>
        <BookingURL>/v1/hotel/HPLHRPAT</BookingURL>
        <MoreInfoURL>/v1/product/LHRPAT</MoreInfoURL>
        <RequestFlags/>
        <Price>130.00</Price>
        <PriceWithSurcharge>132.60</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>1</Children>
        <RoomCode>TRL</RoomCode>
        <BoardBasis>RO</BoardBasis>
        <ParkingDays>8</ParkingDays>
        <NonDiscPrice>130.00</NonDiscPrice>
        <Filter>
            <hotel_arrival_parking_ppts>1</hotel_arrival_parking_ppts>
            <hotel_return_parking_ppts>1</hotel_return_parking_ppts>
            <day_use_only>0</day_use_only>
        </Filter>
    </Hotel>
    <Hotel>
       <Name>Sheraton Skyline with parking at the hotel</Name>
       <Code>LHRSKA</Code>
       <BookingURL>/v1/hotel/HPLHRSKA</BookingURL>
       <MoreInfoURL>/v1/product/LHRSKA</MoreInfoURL>
       <RequestFlags/>
       <Price>134.00</Price>
       <PriceWithSurcharge>136.68</PriceWithSurcharge>
       <Adults>2</Adults>
       <Children>1</Children>
       <RoomCode>TRL</RoomCode>
       <BoardBasis>RO</BoardBasis>
       <ParkingDays>8</ParkingDays>
       <NonDiscPrice>134.00</NonDiscPrice>
       <Filter>
           <day_use_only>0</day_use_only>
       </Filter>
   </Hotel>
   <Pricing>
        <CCardSurchargePercent>2.00</CCardSurchargePercent>
        <CCardSurchargeMin>0.00</CCardSurchargeMin>
        <CCardSurchargeMax>4.00</CCardSurchargeMax>
        <DCardSurchargePercent>0.00</DCardSurchargePercent>
        <DCardSurchargeMin>0.00</DCardSurchargeMin>
        <DCardSurchargeMax>0.00</DCardSurchargeMax>
        <WaiverValue>2.99</WaiverValue>
    </Pricing>
    <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <Nights>1</Nights>
            <RoomType>T21</RoomType>
            <ParkingDays>8</ParkingDays>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### European Hotel Availability Request - Room with Parking

```
https://api.holidayextras.co.uk/v1/hotel/MUC?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&Nights=1&RoomType=D20&ParkingDays=8&System=ABG&lang=de
```

### European Hotel Availability Response - Room with Parking

NB: This is a shortened example compiled from a full availability response.

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK" cached="1" expires="2017-07-09 18:59:17">
    <Hotel>
        <Name>Schweigers Landgasthof</Name>
        <Code>MUCLAN</Code>
        <BookingURL>/v1/hotel/FRMUCLAN</BookingURL>
        <MoreInfoURL>/v1/product/MUCLAN</MoreInfoURL>
        <RequestFlags/>
        <Price>120.00</Price>
        <PriceWithSurcharge>NaN</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>0</Children>
        <RoomCode>DZ</RoomCode>
        <BoardBasis>F</BoardBasis>
        <ParkingDays>15</ParkingDays>
        <NonDiscPrice>120.00</NonDiscPrice>
    </Hotel>
    <Hotel>
        <Name>Airporthotel Regent</Name>
        <Code>MUCREG</Code>
        <BookingURL>/v1/hotel/FRMUCREG</BookingURL>
        <MoreInfoURL>/v1/product/MUCREG</MoreInfoURL>
        <RequestFlags/>
        <Price>97.00</Price>
        <PriceWithSurcharge>NaN</PriceWithSurcharge>
        <Adults>2</Adults>
        <Children>0</Children>
        <RoomCode>DZ</RoomCode>
        <BoardBasis>F</BoardBasis>
        <ParkingDays>15</ParkingDays>
        <NonDiscPrice>97.00</NonDiscPrice>
    </Hotel>
    <Hotel>
          <Name>NH München Airport</Name>
          <Code>MUCAST</Code>
          <BookingURL>/v1/hotel/FRMUCAST</BookingURL>
          <MoreInfoURL>/v1/product/MUCAST</MoreInfoURL>
          <RequestFlags/>
          <Price>113.00</Price>
          <PriceWithSurcharge>NaN</PriceWithSurcharge>
          <Adults>2</Adults>
          <Children>0</Children>
          <RoomCode>DZ</RoomCode>
          <BoardBasis>U</BoardBasis>
          <ParkingDays>8</ParkingDays>
          <NonDiscPrice>113.00</NonDiscPrice>
    </Hotel>
    <Pricing>
        <CCardSurchargePercent>0.00</CCardSurchargePercent>
        <CCardSurchargeMin>0.00</CCardSurchargeMin>
        <CCardSurchargeMax>0.00</CCardSurchargeMax>
    </Pricing>
    <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>TESTG</ABTANumber>
            <Password>Redacted</Password>
            <key>mytestkey</key>
            <token>generate</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <Nights>1</Nights>
            <RoomType>D20</RoomType>
            <ParkingDays>8</ParkingDays>
            <System>ABG</System>
            <lang>de</lang>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>   
```
