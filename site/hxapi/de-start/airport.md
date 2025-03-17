---

---

# Availability at Car Park - DE-Start method

## Car Park Availability Request

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/de-start/v1/carpark/CarParkCode
```

### Request Parameters

NB: All parameter names are case sensitive.

| Name          | Data Type | Format         | Mandatory? | Additional Information |
| ----          | --------- | -----------    | ---------- | ---------------------- |
| StartCustomer | String    | [0-9] 6 chars  | Y          | This will be assigned to you by your Account Manager during set up. |
| BusinessUnit  | String    | [0-9] 3 chars  | Y          | This will be assigned to you by your Account Manager during set up. |
| Operator      | String    | [A-Z] 3 chars  | Y          | This always defaults to `BJT`. |
| key           | String    | [A-Z] 10 chars | Y          | This will be assigned to you by your Account Manager during set up. |
| token         | String    | [0-9] 9 chars  | Y          | This is the same token used in the availability request. |
| ArrivalDate   | Date      | YYYY-MM-DD     | Y          | Date customer drops vehicle at car park. |
| ArrivalTime   | Time      | HHMM           | Y          | Time customer drops vehicle at car park.|
| DepartDate    | Date      | YYYY-MM-DD     | Y          | Date customer picks up vehicle from car park.|
| DepartTime    | Time      | HHMM           | Y          | Time customer picks up vehicle from car park.|
| NumberOfPax   | Integer   | [0-9] 2 chars  | Y          | Number of passengers. |


## Car Park Availability Response

The car park booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| CarPark/TotalPrice   | Amount payable by the customer. |
| CarPark/BookingURL   | The URL to POST the booking request to for this particular product. |
| CarPark/MoreInfoURL  | The link to more information about this product, sourced from the Product Library.|  
| API_Header/Request  | The API returns every parameter and value you sent in the previous request. |

## Worked Examples

Below are worked examples of both the request and response for availability for car parking using the DE-Start method.

### Car Park Availability Request - DE-Start method

```html
https://api.holidayextras.co.uk/de-start/sandbox/v1/carpark/FRA8?StartCustomer=YourStartCustomer&BusinessUnit=YourBusinessUnit&IInitials=BJT&ArrivalDate=2018-12-01&ArrivalTime=1200&DepartDate=2018-12-08&DepartTime=1400&NumberOfPax=1&key=YourKey&token=YourToken
```

### Car Park Availability Response - DE-Start method

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK">
  <CarPark c="1">
    <CarDetails>N</CarDetails>
    <TotalPrice>160.00</TotalPrice>
    <GatePrice>0.00</GatePrice>
    <Name>Airparks Parkhaus Frankfurt - Winterspecial</Name>
    <Code>FRA8</Code>
    <Filter>
      <recommended>1</recommended>
    </Filter>
    <BookingURL>/carpark/FRA2</BookingURL>
    <MoreInfoURL>/product/FRA2</MoreInfoURL>
  </CarPark>
  <API_Header>
    <Request>
      <StartCustomer>YourStartCustomer</StartCustomer>
      <BusinessUnit>YourBusinessUnit</BusinessUnit>
      <Initials>BJT</Initials>
      <ArrivalDate>2018-12-01</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2018-12-08</DepartDate>
      <DepartTime>1400</DepartTime>
      <NumberOfPax>1</NumberOfPax>
      <key>YourKey</key>
      <token>YourToken</token>
    </Request>
  </API_Header>
</API_Reply>
```
