---

---

# Amend Booking - Personal Details No Reprice















## /booking/foo

where foo is the booking reference

e.g. http://api.holidayextras.co.uk/v1/booking/ABCDE

This request is required if you need to update any personal details to a booking, but it will not amend a booking where it is likely to reprice.


You are advised to look up a booking first using the View API - and store the existing parameters for a booking.
Pass through any parameter that the Customer wants to change.
Pass through any existing parameter that the Customer is not changing.


### Parameters

 | Name            | Type   | Format        | Required | Example                       | 
 | ----            | ----   | ------        | -------- | -------                       | 
 | ABTANumber      | String | [A-Z][0-9]    | Y        | foo - this is your agent code | 
 | key             | String | [A-Z][0-9]    | Y        | yourkey                       | 
 | token           | String | [A-Z][0-9]    | Y        | yourtoken                     | 
 | Registration    | String | [A-Z][0-9]    | Y        | AB12CDE                       | 
 | CarMake         | String | [A-Z][0-9]    | Y        | TEST MAKE                     | 
 | CarModel        | String | [A-Z][0-9]    | Y        | TEST MODEL                    | 
 | CarColour       | String | [A-Z][0-9]    | Y        | WHITE                         | 
 | OutFlight       | String | [A-Z][0-9]    | Y        | AB123                         | 
 | MobileNum       | Int    | [0-9]         | Y        | 0123456789                    | 
 | Destination     | String | [A-Z][0-9]    | Y        | SOMEWHERE                     | 
 | DepartTerminal  | String | [A-Z][0-9]    | Y        | N                             | 
 | ArrivalTerminal | String | [A-Z][0-9]    | Y        | 4                             | 
 | CarDropoffTime  | Int    | HHII[0-9]     | Y        | 1200                          | 
 | CarPickupTime   | Int    | HHII[0-9]     | Y        | 1500                          | 
 | Title           | String | [A-Z][0-9]    | Y        | MR                            | 
 | Initial         | String | [A-Z][0-9]    | Y        | T                             | 
 | Surname         | String | [A-Z][0-9]    | Y        | TEST                          | 
 | Address[]       | String | [A-Z][0-9]    | Y        | TEST STREET                   | 
 | Town            | String | [A-Z][0-9]    | Y        | TEST TOWN                     | 
 | County          | String | [A-Z][0-9]    | Y        | TEST COUNTY                   | 
 | PostCode        | String | [A-Z][0-9]    | Y        | AB12 3CD                      | 
 | Email           | String | [A-Z][0-9]    | Y        | test@test.com                 | 
 | DayPhone        | Int    | [A-Z][0-9]    | Y        | 0123456789                    | 
 | EvePhone        | Int    | [A-Z][0-9]    | Y        | 0123456789                    | 
 | CustRef         | String | [A-Z][0-9]    | Y        | TESTREF                       | 
 | Confirmation    | String | [A-Z][0-9]{1} | Y        | Y                             | 
 | System          | String | [A-Z]{3}      | Y*       | ABG                           | 


*System is only required if you are using the European System and you will need to pass in ABG

## Confirm amend

This request actually changes the details of the booking. It is a good idea to ask the customer to confirm the changes before making this request. Use the booking details retrieved from a request 7 to prepopulate the form.













### Request

```
POST /booking/REF HTTP/1.1
Host: api.holidayextras.co.uk
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 297

ABTANumber=FOO&Title=MR&Initial=T&Surname=TEST&Address[]=TEST&Town=TEST&County=TEST&PostCode=TEST&DayPhone=0123456789&EvePhone=0123456789&Email=test%40test.com&Registration=AB12CDE&CarMake=Test Make&CarModel=Test Model&CarColour=WHITE&OutFlight=AB123&MobileNum=0123456789&Destination=Maldives&&DepartTerminal=S&ArrivalTerminal=1&CarDropOffTime=1200&key=mytestkey&AmendNoReprice=1&Confirmation=Y&token=generate

```



### Reply

```xml
<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="General" Customer="A" Session="999999999" RequestCode="24" Result="OK">
    <Ident>
        <BookingRef>TESTREF</BookingRef>
    </Ident>
    <Itinerary>
        <ReturnFlight></ReturnFlight>
        <Remarks></Remarks>
    </Itinerary>
    <CarDetails>
        <Registration></Registration>
        <CarMake></CarMake>
        <CarModel></CarModel>
        <CarColour></CarColour>
        <OutFlight></OutFlight>
        <MobileNum></MobileNum>
        <Destination></Destination>
        <OutTerminal></OutTerminal>
        <RetTerminal></RetTerminal>
        <CarDropOffTime></CarDropOffTime>
        <CarPickupTime></CarPickupTime>
        <Pax></Pax>
    </CarDetails>
    <ClientDetails>
        <Title>MRS</Title>
        <Initial>J</Initial>
        <Surname>TEST</Surname>
        <Address>TEST</Address>
        <Town>TEST</Town>
        <County>TEST</County>
        <PostCode>TEST</PostCode>
        <DayPhone>0123456789</DayPhone>
        <EvePhone>0123456789</EvePhone>
        <Confirmation>Y</Confirmation>
        <DataProtection>Y</DataProtection>
        <EMail>jackie.king@holidayextras.com</EMail>
        <CustRef></CustRef>
    </ClientDetails>
    <API_Header>
        <Request>
            <ABTANumber>WEB1</ABTANumber>
            <Title>MRS</Title>
            <Initial>J</Initial>
            <Surname>TEST</Surname>
            <Address>TEST</Address>
            <Town>TEST</Town>
            <County>TEST</County>
            <PostCode>TEST</PostCode>
            <DayPhone>0123456789</DayPhone>
            <EvePhone>0123456789</EvePhone>
            <Email>jackie.king@holidayextras.com</Email>
            <key>mytestkey</key>
            <AmendNoReprice>1</AmendNoReprice>
            <Confirmation>Y</Confirmation>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

