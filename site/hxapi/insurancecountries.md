---

---

# Insurance Country - Region Lookup

This endpoint can be used to list all [regions](types/regioncode), list countries by region, or free text search to get a list of countries and the corresponding regions.

## /insurancecountries/

List all valid regions. 

### Method

GET

### Parameters

 | Name       | Type   | Format      | Required | Notes                                                                                   | 
 | ----       | ----   | ------      | -------- | -----                                                                                   | 
 | key        | String |             | Y        |                                                                                         | 
 | ABTANumber | String | [A-Z0-9]{5} | N        | Required for retail requests                                                            | 
 | Password   | String | [A-Z0-9]{5} | N        | Required for retail requests. If sending this you should make your requests over https. | 

### Request

```
http://api.holidayextras.co.uk/v1/insurancecountries?ABTANumber=foo&Password=yourpassword&key=mytestkey
```

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply>
  <Message>Regions for retail</Message>
  <Details>
    <Request>
      <Code>UKROI</Code>
      <Description>UK + Ireland</Description>
      <MoreInfoUrl>/insurancepolicy/UKROI/</MoreInfoUrl>
      <AcceptedCountries>/insurancecountries/UKROI/</AcceptedCountries>
    </Request>
    ...
    <Request>
      <Code>WWXUSA</Code>
      <Description>Worldwide (Excluding USA)</Description>
      <MoreInfoUrl>/insurancepolicy/WWXUSA/</MoreInfoUrl>
      <AcceptedCountries>/insurancecountries/WWXUSA/</AcceptedCountries>
    </Request>
  </Details>
  <API_Header>
    <Request>
      <ABTANumber>foo</ABTANumber>
      <Password>yourpassword</Password>
      <key>foo</key>
    </Request>
  </API_Header>
</API_Reply>
```

## /insurancecountries/foo

Where foo is the [Region code](/hxapi/types/regioncode)

### Method

GET

### Parameters

 | Name       | Type   | Format      | Required | Notes                                                                                   | 
 | ----       | ----   | ------      | -------- | -----                                                                                   | 
 | key        | String |             | Y        |                                                                                         | 
 | ABTANumber | String | [A-Z0-9]{5} | N        | Required for retail requests                                                            | 
 | Password   | String | [A-Z0-9]{5} | N        | Required for retail requests. If sending this you should make your requests over https. | 

### Request

```
http://api.holidayextras.co.uk/v1/insurancecountries/EUROPELOW?ABTANumber=foo&Password=yourpassword&key=mytestkey
```

### Reply

```xml
<?xml version="1.0" ?>

<API_Reply>
  <RecordSet>
    <Meta>
      <Total>83</Total>
    </Meta>
    <Record>
      <country>Albania</country>
    </Record>
    <Record>
      <country>Andorra</country>
    </Record>
    <Record>
      <country>Armenia</country>
    </Record>
    ...
    <Record>
      <country>Vatican City</country>
    </Record>
    <Record>
      <country>Wales</country>
    </Record>
    <Record>
      <country>Yugoslavia (Former)</country>
    </Record>
  </RecordSet>
  <API_Header>
    <Request>
      <ABTANumber>foo</ABTANumber>
      <Password>yourpassword</Password>
      <key>foo</key>
    </Request>
  </API_Header>
</API_Reply>
```

## /insurancecountries/search

Text search for specific countries. Useful if your application uses a javascript autocomplete script.

### Method

GET

### Parameters

 | Name       | Type   | Format      | Required | Notes | 
 | ----       | ----   | ------      | -------- | ----- | 
 | key        | String |             | Y        |       | 
 | ABTANumber | String | [A-Z0-9]{5} | N        |       | 
 | Password   | String | [A-Z0-9]{5} | N        |       | 
 | query      | String |             | Y        |       | 


### Request

```
http://api.holidayextras.co.uk/v1/insurancecountries/search?key=mytestkey&ABTANumber=foo&Password=yourpassword&query=ire
```


### Reply

```xml
<?xml version="1.0" ?>

<API_Reply>
  <RecordSet>
    <Meta>
      <Total>6</Total>
    </Meta>
    <Record>
      <country>Bonaire (Antilles)</country>
      <region>3</region>
      <region_retail>3</region_retail>
      <api_region>WWIUSA</api_region>
      <api_region_retail>WWIUSA</api_region_retail>
    </Record>
    <Record>
      <country>Cote D&#39;Ivoire</country>
      <region>5</region>
      <region_retail>5</region_retail>
      <api_region>WWXUSA</api_region>
      <api_region_retail>WWXUSA</api_region_retail>
    </Record>
    <Record>
      <country>Ireland</country>
      <region>6</region>
      <region_retail>1</region_retail>
      <api_region>EUROPELOW</api_region>
      <api_region_retail>UKROI</api_region_retail>
    </Record>
    <Record>
      <country>Northern Ireland</country>
      <region>6</region>
      <region_retail>1</region_retail>
      <api_region>EUROPELOW</api_region>
      <api_region_retail>UKROI</api_region_retail>
    </Record>
    <Record>
      <country>Rep. Ireland</country>
      <region>6</region>
      <region_retail>1</region_retail>
      <api_region>EUROPELOW</api_region>
      <api_region_retail>UKROI</api_region_retail>
    </Record>
    <Record>
      <country>Zaire</country>
      <region>5</region>
      <region_retail>5</region_retail>
      <api_region>WWXUSA</api_region>
      <api_region_retail>WWXUSA</api_region_retail>
    </Record>
  </RecordSet>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <ABTANumber>foo</ABTANumber>
      <Password>yourpassword</Password>
      <query>ire</query>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply></code>

###  Fields explained

####  RecordSet/Record/api_region

[[hxapi:types:regioncode|Region code]] to use for **direct or intermediary** [[hxapi:insurance:availability|policy searches]]

####  RecordSet/Record/api_region_retail

[[hxapi:types:regioncode|Region code]] to use for **retail** [[hxapi:insuranceretail:availability|policy searches]]

