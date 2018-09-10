---

---

# Book Lounge

## Lounge Booking Request

### Method

POST

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/lounge/LoungeCode
```

For example, for _Plaza Premium T5 lounge - 3 hours at London Heathrow Airport_ the endpoint is:

```
https://api.holidayextras.co.uk/v1/lounge/LHRPA5
```

### Request Parameters

The parameters _must_ be sent in the body of the request, as `x-www-form-urlencoded` data.

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | --------- | -------- | ---------------------- |
 | ABTANumber  | String  | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.|
 | Password    | String  | [A-Z0-9] 5 chars | N*       | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up.|
 | Initials    | String  | [A-Z] 3 chars | N  | The initials of the Operator / Agent. |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | This is the same token used in the availability request. |
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        | Date customer wishes to enter the lounge. |
 | ArrivalTime | Time    | HHMM                                   | Y        | Time customer wishes to enter the lounge.|
 | Adults      | Integer | [0-4] 1 char | Y        | Number of adults requiring entry to the lounge. Please note: a maximum of 4 passengers is permitted on any one booking. |
 | Children    | Integer | [0-3] 1 char | N        | Number of children requiring entry to the lounge. Please note: a maximum of 4 passengers is permitted on any one booking. |
 | Title | String | [0-9] 4 chars | Y        | Title of lead passenger|
 | Initial | String | [A-Z] 1 chars | Y        | Initial of lead passenger|
 | Surname | String | [0-9] 20 chars | Y        | Surname of lead passenger|
 | Address[] | String | [0-9] 20 chars | Y        | First line of address (house name / number and road) of lead passenger <br>If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on.<br>NB: This field can be set to NA|
 | Town | String | [0-9] 4 chars | Y        | Town of address <br>NB: This field can be set to NA|
 | County | String | [0-9] 4 chars | Y        | County of address <br>NB: This field can be set to NA|
 | PostCode | String | [0-9] 4 chars | Y        | Post code of address <br>NB: This field can be set to NA|
 | Email | String | [0-9] 4 chars | Y        | Email of lead passenger|
 | MobileNum | String | [0-9] 15 char | Y | Mobile phone number of lead passenger. |
 | PriceCheckFlag | String | Y | Y        | Indicates a price check will be carried out prior to booking. <br>If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price.|
 | PriceCheckPrice | Float | [0-9] | Y        | Price of the product, received from the availability request or price check. |
 | System      | String  | [A-Z] 3 chars | Y*       | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only). |

### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.


## Lounge Booking Response

The lounge booking response will confirm that a booking has been placed in our system.

For a detailed explanation of the fields returned, please see below:

| Field                | Additional Information |
| ----                 | ---------------------- |
| Booking/BookingRef  | This is the reference for this booking. It must be referred to in all communication with us concerning this booking. <br>NB: Our booking references are up to 12 char alphanumeric (including 1/I and 0/O/Q).|
| Booking/AgentComm  | Commission you have earned from this booking. |
| Booking/MoreInfoURL  | The URL for viewing the booking. See [view booking](/hxapi/viewamendcancel/view) for more details. |
| API_Header/Request  | A list of parameters that were sent in the booking request. |

## Booking Confirmation

We expect partners to create their own booking confirmations to send to customers, using the information provided in the booking response.

However, we also have capability to send booking confirmation emails ourselves on behalf of partners. This feature is not available as standard, and so if you wish to enable this please speak to your Account Manager.

## Worked Examples

Below are worked examples of both the request and response for booking a lounge.

### UK Products Booking Request

```
https://api.holidayextras.co.uk/v1/lounge/LHRPO3
```

```xml
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
        <Infants>0</Infants>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Address>123 Test Street</Address>
        <Town>Testville</Town>
        <County>Testshire</County>
        <PostCode>TE12 3ST</PostCode>
        <Email>test@test.com</Email>
        <MobileNum>01234567890</MobileNum>
        <PriceCheckFlag>Y</PriceCheckFlag>
        <PriceCheckPrice>70.00</PriceCheckPrice>
    </Request>
```

### UK Products Booking Response

```xml
<?xml version="1.0"?>
<API_Reply Product="Lounge" RequestCode="5" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <AgentComm>7.00</AgentComm>
        <VATonComm>0.00</VATonComm>
        <MoreInfoURL>/v1/booking/YourBookingRef</MoreInfoURL>
    </Booking>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <Initials>YourInitials</Initials>
            <ArrivalDate>2018-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <Adults>2</Adults>
            <Children>0</Children>
            <Infants>0</Infants>
            <Title>Mr</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address>123 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <PostCode>TE12 3ST</PostCode>
            <Email>test@test.com</Email>
            <MobileNum>01234567890</MobileNum>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>70.00</PriceCheckPrice>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### European Products Booking Request

```
https://api.holidayextras.co.uk/v1/lounge/HAMLHL
```

```xml
    <Request>
        <ABTANumber>YourABTANumber</ABTANumber>
        <Password>YourPassword</Password>
        <Initials>YourInitials</Initials>
        <key>YourKey</key>
        <token>YourToken</token>
        <System>ABG</System>
        <ArrivalDate>2018-12-01</ArrivalDate>
        <ArrivalTime>1200</ArrivalTime>
        <Adults>2</Adults>
        <Children>0</Children>
        <Infants>0</Infants>
        <Title>MR</Title>
        <Initial>T</Initial>
        <Surname>TEST</Surname>
        <Address>123 Test Street</Address>
        <Town>Testville</Town>
        <County>Testshire</County>
        <PostCode>TE12 3ST</PostCode>
        <Email>test@test.com</Email>
        <MobileNum>01234567890</MobileNum>
        <PriceCheckFlag>Y</PriceCheckFlag>
        <PriceCheckPrice>70.00</PriceCheckPrice>
    </Request>
```

### European Products Booking Response

```xml
<?xml version="1.0"?>
<API_Reply Product="Lounge" RequestCode="5" Result="OK">
    <Booking>
        <BookingRef>YourBookingRef</BookingRef>
        <AgentComm>5.44</AgentComm>
        <VATonComm>0.00</VATonComm>
        <MoreInfoURL>/v1/booking/YourBookingRef</MoreInfoURL>
    </Booking>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <Initials>YourInitials</Initials>
            <key>YourKey</key>
            <token>YourToken</token>
            <System>ABG</System>
            <ArrivalDate>2018-12-01</ArrivalDate>
            <ArrivalTime>1200</ArrivalTime>
            <Adults>2</Adults>
            <Children>0</Children>
            <Infants>0</Infants>
            <Title>Mr</Title>
            <Initial>T</Initial>
            <Surname>TEST</Surname>
            <Address>123 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <PostCode>TE12 3ST</PostCode>
            <Email>test@test.com</Email>
            <MobileNum>01234567890</MobileNum>
            <PriceCheckFlag>Y</PriceCheckFlag>
            <PriceCheckPrice>70.00</PriceCheckPrice>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
