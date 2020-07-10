---

---

# Book Car Park

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > [Make Booking](/hxapi/parking/bkg)

## Car Park Booking Request

### Method

POST

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/carpark/CarParkCode
```

For example, for _Maple Manor Meet and Greet at London Gatwick North terminal_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/carpark/LGW4
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

| Name            | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------|-----------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber      | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Password        | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                  |
| Initials        | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| key             | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| token           | String    | [0-9] 9 chars     | Y          | This is the same token used in the availability request.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalDate     | Date      | YYYY-MM-DD        | Y          | Date customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ArrivalTime     | Time      | HHMM              | Y          | Time customer drops vehicle at car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| DepartDate      | Date      | YYYY-MM-DD        | Y          | Date customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DepartTime      | Time      | HHMM              | Y          | Time customer picks up vehicle from car park.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| NumberOfPax     | Integer   | [0-9] 2 chars     | Y          | Number of passengers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Title           | String    | [A-Z] 4 chars     | Y          | Title of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Initial         | String    | [A-Z] 1 chars     | Y          | Initial of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Surname         | String    | [A-Z] 20 chars    | Y          | Surname of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Address[]       | String    | [A-Z0-9] 25 chars | Y          | First line of address (house name / number and road) of lead passenger <br>If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on.<br>NB: This field can be set to NA                                                                                                                                                                                                                           |
| Town            | String    | [A-Z] 20 chars    | Y          | Town of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| County          | String    | [A-Z] 20 chars    | Y          | County of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| PostCode        | String    | [A-Z0-9] 10 chars | Y          | Post code of address <br>NB: This field can be set to NA                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Email           | String    | [A-Z0-9] 50 chars | Y          | Email of lead passenger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| PriceCheckFlag  | String    | Y                 | Y          | Indicates a price check will be carried out prior to booking. <br>If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price. |
| PriceCheckPrice | Float     | [0-9]             | Y          | Price of the product, received from the availability request or price check.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| System          | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                                                                                                                                                                                                                                                                                                                                                                   |

### Request flags

When you receive the availability response, it will indicate which request flags are required to be sent as part of the booking request.

The request flags differ depending on the product's region and the supplier's requirements. A summary is below, but please see the relevant sections in the [availability endpoint documentation](/hxapi/parking/av/airport).

#### UK Products

The `<RequestFlags>` field dictates which fields need to be sent as part of the booking request.

#### European Products

The availability response will return a list of 18 flags in the `<CarDetFlags>` field with a yes/no response to indicate if required. The order of the flags is always the same.

### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

### Booking Terms and Conditions

It is important that the customer has access to the Terms and Conditions at the time of placing their booking and after. We highly recommend that these are made clear to the customer _before_ booking.

For European products, please use the following link:
```
http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
```

If you require translations of Terms and Conditions into other languages, you can simply change ``/de-hx/`` (German) into ``nl-hx`` (Dutch), ``it-hex`` (Italian), ``pt-hx`` (Portuguese), ``fr-hx`` (French), ``es-hx`` (Spanish) or ``en-hx`` (English).


## Car Park Booking Response

The car park booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                   | Additional Information                                                                                                                                                                                        |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Booking/BookingRef      | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q). |
| Booking/AgentComm       | Commission you have earned from this booking.                                                                                                                                                                 |
| CarDetails              | Confirmation of the vehicle details that were sent in the booking request.                                                                                                                                    |
| CarDetails/Registration |                                                                                                                                                                                                               |
| CarDetails/CarMake      |                                                                                                                                                                                                               |
| CarDetails/CarModel     |                                                                                                                                                                                                               |
| CarDetails/CarColour    |                                                                                                                                                                                                               |
| CarDetails/OutFlight    |                                                                                                                                                                                                               |
| CarDetails/Destination  |                                                                                                                                                                                                               |
| CarDetails/MobileNum    |                                                                                                                                                                                                               |
| ClientDetails           | Confirmation of the lead passenger's details that were sent in the booking request.                                                                                                                           |
| ClientDetails/Title     |                                                                                                                                                                                                               |
| ClientDetails/Initials  |                                                                                                                                                                                                               |
| ClientDetails/Surname   |                                                                                                                                                                                                               |
| ClientDetails/Email     |                                                                                                                                                                                                               |
| HandlingFee             | Any booking fees that are applicable for processing this transaction. Currently, we do not charge for processing bookings, so this figure will be zero.                                                       |
| MoreInfoURL             | The URL for viewing the booking. See [view booking](/hxapi/viewamendcancel/view) for more details.                                                                                                            |
| CarPark                 | Details of the car park that were sent in the booking request.                                                                                                                                                |
| CarPark/ArrivalDate     |                                                                                                                                                                                                               |
| CarPark/DepartDate      |                                                                                                                                                                                                               |
| CarPark/ArrivalTime     |                                                                                                                                                                                                               |
| CarPark/DepartTime      |                                                                                                                                                                                                               |
| CarPark/Duration        |                                                                                                                                                                                                               |
| CarPark/NumberOfPax     |                                                                                                                                                                                                               |
| CarPark/ReturnFlight    |                                                                                                                                                                                                               |
| CarPark/Code            |                                                                                                                                                                                                               |
| CarPark/TotalPrice      |                                                                                                                                                                                                               |
| CarPark/Name            |                                                                                                                                                                                                               |
| CarPark/introduction    | Production description text                                                                                                                                                                                   |
| CarPark/logo            | Product logo. Prepend with `https:`                                                                                                                                                                           |
| CarPark/RequiresQRCode  | Whether the QR Code needs to be used for this carpark, instead of the barcode                                                                                                                                 |
| CarPark/BookingUrl      | Prepend with `https://api.holidayextras.co.uk/`                                                                                                                                                               |
| CarPark/MoreInfoUrl     | Prepend with `https://api.holidayextras.co.uk/`                                                                                                                                                               |
| BarCode                 | URL to the barcode for the booking. Prepend with `https://api.holidayextras.co.uk/`                                                                                                                           |
| QRCode                  | URL to the QR code for the booking. Prepend with `https://api.holidayextras.co.uk/`                                                                                                                           |
| API_Header/Request      | A list of parameters that were sent in the booking request.                                                                                                                                                   |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response.

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

## Worked Examples

Below are worked examples of both the request and response for booking car parking.

### UK Products Booking Request

```html
https://api.holidayextras.co.uk/carpark/LGW4
```

```xml
    <Request>
        <ABTANumber>YourABTA</ABTANumber>
        <Password>YourPassword</Password>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <token>YourToken</token>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <ArrivalTime>1200</ArrivalTime>
        <DepartDate>2017-12-08</DepartDate>
        <DepartTime>1200</DepartTime>
        <NumberOfPax>1</NumberOfPax>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
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
    </Request>
```

### UK Products Booking Response

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="5" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <AgentComm>7.25</AgentComm>
        <VATonComm>0.00</VATonComm>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=HPABCDE&amp;product_type=carparks</PdfUrl>
    </Booking>
    <CarDetails>
        <Registration>TE17 STS</Registration>
        <CarMake>RANGE ROVER</CarMake>
        <CarModel>EVOQUE</CarModel>
        <CarColour>WHITE</CarColour>
        <OutFlight>EZY8985</OutFlight>
        <Destination>MUNICH</Destination>
        <MobileNum/>
    </CarDetails>
    <ClientDetails>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Email>test@test.com</Email>
    </ClientDetails>
    <HandlingFee>0.00</HandlingFee>
    <MoreInfoURL>/booking/YourBookingRef</MoreInfoURL>
    <CarPark>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <DepartDate>2017-12-08</DepartDate>
        <ArrivalTime>1200</ArrivalTime>
        <DepartTime>1200</DepartTime>
        <Duration>7</Duration>
        <NumberOfPax>1</NumberOfPax>
        <ReturnFlight>EZY8982</ReturnFlight>
        <Code>LGW4</Code>
        <TotalPrice>57.99</TotalPrice>
        <Name>Maple Manor Meet and Greet North</Name>
        <introduction>With 20 years' experience in providing a great service, Maple Manor Meet and Greet parking is a firm favourite with our customers and it's easy to see why. One of their professional, insured chauffeurs will meet you at the North terminal and park your car for you in a secured car park while you catch your flight. It couldn't be simpler and all for this low price. We only sell airport-approved Meet and Greet services and Maple Manor is no exception.</introduction>
        <advance_purchase>1</advance_purchase>
        <logo>//d1xcii4rs5n6co.cloudfront.net/libraryimages/LGW4_LGV0_LGT9_LGY8_thumbnail_logo.png</logo>
        <RequiresQRCode>0</RequiresQRCode>
        <BookingURL>/carpark/LGW4</BookingURL>
        <MoreInfoURL>/product/LGW4</MoreInfoURL>
    </CarPark>
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
            <Title>MR</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
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
        </Request>
    </API_Header>
</API_Reply>
```

### European Products Booking Request

```
https://api.holidayextras.co.uk/carpark/MU01
```

```xml
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
            <Title>HERR</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address>123 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <PostCode>TE12 3ST</PostCode>
            <Email>test@test.com</Email>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>35.00</PriceCheckPrice>
            <System>ABG</System>
            <OutFltNo>EZY8982</OutFltNo>
            <InFltNo>EZY8985</InFltNo>
            <InFltTime>1130</InFltTime>
        </Request>
```

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test@holidayextras.com&booking_ref=HPABCDE&product_type=carparks&ABTANumber=WT314&Password=redacted&key=mytestkey

### European Products Booking Response

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="4" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <PdfUrl>/v1/confirmation?email=test%40test.com&amp;booking_ref=FRABCDE&amp;product_type=carparks</PdfUrl>
    </Booking>
    <MoreInfoURL>/carpark/YourBookingRef.de</MoreInfoURL>
    <CarPark>
        <ArrivalDate>2017-12-01</ArrivalDate>
        <DepartDate>2017-12-08</DepartDate>
        <ArrivalTime>1200</ArrivalTime>
        <DepartTime>1200</DepartTime>
        <Duration>7</Duration>
        <NumberOfPax>1</NumberOfPax>
        <ReturnFlight/>
        <CarDetFlags>NNNNNNNNYYNYNNNNNN</CarDetFlags>
        <Code>MU01</Code>
        <Name>Parkservice Sky München</Name>
        <BookingURL>/carpark/MU01.de</BookingURL>
        <MoreInfoURL>/product/MU01.de</MoreInfoURL>
        <TotalPrice>35.00</TotalPrice>
        <GatePrice>0.00</GatePrice>
    </CarPark>
    <BarCode>/barcode/YourBookingRef.png?key=YourKey</BarCode>
    <ClientDetails>
        <Title>HERR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Email>TEST@TEST.COM</Email>
        <Town>TESTVILLE</Town>
        <Postcode>TE12 3ST</Postcode>
        <DayPhone>TBC</DayPhone>
        <Remarks/>
        <Address0>123 TEST STREET</Address0>
        <DataProtection>Y</DataProtection>
        <County>TESTSHIRE</County>
        <Confirmation>Y</Confirmation>
    </ClientDetails>
    <Pricing>
        <TotalPrice>35.00</TotalPrice>
    </Pricing>
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
            <Title>HERR</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address>123 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <PostCode>TE12 3ST</PostCode>
            <Email>test@test.com</Email>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>35.00</PriceCheckPrice>
            <System>ABG</System>
            <OutFltNo>EZY8982</OutFltNo>
            <InFltNo>EZY8985</InFltNo>
            <InFltTime>1130</InFltTime>
        </Request>
    </API_Header>
</API_Reply>
```

The `PdfUrl` field contains a URL that can be used to retrieve a PDF copy of
the confirmation email. Note that you will need to append the fields
`ABTANumber`, `Password` and `key` to the link in order to authenticate.

Example: https://api.holidayextras.co.uk/sandbox/v1/confirmation?email=test%40holidayextras.com&booking_ref=FRABCDE&product_type=carparks&ABTANumber=WT314&Password=redacted&key=mytestkey
