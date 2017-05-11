---

---

# German Hotel Availability




## /hotel/foo

where foo is the location (airport) code

e.g. http://api.holidayextras.co.uk/v1/de-start/hotel/FRA



### Method

GET























### Parameters

 | Name          | Type    | Format                  | Required | 
 | ----          | ----    | ------                  | -------- | 
 | StartCustomer | String  | [0-9]{6}                | Y        | 
 | BusinessUnit  | String  | [0-9]{3}                | Y        | 
 | Operator      | String  | [A-Z]{3}                | Y        | 
 | ArrivalDate   | Date    | YYYY-MM-DD              | Y        | 
 | Nights        | Integer | [1,2,3]                 | Y        | 
 | Filter        | String  | 'onrequest' or 'upsell' | N        | 
 | RoomType      | String  | see below               | N        | 
 | key           | String  |                         | Y        | 
 | token         | String  | [0-9]{9}                | Y        | 



#### Filter

onrequest - pass this to remove any hotels only available on request.

upsell - pass this to only return the hotel required for the upsell (for display with parking availability).

If you need to use multiple filters, they can be comma separated eg filter=x,y,z . This is not currently appliable because of the filters we have, but thinking ahead.

#### RoomType codes

If RoomType is not sent, will default to D20 - 1x double room
For availability requests the room types are:


*  S10 : Single - 1 Adult

*  T20 : Twin - 2 Adults

*  D20 : Double - 2 Adults

*  T21 : Triple - 2 Adults 1 Child

*  T12 : Triple - 1 Adult 2 Children

*  T30 : Triple - 3 Adults

*  F22 : Family - 2 Adults 2 Children

*  F31 : Family - 3 Adults 1 Child

*  F13 : Family - 1 Adult 3 Children

*  F40 : Family - 4 Adults 0 Children

For bookings, you should send back the code returned in the reply. The format of room codes changes between searches for availability and making a booking. 













### Request

```html
http://api.holidayextras.co.uk/de-start/sandbox/v1/hotel/FRA?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=mytestkey&token=999999999&ArrivalDate=2010-10-15&Nights=1&RoomType=D20&key=foo
```























### Reply

```xml
<?xml version="1.0" ?>

<API_Reply Product="HotelWithParking" RequestCode="21" Result="OK">
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>

          <RoomPrice>67.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>81.00</RoomPrice>
        </Price>
        <Code>DZ</Code>

      </Room>
    </RoomType>
    <Name>ACHAT Hotel Airport Frankfurt</Name>
    <Code>FRAACH</Code>
    <BookingURL>/api/sandbox/hotel/FRAACH</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAACH</MoreInfoURL>
  </Hotel>

  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>95.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>95.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Mercure Wings Frankfurt Apt</Name>
    <Code>FRAMER</Code>
    <BookingURL>/api/sandbox/hotel/FRAMER</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAMER</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>62.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>99.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Steigenberger Htl.Langen</Name>
    <Code>FRAMAX</Code>
    <BookingURL>/api/sandbox/hotel/FRAMAX</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAMAX</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>120.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>130.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Mercure Htl. Frankfurt Airport</Name>
    <Code>FRANOV</Code>
    <BookingURL>/api/sandbox/hotel/FRANOV</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANOV</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>141.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>141.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Novotel Frankfurt Niederrad</Name>
    <Code>FRANOH</Code>
    <BookingURL>/api/sandbox/hotel/FRANOH</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANOH</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>93.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>98.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>NH Frankfurt Rhein Main</Name>
    <Code>FRANHR</Code>
    <BookingURL>/api/sandbox/hotel/FRANHR</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANHR</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>113.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>113.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Holiday Inn Frankfurt Airport</Name>
    <Code>FRAHOL</Code>
    <BookingURL>/api/sandbox/hotel/FRAHOL</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAHOL</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>92.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>117.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>Balladins SUPERIOR Hotel</Name>
    <Code>FRAQUA</Code>
    <BookingURL>/api/sandbox/hotel/FRAQUA</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAQUA</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>121.00</RoomPrice>

        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>126.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>

    </RoomType>
    <Name>NH Frankfurt-Airport</Name>
    <Code>FRAAST</Code>
    <BookingURL>/api/sandbox/hotel/FRAAST</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAAST</MoreInfoURL>
  </Hotel>
  <Hotel>

    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>139.00</RoomPrice>

        </Price>
        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>Steigenberger Airport Hotel</Name>
    <Code>FRASTE</Code>
    <BookingURL>/api/sandbox/hotel/FRASTE</BookingURL>

    <MoreInfoURL>/api/sandbox/product/FRASTE</MoreInfoURL>
  </Hotel>
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>f</BoardBasis>
        <Price>

          <ParkingDays>0</ParkingDays>
          <RoomPrice>108.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>113.00</RoomPrice>
        </Price>

        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>NH Frankfurt Niederrad</Name>
    <Code>FRANHN</Code>
    <BookingURL>/api/sandbox/hotel/FRANHN</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANHN</MoreInfoURL>
  </Hotel>
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>199.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>8</ParkingDays>
          <RoomPrice>199.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>256.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>Sheraton FRA Hotel And Towers</Name>
    <Code>FRATOW</Code>
    <BookingURL>/api/sandbox/hotel/FRATOW</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRATOW</MoreInfoURL>
  </Hotel>
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>U</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>107.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>107.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>Ibis Frankfurt City Messe</Name>
    <Code>FFMIBI</Code>
    <BookingURL>/api/sandbox/hotel/FFMIBI</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FFMIBI</MoreInfoURL>
  </Hotel>
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>139.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>139.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>Carat Hotel Frankfurt/Airport</Name>
    <Code>FFMCAR</Code>
    <BookingURL>/api/sandbox/hotel/FFMCAR</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FFMCAR</MoreInfoURL>
  </Hotel>
  <Hotel>
    <RequestFlags></RequestFlags>
    <RoomType>
      <Room>
        <BoardBasis>F</BoardBasis>
        <Price>
          <ParkingDays>0</ParkingDays>
          <RoomPrice>91.00</RoomPrice>
        </Price>
        <Price>
          <ParkingDays>15</ParkingDays>
          <RoomPrice>101.00</RoomPrice>
        </Price>
        <Code>DZ</Code>
      </Room>
    </RoomType>
    <Name>Holiday Inn Express</Name>
    <Code>FFMEXP</Code>
    <BookingURL>/api/sandbox/hotel/FFMEXP</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FFMEXP</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>ACHAT Hotel Airport Frankfurt</Name>
    <Code>FRAACH</Code>
    <BookingURL>/api/sandbox/hotel/FRAACH</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAACH</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>431</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Mercure Wings Frankfurt Apt</Name>
    <Code>FRAMER</Code>
    <BookingURL>/api/sandbox/hotel/FRAMER</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAMER</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Steigenberger Htl.Langen</Name>
    <Code>FRAMAX</Code>
    <BookingURL>/api/sandbox/hotel/FRAMAX</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAMAX</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Mercure Htl. Frankfurt Airport</Name>
    <Code>FRANOV</Code>
    <BookingURL>/api/sandbox/hotel/FRANOV</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANOV</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>452</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>SheratonCongress</Name>
    <Code>FRACGS</Code>
    <BookingURL>/api/sandbox/hotel/FRACGS</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRACGS</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags>
      <CreditCard>1</CreditCard>
    </RequestFlags>
    <RoomType></RoomType>
    <Name>Novotel Frankfurt Niederrad</Name>
    <Code>FRADOR</Code>
    <BookingURL>/api/sandbox/hotel/FRADOR</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRADOR</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Novotel Frankfurt Niederrad</Name>
    <Code>FRANOH</Code>
    <BookingURL>/api/sandbox/hotel/FRANOH</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANOH</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>NH Frankfurt Rhein Main</Name>
    <Code>FRANHR</Code>
    <BookingURL>/api/sandbox/hotel/FRANHR</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANHR</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Holiday Inn Frankfurt Airport</Name>
    <Code>FRAHOL</Code>
    <BookingURL>/api/sandbox/hotel/FRAHOL</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAHOL</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>428</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Balladins SUPERIOR Hotel</Name>
    <Code>FRAQUA</Code>
    <BookingURL>/api/sandbox/hotel/FRAQUA</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAQUA</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>

    <SpeedDial>453</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>NH Frankfurt-Airport</Name>
    <Code>FRAAST</Code>
    <BookingURL>/api/sandbox/hotel/FRAAST</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRAAST</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Steigenberger Airport Hotel</Name>
    <Code>FRASTE</Code>
    <BookingURL>/api/sandbox/hotel/FRASTE</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRASTE</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>0</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>NH Frankfurt Niederrad</Name>
    <Code>FRANHN</Code>
    <BookingURL>/api/sandbox/hotel/FRANHN</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRANHN</MoreInfoURL>
  </Hotel>
  <Hotel>
    <OnRequest>Y</OnRequest>
    <Contact>Reservations</Contact>
    <SpeedDial>458</SpeedDial>
    <RequestFlags></RequestFlags>
    <RoomType></RoomType>
    <Name>Sheraton FRA Hotel And Towers</Name>
    <Code>FRATOW</Code>
    <BookingURL>/api/sandbox/hotel/FRATOW</BookingURL>
    <MoreInfoURL>/api/sandbox/product/FRATOW</MoreInfoURL>
  </Hotel>
  <API_Header>
    <Request>
      <ArrivalDate>2010-10-15</ArrivalDate>
      <BusinessUnit>222</BusinessUnit>
      <Nights>1</Nights>
      <Operator>BJT</Operator>
      <RoomType>D20</RoomType>
      <StartCustomer>111111</StartCustomer>
      <key>mytestkey</key>
      <token>999999999</token>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <Pricing>
    <TerminalDetail t="1">
      <TerminalCode>FRA1</TerminalCode>
      <TerminalName>Terminal 1</TerminalName>
    </TerminalDetail>
  </Pricing>
  <Pricing>
    <TerminalDetail t="1">
      <TerminalCode>FRA1</TerminalCode>
      <TerminalName>Terminal 1</TerminalName>
    </TerminalDetail>
  </Pricing>
  <WaiverValue></WaiverValue>
</API_Reply>
```























