---

---

# Insurance quote

## /insurancepolicy/foo

Where **foo** is the [region code](/hxapi/types/regioncode). Call this method to get available schemes, the next step is to [GET options](/hxapi/insuranceretail/options).

### Method

GET

### Parameters

 | Name        | Format | Required | Notes                                                                                                   | 
 | ----        | ------ | -------- | -----                                                                                                   | 
 | key         | String | Y        |                                                                                                         | 
 | ABTANumber  | String | Y        |                                                                                                         | 
 | Password    | String | Y        |                                                                                                         | 
 | birthDate[] | Array  | Y        | age[] is also accepted, but will use only year with today's date as the customer's day & month of birth | 
 | StartDate   | Date   | Y        |                                                                                                         | 
 | EndDate     | Date   | Y        |                                                                                                         | 

### Request

```
http://api.holidayextras.co.uk/v1/sandbox/insurancepolicy/EUROPELOW?ABTANumber=FOO&Password=FOO&StartDate=2012-10-10&EndDate=2012-10-20&key=foo&birthDate[0]=1985-05-05&birthDate[1]=1987-07-07
```

### Reply

```xml
<?xml version="1.0" ?>

<API_Reply Product="Quote">
  <Itinerary>
    <Destination>Europelow</Destination>
    <DestNum>6</DestNum>
    <StartDate>2011-10-10</StartDate>
    <EndDate>2011-10-20</EndDate>
    <AnnualStart>07JUN11</AnnualStart>
  </Itinerary>
  <Quote>
    <SchemeCode>188</SchemeCode>
    <SchemeDes></SchemeDes>
    <PolicyEnd>2011-10-20</PolicyEnd>
    <PolicyStart>2011-10-10</PolicyStart>
    <Annual>N</Annual>
    <SchemePrice>12.00</SchemePrice>
    <SchemeName>Super Saver</SchemeName>
    <CancellationCover>500</CancellationCover>
    <CancellationXS>75</CancellationXS>
    <MedicalCover>1000000</MedicalCover>
    <MedicalXS>100</MedicalXS>
    <BaggageCover>1000</BaggageCover>
    <BaggageXS>75</BaggageXS>
    <PolicyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf</PolicyWording>
    <KeyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf</KeyFacts>
    <Wintersports>Y</Wintersports>
    <Insolvency>Y</Insolvency>
    <destinationID>13</destinationID>
  </Quote>
	...
  <Quote>
    <SchemeCode>160</SchemeCode>
    <SchemeDes></SchemeDes>
    <PolicyEnd>2012-06-05</PolicyEnd>
    <PolicyStart>2011-06-07</PolicyStart>
    <Annual>Y</Annual>
    <SchemePrice>40.00</SchemePrice>
    <SchemeName>Multi</SchemeName>
    <CancellationCover>3000</CancellationCover>
    <CancellationXS>75</CancellationXS>
    <MedicalCover>5000000</MedicalCover>
    <MedicalXS>100</MedicalXS>
    <BaggageCover>1500</BaggageCover>
    <BaggageXS>75</BaggageXS>
    <PolicyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf</PolicyWording>
    <KeyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf</KeyFacts>
    <Wintersports>Y</Wintersports>
    <Insolvency>Y</Insolvency>
    <destinationID>13</destinationID>
  </Quote>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <Password>FOO</Password>
      <EndDate>2011-10-20</EndDate>
      <StartDate>2011-10-10</StartDate>
      <key>foo</key>
      <birthDate>1985-05-05</birthDate>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply></code>

###  Fields explained

####  Quote/[Cancellation|Medical|Baggage][Cover|XS]

Amounts and excesses of Cancellation, Baggage & Medical cover offered by the policy, in pounds.

####  Quote/Annual

If Y, the policy is for annual multi trip cover, will start on the date of issue and end 364 days afterward rather than the searched for dates.

####  Quote/MaxTripLength

Optional return if multiple annual policies are returned in the same search - the maximum duration of any individual trip that can be taken under this policy.

