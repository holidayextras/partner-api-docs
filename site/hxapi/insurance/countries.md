---

---

# Insurance countries

[API Docs](/hxapi/) > product:[Insurance](/hxapi/insurance/countries)

## Insurance Countries Request

This endpoint will respond with a list of valid regions and / or countries.

### Method

GET

### Endpoint

To request the list of region codes, the endpoint to use is:

```
https://api.holidayextras.co.uk/v1/insurancecountries
```

To request the list of countries within a given region code, the endpoint to use is (where "foo" is the region code):

```
https://api.holidayextras.co.uk/v1/insurancecountries/foo
```

For example, to request all the countries within Europe Low, the endpoint is:

```
https://api.holidayextras.co.uk/v1/insurancecountries/EUROPELOW
```

### List of available regions:

For ease of reference, the current regions available are:

| Code   | Region | Covered Countries |
| ----   | ----------- | ----------------- |
| UKROI  | UK & Ireland | UK, Republic of Ireland and Channel Islands   |
| EUROPELOW | Europe Low-risk| All countries in Europe excluding Spain, Cyprus, Malta, Turkey and Greece |
| EUROPEHIGH | Europe High-risk | All countries in Europe including Spain, Cyprus, Malta, Turkey and Greece |
| AUSNZ  | Australia & New Zealand | Australia, New Zealand, Cook Islands, Niue and Tokelau |
| WWXUSA | Worldwide: all countries excluding USA | Full list of 156 countries worldwide, excluding USA, Canada and their territories |
| WWIUSA | Worldwide: all countries including USA | Full list of 156 countries worldwide, including USA, Canada and their territories |

## Request Parameters

 | Name  | Data Type | Format | Mandatory? | Additional Information |
 | ----  | --------- | ------ | ---------- | ---------------------- |
 | ABTANumber | String | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up. |
 | Password | String | [A-Z0-9] 5 chars | Y | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
 | key   | String | [A-Z] | Y | This will be assigned to you by your Account Manager during set up.|
 | token | String | [0-9] 9 chars | Y | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |


## Insurance Countries Response

| Field | Additional Information |
| ----- | ---------------------- |
| Meta  | A count of the countries, states or territories included within this region. |
| Record | The name of the country, state or territory. |
| API_Header/Request  | The API returns every parameter and value you sent in the previous request. |

## Worked Examples

Below are worked examples of both the request and response for insurance countries.

### Insurance Countries Request

```
https://api.holidayextras.co.uk/v1/insurancecountries/WWXUSA?&ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken
```

### Insurance Countries Response

NB: This is a shortened example compiled from a full insurance countries response.

```xml
<?xml version="1.0" ?>
<API_Reply>
    <RecordSet>
        <Meta>
            <Total>156</Total>
        </Meta>
        <Record>
            <country>Abu Dhabi</country>
        </Record>
        <Record>
            <country>Afghanistan</country>
        </Record>
        <Record>
            <country>Algeria</country>
        </Record>
        <Record>
            <country>American Samoa</country>
        </Record>
        <Record>
            <country>Angola</country>
        </Record>
        <Record>
            <country>Antarctic</country>
        </Record>
        <API_Header>
               <Request>
                   <ABTANumber>YourABTANumber</ABTANumber>
                   <Password>YourPassword</Password>
                   <key>YourKey</key>
                   <token>YourToken</token>
                   <v>1</v>
               </Request>
           </API_Header>
       </API_Reply>
```
