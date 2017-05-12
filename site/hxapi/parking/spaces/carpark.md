---

---

# Spaces at car park

only available in UK

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carparkspaces](carpark)

## /carparkspaces/foo

where foo is the car park code

e.g. http://api.holidayextras.co.uk/v1/carparkspaces/LGV4

### Method

GET

### Parameters

 | Name        | Type   | Format      | Required | 
 | ----        | ----   | ------      | -------- | 
 | ABTANumber  | String | [A-Z0-9]{5} | Y        | 
 | Password    | String | [A-Z0-9]{5} | N*       | 
 | Initials    | String | [A-Z]{3}    | N        | 
 | ArrivalDate | Date   | YYYY-MM-DD  | Y        | 
 | DepartDate  | Date   | YYYY-MM-DD  | Y        | 
 | key         | String |             | Y        | 
 | token       | String | [0-9]{9}    | Y        | 

* Password only required for agent requests. If sending this you should make your availability requests over https.

### Request

```html
http://api.holidayextras.co.uk/sandbox/v1/carparkspaces/LGV4?ArrivalDate=2011-09-20&DepartDate=2011-09-27&key=mytestkey&token=000001234&ABTANumber=FOO&Initials=BJT
```

### Reply

```xml

<API_Reply>
  <API_Header>
    <Request>
      <ArrivalDate>2011-09-20</ArrivalDate>
      <DepartDate>2011-09-27</DepartDate>
      <key>mytestkey</key>
      <token>000001234</token>
      <ABTANumber>FOO</ABTANumber>
      <Initials>BJT</Initials>
      <v>1</v>
    </Request>
  </API_Header>
  <CarPark>
    <Code>LGV4</Code>
    <Name>Airparks Gatwick(formerly BCP)</Name>
    <Status>F</Status>
    <Spaces>
      <Total>9999</Total>
      <Left>9999</Left>
    </Spaces>
  </CarPark>
</API_Reply>
```



### Fields Explained

#### CarPark/Status

 | Status | Meaning                                                                                         | 
 | ------ | -------                                                                                         | 
 | S      | Standard - see total & left spaces                                                              | 
 | F      | Free sale - actual count of remaining/total spaces not available (returns 9999 for both fields) | 
 | C      | Closed out - no spaces available (returns 0 for both fields)                                    | 

#### API_Header/Request

**HXAPI** returns every parameter you sent in the previous request, as you sent it. This is so your app doesn't have to remember anything not replied in the XML reply.

