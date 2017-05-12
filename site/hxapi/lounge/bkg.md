---

---

# Make booking at lounge



To make a booking, the request type must be a POST. It must be made over HTTPS. Intermediaries will be sending credit card information, agents will send their login details. Therefore HTTPS is required in both instances.

If you do not send the `<ABTANumber>` field, your booking will not be tracked to your agent code. For agent bookings, the `<Password>` field is also required, intermediaries do not have a password.


To retrieve all details about the booking, perform a GET request to view the booking at the location specified in `<MoreInfoURL>`. [Instructions on how to view a booking](/hxapi/viewamendcancel/view).

## /lounge/foo

where foo is the lounge code returned from the availability request.

e.g. /lounge/LHRSA1










### Parameters

#### Intermediary

 | Name           | Data Type | Format       | Required | 
 | ----           | --------- | ------       | -------- | 
 | ABTANumber     | String    | [A-Z0-9]{5}  | Y        | 
 | Initials       | String    | [A-Z]{3}     | N        | 
 | ArrivalDate    | Date      | YYYY-MM-DD   | Y        | 
 | ArrivalTime    | Time      | HHMM         | Y        | 
 | LoungeCode     | String    | [A-Z0-9]{6}  | Y        | 
 | Adults         | Integer   |              | Y        | 
 | Children       | Integer   |              | N        | 
 | Infants        | Integer   |              | N        | 
 | Remarks        | Text      |              | N        | 
 | Title          | String    |              | Y        | 
 | Initial        | String    | [A-Z]{1}     | Y        | 
 | Surname        | String    |              | Y        | 
 | Address[]      | String    |              | Y        | 
 | Town           | String    |              | Y        | 
 | County         | String    |              | Y        | 
 | PostCode       | String    |              | Y        | 
 | DayPhone       | String    |              | Y        | 
 | Email          | String    |              | Y        | 
 | DataProtection | String    | Y/N          | Y+       | 
 | CardHolder     | String    |              | Y        | 
 | CardNumber     | String    | [0-9]{14-16} | Y        | 
 | StartDate      | Date      | MMYY         | N*       | 
 | ExpiryDate     | Date      | MMYY         | Y        | 
 | IssueNumber    | Integer   |              | N*       | 
 | CV2            | Integer   | [0-9]{3}     | Y±      | 
 | key            | String    |              | Y        | 
 | token          | String    | [0-9]{9}     | Y        | 


* Only required for debit card purchases where card has one.

+ DataProtection field - Does the customer opt out of receiving offers from Holiday Extras. Y = Yes, data is protected, N = Will receive offers.

± Bookings will still be processed without passing CV2, but please code your applications as if this field were mandatory.

#### Agent

 | Name        | Data Type | Format      | Required | 
 | ----        | --------- | ------      | -------- | 
 | ABTANumber  | String    | [A-Z0-9]{5} | Y        | 
 | Password    | String    | [A-Z0-9]{5} | N        | 
 | Initials    | String    | [A-Z]{3}    | N        | 
 | ArrivalDate | Date      | YYYY-MM-DD  | Y        | 
 | ArrivalTime | Time      | HHMM        | Y        | 
 | LoungeCode  | String    | [A-Z0-9]{6} | Y        | 
 | Adults      | Integer   |             | Y        | 
 | Children    | Integer   |             | N        | 
 | Infants     | Integer   |             | N        | 
 | Remarks     | Text      |             | N        | 
 | Title       | String    |             | Y        | 
 | Initial     | String    | [A-Z]{1}    | Y        | 
 | Surname     | String    |             | Y        | 
 | key         | String    |             | Y        | 
 | token       | String    | [0-9]{9}    | Y        | 




### Request

AGENT EXAMPLE

```

GET /sandbox/v1/carpark/MANES1 HTTP/1.1

http://api.holidayextras.co.uk/sandbox/v1/lounge/MANES1?
ABTANumber=*****&
Adults=2&
ArrivalDate=2015-10-24&
ArrivalTime=1000&
Children=0&
Infants=0&
Initial=T&
Initials=CG&
Password=*****&
Surname=Test&
Title=Mr&
key=*****&
method=POST&
token=012345678


###  Response

<API_Reply Product="Lounge" RequestCode="5" Result="OK"><Booking>
<BookingRef>J7A44</BookingRef>
<AgentComm>3.42-</AgentComm>
<VATonComm>0.57-</VATonComm>
<MoreInfoURL>/sandbox/v1/booking/J7A44</MoreInfoURL>
</Booking>
<API_Header>
<Request>
<ABTANumber>*****</ABTANumber>
<Adults>2</Adults>
<ArrivalDate>2015-10-24</ArrivalDate>
<ArrivalTime>1000</ArrivalTime>
<Children>0</Children>
<Infants>0</Infants>
<Initial>T</Initial>
<Initials>CG</Initials>
<Password>*****</Password>
<Surname>Test</Surname>
<Title>Mr</Title>
<key>******</key>
<method>POST</method>
<token>012345678</token>
<v>1</v>
</Request>
</API_Header>
</API_Reply>

