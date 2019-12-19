---

---


# Amend Booking - complex (with reprice)

[API Docs](/hxapi/) > product:[amend](/hxapi/viewamendcancel/amend_complex)

The booking details that can be changed for a complex amend are as follows:

- Arrival date or time;
- Depart date or time.


## Amend Booking Request

We recommend using the [view booking](/hxapi/viewamendcancel/view) method first, to ensure that you have all the details required from the most up to date record of the booking.

You can then run a GET booking request using the amend endpoint and methodology detailed here to check the new amount (increase / decrease in price from original booking).

### Method

POST

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

```
https://api.holidayextras.co.uk/v1/booking/YourBookingRef
```

### Request Parameters

NB: All parameter names are case sensitive.

For all amend booking requests, you will need to send these parameters:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
| Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
| Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
| key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
| Email | String | [A-Z0-9] 50 chars | Y        | Email address used to make the booking (i.e. the email address of the lead passenger)|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

In order to amend the booking with the new details, you only need to pass in the specific parameters you want to amend. For a complex amend these are as follows:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| ArrivalDate | Date    | YYYY-MM-DD                             | Y        | Date customer drops vehicle at car park. |
| ArrivalTime | Time    | HHMM                                   | Y        | Time customer drops vehicle at car park.|
| DepartDate  | Date    | YYYY-MM-DD                             | Y        | Date customer picks up vehicle from car park.|
| DepartTime  | Time    | HHMM                                   | Y        | Time customer picks up vehicle from car park.|


## Amend Booking Response

The amend booking response will return the booking record with all of the updated details.

For a detailed explanation of the fields returned, please see the respective booking requests for [hotels](/hxapi/hotel/bkg), [parking](/hxapi/parking/bkg) and [lounges](/hxapi/lounge/bkg).

## Worked Examples

Below are worked examples of both the request and response for amending (complex) a booking.

### Amend Booking Request (complex for a hotel)

The original booking was made for a hotel staying on 1st December 2018 with 8 days parking.

```html
https://api.holidayextras.co.uk/booking/YourBookingRef
```

```xml
    <Request>
        <ABTANumber>YourABTA</ABTANumber>
        <Password>YourPassword</Password>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <ArrivalDate>2018-12-02</ArrivalDate>
        <ParkingDays>15</ParkingDays>
    </Request>
```

### Amend Booking Response (complex for a hotel)

```xml
<?xml version="1.0"?>
<API_Reply System="ABC" Version="1" Product="Hotel" Customer="A" Session="999999999" RequestCode="14" Result="OK">
    <CarDetails>
        <Registration>TEST123</Registration>
        <CarMake/>
        <CarModel/>
        <CarColour/>
        <OutFlight>TBC</OutFlight>
    </CarDetails>
    <ClientDetails>
        <Title>MRS</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Address/>
        <DataProtection>Y</DataProtection>
        <Email>test@test.com</Email>
    </ClientDetails>
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <PdfUrl>/v1/confirmation?email=test@test.com&booking_ref=YourBookingRef&product_type=hotels</PdfUrl>
        <AgentComm>931</AgentComm>
        <VATonComm/>
    </Booking>
    <Pricing>
        <OriginalPrice>93.10</OriginalPrice>
        <NewPrice>93.10</NewPrice>
        <CCardSurchargeAmount>0.00</CCardSurchargeAmount>
        <CanxWaiver>0.00</CanxWaiver>
        <AmendmentFee>N/A</AmendmentFee>
        <PriceDifference>N/A</PriceDifference>
    </Pricing>
    <Itinerary>
        <ArrivalDate>2018-12-02</ArrivalDate>
        <Nights>1</Nights>
        <BoardBasis>RO</BoardBasis>
        <Code>LHRMEP</Code>
        <CarDropoffTime>0000</CarDropoffTime>
        <CarPickupTime>0000</CarPickupTime>
        <CarPickupDate>2018-12-17</CarPickupDate>
        <ReturnFlight/>
        <TerminalCode/>
        <ParkingDays>15</ParkingDays>
        <ParkingSpaces>1</ParkingSpaces>
        <NonSmoking>Y</NonSmoking>
    </Itinerary>
    <Room>
        <Rooms>1</Rooms>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Price>93.10</Price>
        <Code>DBL</Code>
    </Room>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <ArrivalDate>2018-12-02</ArrivalDate>
            <Nights>1</Nights>
            <RoomCode>DBL</RoomCode>
            <ParkingDays>15</ParkingDays>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>93.10</PriceCheckPrice>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
