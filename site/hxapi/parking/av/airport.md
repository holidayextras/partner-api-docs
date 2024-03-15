---

---

# Availability At Airport

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > request:[Availability by Airport](/hxapi/parking/av/airport)

## Airport Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/carpark/AirportCode
```

For example, for London Gatwick the endpoint is:

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/carpark/LGW
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/carpark/LGW.js
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

To find the airport locations available for car parking, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type | Format                                  | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                        |
|-------------|-----------|-----------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber  | String    | [A-Z0-9] 5 chars                        | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                               |
| Password    | String    | [A-Z0-9] 5 chars                        | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                               |
| Initials    | String    | [A-Z] 3 chars                           | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                         |
| key         | String    | [A-Z]                                   | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                           |
| token       | String    | [0-9] 9 chars                           | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                                                                                                                                                                                                    |
| ArrivalDate | Date      | YYYY-MM-DD                              | Y          | Date customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                      |
| ArrivalTime | Time      | HHMM                                    | Y          | Time customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                      |
| DepartDate  | Date      | YYYY-MM-DD                              | Y          | Date customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                 |
| DepartTime  | Time      | HHMM                                    | Y          | Time customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                 |
| NumberOfPax | Integer   | [0-9] 2 chars                           | N          | Number of passengers.                                                                                                                                                                                                                                                                                                                         |
| OutFlight   | String    | [A-Z0-9] 9 chars                        | N          | This is also known as an 'flight number'. <br>Used to establish which terminal the customer is flying from using our look up tool and return products specific to that terminal.                                                                                                                                                              |
| Terminal    | String    | [A-Z1-9] 1 char                         | N          | An optional field when requesting hotel and parking that will filter the availble results to those that serve the given terminal. Terminal options can be found using the [Terminal](/hxapi/terminal) request, where the name of the terminal is a word only the first character is needed for this request ( eg. N for the North terminal ). |
{% include_relative _filter.md -%}
| fields      | String    | [A-Z] a csv list of product info fields | N          | A list of product info fields can be passed in to return configurable product information e.g. `fields=name,address,latitude,sellingpoint`.                                                                                                                                                                                                   |
| top3        | Boolean   | [0,1]                                   | N          | If a value of `1` is passed in for the top3 param, then a maximum of three car parks will be returned, one on airport, one park and ride, and one meet and greet.                                                                                                                                                                             |
| System      | String    | [A-Z] 3 chars                           | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                |
| lang        | String    | [A-Z] 2 chars                           | Y*         | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)                                                                                                                                                                                                                                    |


## Airport Availability Response

The airport availability response will return all the products that have availability at the requested location on specific dates and durations. A summary of the request received can be found in the header field at the end of the response.

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
| CarPark/Filter                    | We have a filter mechanism on our site, to show particular types of product, such as Meet and Greet. The filters that apply to a product are returned here. Possible values are: `meet_and_greet`, `recommended`, `terminal`, `on_airport`, `valet_included`, `car_parked_for_you`, `park_and_stroll` and `park_and_ride`.                                                                                                                                                                                                                                                                                                                                                 |
| Pricing/CreditCardSurcharge       | NB: This is only relevant for Intermediary Agents in Europe, where Holiday Extras is responsible for processing the payment, not the Agent. <br>The first step in the calculation is to determine the credit card surcharge payable (x), based on the value of the booking, using this formula: <br>x = (TotalPrice + the CanxWaiver) / 100 x CCardSurchargePercent <br>Second, to prevent the surcharge from exceeding certain boundaries we have min and max thresholds, which can be calculated as follows: <br>if x < CCardSurchargeMin; <br>x = CCardSurchargeMin <br>else if x > CCardSurchargeMax; <br>x = CCardSurchargeMax |
| Pricing/CancellationWaiver/Waiver | We provide an optional cancellation waiver. If this is not added then cancellation will incur a fee. This returns the cancellation fee cost.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| API_Header/Request                | The API returns every parameter and value you sent in the previous request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

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

NB: Where length restrictions have been noted in the above formats, any additional characters present in a field will be ignored.

## Worked Examples

Below are worked examples of both the request and response for availability at an airport.

### UK Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/carpark/LGW?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2020-01-07&ArrivalTime=1200&DepartDate=2020-01-08&DepartTime=1200&NumberOfPax=1
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/carpark/LGW.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2020-01-07&ArrivalTime=1200&DepartDate=2020-01-08&DepartTime=1200&NumberOfPax=1
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}


### UK Products Availability Response

NB: This is a shortened example compiled from a full availability response.

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK" cached="1" expires="2019-12-06 17:31:56">
  <CarPark>
    <Name>Purple Parking - all terminals</Name>
    <Code>LGV9</Code>
    <BookingURL>/carpark/HPLGV9</BookingURL>
    <MoreInfoURL>/product/LGV9</MoreInfoURL>
    <RequestFlags>
      <CarColour>1</CarColour>
      <CarMake>1</CarMake>
      <CarModel>1</CarModel>
      <Registration>1</Registration>
      <ReturnFlight>1</ReturnFlight>
    </RequestFlags>
    <NonDiscPrice>20.99</NonDiscPrice>
    <TotalPrice>19.94</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CanAmendCantCancel>0</CanAmendCantCancel>
    <Filter>
      <meet_and_greet>0</meet_and_greet>
      <park_and_ride>1</park_and_ride>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
    <advance_purchase>1</advance_purchase>
  </CarPark>
  <CarPark>
    <Name>Purple Parking Flexible - all terminals</Name>
    <Code>LGV4</Code>
    <BookingURL>/carpark/HPLGV4</BookingURL>
    <MoreInfoURL>/product/LGV4</MoreInfoURL>
    <RequestFlags>
      <CarColour>1</CarColour>
      <CarMake>1</CarMake>
      <CarModel>1</CarModel>
      <Registration>1</Registration>
      <ReturnFlight>1</ReturnFlight>
    </RequestFlags>
    <NonDiscPrice>23.99</NonDiscPrice>
    <TotalPrice>22.79</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CanAmendCantCancel>0</CanAmendCantCancel>
    <Filter>
      <meet_and_greet>0</meet_and_greet>
      <park_and_ride>1</park_and_ride>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
  </CarPark>
  <CarPark>
    <Name>Purple Parking Winter Special</Name>
    <Code>LGB3</Code>
    <BookingURL>/carpark/HPLGB3</BookingURL>
    <MoreInfoURL>/product/LGB3</MoreInfoURL>
    <RequestFlags>
      <CarColour>1</CarColour>
      <CarMake>1</CarMake>
      <CarModel>1</CarModel>
      <Registration>1</Registration>
      <ReturnFlight>1</ReturnFlight>
    </RequestFlags>
    <NonDiscPrice>21.59</NonDiscPrice>
    <TotalPrice>20.94</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CanAmendCantCancel>0</CanAmendCantCancel>
    <Filter>
      <meet_and_greet>0</meet_and_greet>
      <park_and_ride>1</park_and_ride>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
  </CarPark>
  <Pricing>
    <CCardSurchargePercent>0.00</CCardSurchargePercent>
    <CCardSurchargeMin>0.00</CCardSurchargeMin>
    <CCardSurchargeMax>0.00</CCardSurchargeMax>
    <DCardSurchargePercent>0.00</DCardSurchargePercent>
    <DCardSurchargeMin>0.00</DCardSurchargeMin>
    <DCardSurchargeMax>0.00</DCardSurchargeMax>
    <CancellationWaiver>
      <Waiver>1.69</Waiver>
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
      <ArrivalDate>2020-01-07</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2020-01-08</DepartDate>
      <DepartTime>1200</DepartTime>
      <NumberOfPax>1</NumberOfPax>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "ATTRIBUTES": {
      "Product": "CarPark",
      "RequestCode": 1,
      "Result": "OK",
      "cached": true,
      "expires": "2019-12-06 17:33:10"
    },
    "CarPark": [
      {
        "ATTRIBUTES": [],
        "Name": "Purple Parking - all terminals",
        "Code": "LGV9",
        "BookingURL": "/carpark/HPLGV9.js",
        "MoreInfoURL": "/product/LGV9.js",
        "_latitude": 51.142779,
        "_longitude": -0.211795,
        "RequestFlags": {
          "CarColour": 1,
          "CarMake": 1,
          "CarModel": 1,
          "Registration": 1,
          "ReturnFlight": 1
        },
        "NonDiscPrice": 20.99,
        "TotalPrice": 19.94,
        "GatePrice": "0.00",
        "CanAmendCantCancel": "",
        "Filter": {
          "meet_and_greet": "0",
          "park_and_ride": 1,
          "car_parked_for_you": 1
        },
        "advance_purchase": true
      },
      {
        "ATTRIBUTES": [],
        "Name": "Purple Parking Flexible - all terminals",
        "Code": "LGV4",
        "BookingURL": "/carpark/HPLGV4.js",
        "MoreInfoURL": "/product/LGV4.js",
        "_latitude": 51.142957,
        "_longitude": -0.211055,
        "RequestFlags": {
          "CarColour": 1,
          "CarMake": 1,
          "CarModel": 1,
          "Registration": 1,
          "ReturnFlight": 1
        },
        "NonDiscPrice": 23.99,
        "TotalPrice": 22.79,
        "GatePrice": "0.00",
        "CanAmendCantCancel": "",
        "Filter": {
          "meet_and_greet": "0",
          "park_and_ride": 1,
          "car_parked_for_you": 1
        }
      },
      {
        "ATTRIBUTES": [],
        "Name": "Purple Parking Winter Special",
        "Code": "LGB3",
        "BookingURL": "/carpark/HPLGB3.js",
        "MoreInfoURL": "/product/LGB3.js",
        "_latitude": 51.142557,
        "_longitude": -0.210561,
        "RequestFlags": {
          "CarColour": 1,
          "CarMake": 1,
          "CarModel": 1,
          "Registration": 1,
          "ReturnFlight": 1
        },
        "NonDiscPrice": 21.59,
        "TotalPrice": 20.94,
        "GatePrice": "0.00",
        "CanAmendCantCancel": "",
        "Filter": {
          "meet_and_greet": "0",
          "park_and_ride": 1,
          "car_parked_for_you": 1
        }
      }
    ],
    "Pricing": {
      "CCardSurchargePercent": "0.00",
      "CCardSurchargeMin": "0.00",
      "CCardSurchargeMax": "0.00",
      "DCardSurchargePercent": "0.00",
      "DCardSurchargeMin": "0.00",
      "DCardSurchargeMax": "0.00",
      "CancellationWaiver": [
        {
          "Waiver": 1.69
        }
      ]
    },
    "SepaID": "",
    "API_Header": {
      "Request": {
        "ABTANumber": "YourABTANumber",
        "Password": "YourPassword",
        "Initials": "YourInitials",
        "key": "YourKey",
        "token": "YourToken",
        "ArrivalDate": "2020-01-07",
        "ArrivalTime": 1200,
        "DepartDate": "2020-01-08",
        "DepartTime": 1200,
        "NumberOfPax": 1,
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}

### European Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/carpark/MUC?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/carpark/MUC.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### European Products Availability Response

NB: This is a shortened example compiled from a full availability response.

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK" cached="1" expires="2019-12-06 18:07:40">
  <CarPark>
    <Name>Airparks Parkplatz München Frühbucher</Name>
    <Code>MUCC</Code>
    <BookingURL>/carpark/FRMUCC</BookingURL>
    <MoreInfoURL>/product/MUCC</MoreInfoURL>
    <RequestFlags/>
    <NonDiscPrice>46.00</NonDiscPrice>
    <TotalPrice>46.00</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CancellationRule>0</CancellationRule>
    <CarDetFlags>NNNNNNNNNNNNNNNNNN</CarDetFlags>
    <CarDetails>Y</CarDetails>
    <DiscDates/>
    <Filter>
      <car_parked_for_you>1</car_parked_for_you>
      <meet_and_greet>0</meet_and_greet>
      <park_and_stroll/>
      <on_airport/>
      <recommended/>
      <special_offer_text>1</special_offer_text>
      <valet_included>0</valet_included>
      <park_and_ride>1</park_and_ride>
    </Filter>
  </CarPark>
  <CarPark>
    <Name>Parkservice Sky München</Name>
    <Code>MU01</Code>
    <BookingURL>/carpark/FRMU01</BookingURL>
    <MoreInfoURL>/product/MU01</MoreInfoURL>
    <RequestFlags/>
    <NonDiscPrice>28.00</NonDiscPrice>
    <TotalPrice>28.00</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CancellationRule>0</CancellationRule>
    <CarDetFlags>NNNNNNNNYYNYNNNNNN</CarDetFlags>
    <CarDetails>Y</CarDetails>
    <DiscDates/>
    <Filter>
      <car_parked_for_you>0</car_parked_for_you>
      <meet_and_greet>0</meet_and_greet>
      <park_and_stroll/>
      <on_airport/>
      <recommended/>
      <special_offer_text>0</special_offer_text>
      <valet_included>0</valet_included>
      <park_and_ride>1</park_and_ride>
    </Filter>
  </CarPark>
  <CarPark>
    <Name>Parkservice Sky München Winteraktion</Name>
    <Code>MU03</Code>
    <BookingURL>/carpark/FRMU03</BookingURL>
    <MoreInfoURL>/product/MU03</MoreInfoURL>
    <RequestFlags/>
    <NonDiscPrice>39.99</NonDiscPrice>
    <TotalPrice>39.99</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <CancellationRule>0</CancellationRule>
    <CarDetFlags>NNNNNNNNYYNYNNNNNN</CarDetFlags>
    <CarDetails>Y</CarDetails>
    <DiscDates/>
    <Filter>
      <car_parked_for_you>0</car_parked_for_you>
      <meet_and_greet>0</meet_and_greet>
      <park_and_stroll/>
      <on_airport/>
      <recommended/>
      <special_offer_text>1</special_offer_text>
      <valet_included>0</valet_included>
      <park_and_ride>1</park_and_ride>
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
      <ArrivalDate>2020-01-07</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2020-01-08</DepartDate>
      <DepartTime>1200</DepartTime>
      <NumberOfPax>1</NumberOfPax>
      <System>ABG</System>
      <lang>en</lang>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "ATTRIBUTES": {
      "Product": "CarPark",
      "RequestCode": 1,
      "Result": "OK",
      "cached": true,
      "expires": "2019-12-06 18:26:33"
    },
    "CarPark": [
      {
        "ATTRIBUTES": [],
        "Name": "Airparks Parkplatz München Frühbucher",
        "Code": "MUCC",
        "BookingURL": "/carpark/FRMUCC.js",
        "MoreInfoURL": "/product/MUCC.js",
        "_latitude": 48.35101,
        "_longitude": 11.8348,
        "RequestFlags": {},
        "NonDiscPrice": 46,
        "TotalPrice": 46,
        "GatePrice": "0.00",
        "CancellationRule": "0",
        "CarDetFlags": "NNNNNNNNNNNNNNNNNN",
        "CarDetails": "Y",
        "DiscDates": "",
        "Filter": {
          "car_parked_for_you": 1,
          "meet_and_greet": "0",
          "park_and_stroll": "",
          "on_airport": null,
          "recommended": null,
          "special_offer_text": 1,
          "valet_included": "0",
          "park_and_ride": 1
        }
      },
      {
        "ATTRIBUTES": [],
        "Name": "Parkservice Sky München",
        "Code": "MU01",
        "BookingURL": "/carpark/FRMU01.js",
        "MoreInfoURL": "/product/MU01.js",
        "_latitude": 48.384242,
        "_longitude": 11.778148,
        "RequestFlags": {},
        "NonDiscPrice": 28,
        "TotalPrice": 28,
        "GatePrice": "0.00",
        "CancellationRule": "0",
        "CarDetFlags": "NNNNNNNNYYNYNNNNNN",
        "CarDetails": "Y",
        "DiscDates": "",
        "Filter": {
          "car_parked_for_you": "0",
          "meet_and_greet": "0",
          "park_and_stroll": "",
          "on_airport": null,
          "recommended": null,
          "special_offer_text": "0",
          "valet_included": "0",
          "park_and_ride": 1
        }
      },
      {
        "ATTRIBUTES": [],
        "Name": "Parkservice Sky München Winteraktion",
        "Code": "MU03",
        "BookingURL": "/carpark/FRMU03.js",
        "MoreInfoURL": "/product/MU03.js",
        "_latitude": 48.384242,
        "_longitude": 11.778148,
        "RequestFlags": {},
        "NonDiscPrice": 39.99,
        "TotalPrice": 39.99,
        "GatePrice": "0.00",
        "CancellationRule": "0",
        "CarDetFlags": "NNNNNNNNYYNYNNNNNN",
        "CarDetails": "Y",
        "DiscDates": "",
        "Filter": {
          "car_parked_for_you": "0",
          "meet_and_greet": "0",
          "park_and_stroll": "",
          "on_airport": null,
          "recommended": null,
          "special_offer_text": 1,
          "valet_included": "0",
          "park_and_ride": 1
        }
      }
    ],
    "Pricing": {
      "CCardSurchargePercent": "0.00",
      "CCardSurchargeMin": "0.00",
      "CCardSurchargeMax": "0.00"
    },
    "SepaID": "DE11ZZZ00000633860",
    "API_Header": {
      "Request": {
        "ABTANumber": "YourABTANumber",
        "Password": "YourPassword",
        "Initials": "YourInitials",
        "key": "YourKey",
        "token": "YourToken",
        "ArrivalDate": "2020-01-07",
        "ArrivalTime": 1200,
        "DepartDate": "2020-01-08",
        "DepartTime": 1200,
        "NumberOfPax": 1,
        "System": "ABG",
        "lang": "en",
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}





