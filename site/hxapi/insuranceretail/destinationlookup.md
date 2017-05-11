---

---

# Insurance Destination List (Retail)

## /insurancecountries/search

### Method

GET

### Parameters

 | Name       | Format | Required | 
 | ----       | ------ | -------- | 
 | token      | String | N        | 
 | key        | String | Y        | 
 | query      | String | Y        | 
 | ABTANumber | String | N        | 
 | Password   | String | N        | 

### Request (example 1)

```
http://api.holidayextras.co.uk/v1/insurancecountries/search?token=000015778&key=mytestkey&ABTANumber=ABTA1&Password=PWORD&query=ire
```


### Reply (example 1)

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
      <region>2</region>
      <region_retail>1</region_retail>
      <api_region>EUROPE</api_region>
      <api_region_retail>UKROI</api_region_retail>
    </Record>
    <Record>
      <country>Northern Ireland</country>
      <region>2</region>
      <region_retail>1</region_retail>
      <api_region>EUROPE</api_region>
      <api_region_retail>UKROI</api_region_retail>
    </Record>
    <Record>
      <country>Rep. Ireland</country>
      <region>2</region>
      <region_retail>1</region_retail>
      <api_region>EUROPE</api_region>
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
      <key>foo</key>
      <query>ire</query>
    </Request>
  </API_Header>
</API_Reply></code>

###  Please note

Ensure you are using 'api_region_retail' with the retail API, and 'api_region' otherwise. As you can see above sometimes the values will differ, and using the wrong one could result in quoting incorrect premiums.
