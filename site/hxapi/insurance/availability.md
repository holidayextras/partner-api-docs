---

---

# Insurance Schemes Availability

[API Docs](/hxapi/) > product:[Insurance](/hxapi/insurance/availability)

## Insurance Schemes Availability Request

This endpoint will respond with a quotation for a policy to be issued under an insurance scheme.

### Method

GET

### Endpoint

To request the list of insurance schemes available, the endpoint to use is:

```
https://api.holidayextras.co.uk/v1/insurancepolicy/RegionCode
```

For example, to request a quote for a policy covering Europe (low risk), the endpoint is:

```
https://api.holidayextras.co.uk/v1/insurancepolicy/EUROPELOW
```

To find the list of available regions, please refer to the section on [insurance countries](/hxapi/insurance/countries).

### Request Parameters

NB: All parameter names are case sensitive.

 | Name  | Data Type | Format | Mandatory? | Additional Information |
 | ----  | --------- | ------ | ---------- | ---------------------- |
 | ABTANumber | String | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up. |
 | Password | String | [A-Z0-9] 5 chars | Y | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
 | key   | String | [A-Z] | Y | This will be assigned to you by your Account Manager during set up.|
 | token | String | [0-9] 9 chars | Y | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 | StartDate | Date | YYYY-MM-DD | Y | Date customer wants policy to start (start date of trip if single trip, or up to 30 days from search date if annual trip) |
 | EndDate | Date | YYYY-MM-DD | N* | Date customer wants policy to end (return date of trip if single trip). NB: If no end date is provided, system will assume you are requesting an annual policy. |
 | birthDate[] | Date | YYYY-MM-DD | Y | Date of birth for customers. All customers requiring inclusion on this policy quote must provide their date of birth. You can add multiple people by ennumerating each date of birth in the format birthDate[0], birthDate[1], birthDate[2], and so on. |
 | title[] | String | [A-Z] 4 chars | Y | Title for customers. All customers requiring inclusion on this policy quote must provide their title. You can add multiple people by ennumerating each title in the format title[0], title[1], title[2], and so on. |
 | firstName[] | String | [A-Z] 15 chars | Y | First name for customers. All customers requiring inclusion on this policy quote must provide their first name. You can add multiple people by ennumerating each first name in the format firstName[0], firstName[1], firstName[2], and so on. |
  | lastName[] | String | [A-Z] 15 chars | Y | Last name for customers. All customers requiring inclusion on this policy quote must provide their last name. You can add multiple people by ennumerating each last name in the format lastName[0], lastName[1], lastName[2], and so on. |


## Insurance Schemes Availability Response

The insurance schemes availability response will return all the products that are available on the requested dates for that region. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

 | Field | Additional Information |
 | ----- | ---------------------- |
 | Itinerary/Destination |
 | Itinerary/DestNum |
 | Itinerary/StartDate |
 | Itinerary/EndDate |
 | Itinerary/AnnualStart |
 | Quote/SchemeCode |
 | Quote/SchemeDes |
 | Quote/PolicyEnd |
 | Quote/PolicyStart |
 | Quote/Annual |
 | Quote/SchemePrice |
 | Quote/SchemeName |
 | Quote/CancellationCover |
 | Quote/CancellationXS |
 | Quote/MedicalCover |
 | Quote/MedicalXS |
 | Quote/BaggageCover |
 | Quote/BaggageXS |
 | Quote/PolicyWording |
 | Quote/KeyFacts |
 | Quote/Wintersports |
 | Quote/Insolvency |
 | Quote/destinationID |
 | API_Header | The API returns every parameter and value you sent in the previous request. |

## Worked Examples

Below are worked examples of both the request and response for insurance quote.

### Insurance Schemes Availability Request

```
https://api.holidayextras.co.uk/v1/insurancepolicy/EUROPELOW?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&StartDate=2017-12-01&EndDate=2017-12-08&birthDate[0]=1982-06-26&title[0]=Mr&firstName[0]=TEST&lastName[0]=TEST
```

### Insurance Schemes Availability Response

NB: This is a shortened example compiled from a full insurance quote response.

```xml
<?xml version="1.0" ?>
<API_Reply Product="Quote">
    <Itinerary>
        <Destination>Europelow</Destination>
        <DestNum>6</DestNum>
        <StartDate>2017-12-01</StartDate>
        <EndDate>2017-12-08</EndDate>
        <AnnualStart>30AUG17</AnnualStart>
    </Itinerary>
    <Quote>
        <SchemeCode>8673</SchemeCode>
        <SchemeDes></SchemeDes>
        <PolicyEnd>2017-12-08</PolicyEnd>
        <PolicyStart>2017-12-01</PolicyStart>
        <Annual>N</Annual>
        <SchemePrice>18.26</SchemePrice>
        <SchemeName>OTA</SchemeName>
        <CancellationCover>500</CancellationCover>
        <CancellationXS>75</CancellationXS>
        <MedicalCover>5000000</MedicalCover>
        <MedicalXS>100</MedicalXS>
        <BaggageCover></BaggageCover>
        <BaggageXS></BaggageXS>
        <PolicyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXMainAgent0317(HX001).pdf</PolicyWording>
        <KeyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/</KeyFacts>
        <Wintersports>Y</Wintersports>
        <Insolvency>N</Insolvency>
        <destinationID>13</destinationID>
    </Quote>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <StartDate>2017-12-01</StartDate>
            <EndDate>2017-12-08</EndDate>
            <birthDate>1982-06-26</birthDate>
            <title>Mr</title>
            <firstName>TEST</firstName>
            <lastName>TEST</lastName>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
