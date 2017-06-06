# Availability At Car Park

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > [Availability by Carpark](carpark)

## Car Park Availability Request

### Method

GET

### Endpoint

The endpoint to use is (where "foo" is the car park code):

```
https://api.holidayextras.co.uk/v1/carpark/foo
```

For example, for _Purple Parking Park and Ride T2 at London Heathrow_ the endpoint is:

```
https://api.holidayextras.co.uk/carpark/LHH6
```

To find the airport locations available for car parking, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | Y*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        | Date customer drops vehicle at car park. |
 | ArrivalTime | Time    | HHMM                                   | Y        | Time customer drops vehicle at car park.|
 | DepartDate  | Date    | YYYY-MM-DD                             | Y        | Date customer picks up vehicle from car park.|
 | DepartTime  | Time    | HHMM                                   | Y        | Time customer picks up vehicle from car park.|
 | NumberOfPax | Integer | [0-9] 2 chars | N        | Number of passengers.|
 | filter      | String  | [A-Z]                                  | N        | Pass in values `filter=on_airport`, `filter=recommended` or `filter=meet_and_greet` to only show car parks meeting those criteria. You can filter by any field that comes back in the filter section of the API.|
 | fields      | String  | [A-Z] a csv list of product info fields | N        | A list of product info fields can be passed in to return configurable product information e.g. `fields=name,address,latitude,sellingpoint`. |
 | top3        | Boolean | [0,1]                                   | N        | If a value of 1 is passed in for the top3 param, then a maximum of three car parks will be returned, one on airport, one park and ride, and one meet and greet. |
 | System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
 | lang        | String  | [A-Z] 2 chars | Y*       | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)|


## Car Park Availability Response

The car park availability response will return the specific product requested, so long as it has availability on the specific dates and durations. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

 | Field                | Additional Information |
 | ----                 | ---------------------- |
 | CarPark/TotalPrice   | The price of product _without_ any surcharges/fees added. |
 | CarPark/NonDiscPrice | The non discounted price. Some agent codes apply a discount so we return this field to enable a comparison.|
 | CarPark/RequestFlags | _NB: For European products, please see the separate table below._ <br>These flags list which details the car park operator requires from the customer. If a flag is returned with a 'Y' your application should send the corresponding field/value in the booking request.<br>Flags are only returned when required. The flags which can be returned are: `Registration`, `CarMake`, `CarModel`, `CarColour`, `OutFlight`, `ReturnFlight`, `OutTerminal`, `ReturnTerminal`, `Destination`, `MobileNum`.|
 | CarPark/Filter       | The car park filters are returned, but as you are searching for a single product in this request these can be ignored. |
 | CarPark/BookingURL   | The URL to POST the booking request to for this particular product. |
 | CarPark/MoreInfoURL  | The link to more information about this product, sourced from the Product Library.|
 | Pricing/CreditCardSurcharge | NB: This is only relevant for Intermediary Agents in Europe, where Holiday Extras is responsible for processing the payment, not the Agent. <br>The first step in the calculation is to determine the credit card surcharge payable (x), based on the value of the booking, using this formula: <br>x = (TotalPrice + the CanxWaiver) / 100 x CCardSurchargePercent <br>Second, to prevent the surcharge from exceeding certain boundaries we have min and max thresholds, which can be calculated as follows: <br>if x < CCardSurchargeMin; <br>x = CCardSurchargeMin <br>else if x > CCardSurchargeMax; <br>x = CCardSurchargeMax|
 | Pricing/CancellationWaiver | We provide an optional cancellation waiver. If this is not added then cancellation will incur a fee. The fee is outlined in our terms and conditions. <br>NB: This value is not currently returned via the XML. |
 | API_Header/Request  | The API returns every parameter and value you sent in the previous request. |

#### European products only

For European products only, the availability response will return a field called `<CarDetFlags>`, which identifies the fields required when making a booking. (This is instead of the `<RequestFlags>` field which is returned for UK products only).

For example: `<CarDetFlags>` NNNNNNNNNNNNNNNNNN `</CarDetFlags>`

 The order of the flags is always the same, and refers to these parameters respectively:

  | Position | Parameter | Data Type | Format | Additional Information                            |
  | -------- | -------------- | ---------------- | -----------                                                                        |
  | 1        | Registration  | String | [A-Z0-9] 10 chars      | Vehicle registration number <br> NB: This field is not validated through the API. |
  | 2        | CarMake        | String | [A-Z0-9] 10 chars | Make of vehicle, e.g. Audi.                                             |
  | 3        | CarModel       | String | [A-Z0-9] 10 chars      | Model of vehicle, e.g. A6.                                               |
  | 4        | CarColour      | String | [A-Z0-9] 10 chars      | Colour of vehicle, e.g. White.                                           |
  | 5        | NumberOfPax    | Integer |[0-9]| Number of passengers in the vehicle.|
  | 6        | CarDropoffTime | Time | HHMM             | Arrival time when you drop the vehicle off at the car park e.g 1000. |
  | 7        | CarPickupTime  | Time | HHMM             | Return time, when you pick the vehicle up from the car park, e.g. 1600. |
  | 8        | OutTerminal    | String | [A-Z0-9] 2 chars | Single letter or number representation of the terminal e.g N or S or 4 |
  | 9        | OutFltNo       | String | [A-Z0-9] 10 chars      | Outbound flight number e.g. EZY123. |
  | 10       | InFltNo        | String | [A-Z0-9] 10 chars      | Return flight number e.g. EZY124. |
  | 11       | OutFltTime     | Time | HHMM             | Departure time of the outbound flight e.g. 1200. |
  | 12       | InFltTime      | Time | HHMM             | Arrival time of the inbound flight e.g. 1500. |
  | 13       | MobileNum      | String | [A-Z0-9] 15 chars      | Customer's mobile number. |
  | 14       | ShipName       | String | [A-Z0-9] 20 chars      | Name of the ship, e.g. AIDA  |
  | 15       | PierName       | String | [A-Z0-9] 20 chars      | Name of the pier or port where the ship is departing from |
  | 16       | ChildSeat      | String | Y/N              | Is a child car seat needed? |
  | 17       | AddlServices   | String | [A-Z0-9] 50 chars      | In this parameter you may add additional remarks regarding the booking. |
  | 18       | RetTerminal    | String | [A-Z0-9] 2 chars       | Single letter or number representation of the terminal e.g N or S or 4 |



## Worked Examples

Below are worked examples of both the request and response for availability at an airport.

### UK Products Availability Request

```html
https://api.holidayextras.co.uk/carpark/LHH6?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1
```

### UK Products Availability Response

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="3" Result="OK">
    <CarPark>
        <Name>Purple Parking Park and Ride T2</Name>
        <Code>LHH6</Code>
        <BookingURL>/carpark/HPLHH6</BookingURL>
        <MoreInfoURL>/product/LHH6</MoreInfoURL>
        <RequestFlags>
            <CarColour>1</CarColour>
            <CarMake>1</CarMake>
            <CarModel>1</CarModel>
            <Destination>1</Destination>
            <MobileNum>1</MobileNum>
            <OutFlight>1</OutFlight>
            <OutTerminal>1</OutTerminal>
            <Registration>1</Registration>
            <ReturnFlight>1</ReturnFlight>
            <ReturnTerminal>1</ReturnTerminal>
        </RequestFlags>
        <TotalPrice>85.95</TotalPrice>
        <GatePrice>89.99</GatePrice>
        <Filter>
            <terminal>2</terminal>
            <meet_and_greet>0</meet_and_greet>
            <park_and_ride>1</park_and_ride>
            <car_parked_for_you>1</car_parked_for_you>
        </Filter>
    </CarPark>
    <Pricing>
        <CCardSurchargePercent>2.20</CCardSurchargePercent>
        <TotalPrice>85.95</TotalPrice>
        <CCardSurchargeAmount>0.00</CCardSurchargeAmount>
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
https://api.holidayextras.co.uk/carpark/MU01?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG
```

### European Products Availability Response

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="3" Result="OK">
    <CarPark>
        <Name>Parkservice Sky München</Name>
        <Code>MU01</Code>
        <BookingURL>/carpark/FRMU01</BookingURL>
        <MoreInfoURL>/product/MU01</MoreInfoURL>
        <RequestFlags/>
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
    <Pricing>
        <CCardSurchargePercent>0.00</CCardSurchargePercent>
        <TotalPrice>35.00</TotalPrice>
        <CCardSurchargeAmount>0.00</CCardSurchargeAmount>
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
