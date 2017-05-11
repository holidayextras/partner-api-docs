---

---

# Make an insurance booking

This must be a POST, as you are making a booking. It must be made over HTTPS. Intermediaries will be sending credit card information, Agents will send their login details so HTTPS is required in both instances.

If you do not send the ABTANumber field (for agent code) then your booking will not be tracked to your agent code. The Password field is currently **not** required, intermediaries do not have a password.


## /insurancepolicy/foo

where foo is the destination code
e.g. /insurancepolicy/EUROPE

### Method

POST








### Parameters

#### Intermediary

 | Name        | Data Type | Format              | Required | 
 | ----        | --------- | ------              | -------- | 
 | Address     | array     |                     | Y        | 
 | CardHolder  | string    | Mr T Test           | Y        | 
 | CardNumber  | string    | 4111 1111 1111 1111 | Y        | 
 | DateOfBirth | date      | 1972-07-27          | Y        | 
 | Email       | email     | test@test.com       | Y        | 
 | EndDate     | date      | 2009-03-01          | Y        | 
 | ExpiryDate  | date      | 2009-07-10          | Y        | 
 | Initial     | string    | T                   | Y        | 
 | PostCode    | string    | T1 1TT              | Y        | 
 | SchemeCode  | string    | DPR08               | Y        | 
 | SchemePrice | float     | 33.01               | Y        | 
 | StartDate   | date      | 2009-02-22          | Y        | 
 | Surname     | string    | Test                | Y        | 
 | Title       | string    | Mr                  | Y        | 
 | key         | string    | my_test_key         | Y        | 
 | token       | string    | [0-9]{9}            | Y        | 
 | ABTANumber  | string    | X1234               | N        | 


### Request

#### Intermediary

```

POST /v1/insurancepolicy/EUROPE HTTP/1.1

Host: api.holidayextras.co.uk

...

Content-Type: application/x-www-form-urlencoded

Content-Length: 198


Address[]=1 Test St&Address[]=Testchester&Address[]=Testshire&CardHolder=Mr T Test&CardNumber=4111 1111 1111 1111&DateOfBirth[]=1972-07-27&Email=test%40test.com&EndDate=2009-02-29&ExpiryDate=1010&Initial[]=T&PostCode=T1 1TT&SchemeCode=DPR08&SchemePrice=33.01&StartDate=2009-02-22&Surname[]=Test&Title[]=Mr&key=foo&token=000015778
```

### Reply

#### Intermediary

<code xml><API_Reply>
    <Itinerary>
    <Destination>EUROPE</Destination>
    <DestNum>2</DestNum>
    <StartDate>2009-02-22</StartDate>
    <EndDate>2009-03-01</EndDate>
    </Itinerary>
    <Booking>
    <RefNum>DPR080000012077</RefNum>
    <SchemeCode>DPR08</SchemeCode>
    </Booking>
    <PartyNames p="1">
    <PartyTitle>MR</PartyTitle>
    <PartyInit>T</PartyInit>
    <PartySurname>TEST</PartySurname>
    <PartyDOB>1972-07-27</PartyDOB>
    </PartyNames>
    <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Address a="1">1 TEST ST</Address>
    <Address a="2">TESTCHESTER</Address>
    <Address a="3">TESTSHIRE</Address>
    <Postcode>T1 1TT</Postcode>
    <Email>TEST@TEST.COM</Email>
    </ClientDetails>
    <API_Header>
    <Request>
      <Address>1 Test St</Address>
      <Address>Testchester</Address>
      <Address>Testshire</Address>
      <CardHolder>Mr T Test</CardHolder>
      <CardNumber>4111 1111 1111 1111</CardNumber>
      <DateOfBirth>1972-07-27</DateOfBirth>
      <Email>test@test.com</Email>
      <EndDate>2009-03-01</EndDate>
      <ExpiryDate>2009-07-10</ExpiryDate>
      <Initial>T</Initial>
      <PostCode>T1 1TT</PostCode>
      <SchemeCode>DPR08</SchemeCode>
      <SchemePrice>33.01</SchemePrice>
      <StartDate>2009-02-22</StartDate>
      <Surname>Test</Surname>
      <Title>Mr</Title>
      <key>foo</key>
      <token>000015778</token>
    </Request>
    </API_Header>
</API_Reply></code>


