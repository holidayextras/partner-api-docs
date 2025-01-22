---

---

# Amend-no-reprice

This must be a POST, as you are amending a booking. It must be made over HTTPS, you must enforce this.

Unlike the normal amend process, you will not be asked for confirmation before completing this. There is only one request to send for amend-no-reprice

## /booking/YourBookingRef


### Method

POST

### Parameters

 | Name           | Data Type | Format     | Required |
 | ----           | --------- | ------     | -------- |
 | StartCustomer  | String    | [0-9]{6}   | Y        |
 | BusinessUnit   | String    | [0-9]{3}   | Y        |
 | Operator       | String    | [A-Z]{3}   | Y        |
 | BookingRef     | String    | [A-Z0-9] {5,12} | Y        |
 | ReturnFlight   |           | [A-Z0-9] {10} | N        |
 | Remarks        | String    | [A-Z0-9] {60} | N        |
 | Pax            | Number    | [0-9] {2} | N        |
 | Registration   | String    | [A-Z0-9] {20} | Y        |
 | CarMake        | String    | [A-Z0-9] {20} | N        |
 | CarModel       | String    | [A-Z0-9] {20} | N        |
 | CarColour      | String    | [A-Z0-9] {20} | N        |
 | OutFltNo       | String    | [A-Z0-9] {10} | N        |
 | InFltNo        | String    | [A-Z0-9] {10} | N        |
 | OutFltTime     | Number    | HHMM       | N        |
 | InFltTime      | Number    | HHMM       | N        |
 | OutTerminal    |           | [A-Z0-9] {4} | N        |
 | RetTerminal    |           | [A-Z0-9] {4} | N        |
 | ShipName       |           | [A-Z0-9] {20} | N        |
 | PierName       |           | [A-Z0-9] {20} | N        |
 | ChildSeat      | Boolean   | [Y/N] | N        |
 | AddlServices   | Boolean   | [Y/N]| N        |
 | MobileNum      |           | [A-Z0-9] {15} | N        |
 | CarDropoffTime | Number    | HHMM       | N        |
 | CarPickupTime  | Number    | HHMM       | N        |
 | Title          | String    | [A-Z] {4}| Y        |
 | Initial        | String    | [A-Z] {1} | Y        |
 | Surname        | String    | [A-Z] {15} | Y        |
 | Address        | Striing   | [A-Z0-9] {25} | N        |
 | Town           | String    | [A-Z0-9] {20} | N        |
 | County         | String    | [A-Z0-9] {20} | N        |
 | PostCode       | String    | [A-Z0-9] {10} | N        |
 | DayPhone       |           | [A-Z0-9] {20} | N        |
 | EvePhone       |           | [A-Z0-9] {20} | N        |
 | Confirmation   | Boolean   | [Y/N]      | Y        |
 | DataProtection | Boolean   | [Y/N] | N        |
 | Email          | String    | [A-Z0-9] {50}| N        |
 | InvoiceReqd    | Boolean   | [Y/N]| N        |
 | TaxType        | String    | [A-Z0-9] {2} | N        |
 | TaxLocation    | String    | [A-Z0-9] {3} | N        |
 | InvLanguage    | String    | [A-Z0-9] {2} | N        |
 | InvHouseNo     | Integer   | [0-9] {4}    | N        |
 | InvCountry     | String    | [A-Z0-9] {20} | N        |
 | InvStreet      | String    | [A-Z0-9] {20} | N        |
 | InvTown        | String    | [A-Z0-9] {20} | N        |
 | InvPostcode    | String    | [A-Z0-9] {10} | N        |
 | InvCompany     | String    | [A-Z0-9] {40} | N        |
 | CustVATNo      | String    | [A-Z0-9] {10} | N        |
 | SupplierVATId  | String    | [A-Z0-9] {15} | N        |
 | InvTitle      | String    | [A-Z0-9] {4} | N        |
 | InvFirstName      | String    | [A-Z0-9] {20} | N        |
 | InvSurname      | String    | [A-Z0-9] {15} | N        |
 | InvEmail      | String    | [A-Z0-9] {50} | N        |


### Requests

znt -> api
```
https://api-sandbox.holidayextras.com/de-start/v1/booking/10524994/?BookingRef=FBKM6&BusinessUnit=001&CarDropoffTime=1200&CarPickupTime=1300&Confirmation=Y&County=testcountyaenderung&Email=test.email&Initial=T&Operator=BJT&Remarks=test&Surname=Testnameaenderung&Title=Herr&TraveltainmentCustomer=111111&holidayextras.com=&key=YourKey
```

api -> chauntry

```xml
<API_Request System="ABG" Version="1.0" Product="General" Customer="A" RequestCode="24" Session="999999999">
    <Agent>
        <TraveltainmentCustomer>111111</TraveltainmentCustomer>
        <BusinessUnit>001</BusinessUnit>
        <Operator>BJT</Operator>
        <ZNT>Y</ZNT>
    </Agent>
    <Ident>
        <BookingRef>FBKM6</BookingRef>
    </Ident>
    <Itinerary>
        <ReturnFlight></ReturnFlight>
        <Remarks>test</Remarks>
    </Itinerary>
    <CarDetails>
        <Registration></Registration>
        <Pax></Pax>
        <Make></Make>
        <Model></Model>
        <Colour></Colour>
        <OutFltNo></OutFltNo>
        <InFltNo></InFltNo>
        <OutFltTime></OutFltTime>
        <InFltTime></InFltTime>
        <OutTerminal></OutTerminal>
        <RetTerminal></RetTerminal>
        <ShipName></ShipName>
        <PierName></PierName>
        <ChildSeat></ChildSeat>
        <AddlServices></AddlServices>
        <MobileNum></MobileNum>
        <ArrivalTime>1200</ArrivalTime>
        <DepartTime>1300</DepartTime>
    </CarDetails>
    <ClientDetails>
        <Title>Herr</Title>
        <Initial>T</Initial>
        <Surname>Testnameaenderung</Surname>
        <Town></Town>
        <County>testcountyaenderung</County>
        <PostCode></PostCode>
        <DayPhone></DayPhone>
        <EvePhone></EvePhone>
        <Confirmation>Y</Confirmation>
        <DataProtection></DataProtection>
        <EMail>test.email</EMail>
        <InvoiceReqd></InvoiceReqd>
        <ProdTaxType></ProdTaxType>
        <ProdTaxLocation></ProdTaxLocation>
        <SupplierVatId></SupplierVatId>
        <InvLanguage></InvLanguage>
        <InvTitle>Herr</InvTitle>
        <InvFirstName>T</InvFirstName>
        <InvSurname>Testnameaenderung</InvSurname>
        <InvHouseNo></InvHouseNo>
        <InvStreet></InvStreet>
        <InvTown></InvTown>
        <InvPostCode></InvPostCode>
        <InvCountry></InvCountry>
        <InvCompany></InvCompany>
        <CustVatNo></CustVatNo>
        <InvEmail>test.email</InvEmail>
    </ClientDetails>
</API_Request>
```

chauntry -> api

```xml
<API_Reply System="ABG" Version="1.0" Product="General" Customer="A" Session="999999999" RequestCode="24" Result="OK">
    <AGENT>
        <TRAVELTAINMENTCUSTOMER>111111</TRAVELTAINMENTCUSTOMER>
        <BUSINESSUNIT>001</BUSINESSUNIT>
        <OPERATOR>BJT</OPERATOR>
        <ZNT>Y</ZNT>
    </AGENT>
    <IDENT>
        <BOOKINGREF>FBKM6</BOOKINGREF>
    </IDENT>
    <ITINERARY>
        <RETURNFLIGHT/>
        <REMARKS>TEST</REMARKS>
    </ITINERARY>
    <CARDETAILS>
        <REGISTRATION/>
        <PAX/>
        <MAKE/>
        <MODEL/>
        <COLOUR/>
        <OUTFLTNO/>
        <INFLTNO/>
        <OUTFLTTIME/>
        <INFLTTIME/>
        <OUTTERMINAL/>
        <RETTERMINAL/>
        <SHIPNAME/>
        <PIERNAME/>
        <CHILDSEAT/>
        <ADDLSERVICES/>
        <MOBILENUM/>
        <ARRIVALTIME>1200</ARRIVALTIME>
        <DEPARTTIME>1300</DEPARTTIME>
    </CARDETAILS>
    <CLIENTDETAILS>
        <TITLE>HERR</TITLE>
        <INITIAL>T</INITIAL>
        <SURNAME>TESTNAMEAENDERUNG</SURNAME>
        <TOWN/>
        <COUNTY>TESTCOUNTYAENDERUNG</COUNTY>
        <POSTCODE/>
        <DAYPHONE/>
        <EVEPHONE/>
        <CONFIRMATION>Y</CONFIRMATION>
        <DATAPROTECTION/>
        <EMAIL>test.email</EMAIL>
        <INVOICEREQD/>
        <PRODTAXTYPE/>
        <PRODTAXLOCATION/>
        <SUPPLIERVATID/>
        <INVLANGUAGE/>
        <INVTITLE>HERR</INVTITLE>
        <INVFIRSTNAME>T</INVFIRSTNAME>
        <INVSURNAME>TESTNAMEAENDERUNG</INVSURNAME>
        <INVHOUSENO/>
        <INVSTREET/>
        <INVTOWN/>
        <INVPOSTCODE/>
        <INVCOUNTRY/>
        <INVCOMPANY/>
        <CUSTVATNO/>
        <INVEMAIL>TOM.PRICE</INVEMAIL>
    </CLIENTDETAILS>
    <API_Header>
        <Request>
            <BookingRef>FBKM6</BookingRef>
            <BusinessUnit>001</BusinessUnit>
            <CarDropoffTime>1200</CarDropoffTime>
            <CarPickupTime>1300</CarPickupTime>
            <Confirmation>Y</Confirmation>
            <County>testcountyaenderung</County>
            <Email>test.email</Email>
            <Initial>T</Initial>
            <Operator>BJT</Operator>
            <Remarks>test</Remarks>
            <Surname>Testnameaenderung</Surname>
            <Title>Herr</Title>
            <TraveltainmentCustomer>111111</TraveltainmentCustomer>
            <holidayextras_com/>
            <key>YourKey</key>
            <system>de</system>
            <System>ABG</System>
        </Request>
    </API_Header>
</API_Reply>
```

api -> znt

Note this is the same as request chauntry -> api

```xml
<API_Reply System="ABG" Version="1.0" Product="General" Customer="A" Session="999999999" RequestCode="24" Result="OK">
    <AGENT>
        <TRAVELTAINMENTCUSTOMER>111111</TRAVELTAINMENTCUSTOMER>
        <BUSINESSUNIT>001</BUSINESSUNIT>
        <OPERATOR>BJT</OPERATOR>
        <ZNT>Y</ZNT>
    </AGENT>
    <IDENT>
        <BOOKINGREF>FBKM6</BOOKINGREF>
    </IDENT>
    <ITINERARY>
        <RETURNFLIGHT/>
        <REMARKS>TEST</REMARKS>
    </ITINERARY>
    <CARDETAILS>
        <REGISTRATION/>
        <PAX/>
        <MAKE/>
        <MODEL/>
        <COLOUR/>
        <OUTFLTNO/>
        <INFLTNO/>
        <OUTFLTTIME/>
        <INFLTTIME/>
        <OUTTERMINAL/>
        <RETTERMINAL/>
        <SHIPNAME/>
        <PIERNAME/>
        <CHILDSEAT/>
        <ADDLSERVICES/>
        <MOBILENUM/>
        <ARRIVALTIME>1200</ARRIVALTIME>
        <DEPARTTIME>1300</DEPARTTIME>
    </CARDETAILS>
    <CLIENTDETAILS>
        <TITLE>HERR</TITLE>
        <INITIAL>T</INITIAL>
        <SURNAME>TESTNAMEAENDERUNG</SURNAME>
        <TOWN/>
        <COUNTY>TESTCOUNTYAENDERUNG</COUNTY>
        <POSTCODE/>
        <DAYPHONE/>
        <EVEPHONE/>
        <CONFIRMATION>Y</CONFIRMATION>
        <DATAPROTECTION/>
        <EMAIL>test.email</EMAIL>
        <INVOICEREQD/>
        <PRODTAXTYPE/>
        <PRODTAXLOCATION/>
        <SUPPLIERVATID/>
        <INVLANGUAGE/>
        <INVTITLE>HERR</INVTITLE>
        <INVFIRSTNAME>T</INVFIRSTNAME>
        <INVSURNAME>TESTNAMEAENDERUNG</INVSURNAME>
        <INVHOUSENO/>
        <INVSTREET/>
        <INVTOWN/>
        <INVPOSTCODE/>
        <INVCOUNTRY/>
        <INVCOMPANY/>
        <CUSTVATNO/>
        <INVEMAIL>TOM.PRICE</INVEMAIL>
    </CLIENTDETAILS>
    <API_Header>
        <Request>
            <BookingRef>FBKM6</BookingRef>
            <BusinessUnit>001</BusinessUnit>
            <CarDropoffTime>1200</CarDropoffTime>
            <CarPickupTime>1300</CarPickupTime>
            <Confirmation>Y</Confirmation>
            <County>testcountyaenderung</County>
            <Email>test.email</Email>
            <Initial>T</Initial>
            <Operator>BJT</Operator>
            <Remarks>test</Remarks>
            <Surname>Testnameaenderung</Surname>
            <Title>Herr</Title>
            <TraveltainmentCustomer>111111</TraveltainmentCustomer>
            <holidayextras_com/>
            <key>YourKey</key>
            <system>de</system>
            <System>ABG</System>
        </Request>
    </API_Header>
</API_Reply>
```




### Request Fields Explained

Any fields sent through in the level 24 request will amend what is saved to chips

Fields include:

BookingRef - Reference of the booking which is to be amended

Address - An array of address lines to replace the current address

Pax - Number of passengers

#### Invoice Only Fields

lang - Language for the invoice

HouseNumber

Country

Company

CustomerVAT
