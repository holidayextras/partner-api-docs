---

---

# Insurance Create Policy

[API Docs](/hxapi/) > product:[Insurance](/hxapi/insurance/createpolicy)

## Create Insurance Policy Request

This endpoint will create a new insurance policy.

Please note: we do not have a test environment for insurance, so you will be unable to use /sandbox/. To make test policies you will need to follow these rules:

1. Make the policy more than 3 months from the search date;
2. Do not have more than 3 test policies live at any one point;
3. Please advise your Account Manager so the test policies can be cancelled down in our system.

Failing to notify us of test policies being made will result in your account being charged for these.

### Method

POST

### Endpoint

To create an insurance policy, the endpoint to use is (where `CertificateRef` is returned in the options response):

```
https://api.holidayextras.co.uk/v1/insurancepolicy/CertificateRef
```

### Request Parameters

NB: All parameter names are case sensitive.

 | Name       | Data Type | Format | Mandatory? | Additional Information |
 | ABTANumber | String | [A-Z0-9] 5 chars | Y | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up. |
 | Password | String | [A-Z0-9] 5 chars | Y | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
 | key   | String | [A-Z] | Y | This will be assigned to you by your Account Manager during set up.|
 | token | String | [0-9] 9 chars | Y | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token. |
 | Address[] | String | [0-9] 20 chars | Y        | First line of address (house name / number and road) of customer. <br>If you require more than 1 address line, then you can replicate this field and increment the number in square brackets, i.e. "Address[1]" for address line 2, and so on. |
 | Town | String | [0-9] 4 chars | Y        | Town of address. |
 | County | String | [0-9] 4 chars | Y        | County of address. |
 | PostCode | String | [0-9] 4 chars | Y        | Post code of address. |
 | Email | String | [0-9] 4 chars | Y        | Customer's email. |
 | DayPhone | Integer | [0-9] 15 chars max  | N                 | The customer's telephone number. |  
 | option     | Array  | [A-Z0-9] | N        | Per policy options require `schemeoptionID`, `optionRateID`, `optionPrice` and `optionIPT`. Per person options also require the `CertificateClientID` of the person they are for. Per person options can be submitted multiple times with different CertificateClientIDs. This should be sent as a multidimensional array/hash. See the worked examples below for more information. |

## Create Insurance Policy Response

 The create insurance policy response will return details of the insurance policy booked, and any options.

 For a detailed explanation of the fields returned, please see below:

| Field | Additional Information |
| ----- | ---------------------- |
| familyGroupID | TBC |
| familyGroupName | TBC |
| keyFactsDocName | TBC |
| policyWordingDocName | TBC |
| SourceSystem | TBC |
| ResidenceID | TBC |
| CostofHoliday | TBC |
| QuoteExpired | TBC |
| FriendlyName | TBC |
| cover | There are three elements to this: cancellation, medical and possessions. Each block will return details on the limits and excesses for each type of cover. |
| Scheme | This block provides a summary of the scheme details, including links to the policy wording and key facts. It also returns the `PolicyNumber`, which is required in all communication with us post booking, including where the customer needs to make a claim. |
| PolicyOptions | TBC |
| ClientDetails | This block returns the address and contact details for the customer. |
| Itinerary | This block shows a summary of the date and destinations covered by the policy. |
| Pricing | This block provides a breakdown of the pricing elements, including gross, net and IPT. |
| People | This block returns details of the individuals under the policy's cover (as provided in previous requests). |
| API_Header | The API returns every parameter and value you sent in the previous request. |

### Payment

In the UK, we are PCI DSS compliant and so we do not accept customers' payment details being passed to us via the API. Further details can be found in our section on [Payment](/hxapi/payment).

Please contact your Account Manager if you have any questions concerning payment.

### Policy Wording and Key Facts

It is mandatory that the customer has access to the both the Policy Wording and the Key Facts document, as insurance is a financial product and subject to additional regulations around its point of sale. Both of these documents are available in the insurance schemes availability response and create insurance policy response (pre- and post-booking).


## Worked Examples

Below are worked examples of both the request and response for creating an insurance policy.

### Create Insurance Policy Request

```
https://api.holidayextras.co.uk/v1/insurancepolicy/YourCertificateRef
```

```
    <Request>
      <ABTANumber>YourABTANumber</ABTANumber>
      <Password>YourPassword</Password>
      <key>YourKey</key>
      <token>YourToken</token>
      <title[]>Mr</title[]>
      <firstName[]>Test</firstName>
      <lastName[]>Test</lastName>
      <destinationID>13</destinationID>
      <schemePrice>9.13</schemePrice>
      <Address[]>1 Test Street</Address[]>
      <Town>Testville</Town>
      <County>Testshire</County>
      <PostCode>TE1 STZ</PostCode>
      <DayPhone>01234567890</DayPhone>
      <Email>test@test.com</Email>
      <option>61389</option>
    </Request>
```

### Create Insurance Policy Response

```xml
<?xml version="1.0" ?>
<API_Reply>
    <familyGroupID>1</familyGroupID>
    <familyGroupName>Individual</familyGroupName>
    <keyFactsDocName></keyFactsDocName>
    <policyWordingDocName>HXMainAgent0317(HX001).pdf</policyWordingDocName>
    <SourceSystem>1</SourceSystem>
    <ResidenceID>1</ResidenceID>
    <CostOfHoliday>0</CostOfHoliday>
    <QuoteExpired>false</QuoteExpired>
    <FriendlyName></FriendlyName>
    <cover>
        <cancellation>
            <sectionid>1</sectionid>
            <section>Cancellation Cover</section>
            <sectionNumber>B</sectionNumber>
            <limit>500</limit>
            <excess>75</excess>
        </cancellation>
        <medical>
            <sectionid>7</sectionid>
            <section>Medical Emergency Expenses</section>
            <sectionNumber>D</sectionNumber>
            <limit>5000000</limit>
            <excess>100</excess>
        </medical>
        <possessions>
            <sectionid>5</sectionid>
            <section>Personal possessions</section>
            <sectionNumber>G1</sectionNumber>
            <limit>500</limit>
            <excess>75</excess>
        </possessions>
    </cover>
    <Scheme>
        <schemeID>8673</schemeID>
        <schemeName>OTA Bronze A2B</schemeName>
        <purchaseDate>2017-09-01</purchaseDate>
        <policyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXMainAgent0317(HX001).pdf</policyWording>
        <PolicyNumber>ITEST100067</PolicyNumber>
        <Annual>N</Annual>
        <keyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/</keyFacts>
    </Scheme>
    <PolicyOptions></PolicyOptions>
    <ClientDetails>
        <address>
            <address1>Test</address1>
            <address2></address2>
            <address3></address3>
            <address4>Test</address4>
            <address5>Test</address5>
            <postcode>CT214JF</postcode>
        </address>
        <email>caroline.woodhams@holidayextras.com</email>
        <dayPhone>01234567890</dayPhone>
    </ClientDetails>
    <Itinerary>
        <startDate>2017-12-01</startDate>
        <endDate>2017-12-08</endDate>
        <destinationName>Europe (exc Spain, Cyprus, Malta, Turkey and Greece)</destinationName>
    </Itinerary>
    <Pricing>
        <grossAmount>9.13</grossAmount>
        <netAmount>6.01</netAmount>
        <overallAmount>9.13</overallAmount>
        <premiumIPTAmount>1.52</premiumIPTAmount>
        <medicalAmount>0</medicalAmount>
        <optionsIPT>0</optionsIPT>
        <optionsNett>0</optionsNett>
        <optionsAmount>0</optionsAmount>
        <overallNett>6.01</overallNett>
        <overallIPTAmount>1.52</overallIPTAmount>
        <premiumComm>1.6</premiumComm>
        <optionsComm>0</optionsComm>
        <overallComm>1.6</overallComm>
        <overallNet>7.61</overallNet>
    </Pricing>
    <People>
        <PersonDetails>
            <ClientID>22893377</ClientID>
            <title>Mr</title>
            <firstName>Test</firstName>
            <lastName>Test</lastName>
            <birthDate>1970-01-01</birthDate>
            <TravellerNumber></TravellerNumber>
            <Screening>0</Screening>
            <arrSchemePersonOption></arrSchemePersonOption>
            <MembershipNumber></MembershipNumber>
            <AnnualSalary></AnnualSalary>
            <NoMail>false</NoMail>
            <IsStudent>false</IsStudent>
        </PersonDetails>
    </People>
    <API_Header>
        <Request>
            <ABTANumber>YourABTANumber</ABTANumber>
            <Password>YourPassword</Password>
            <key>YourKey</key>
            <token>YourToken</token>
            <title>Mr</title>
            <firstName>Test</firstName>
            <lastName>Test</lastName>
            <destinationID>13</destinationID>
            <schemePrice>9.13</schemePrice>
            <Address>1 Test Street</Address>
            <Town>Testville</Town>
            <County>Testshire</County>
            <Postcode>TE1 STZ</Postcode>
            <DayPhone>01234567890</DayPhone>
            <Email>test@test.com</Email>
            <option>61389</option>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
