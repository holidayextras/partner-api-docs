---

---

# Availability At Car Park

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > [Availability by Carpark](/hxapi/parking/av/carpark)

## Car Park Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.com/v1/carpark/CarParkCode
```

For example, for _Purple Parking Park and Ride T2 at London Heathrow_ the endpoint is:

```
https://api.holidayextras.com/v1/carpark/LHH6
```

To find the airport locations available for car parking, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type | Format                                  | Mandatory? | Additional Information                                                                                                                                                                                           |
|-------------|-----------|-----------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber  | String    | [A-Z0-9] 5 chars                        | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                  |
| Password    | String    | [A-Z0-9] 5 chars                        | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                  |
| Initials    | String    | [A-Z] 3 chars                           | N          | The initials of the Operator / Agent.                                                                                                                                                                            |
| key         | String    | [A-Z]                                   | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                              |
| token       | String    | [0-9] 9 chars                           | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                       |
| ArrivalDate | Date      | YYYY-MM-DD                              | Y          | Date customer drops vehicle at car park.                                                                                                                                                                         |
| ArrivalTime | Time      | HHMM                                    | Y          | Time customer drops vehicle at car park.                                                                                                                                                                         |
| DepartDate  | Date      | YYYY-MM-DD                              | Y          | Date customer picks up vehicle from car park.                                                                                                                                                                    |
| DepartTime  | Time      | HHMM                                    | Y          | Time customer picks up vehicle from car park.                                                                                                                                                                    |
| NumberOfPax | Integer   | [0-9] 2 chars                           | N          | Number of passengers.                                                                                                                                                                                            |
| OutFlight   | String    | [A-Z0-9] 9 chars                        | N          | This is also known as an 'flight number'. <br>Used to establish which terminal the customer is flying from using our look up tool and return products specific to that terminal. |
{% include_relative _filter.md -%}
| fields      | String    | [A-Z] a csv list of product info fields | N          | A list of product info fields can be passed in to return configurable product information e.g. `fields=name,address,latitude,sellingpoint`.                                                                      |
| top3        | Boolean   | [0,1]                                   | N          |  ⚠ Deprecated: This feature limited the search results to only 3 products, one onsite, one park and ride and one meet and greet. It is no longer supported and will be removed in future releases. Your account manager will work with you to ensure the best products are always returned first instead.           
| System      | String    | [A-Z] 3 chars                           | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                   |
| lang        | String    | [A-Z] 2 chars                           | Y*         | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)                                                                                                       |


## Car Park Availability Response

The car park availability response will return the specific product requested, so long as it has availability on the specific dates and durations. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

| Field                             | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CarPark/Name                      | The name of the product                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CarPark/Code                      | The product code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CarPark/BookingURL                | The URL to POST the booking request to for this particular product. Note: The product code **includes** prefix.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CarPark/MoreInfoURL               | The link to more information about this product, sourced from the Product Library. Note: The product code **doesn't include** prefix.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CarPark/RequestFlags              | _NB. In Europe this will be replaced with `<CarDetFlags>`, see below for more info on these.These flags list which details the car park operator requires from the customer. If a flag is returned with a 'Y' your application should send the corresponding field/value in the booking request.<br>Flags are only returned when required. The flags which can be returned are: `Registration`, `CarMake`, `CarModel`, `CarColour`, `OutFlight`, `ReturnFlight`, `OutTerminal`, `ReturnTerminal`, `Destination`, `MobileNum`.                                                                                                       |
| CarPark/NonDiscPrice              | The non discounted price. Some agent codes apply a discount so we return this field to enable a comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| CarPark/TotalPrice                | The price of product _without_ any surcharges/fees added.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| CarPark/GatePrice                 | If available, the price of product if you were to turn up on the day.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CarPark/CanAmendCantCancel        | Whether the product can be amend but not cancelled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CarPark/CancellationFeeExceptions | If the carpark has non-standard cancellation fees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CarPark/AmendmentFeeExceptions    | If the carpark has non-standard amendment fees.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CarPark/Filter                    | We have a filter mechanism on our site, to show particular types of product, such as Meet and Greet. The filters that apply to a product are returned here. Possible values are: `meet_and_greet`, `recommended`, `on_airport`, `terminal`, `valet_included`, `car_parked_for_you`.                                                                                                                                                                                                                                                                                                                                                 |
| Pricing/CreditCardSurcharge       | NB: This is only relevant for Intermediary Agents in Europe, where Holiday Extras is responsible for processing the payment, not the Agent. <br>The first step in the calculation is to determine the credit card surcharge payable (x), based on the value of the booking, using this formula: <br>x = (TotalPrice + the CanxWaiver) / 100 x CCardSurchargePercent <br>Second, to prevent the surcharge from exceeding certain boundaries we have min and max thresholds, which can be calculated as follows: <br>if x < CCardSurchargeMin; <br>x = CCardSurchargeMin <br>else if x > CCardSurchargeMax; <br>x = CCardSurchargeMax |
| Pricing/CancellationWaiver/Waiver | We provide an optional cancellation waiver. If this is not added then cancellation will incur a fee. This returns the cancellation fee cost.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| API_Header/Request                | The API returns every parameter and value you sent in the previous request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### CarDetFlags (Europe Only)

For European products only, the availability response will return a field called `<CarDetFlags>`, which identifies the fields required when making a booking. (This is instead of the `<RequestFlags>` field which is returned for UK products only).

For example: `<CarDetFlags>` NNNNNNNNNNNNNNNNNN `</CarDetFlags>`

 The order of the flags is always the same, and refers to these parameters respectively:

  | Position | Parameter | Data Type | Format | Additional Information                            |
  | -------- | -------------- | ---------------- | -----------                                                                        |
  {% include_relative _car_det_flags.md -%}
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
https://api.holidayextras.com/carpark/LHH6?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1
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
https://api.holidayextras.com/carpark/MU01?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG
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
