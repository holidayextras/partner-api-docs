---

---

## Locations Request

All available locations can be requested by specific product type, e.g. car parking. 

### Method

GET

### Endpoint

The endpoint to use is:

```
https://api.holidayextras.co.uk/v1/location
```

### Request Parameters

NB: All parameter names are case sensitive.

 | Name        | Data Type    | Format | Mandatory? | Additional Information |
 | ----        | ----    | ------ | -------- | ---------------------- |
 | key         | String  | [A-Z]                                  | Y        | This will be assigned to you by your Account Manager during set up.|
 | token       | String  | [0-9] 9 chars                         | Y        | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 
 Product and market specific parameters:
 
 | Market | Product | Parameters             | 
 |--------|---------|------------------------|
 | UK     | Parking | type=1                 |
 | UK     | Hotels  | type=2                 |
 | UK     | Lounges | type=3                 |
 | EU     | Parking | type=carpark&system=de |
 | EU     | Hotels  | type=hotel&system=de   |
 | EU     | Lounges | type=lounge&system=de  |
 
 
## Hotel Availability Response

For a detailed explanation of the fields returned, please see below:

 | Field                | Additional Information |
 |----------------------|------------------------|
 | Code | Location code to be used in the product specific request. |
 | Name | Location name. |
 | MoreInfoURL |  Link to the location entry in product library - this URL can be called to retrieve content relating to that location. |
 | Type | Type of location. |
 | API_Header/Request | The API returns every parameter and value you sent in the previous request.  |

## Worked Examples

Below are worked examples of both the requests and responses for locations.

### UK Parking Location Request

```
https://api.holidayextras.co.uk/v1/location?key=YourKey&token=YourToken&type=1
```

### UK Parking Location Response

NB: This is a shortened example compiled from a full UK parking location response.

```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
    <Product>
        <Code>ABZ</Code>
        <Name>Aberdeen</Name>
        <MoreInfoURL>/v1/product/ABZ</MoreInfoURL>
        <Type>airport</Type>
    </Product>
    <Product>
        <Code>BFS</Code>
        <Name>Belfast International</Name>
        <MoreInfoURL>/v1/product/BFS</MoreInfoURL>
        <Type>airport</Type>
    </Product>
    <Product>
        <Code>BHD</Code>
        <Name>Belfast City (George Best)</Name>
        <MoreInfoURL>/v1/product/BHD</MoreInfoURL>
        <Type>airport</Type>
    </Product>
 <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <type>1</type>
            <key>mytestkey</key>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```

### EU Hotel Location Request

```
https://api.holidayextras.co.uk/v1/location?key=YourKey&token=YourToken&type=hotel&system=de
```

### EU Hotel Location Response

NB: This is a shortened example compiled from a full EU hotel location response.

```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
    <Product>
        <Code>AMS</Code>
        <Name>Amsterdam (Schiphol)</Name>
        <MoreInfoURL>/v1/product/AMS</MoreInfoURL>
        <Type>german_airport</Type>
    </Product>
    <Product>
        <Code>BER</Code>
        <Name>Berlin Brandenburg</Name>
        <MoreInfoURL>/v1/product/BER</MoreInfoURL>
        <Type>german_airport</Type>
    </Product>
    <Product>
        <Code>BGY</Code>
        <Name>Bergamo</Name>
        <MoreInfoURL>/v1/product/BGY</MoreInfoURL>
        <Type>german_airport</Type>
    </Product>
 <API_Header>
        <Request>
            <key>YourKey</key>
            <token>YourToken</token>
            <type>hotel</type>
            <system>de</system>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
