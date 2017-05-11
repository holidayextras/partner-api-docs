---

---

# Theatre Break Availability


## /theatrebreak/{foo}

### Method

GET


### Parameters

 | Name        | Format  | Required | 
 | ----        | ------  | -------- | 
 | ShowDate    | DDMMMYY | Y        | 
 | ArrivalDate | HHSS    | Y        | 
 | RoomCode    | X12     | Y        | 
 | key         |         | Y        | 
 | token       |         | Y        | 






### Request

```html
http://api.holidayextras.co.uk/sandbox/v1/theatrebreak/SHOLME?ShowDate=2008-05-08&ArrivalDate=2008-05-15&RoomCode[]=D20&key=mytestkey
```



### Reply

```xml
<?xml version="1.0" ?>

<API_Reply RequestCode="3" Result="OK">
  <Show>
    <ShowDate>2008-05-08</ShowDate>
    <Hotel>
      <Name>Strand Palace</Name>
      <Code>THTSTR</Code>
      <MoreInfoURL>/api/v1/product/THTSTR</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>220.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/145</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Tlodge Kings Cross Royal Scot</Name>
      <Code>THTFOI</Code>
      <MoreInfoURL>/api/v1/product/THTFOI</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>165.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/146</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Crowne Plaza - London St James</Name>
      <Code>THTCPL</Code>
      <MoreInfoURL>/api/v1/product/THTCPL</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>310.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/147</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Kensington Forum</Name>
      <Code>THTFOR</Code>
      <MoreInfoURL>/api/v1/product/THTFOR</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>195.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/148</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Millennium Gloucester Hotel</Name>
      <Code>THTMCG</Code>
      <MoreInfoURL>/api/v1/product/THTMCG</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>241.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/149</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Copthorne Tara Hotel</Name>
      <Code>THTTAR</Code>
      <MoreInfoURL>/api/v1/product/THTTAR</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>208.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/150</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Holiday Inn Bloomsbury</Name>
      <Code>THTBLO</Code>
      <MoreInfoURL>/api/v1/product/THTBLO</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>230.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/151</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>St Giles</Name>
      <Code>THTSTG</Code>
      <MoreInfoURL>/api/v1/product/THTSTG</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>194.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/152</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Radisson Portman</Name>
      <Code>THTPOR</Code>
      <MoreInfoURL>/api/v1/product/THTPOR</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>309.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/153</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Travelodge London City Road</Name>
      <Code>THTTLC</Code>
      <MoreInfoURL>/api/v1/product/THTTLC</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>179.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/154</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Le Meridien Picadilly</Name>
      <Code>THTLMP</Code>
      <MoreInfoURL>/api/v1/product/THTLMP</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>284.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/155</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Holiday Inn Oxford Circus</Name>
      <Code>THTHOX</Code>
      <MoreInfoURL>/api/v1/product/THTHOX</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>240.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/156</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Holiday Inn Regents Park</Name>
      <Code>THTREG</Code>
      <MoreInfoURL>/api/v1/product/THTREG</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>230.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/157</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Rembrandt</Name>
      <Code>THTREM</Code>
      <MoreInfoURL>/api/v1/product/THTREM</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>231.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/158</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Intercontinental Park Lane</Name>
      <Code>THTIPL</Code>
      <MoreInfoURL>/api/v1/product/THTIPL</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>329.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/159</BookingURL>
      </Seat>
    </Hotel>
    <Hotel>
      <Name>Park Inn Hyde Park</Name>
      <Code>THTPIN</Code>
      <MoreInfoURL>/api/v1/product/THTPIN</MoreInfoURL>
      <Nights>1</Nights>
      <StayDate>2008-05-15</StayDate>
      <Seat>
        <Name>Top Seat Stalls/Dress Circle</Name>
        <Price>200.00</Price>
        <Code>1ST</Code>
        <BookingURL>/api/v1/basket/160</BookingURL>
      </Seat>
    </Hotel>
    <Name>LES MISERABLES</Name>
    <Code>SHOLME</Code>
    <MoreInfoURL>/api/v1/product/SHOLME</MoreInfoURL>
  </Show>
  <Attraction>
    <AttractionPrice>34.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Ascots</Name>
    <Code>ATT001</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>30.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Bertorellis Floral Street</Name>
    <Code>ATT002</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>30.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Chez Gerard Victoria</Name>
    <Code>ATT003</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>28.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Creation</Name>
    <Code>ATT004</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>38.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Criterion</Name>
    <Code>ATT005</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>34.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Dial</Name>
    <Code>ATT006</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>38.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>LEscargot</Name>
    <Code>ATT007</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>24.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Salieries</Name>
    <Code>ATT009</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>34.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Hampshire</Name>
    <Code>ATT010</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>56.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Tutankhamun With Thames Clip</Name>
    <Code>ATTTTC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>40.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Tutankhamun Exhibition</Name>
    <Code>ATTTTE</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>66.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Eye Champagne Flight</Name>
    <Code>ATTTCF</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>55.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Eye River Cruise</Name>
    <Code>ATTTRC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>31.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Eye Flight Only</Name>
    <Code>ATTTFO</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>50.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Eye Fast Track</Name>
    <Code>ATTTFT</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>18.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>James Bond Exhibition</Name>
    <Code>ATTTJB</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>40.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Madame Tussauds/Chamber Live</Name>
    <Code>ATTTCL</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>42.00</AttractionPrice>
    <AttractionSupplier>PLA</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Planet Cruise</Name>
    <Code>ATTPLC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>63.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Fortnum &#38; Mason Afternoon Tea</Name>
    <Code>ATTTAT</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>20.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>St Pauls Cathedral</Name>
    <Code>ATTTPC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>34.00</AttractionPrice>
    <AttractionSupplier>ZOO</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Zoo</Name>
    <Code>ATTTLZ</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>36.00</AttractionPrice>
    <AttractionSupplier>TUS</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>The London Dungeon</Name>
    <Code>ATTTLD</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>142.00</AttractionPrice>
    <AttractionSupplier>EN2</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Luxury Dinner Cruise</Name>
    <Code>ATTTDC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>42.00</AttractionPrice>
    <AttractionSupplier>EN1</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Original Bus Tour</Name>
    <Code>ATTTBT</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>24.60</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Kensington Palace</Name>
    <Code>ATTTKP</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>33.00</AttractionPrice>
    <AttractionSupplier>ENC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Tower Of London</Name>
    <Code>ATTTTL</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>50.00</AttractionPrice>
    <AttractionSupplier>EN2</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>Lunch Cruise</Name>
    <Code>ATTTLC</Code>
  </Attraction>
  <Attraction>
    <AttractionPrice>38.00</AttractionPrice>
    <AttractionSupplier>DUC</AttractionSupplier>
    <AttractionPrePaid>PREPAID</AttractionPrePaid>
    <AttractionDate>2008-05-08</AttractionDate>
    <AttractionPriceRule>DEFAULT</AttractionPriceRule>
    <SeatTicketType>ATT</SeatTicketType>
    <Name>London Duck Tours</Name>
    <Code>ATTTDT</Code>
  </Attraction>
  <Pricing>
    <CCardSurcharge>2.00</CCardSurcharge>
    <CCardSurchargeMin>1.50</CCardSurchargeMin>
    <CCardSurchargeMax>4.00</CCardSurchargeMax>
  </Pricing>
</API_Reply>
```
