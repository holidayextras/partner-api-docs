---

---

# Availability At FastTrack

## FastTrack Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.com/v1/fasttrack/AirportCode
```

For example, for fasttrack availability at Manchester the endpoint is:

```
https://api.holidayextras.com/v1/fasttrack/MAN
```

To find the airport locations available for fasttrack, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                        |
|-------------|-----------|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber  | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                               |
| Password    | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                               |
| Initials    | String    | [A-Z] 3 chars    | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                         |
| key         | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                           |
| token       | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                                                                    |
| ArrivalDate | Date      | YYYY-MM-DD       | Y          | Date customer enters the fasttrack.                                                                                                                                                                                                                                                                                                           |
| ArrivalTime | Time      | HHMM             | Y          | Time customer enters the fasttrack.                                                                                                                                                                                                                                                                                                           |
| Adults      | Integer   | [0-4] 1 char     | Y          | Number of adults requiring entry to the fasttrack.                                                                                                                                                                                                                                                                                            |
| Children    | Integer   | [0-3] 1 char     | N          | Number of children requiring entry to the fasttrack.                                                                                                                                                                                                                                                                                          |
| OutFlight   | String    | [A-Z0-9] 9 chars | N          | This is also known as an 'flight number'. <br>Used to establish which terminal the customer is flying from using our look up tool and return products specific to that terminal.                                                                                                                                                              |


## FastTrack Availability Response

The fasttrack availability response will return the specific product requested, so long as it has availability on the specific dates and times. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:



| Field                      | Additional Information                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------|
| FastTrack/Name             | The name of the fasttrack.                                                                                  |
| FastTrack/Code             | The product code for the fasttrack, which must be used in the booking request.                              |
| FastTrack/BookingURL       | The URL to POST the booking request to for this particular product.                                         |
| FastTrack/MoreInfoURL      | The link to more information about this product, sourced from the Product Library.                          |
| FastTrack/Price            | The price of product _without_ any surcharges/fees added.                                                   |
| FastTrack/NonDiscPrice     | The non discounted price. Some agent codes apply a discount so we return this field to enable a comparison. |
| FastTrack/SalesCurrency    | Three character identifier for the sale currency to qualify the price                                       |
| FastTrack/Images/Src       | Link to a image for the product. Prepend with `https:`                                                      |
| FastTrack/Description      | Product description                                                                                         |
| FastTrack/Logo             | Link to a logo for the product. Prepend with `https:`                                                       |
| FastTrack/ExtraInformation | Extended description of the product                                                                         |
| IsRefundable               | Whether the product can be refunded                                                                         |
| AirportLocation            | The location name for the product airport                                                                   |
| Location                   | Extended location information for the airport including a list of all terminals on site                  |
| Terminal                   | The airport terminal of the product                                                                         |



## Worked Examples

Below are worked examples of both the request and response for availability at an airport.

### UK Products Availability Request

```
https://api.holidayextras.com/v1/fasttrack/MAN/?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2019-10-22&ArrivalTime=1200&Adults=2&Children=0
```

### UK Products Availability Response

 ```xml
<?xml version="1.0"?>
<API_Reply Product="FastTrack" RequestCode="1" Result="OK" cached="1" expires="2019-05-23 08:37:22">
  <FastTrack>
    <Name>FastTrack Terminal 1</Name>
    <Code>APMANSF1</Code>
    <BookingURL>/v1/fastTrack/APMANSF1</BookingURL>
    <MoreInfoURL>/v1/product/MANSF1</MoreInfoURL>
    <Price>10.00</Price>
    <SalesCurrency>GBP</SalesCurrency>
    <Images>
      <Src>//d1xcii4rs5n6co.cloudfront.net/libraryimages/85558-manchester-airport-security-fasttrack-T1.png</Src>
      <Alt/>
    </Images>
    <BrandImage/>
    <MobileImage/>
    <Videos/>
    <SimilarProducts/>
    <GroupingName/>
    <UpsellUpgrade/>
    <UpsellUpgrades/>
    <UpsellProducts/>
    <UpsellTitle/>
    <UpsellText/>
    <GhostUpsellProducts/>
    <Description>Short on time? Take the fast track through security and you’ll fly through.</Description>
    <Logo>//d1xcii4rs5n6co.cloudfront.net/libraryimages/81386-MAN-fasttrack-core.png</Logo>
    <ExtraInformation>
     <h2> What is it?</h2>

     <p>The Security FastTrack pass gives you access to the priority lane at the airport’s security checks. You’ll whizz past the standard queue, giving you more time to relax in departures before your flight. </p>

     <p> Once you book we’ll email you the passes, so make sure you print them and take them with you, or have them ready on your mobile phone. There’ll be a voucher each with a barcode, which you’ll need to scan at the entrance before you go through. </p>

     <h2>When can I use it?</h2>
     <p>Available 2.30am - 11pm.</p>

     <h2> Is it the same price for children?</h2>
     <p>Yes, the pass is £5 per person.</p>

     <h2>The small print:</h2>
     <p>You won't need this service if you have mobility issues or small children with pushchairs as there's already a dedicated lane.</p>

     <p>Jet 2 passengers who have purchased FastTrack tickets must use the security lanes located on Departure level 5, in Terminal 1. </p>

     <p>Security FastTrack tickets can only be used once for the date you have booked.</p>


     <p> If you have booked more than one ticket the vouchers will all be in the lead passenger’s name.</p>


     <p>All FastTrack's terms and conditions will apply to you, so please read them <a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank">here.</a></p>
    </ExtraInformation>
    <PaymentSurcharge>
      <Credit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Credit>
      <Debit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Debit>
    </PaymentSurcharge>
    <Location>
      <Iata>MAN</Iata>
      <Name>Manchester</Name>
      <Type>airport</Type>
      <Terminals>
        <Code>1</Code>
        <Name>1</Name>
      </Terminals>
      <Terminals>
        <Code>2</Code>
        <Name>2</Name>
      </Terminals>
      <Terminals>
        <Code>3</Code>
        <Name>3</Name>
      </Terminals>
    </Location>
    <IsRefundable>1</IsRefundable>
    <AccessPassImage>//d1xcii4rs5n6co.cloudfront.net/libraryimages/fasttrack.jpg</AccessPassImage>
    <ImportantInformation>
      With this special, VIP pass through security, you could be the first through the gate. We'll give you one voucher for all passengers, so make sure you hold the square, patterned barcode on your own voucher under the special camera at the entrance before you go through. You’ll then need to do the same with your boarding pass. <br /> <br />You can only use the Fast Track once, on the day you’ve booked. Even though Fast Track customers get their own lane through security, all the normal airport security rules will still apply. Since the airport already has its own special lanes for customers with mobility issues or those with small children, they won't need to use this service.<br /><br />

      Jet 2 customers who have purchased Fast Track tickets must use the security lanes located on Departure level 5 in Terminal 1. <br /> <br />

      <p><b>Please ensure you have read the Airport's <a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank">Terms and Conditions.</a></b></p>
    </ImportantInformation>
    <AirportLocation>Manchester</AirportLocation>
    <Terminal>1</Terminal>
    <NonDiscPrice>10.00</NonDiscPrice>
    <advance_purchase>1</advance_purchase>
  </FastTrack>
  <FastTrack>
    <Name>FastTrack Terminal 2</Name>
    <Code>APMANSF2</Code>
    <BookingURL>/v1/fastTrack/APMANSF2</BookingURL>
    <MoreInfoURL>/v1/product/MANSF2</MoreInfoURL>
    <Price>10.00</Price>
    <SalesCurrency>GBP</SalesCurrency>
    <Images>
      <Src>//d1xcii4rs5n6co.cloudfront.net/libraryimages/85558-manchester-airport-security-fasttrack-T2.png</Src>
      <Alt/>
    </Images>
    <BrandImage/>
    <MobileImage/>
    <Videos/>
    <SimilarProducts/>
    <GroupingName/>
    <UpsellUpgrade/>
    <UpsellUpgrades/>
    <UpsellProducts/>
    <UpsellTitle/>
    <UpsellText/>
    <GhostUpsellProducts/>
    <Description>Short on time? Take the fast track through security and you’ll fly through.</Description>
    <Logo>//d1xcii4rs5n6co.cloudfront.net/libraryimages/81386-MAN-fasttrack-core.png</Logo>
    <ExtraInformation>&lt;h2&gt; What is it?&lt;/h2&gt; &lt;p&gt;The Security FastTrack pass gives you access to the priority lane at the airport’s security checks. You’ll whizz past the standard queue, giving you more time to relax in departures before your flight. &lt;/p&gt; &lt;p&gt; Once you book we’ll email you the passes, so make sure you print them and take them with you. There’ll be a voucher each with a barcode, which you’ll need to scan at the entrance before you go through. &lt;/p&gt; &lt;h2&gt;When can I use it?&lt;/h2&gt; &lt;p&gt;Available 2.30am - 11pm.&lt;/p&gt; &lt;h2&gt; Is it the same price for children?&lt;/h2&gt; &lt;p&gt;Yes, the pass is £5 per person.&lt;/p&gt; &lt;h2&gt;The small print:&lt;/h2&gt; &lt;p&gt;You won't need this service if you have mobility issues or small children with pushchairs as there's already a dedicated lane.&lt;/p&gt;&lt;p&gt;Security FastTrack tickets can only be used once for the date you have booked.&lt;/p&gt; &lt;p&gt; If you have booked more than one ticket the vouchers will all be in the lead passenger’s name.&lt;/p&gt; &lt;p&gt;All FastTrack's terms and conditions will apply to you, so please read them &lt;a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank"&gt;here.&lt;/a&gt;&lt;/p&gt;</ExtraInformation>
    <PaymentSurcharge>
      <Credit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Credit>
      <Debit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Debit>
    </PaymentSurcharge>
    <Location>
      <Iata>MAN</Iata>
      <Name>Manchester</Name>
      <Type>airport</Type>
      <Terminals>
        <Code>1</Code>
        <Name>1</Name>
      </Terminals>
      <Terminals>
        <Code>2</Code>
        <Name>2</Name>
      </Terminals>
      <Terminals>
        <Code>3</Code>
        <Name>3</Name>
      </Terminals>
    </Location>
    <IsRefundable>1</IsRefundable>
    <AccessPassImage>//d1xcii4rs5n6co.cloudfront.net/libraryimages/fasttrack.jpg</AccessPassImage>
    <ImportantInformation>
      With this special, VIP pass through security, you could be the first through the gate. We'll give you one voucher for all passengers, so make sure you hold the square, patterned barcode on your own voucher under the special camera at the entrance before you go through. You’ll then need to do the same with your boarding pass. <br /> <br />You can only use the Fast Track once, on the day you’ve booked. Even though Fast Track customers get their own lane through security, all the normal airport security rules will still apply. Since the airport already has its own special lanes for customers with mobility issues or those with small children, they won't need to use this service.<br /><br />

      Jet 2 customers who have purchased Fast Track tickets must use the security lanes located on Departure level 5 in Terminal 1. <br /> <br />

      <p><b>Please ensure you have read the Airport's <a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank">Terms and Conditions.</a></b></p>
    </ImportantInformation>
    <AirportLocation>Manchester</AirportLocation>
    <Terminal>2</Terminal>
    <NonDiscPrice>10.00</NonDiscPrice>
    <advance_purchase>1</advance_purchase>
  </FastTrack>
  <FastTrack>
    <Name>FastTrack Terminal 3</Name>
    <Code>APMANSF3</Code>
    <BookingURL>/v1/fastTrack/APMANSF3</BookingURL>
    <MoreInfoURL>/v1/product/MANSF3</MoreInfoURL>
    <Price>10.00</Price>
    <SalesCurrency>GBP</SalesCurrency>
    <Images>
      <Src>//d1xcii4rs5n6co.cloudfront.net/libraryimages/85558-manchester-airport-security-fasttrack-T3.png</Src>
      <Alt/>
    </Images>
    <BrandImage/>
    <MobileImage/>
    <Videos/>
    <SimilarProducts/>
    <GroupingName/>
    <UpsellUpgrade/>
    <UpsellUpgrades/>
    <UpsellProducts/>
    <UpsellTitle/>
    <UpsellText/>
    <GhostUpsellProducts/>
    <Description>Short on time? Take the fast track through security and you’ll fly through.</Description>
    <Logo>//d1xcii4rs5n6co.cloudfront.net/libraryimages/81386-MAN-fasttrack-core.png</Logo>
    <ExtraInformation>&lt;h2&gt; What is it?&lt;/h2&gt; &lt;p&gt;The Security FastTrack pass gives you access to the priority lane at the airport’s security checks. You’ll whizz past the standard queue, giving you more time to relax in departures before your flight. &lt;/p&gt; &lt;p&gt; Once you book we’ll email you the passes, so make sure you print them and take them with you. There’ll be a voucher each with a barcode, which you’ll need to scan at the entrance before you go through. &lt;/p&gt; &lt;h2&gt;When can I use it?&lt;/h2&gt; &lt;p&gt;Available 2.30am - 11pm.&lt;/p&gt; &lt;h2&gt; Is it the same price for children?&lt;/h2&gt; &lt;p&gt;Yes, the pass is £5 per person.&lt;/p&gt; &lt;h2&gt;The small print:&lt;/h2&gt; &lt;p&gt;You won't need this service if you have mobility issues or small children with pushchairs as there's already a dedicated lane.&lt;/p&gt; &lt;p&gt;Security FastTrack tickets can only be used once for the date you have booked.&lt;/p&gt; &lt;p&gt; If you have booked more than one ticket the vouchers will all be in the lead passenger’s name.&lt;/p&gt; &lt;p&gt;All FastTrack's terms and conditions will apply to you, so please read them &lt;a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank"&gt;here.&lt;/a&gt;&lt;/p&gt;</ExtraInformation>
    <PaymentSurcharge>
      <Credit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Credit>
      <Debit>
        <Percent>0</Percent>
        <Min>0</Min>
        <Max>0</Max>
        <Calculated>0</Calculated>
        <Total>1000</Total>
      </Debit>
    </PaymentSurcharge>
    <Location>
      <Iata>MAN</Iata>
      <Name>Manchester</Name>
      <Type>airport</Type>
      <Terminals>
        <Code>1</Code>
        <Name>1</Name>
      </Terminals>
      <Terminals>
        <Code>2</Code>
        <Name>2</Name>
      </Terminals>
      <Terminals>
        <Code>3</Code>
        <Name>3</Name>
      </Terminals>
    </Location>
    <IsRefundable>1</IsRefundable>
    <AccessPassImage>//d1xcii4rs5n6co.cloudfront.net/libraryimages/fasttrack.jpg</AccessPassImage>
    <ImportantInformation>
      With this special, VIP pass through security, you could be the first through the gate. We'll give you one voucher for all passengers, so make sure you hold the square, patterned barcode on your own voucher under the special camera at the entrance before you go through. You’ll then need to do the same with your boarding pass. <br /> <br />You can only use the Fast Track once, on the day you’ve booked. Even though Fast Track customers get their own lane through security, all the normal airport security rules will still apply. Since the airport already has its own special lanes for customers with mobility issues or those with small children, they won't need to use this service.<br /><br />

      Jet 2 customers who have purchased Fast Track tickets must use the security lanes located on Departure level 5 in Terminal 1. <br /> <br />

      <p><b>Please ensure you have read the Airport's <a href="http://www.manchesterairport.co.uk/terms-and-conditions/fasttrack/" target="_blank">Terms and Conditions.</a></b></p>
    </ImportantInformation>
    <AirportLocation>Manchester</AirportLocation>
    <Terminal>3</Terminal>
    <NonDiscPrice>10.00</NonDiscPrice>
    <advance_purchase>1</advance_purchase>
  </FastTrack>
  <Pricing>
    <CCardSurchargePercent>0.00</CCardSurchargePercent>
    <CCardSurchargeMin>0.00</CCardSurchargeMin>
    <CCardSurchargeMax>0.00</CCardSurchargeMax>
    <DCardSurchargePercent>0.00</DCardSurchargePercent>
    <DCardSurchargeMin>0.00</DCardSurchargeMin>
    <DCardSurchargeMax>0.00</DCardSurchargeMax>
  </Pricing>
  <SepaID/>
  <API_Header>
    <Request>
      <ABTANumber>TESTX</ABTANumber>
      <Password>Redacted</Password>
      <key>partnerapitest</key>
      <token>generate</token>
      <ArrivalDate>2019-10-22</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <Children>0</Children>
      <Adults>2</Adults>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>
```
