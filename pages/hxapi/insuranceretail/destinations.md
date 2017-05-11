---

---

# Insurance Destination List (Retail)

## /insurancepolicy/

### Method

GET

### Parameters

 | Name       | Format | Required | 
 | ----       | ------ | -------- | 
 | token      | String | N        | 
 | key        | String | Y        | 
 | ABTANumber | String | Y        | 
 | Password   | String | Y        | 

### Request (example 1)

```
http://api.holidayextras.co.uk/v1/insurancepolicy?token=000015778&key=mytestkey&ABTANumber=ABTA1&Password=PWORD
```










### Reply (example 1)

```xml
<API_Reply>
  <Request>
    <Code>UKROI</Code>
    <Description>UK (Including Rep of Ireland)</Description>
    <MoreInfoUrl>/insurancepolicy/UKROI/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/UKROI/</AcceptedCountries>
  </Request>
  <Request>
    <Code>EUROPE</Code>
    <Description>Europe</Description>
    <MoreInfoUrl>/insurancepolicy/EUROPE/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/EUROPE/</AcceptedCountries>
  </Request>
  <Request>
    <Code>AUSNZ</Code>
    <Description>Australia/New Zealand</Description>
    <MoreInfoUrl>/insurancepolicy/AUSNZ/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/AUSNZ/</AcceptedCountries>
  </Request>
  <Request>
    <Code>WWIUSA</Code>
    <Description>Worldwide (Including USA)</Description>
    <MoreInfoUrl>/insurancepolicy/WWIUSA/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/WWIUSA/</AcceptedCountries>
  </Request>
  <Request>
    <Code>WWXUSA</Code>
    <Description>Worldwide (Excluding USA)</Description>
    <MoreInfoUrl>/insurancepolicy/WWXUSA/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/WWXUSA/</AcceptedCountries>
  </Request>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <token>000015778</token>
    </Request>
  </API_Header>
</API_Reply></code>
