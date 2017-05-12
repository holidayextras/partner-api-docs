---

---

# Insurance quote


## /insurancepolicy/foo

Where **foo** is the [ country code](index).



### Method

GET



### Parameters

 | Name  | Format | Required | 
 | ----  | ------ | -------- | 
 | token | String | N        | 
 | key   | String | Y        | 




### Request (example 1)

```
http://api.holidayextras.co.uk/v1/insurancepolicy?token=000015778&key=mytestkey
```










### Reply (example 1)

```xml
<API_Reply>
  <Request>
    <Code>EUROPE</Code>
    <Description>Europe</Description>
    <MoreInfoUrl>/insurancepolicy/EUROPE/</MoreInfoUrl>
    <AcceptedCountries>/insurancecountries/EUROPE/</AcceptedCountries>
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
