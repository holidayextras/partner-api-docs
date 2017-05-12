---

---

# Insurance quote

## /insurancepolicy/foo

Where **foo** is the [ country code](index).

### Method

GET

### Parameters

 | Name       | Format | Required | 
 | ----       | ------ | -------- | 
 | token      | String | Y        | 
 | key        | String | Y        | 
 | birthDate  | Array  | Y*       | 
 | StartDate  | Date   | Y        | 
 | EndDate    | Date   | Y        | 
 | ABTANumber | String | N        | 
 | Password   | String | N        | 

###  birthDate[] 

For convenience, 'age[]' is accepted as an alternative - it will generate dates of birth by assuming this day & month and change the year.

### Request (example 1)

```
http://api.holidayextras.co.uk/v1/insurancepolicy/EUROPE?ABTANumber=FOO&EndDate=2010-10-20&StartDate=2010-10-10&key=foo&birthDate[]=1985-05-05
```

### Reply (example 1)

```xml
<API_Reply Product="Quote">
<Itinerary>
<Destination>Europe</Destination>
<DestNum>2</DestNum>
<StartDate>2010-10-10</StartDate>
<EndDate>2010-10-20</EndDate>
<AnnualStart>21SEP10</AnnualStart>
</Itinerary>
<Quote>
<SchemeCode>9</SchemeCode>
<SchemeDes/>
<PolicyEnd>2010-10-10</PolicyEnd>
<PolicyStart>2010-10-20</PolicyStart>
<Annual>N</Annual>
<SchemePrice>12.00</SchemePrice>
<SchemeName>Super Saver</SchemeName>
<CancellationCover>500</CancellationCover>
<MedicalCover>1000000</MedicalCover>
<BaggageCover>1000</BaggageCover>
<PolicyWording>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf
</PolicyWording>
<KeyFacts>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf
</KeyFacts>
<Wintersports>Y</Wintersports>
</Quote>
<Quote>
<SchemeCode>10</SchemeCode>
<SchemeDes/>
<PolicyEnd>2010-10-10</PolicyEnd>
<PolicyStart>2010-10-20</PolicyStart>
<Annual>N</Annual>
<SchemePrice>15.00</SchemePrice>
<SchemeName>Saver</SchemeName>
<CancellationCover>1000</CancellationCover>
<MedicalCover>2000000</MedicalCover>
<BaggageCover>1000</BaggageCover>
<PolicyWording>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf
</PolicyWording>
<KeyFacts>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf
</KeyFacts>
<Wintersports>Y</Wintersports>
</Quote>
<Quote>
<SchemeCode>11</SchemeCode>
<SchemeDes/>
<PolicyEnd>2010-10-10</PolicyEnd>
<PolicyStart>2010-10-20</PolicyStart>
<Annual>N</Annual>
<SchemePrice>17.00</SchemePrice>
<SchemeName>Classic</SchemeName>
<CancellationCover>5000</CancellationCover>
<MedicalCover>5000000</MedicalCover>
<BaggageCover>1500</BaggageCover>
<PolicyWording>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf
</PolicyWording>
<KeyFacts>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf
</KeyFacts>
<Wintersports>Y</Wintersports>
</Quote>
<Quote>
<SchemeCode>12</SchemeCode>
<SchemeDes/>
<PolicyEnd>2010-09-21</PolicyEnd>
<PolicyStart>2011-09-20</PolicyStart>
<Annual>Y</Annual>
<SchemePrice>40.00</SchemePrice>
<SchemeName>Multi</SchemeName>
<CancellationCover>3000</CancellationCover>
<MedicalCover>5000000</MedicalCover>
<BaggageCover>1500</BaggageCover>
<PolicyWording>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - PW.pdf
</PolicyWording>
<KeyFacts>
http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Direct - KF.pdf
</KeyFacts>
<Wintersports>Y</Wintersports>
</Quote>
<API_Header>
<Request>
<ABTANumber>FOO</ABTANumber>
<EndDate>2010-10-20</EndDate>
<StartDate>2010-10-10</StartDate>
<key>foo</key>
<birthDate>1985-05-05</birthDate>
<v>1</v>
</Request>
</API_Header>
</API_Reply></code>
