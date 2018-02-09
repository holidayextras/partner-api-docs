---

---

# Availability At Lounge

## Lounge Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/lounge/<airportCode>
```

For example, for lounge availability at Gatwick the endpoint is:

```
https://api.holidayextras.co.uk/v1/lounge/LGW
```

To find the airport locations available for lounges, please refer to the [locations endpoint.](/hxapi/locations)

### Request Parameters

NB: All parameter names are case sensitive.

| Name        | Data Type    | Format      | Mandatory? | Additional Information |
| ----        | ---------    | ------      | -----------| ---------------------- |
| ABTANumber  | String       | [A-Z0-9] 5 chars | Y     | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up. |
| Password    | String  | [A-Z0-9] 5 chars | Y*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
| Initials    | String  | [A-Z] 3 chars  | N        | The initials of the Operator / Agent. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| token       | String  | [0-9] 9 chars                         | Y        | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
| ArrivalDate | Date    | YYYY-MM-DD  | Y        | Date customer enters the lounge. |
| ArrivalTime | Time    | HHMM       | Y        | Time customer enters the lounge. |
| Adults      | Integer | [0-9] 1 char | Y        | Number of adults requiring entry to the lounge. |
| Children    | Integer | [0-9] 1 char | N        | Number of children requiring entry to the lounge. |
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |
| lang        | String  | [A-Z] 2 chars | Y*       | Required for requests for European products. (Values available are `en`, `de`, `it`, `es`, `pt` and `nl`.)|


## Lounge Availability Response

The lounge availability response will return the specific product requested, so long as it has availability on the specific dates and times. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:



 | Field                | Additional Information |
 | ----                 | ---------------------- |
 | Lounge/Price   | The price of product _without_ any surcharges/fees added. |
 | Lounge/NonDiscPrice | The non discounted price. Some agent codes apply a discount so we return this field to enable a comparison.|
 | Lounge/Name | The name of the lounge. |
 | Lounge/Code | The product code for the lounge, which must be used in the booking request. |
 | Lounge/BookingURL   | The URL to POST the booking request to for this particular product. |
 | Lounge/MoreInfoURL  | The link to more information about this product, sourced from the Product Library.|


## Worked Examples

Below are worked examples of both the request and response for availability at an airport.

### UK Products Availability Request

```
https://api.holidayextras.co.uk/v1/lounge/LHR?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2018-12-01&ArrivalTime=1200&Adults=2&Children=0
```

### UK Products Availability Response

```xml
<?xml version="1.0"?>
<API_Reply Product="Lounge" RequestCode="1" Result="OK" cached="1" expires="2018-01-11 12:24:54">
    <Lounge>
        <Name>Plaza Premium T5 lounge - 3 hours</Name>
        <Code>LHRPA5</Code>
        <BookingURL>/v1/lounge/HPLHRPA5</BookingURL>
        <MoreInfoURL>/v1/product/LHRPA5</MoreInfoURL>
        <NonDiscPrice>80.00</NonDiscPrice>
        <Price>80.00</Price>
        <terminal>5</terminal>
        <Filter>
            <landside>0</landside>
        </Filter>
        <option_count>14</option_count>
    </Lounge>
    <Lounge>
        <Name>No1 Lounge, Terminal 3, Heathrow</Name>
        <Code>LHRNN3</Code>
        <BookingURL>/v1/lounge/HPLHRNN3</BookingURL>
        <MoreInfoURL>/v1/product/LHRNN3</MoreInfoURL>
        <NonDiscPrice>64.00</NonDiscPrice>
        <Price>64.00</Price>
        <terminal>3</terminal>
        <Filter>
            <landside>0</landside>
        </Filter>
        <option_count>14</option_count>
    </Lounge>
    <Lounge>
        <Name>SkyTeam Lounge T4</Name>
        <Code>LHRSTE</Code>
        <BookingURL>/v1/lounge/HPLHRSTE</BookingURL>
        <MoreInfoURL>/v1/product/LHRSTE</MoreInfoURL>
        <NonDiscPrice>60.00</NonDiscPrice>
        <Price>60.00</Price>
        <terminal>4</terminal>
        <option_count>14</option_count>
    </Lounge>
    <Pricing>
        <CCardSurchargePercent>2.00</CCardSurchargePercent>
        <CCardSurchargeMin>0.00</CCardSurchargeMin>
        <CCardSurchargeMax>4.00</CCardSurchargeMax>
        <DCardSurchargePercent>0.00</DCardSurchargePercent>
        <DCardSurchargeMin>0.00</DCardSurchargeMin>
        <DCardSurchargeMax>0.00</DCardSurchargeMax>
        <CancellationWaiver>
            <Waiver>1.99</Waiver>
        </CancellationWaiver>
        <CancellationWaiver>
            <Waiver>1.99</Waiver>
        </CancellationWaiver>
        <Rates>
            <GBP>1</GBP>
            <EUR>1.1045</EUR>
            <USD>1.319</USD>
        </Rates>
    </Pricing>
    <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <Initials>YourInitials</Initials>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2018-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <Adults>2</Adults>
            <Children>0</Children>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### European Products Availability Request

```
https://api.holidayextras.co.uk/v1/lounge/HAM?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2018-12-01&ArrivalTime=1200&Adults=2&Children=0&System=ABG&lang=de
```

### European Products Availability Response

```xml
<?xml version="1.0"?>
<API_Reply Product="Lounge" RequestCode="1" Result="OK" cached="1" expires="2018-01-11 12:30:25">
    <Lounge>
        <Name>Hamburg Airport Lounge</Name>
        <Code>HAMLHL</Code>
        <BookingURL>/v1/lounge/FRHAMLHL</BookingURL>
        <MoreInfoURL>/v1/product/HAMLHL</MoreInfoURL>
        <NonDiscPrice>74.00</NonDiscPrice>
        <Price>74.00</Price>
        <terminal>Z</terminal>
        <option_count>1</option_count>
    </Lounge>
    <Pricing>
        <CCardSurchargePercent>0.00</CCardSurchargePercent>
        <CCardSurchargeMin>0.00</CCardSurchargeMin>
        <CCardSurchargeMax>0.00</CCardSurchargeMax>
        <Rates>
            <GBP>1</GBP>
            <EUR>1.1045</EUR>
            <USD>1.319</USD>
        </Rates>
    </Pricing>
    <SepaID/>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <Initials>YourInitials</Initials>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2018-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <Adults>2</Adults>
            <Children>0</Children>
            <System>ABG</System>
            <lang>de</lang>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
