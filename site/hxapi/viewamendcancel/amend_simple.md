---

---

# Amend Booking - simple (no reprice)

[API Docs](/hxapi/) > product:[amend](/hxapi/viewamendcancel/amend_simple)

The booking details that can be changed for a simple amend are as follows:

- Lead passenger name;
- Email address;
- In the case of parking or hotel plus parking bookings, car registration (and other car details);
- Flight numbers (if you are updating multiple flight numbers then you may prefer to use the [Flight Update](/hxapi/flightUpdate) method instead (which permits batch updates).


## Amend Booking Request

We recommend using the [view booking](/hxapi/viewamendcancel/view) method first, to ensure that you have all the details required from the most up to date record of the booking.

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
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
 | Email | String | [0-9] 4 chars | Y        | Email address used to make the booking (i.e. the email address of the lead passenger)|
| System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

In order to amend the booking with the new details, you only need to pass in the specific parameters you want to amend. For a simple amend these are as follows:

| Name        | Data Type    | Format | Mandatory? | Additional Information |
| ----        | ----    | --------- | -------- | ---------------------- |
| Title | String | [0-9] 4 chars | Y        | Title of lead passenger|
| Initial | String | [A-Z] 1 chars | Y        | Initial of lead passenger|
| Surname | String | [0-9] 20 chars | Y        | Surname of lead passenger|
| Address[] | String | [0-9] 20 chars | Y        | First line of address (house name / number and road) of lead passenger. NB: This field can be set to NA|
| Town | String | [0-9] 4 chars | Y        | Town of address. NB: This field can be set to NA|
| County | String | [0-9] 4 chars | Y        | County of address. NB: This field can be set to NA|
| PostCode | String | [0-9] 4 chars | Y        | Post code of address. NB: This field can be set to NA|
| Email | String | [0-9] 4 chars | Y        | The email address of customer. |

#### For parking bookings:

You may change any of the car details, as indicated in the [car park availability response.](/hxapi/parking/av/carpark)


## Amend Booking Response

The amend booking response will return the booking record with all of the updated details.

For a detailed explanation of the fields returned, please see the respective booking requests for [hotels](/hxapi/hotel/bkg), [parking](/hxapi/parking/bkg) and [lounges](/hxapi/lounge/bkg).

## Worked Examples

Below are worked examples of both the request and response for amending (simple) a booking.

### UK Products Amend Booking Request (simple for a car park)

The original booking was made with test details of Mr T TEST:

```html
https://api.holidayextras.co.uk/booking/YourBookingRef
```

```xml
    <Request>
        <ABTANumber>YourABTA</ABTANumber>
        <Password>YourPassword</Password>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <token>YourToken</token>
        <Title>MR</Title>
        <Initial>A</Initial>
        <Surname>TESTA</Surname>
        <Address>123 Test Street</Address>
        <Town>Testville</Town>
        <County>Testshire</County>
        <PostCode>TE12 3ST</PostCode>
        <Email>test@test.com</Email>
        <Registration>TE17 STS</Registration>
    </Request>
```

### UK Products Amend Booking Response (simple for a car park)

```xml
<?xml version="1.0"?>
<API_Reply System="ABC" Version="1" Product="CarPark" Customer="A" Session="999999999" RequestCode="14" Result="OK">
    <CarDetails>
        <Registration>TE17STS</Registration>
        <CarMake>RANGE ROVER</CarMake>
        <CarModel>EVOQUE</CarModel>
        <CarColour>WHITE</CarColour>
        <OutFlight>EZY8985</OutFlight>
    </CarDetails>
    <ClientDetails>
        <Title>MR</Title>
        <Initial>A</Initial>
        <Surname>TESTA</Surname>
        <Address>123 TEST STREET</Address>
        <DataProtection>Y</DataProtection>
        <Email>test@test.com</Email>
    </ClientDetails>
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=YourBookingRef&amp;product_type=carparks</PdfUrl>
    </Booking>
    <CarPark>
        <ArrivalDate>2018-12-01</ArrivalDate>
        <DepartDate>2018-12-08</DepartDate>
        <ArrivalTime>1200</ArrivalTime>
        <DepartTime>1200</DepartTime>
        <NumberOfPax>1</NumberOfPax>
        <ReturnFlight>EZY8982</ReturnFlight>
        <Duration>7</Duration>
        <Remarks/>
        <Code>MAR1</Code>
        <Name>APH</Name>
        <MoreInfoURL>/v1/product/MAR1</MoreInfoURL>
        <distance_to_airport/>
        <introduction>Holidays are about treating yourself and pushing the boat out. At APH Manchester, they believe you can have  a quality service and excellent security without it costing an arm and a leg. They also want to get you to the terminal swiftly - transfers take just five minutes, so you'll be at check-in with plenty of time to spend the pounds you've saved.</introduction>
        <logo>/imageLibrary/Images/manchester-aph-new-logo.jpg</logo>
        <BookingURL>/v1/carpark/MAR1</BookingURL>
        <Filter>
            <park_and_ride>1</park_and_ride>
            <meet_and_greet>0</meet_and_greet>
        </Filter>
    </CarPark>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <Initials>YourInitials</Initials>
            <key>YourKey</key>
            <token>YourToken</token>
            <ArrivalDate>2018-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <DepartDate>2018-12-08</DepartDate>
            <DepartTime>1200</DepartTime>
            <NumberOfPax>1</NumberOfPax>
            <Title>MR</Title>
            <Initial>A</Initial>
            <Surname>TESTA</Surname>
            <Address>123 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <PostCode>TE12 3ST</PostCode>
            <Email>test@test.com</Email>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>57.99</PriceCheckPrice>
            <CarColour>White</CarColour>
            <CarMake>Range Rover</CarMake>
            <CarModel>Evoque</CarModel>
            <Destination>Munich</Destination>
            <OutFlight>EZY8985</OutFlight>
            <OutTerminal>N</OutTerminal>
            <Registration>TE17 STS</Registration>
            <ReturnFlight>EZY8982</ReturnFlight>
            <ReturnTerminal>N</ReturnTerminal>
            <MobileNum>01234567890</MobileNum>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
