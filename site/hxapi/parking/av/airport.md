---

---

# Availability At Airport

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > request:[Availability by Airport](airport)

## Airport Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

https://api.holidayextras.co.uk/v1/carpark/foo

where foo is the location (airport) code

For example, for London Gatwick the endpoint is https://api.holidayextras.co.uk/v1/carpark/LGW

To find the airport locations available for car parking, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'.|
 | Password    | String  | [A-Z0-9] 5 chars | N*       | Password only required for Agent requests. |
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | |
 | token       | String  | [0-9] 9 chars                         | Y        | |
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        | |
 | ArrivalTime | Time    | HHMM                                   | Y        | |
 | DepartDate  | Date    | YYYY-MM-DD                             | Y        | |
 | DepartTime  | Time    | HHMM                                   | Y        | |
 | NumberOfPax | Integer |                                        | N        | |
 | filter      | String  | [A-Z]                                  | N        | Pass in values "filter=on_airport", "filter=recommended" or "filter=meet_and_greet" to only show car parks meeting those criteria. You can filter by any field that comes back in the filter section of the API.|
 | fields      | String  | [A-Z] a csv list of product info fields | N        | A list of product info fields can be passed in to return configurable product information e.g. fields=name,address,latitude,sellingpoint. |
 | top3        | Boolean | [0,1]                                   | N        | If a value of 1 is passed in for the top3 param, then a maximum of three car parks will be returned, one on airport, one park and ride, and one meet and greet. |
 | System      | String  | [A-Z] 3 chars | Y*       | The System defaults to "ABC". For European products, you need to pass in the value of "ABG"|
 | lang        | String  | [A-Z] 2 chars | Y*       | Required for requests for European products. (Values available are "en", "de", "it", "es", "pt" and "nl".)|


## Airport Availability Response

The airport availability response will return all the products that have availability at the requested location on specific dates and durations. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields, please see below:

 | Field                | Notes |
 | ----                 | ---------------------- |
 | CarPark/TotalPrice   | The price of product _without_ any surcharges/fees added. |
 | CarPark/NonDiscPrice | The non discounted price. Some agent codes apply a discount so we return this field to enable a comparison.|
 | CarPark/RequestFlags | These flags list which details the car park operator requires from the customer. If a flag is returned with a 'Y' your application should send the corresponding field/value in the booking request.<br>Flags are only returned when required. The flags which can be returned are: <li>Registration <li>CarMake <li>CarModel <li>CarColour <li>OutFlight <li>ReturnFlight <li>OutTerminal <li>ReturnTerminal <li>Destination <li>MobileNum|
 | CarPark/Filter       | We have a filter mechanism on our site, to show particular types of product, such as Meet and Greet. The filters that apply to a product are returned here. Possible values are: <li>meet_and_greet <li>recommended <li>on_airport <li>terminal <li>valet_included <li>car_parked_for_you. |
 | European flags to be added!!!! | The price of the product _without_ any surcharges/fees added. |
 | CarPark/BookingURL   | The URL to POST the booking request to for this particular product. |
 | CarPark/MoreInfoURL  | The link to more information about this product, sourced from the Product Library.|
 | Pricing/CreditCardSurcharge | NB: This is only relevant for Intermediary Agents in Europe, where Holiday Extras is responsible for processing the payment, not the Agent. <br>The first step in the calculation is to determine the credit card surcharge payable (x), based on the value of the booking, using this formula: <br>x = (TotalPrice + the CanxWaiver) / 100 x CCardSurchargePercent <br>Second, to prevent the surcharge from exceeding certain boundaries we have min and max thresholds, which can be calculated as follows: <br>if x < CCardSurchargeMin; <br>x = CCardSurchargeMin <br>else if x > CCardSurchargeMax; <br>x = CCardSurchargeMax|
 | Pricing/CancellationWaiver | We provide an optional cancellation waiver. If this is not added then cancellation will incur a fee. The fee is outlined in our terms and conditions. <br>NB: This value is not currently returned via the XML. |
 | API_Header/Request  | The API returns every parameter and value you sent in the previous request. |

#### Europe CarParkDetailsFlag - CW to flesh out more

 The availability response will identify a list of flags which identify the fields required to be POSTED when making a booking.

 e.g. <CarDetFlags>NNNNNNNNNNNNNNNNNN</CarDetFlags>

 The order of the flags refer to these POST parameter fields respectively:


 <CarDetFlags>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</CarDetFlags>


  | Position | POST Parameter | character length | what is it?                                                                        |
  | -------- | -------------- | ---------------- | -----------                                                                        |
  | 1        | Registration   | VARCHAR(10)      | This is the car registration                                                       |
  | 2        | CarMake        | VARCHAR(10)      | This is the make of the car e.g. Audi                                              |
  | 3        | CarModel       | VARCHAR(10)      | This is the model of the car e.g. A6                                               |
  | 4        | CarColour      | VARCHAR(10)      | This is the colour of the car e.g. White                                           |
  | 5        | NumberOfPax    | INT(2)           | This is the number of passengers in the vehicle e.g. 5                             |
  | 6        | CarDropoffTime | HHMM             | This is the Arrival Time when you drop the car off at the car park e.g 1000        |
  | 7        | CarPickupTime  | HHMM             | This is the time on leaving the car park when you pick up your car e.g. 1600       |
  | 8        | OutTerminal    | VARCHAR(2)       | This is the single letter or number representation of the terminal e.g N or S or 4 |
  | 9        | OutFltNo       | VARCHAR(10)      | This is the flight number e.g. EZY123                                              |
  | 10       | InFltNo        | VARCHAR(10)      | This is the flight number e.g. EZY124                                              |
  | 11       | OutFltTime     | HHMM             | This is the Departure Time of the outbound flight e.g. 1200                        |
  | 12       | InFltTime      | HHMM             | This is the Arrival Time of the inbound flight e.g. 1500                           |
  | 13       | MobileNum      | VARCHAR(15)      | This is the mobile number of the customer                                          |
  | 14       | ShipName       | VARCHAR(20)      | This is the name of the ship e.g. AIDA                                             |
  | 15       | PierName       | VARCHAR(20)      | This is the pier name                                                              |
  | 16       | ChildSeat      | Y/N              | Is a child car seat needed?                                                        |
  | 17       | AddlServices   | VARCHAR(50)      | This is a remarks line                                                             |
  | 18       | RetTerminal    | VARCHAR(2)       | This is the single letter or number representation of the terminal e.g N or S or 4 |



## Worked Examples

Below are worked examples of both the request and response for availability at an airport.

### UK Products Availability Request

```html
https://api.holidayextras.co.uk/carpark/LGW?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1
```

### UK Products Availability Response

NB: This is a shortened example compiled from a full availability response.

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK" cached="1" expires="2017-05-26 16:25:40">
    <CarPark>
        <Name>Long Stay North</Name>
        <Code>LGW5</Code>
        <BookingURL>/carpark/HPLGW5</BookingURL>
        <MoreInfoURL>/product/LGW5</MoreInfoURL>
        <RequestFlags>
            <Registration>1</Registration>
        </RequestFlags>
        <NonDiscPrice>46.00</NonDiscPrice>
        <TotalPrice>46.00</TotalPrice>
        <GatePrice>110.00</GatePrice>
        <Filter>
            <terminal>North</terminal>
            <park_and_ride>1</park_and_ride>
            <on_airport>1</on_airport>
        </Filter>
    </CarPark>
    <CarPark>
        <Name>Long Stay South</Name>
        <Code>LGW2</Code>
        <BookingURL>/carpark/HPLGW2</BookingURL>
        <MoreInfoURL>/product/LGW2</MoreInfoURL>
        <RequestFlags>
            <Registration>1</Registration>
        </RequestFlags>
        <NonDiscPrice>48.00</NonDiscPrice>
        <TotalPrice>48.00</TotalPrice>
        <GatePrice>110.00</GatePrice>
        <Filter>
            <terminal>South</terminal>
            <park_and_ride>1</park_and_ride>
            <on_airport>1</on_airport>
        </Filter>
    </CarPark>
    <CarPark>
        <Name>Summer Special</Name>
        <Code>LGV7</Code>
        <BookingURL>/carpark/HPLGV7</BookingURL>
        <MoreInfoURL>/product/LGV7</MoreInfoURL>
        <RequestFlags>
            <Registration>1</Registration>
        </RequestFlags>
        <NonDiscPrice>53.00</NonDiscPrice>
        <TotalPrice>53.00</TotalPrice>
        <GatePrice>0.00</GatePrice>
        <Filter>
            <terminal>North</terminal>
            <park_and_ride>1</park_and_ride>
            <on_airport>1</on_airport>
            <car_parked_for_you>1</car_parked_for_you>
        </Filter>
    </CarPark>
    <Pricing>
       <CCardSurchargePercent>2.20</CCardSurchargePercent>
       <CCardSurchargeMin>0.00</CCardSurchargeMin>
       <CCardSurchargeMax>4.00</CCardSurchargeMax>
       <DCardSurchargePercent>0.00</DCardSurchargePercent>
       <DCardSurchargeMin>0.00</DCardSurchargeMin>
       <DCardSurchargeMax>0.00</DCardSurchargeMax>
       <CancellationWaiver>
           <Waiver>1.99</Waiver>
       </CancellationWaiver>
   </Pricing>
   <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <Initials>YourInitials</Initials>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2017-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <DepartDate>2017-12-08</DepartDate>
            <DepartTime>1200</DepartTime>
            <NumberOfPax>1</NumberOfPax>
        </Request>
    </API_Header>
</API_Reply>
```

### European Products Availability Request

```html
https://api.holidayextras.co.uk/carpark/MUC?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en
```

### European Products Availability Response

NB: This is a shortened example compiled from a full availability response.

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK" cached="1" expires="2017-05-26 18:26:20">
    <CarPark>
        <Name>Parkservice Sky München</Name>
        <Code>MU01</Code>
        <BookingURL>/carpark/FRMU01</BookingURL>
        <MoreInfoURL>/product/MU01</MoreInfoURL>
        <RequestFlags/>
        <NonDiscPrice>35.00</NonDiscPrice>
        <TotalPrice>35.00</TotalPrice>
        <GatePrice>0.00</GatePrice>
        <CancellationRule>0</CancellationRule>
        <CarDetFlags>NNNNNNNNYYNYNNNNNN</CarDetFlags>
        <CarDetails>Y</CarDetails>
        <DiscDates/>
        <QRCodeProduct>N</QRCodeProduct>
        <Filter>
            <car_parked_for_you>1</car_parked_for_you>
            <meet_and_greet>0</meet_and_greet>
            <on_airport/>
            <recommended/>
            <special_offer_text>1</special_offer_text>
            <valet_included>0</valet_included>
        </Filter>
    </CarPark>
    <CarPark>
        <Name>Airparks Parkplatz München</Name>
        <Code>MUC8</Code>
        <BookingURL>/carpark/FRMUC8</BookingURL>
        <MoreInfoURL>/product/MUC8</MoreInfoURL>
        <RequestFlags/>
        <NonDiscPrice>54.00</NonDiscPrice>
        <TotalPrice>54.00</TotalPrice>
        <GatePrice>0.00</GatePrice>
        <CancellationRule>0</CancellationRule>
        <CarDetFlags>NNNNNNNNNNNNNNNNNN</CarDetFlags>
        <CarDetails>Y</CarDetails>
        <DiscDates/>
        <QRCodeProduct>N</QRCodeProduct>
        <Filter>
            <car_parked_for_you>1</car_parked_for_you>
            <meet_and_greet>0</meet_and_greet>
            <on_airport/>
            <recommended>0</recommended>
            <special_offer_text>0</special_offer_text>
            <valet_included>0</valet_included>
        </Filter>
        <equivalent_product>MUCC</equivalent_product>
    </CarPark>
    <CarPark>
        <Name>Airparks Parkplatz München Frühbucher</Name>
        <Code>MUCC</Code>
        <BookingURL>/carpark/FRMUCC</BookingURL>
        <MoreInfoURL>/product/MUCC</MoreInfoURL>
        <RequestFlags/>
        <NonDiscPrice>49.00</NonDiscPrice>
        <TotalPrice>49.00</TotalPrice>
        <GatePrice>0.00</GatePrice>
        <CancellationRule>0</CancellationRule>
        <CarDetFlags>NNNNNNNNNNNNNNNNNN</CarDetFlags>
        <CarDetails>Y</CarDetails>
        <DiscDates/>
        <QRCodeProduct>N</QRCodeProduct>
        <Filter>
            <car_parked_for_you>1</car_parked_for_you>
            <meet_and_greet>0</meet_and_greet>
            <on_airport/>
            <recommended/>
            <special_offer_text>1</special_offer_text>
            <valet_included>0</valet_included>
        </Filter>
    </CarPark>
    <Pricing>
       <CCardSurchargePercent>0.00</CCardSurchargePercent>
       <CCardSurchargeMin>0.00</CCardSurchargeMin>
       <CCardSurchargeMax>0.00</CCardSurchargeMax>
   </Pricing>
   <SepaID>DE11ZZZ00000633860</SepaID>
   <API_Header>
       <Request>
           <ABTANumber>YourABTANumber</ABTANumber>
           <Password>YourPassword</Password>
           <Initials>YourInitials</Initials>
           <key>YourKey</key>
           <token>YourToken</token>
           <ArrivalDate>2017-12-01</ArrivalDate>
           <ArrivalTime>1200</ArrivalTime>
           <DepartDate>2017-12-08</DepartDate>
           <DepartTime>1200</DepartTime>
           <NumberOfPax>1</NumberOfPax>
           <System>ABG</System>
           <lang>de</lang>
       </Request>
   </API_Header>
</API_Reply>
```
