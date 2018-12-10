---

---

# Book Car Park - DE-Start method

## Car Park Booking Request

### Method

POST

### Endpoint

The endpoint to use is:

```
https://payment.holidayextras.co.uk/legacy/carpark/CarParkCode
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

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
| Registration  | String    | [A-Z0-9] 10 chars  | N §    | Vehicle registration number. |
| CarMake       | String    | [A-Z0-9] 10 chars  | N §    | The make of the car, e.g Audi. |
| CarModel      | String    | [A-Z0-9] 10 chars  | N §    | The model of the car, e.g. A6. |
| CarColour     | String    | [A-Z] 10 chars     | N §    | The colour of the car, e.g. black. |
| Title         | String    | [0-9] 4 chars  | Y          | Title of lead passenger. |
| Initial       | String    | [A-Z] 1 chars  | Y          | Initial of lead passenger. |
| Surname       | String    | [A-Z] 20 chars | Y          | Surname of lead passenger. |
| NumberOfPax   | Integer   | [0-9] 2 chars  | Y          | Number of passengers. |
| Remarks       | String    |  [A-Z0-9] 60 chars | N      | Any remarks the agent wishes to add to the booking. Please note, these are not passed through to the supplier. |

§ The fields required by the carpark are returned in the availability request, in the `<RequestFlags>` element.

### Request flags

When you receive the availability response, it will indicate which request flags are required to be sent as part of the booking request.

The request flags differ depending on the product's region and the supplier's requirements. A summary is below, but please see the relevant sections in the [availability endpoint documentation](/hxapi/de-start/airport).

### Payment

This existing integration does support direct encashment from retail customers. For more information please see the section on [Payment](/hxapi/payment).


## Car Park Booking Response

The car park booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q).|
| Booking/AgentComm  | Commission you have earned from this booking. |
| CarDetails  | Confirmation of the vehicle details that were sent in the booking request. |
| ClientDetails  | Confirmation of the lead passenger's details that were sent in the booking request. |
| HandlingFee  | Any booking fees that are applicable for processing this transaction. Currently, we do not charge for processing bookings, so this figure will be zero. |
| MoreInfoURL  | The URL for viewing the booking. |
| CarPark  | Details of the car park that were sent in the booking request. |
| API_Header/Request  | A list of parameters that were sent in the booking request. |


## Worked Examples

Below are worked examples of both the request and response for booking car parking using the DE-Start method.

### Car Park Booking Request - DE-Start method

```html
https://payment.holidayextras.co.uk/legacy/carpark/FRA8
```

```xml
    <Request>
        <StartCustomer>YourStartCustomer</StartCustomer>
        <BusinessUnit>YourBusinessUnit</BusinessUnit>
        <Operator>BJT</Operator>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <token>YourToken</token>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <ArrivalTime>1200</ArrivalTime>
        <DepartDate>2017-12-08</DepartDate>
        <DepartTime>1200</DepartTime>
        <NumberOfPax>1</NumberOfPax>
        <Registration>TE17 STS</Registration>
        <CarMake>Range Rover</CarMake>
        <CarModel>Evoque</CarModel>
        <CarColour>White</CarColour>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Remarks>Car Park Test</Remarks>
    </Request>
```

### Car Park Booking Response - DE-Start method

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="5" Result="OK">
  <Booking>
    <BookingRef>YourBookingRef</BookingRef>
    <AgentComm>5.47-</AgentComm>
    <VATonComm>0.87-</VATonComm>
    <StartRef>YourStartRef</StartRef>
  </Booking>
  <CarDetails>
    <Registration>TE17 STS</Registration>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <CustomerRef>N/A</CustomerRef>
    <Remarks>Car Park Test</Remarks>
  </ClientDetails>
  <API_Header>
    <Request>
      <StartCustomer>YourStartCustomer</StartCustomer>
      <BusinessUnit>YourBusinessUnit</BusinessUnit>
      <Operator>BJT</Operator>
      <Initials>YourInitials</Initials>
      <key>YourKey</key>
      <token>YourToken</token>
      <ArrivalDate>2017-12-01</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2017-12-08</DepartDate>
      <DepartTime>1200</DepartTime>
      <NumberOfPax>1</NumberOfPax>
      <Registration>TE17 STS</Registration>
      <CarMake>Range Rover</CarMake>
      <CarModel>Evoque</CarModel>
      <CarColour>White</CarColour>
      <Title>MR</Title>
      <Initial>T</Initial>
      <Surname>TEST</Surname>
      <Remarks>Car Park Test</Remarks>
      <debug>1</debug>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark>
    <ArrivalDate>01DEC18</ArrivalDate>
    <DepartDate>08DEC18</DepartDate>
    <ArrivalTime>1200</ArrivalTime>
    <DepartTime>1200</DepartTime>
    <Duration>8</Duration>
    <NumberOfPax>1</NumberOfPax>
    <Code>FRA8</Code>
    <BookingURL>/api/carpark/FRA8/debug</BookingURL>
    <MoreInfoURL>/api/product/FRA8/debug</MoreInfoURL>
  </CarPark>
</API_Reply>
```
