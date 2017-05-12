---

---

# Insurance - Issue Policy

## /insurancepolicy/foo

Where **foo** is the certificate Reference from a call to [GET options](options).

## Caution

The /sandbox/ prefix available on other products is not available for this API endpoint, there is no test system to go to. If you make test bookings during development, you can log in online and use our "manage my booking" pages to cancel them, or contact us with policy numbers so we can cancel them.

### Method

POST

### Parameters

 | Name       | Format | Required | Notes                                                    | 
 | ----       | ------ | -------- | -----                                                    | 
 | key        | String | Y        |                                                          | 
 | ABTANumber | String | Y        | Required to correctly calculate and attribute commission | 
 | Password   | String | Y        |                                                          | 
 | Address[0] | String | Y        |                                                          | 
 | Address[1] | String | N        |                                                          | 
 | Address[2] | String | N        |                                                          | 
 | Town       | String | N        |                                                          | 
 | County     | String | N        |                                                          | 
 | PostCode   | String | Y        |                                                          | 
 | DayPhone   | String | N        |                                                          | 
 | Email      | String | Y        |                                                          | 
 | option     | Array  | N        | See below                                                | 

### Example (no options)

### Request

```
POST http://api.holidayextras.co.uk/v1/insurancepolicy/yourCertificateReference

key=foo&ABTANumber=ABCDE&Password=ABCDE&Address[0]=Holiday Extras&Address[1]=Ashford Road&Address[2]=Newingreen&Town=Hythe&County=Kent&PostCode=CT21 4JF&DayPhone=01234567890&Email=test@example.com
```

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply>
  <cover>
    <cancellation>
      <section>Cancellation cover</section>
      <limit>1500</limit>
      <excess>75</excess>
    </cancellation>
    <medical>
      <section>Medical Emergency Expenses</section>
      <limit>5000000</limit>
      <excess>100</excess>
    </medical>
    <possessions>
      <section>Personal possessions</section>
      <limit>1500</limit>
      <excess>75</excess>
    </possessions>
  </cover>
  <Scheme>
    <schemeID>369</schemeID>
    <schemeName>Silver Independent</schemeName>
    <purchaseDate>2011-10-13</purchaseDate>
    <keyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXagentMainKF.pdf</keyFacts>
    <policyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXagentMainPW.pdf</policyWording>
    <PolicyNumber>ABCDE100123</PolicyNumber>
    <Annual>N</Annual>
  </Scheme>
  <ClientDetails>
    <address>
      <address1>Holiday Extras</address1>
      <address2>Ashford Road</address2>
      <address3>Newingreen</address3>
      <address4>Hythe</address4>
      <address5>Kent</address5>
      <postcode>CT21 4JF</postcode>
    </address>
    <email>test@example.com</email>
    <dayPhone>01234567890</dayPhone>
  </ClientDetails>
  <Itinerary>
    <startDate>2012-10-10</startDate>
    <endDate>2012-10-19</endDate>
    <destinationName>Europe (exc Spain, Cyprus, Malta, Turkey)</destinationName>
  </Itinerary>
  <Pricing>
    <grossAmount>42.44</grossAmount>
    <netAmount>22.48</netAmount>
    <overallAmount>42.44</overallAmount>
    <premiumIPTAmount>5.93</premiumIPTAmount>
    <medicalAmount>0</medicalAmount>
    <optionsIPT>0</optionsIPT>
    <optionsNett>0</optionsNett>
    <optionsAmount>0</optionsAmount>
    <overallIPTAmount>5.93</overallIPTAmount>
    <overallNett>22.48</overallNett>
    <overallComm>14.03</overallComm>
    <premiumComm>14.03</premiumComm>
    <optionsComm>0</optionsComm>
    <overallNet>36.51</overallNet>
  </Pricing>
  <People>
    <PersonDetails>
      <title>Mr</title>
      <firstName>Test</firstName>
      <lastName>Test</lastName>
      <birthDate>1985-05-05</birthDate>
    </PersonDetails>
    <PersonDetails>
      <title>Mrs</title>
      <firstName>Test</firstName>
      <lastName>Test</lastName>
      <birthDate>1987-07-07</birthDate>
    </PersonDetails>
  </People>
  <API_Header>
    <Request>
      <key>foo</key>
      <ABTANumber>ABCDE</ABTANumber>
      <Password>ABCDE</Password>
      <Address>Holiday Extras</Address>
      <Address>Ashford Road</Address>
      <Address>Newingreen</Address>
      <Town>Hythe</Town>
      <County>Kent</County>
      <PostCode>CT21 4JF</PostCode>
      <DayPhone>01234567890</DayPhone>
      <Email>test@example.com</Email>
    </Request>
  </API_Header>
</API_Reply>
```

### Example (with options)

Per policy options require schemeoptionID, optionRateID, optionPrice and optionIPT. Per person options also require the CertificateClientID of the person they are for. Per person options can be submitted multiple times with different CertificateClientIDs. This should be sent as a multidimensional array/hash, for example:

```
option[0][schemeoptionID]=12345
option[0][optionRateID]=12345
option[0][optionPrice]=10.00
option[0][optionIPT]=2.00
option[1][CertificateClientID]=123456
option[1][schemeoptionID]=54321
option[1][optionRateID]=12345
option[1][optionPrice]=10.00
option[1][optionIPT]=2.00
option[2][CertificateClientID]=123457
option[2][schemeoptionID]=54321
option[2][optionRateID]=12345
option[2][optionPrice]=10.00
option[2][optionIPT]=2.00
option[3][CertificateClientID]=123456
option[3][schemeoptionID]=67890
option[3][optionRateID]=12345
option[3][optionPrice]=10.00
option[3][optionIPT]=2.00
```

Assuming a provisional policy (from a call to GET options) with two customers (123456 and 123457), these fields will add the per-policy option 12345 to the policy, the per-person option 54321 for both customers, and the per-person option 67890 just for customer id 123456.

Example full request/reply with a per person and a per policy option:

```
POST 

key=foo&ABTANumber=ABCDE&Password=ABCDE&Address[0]=Holiday Extras&Address[1]=Ashford Road&Address[2]=Newingreen&Town=Hythe&County=Kent&PostCode=CT21 4JF&DayPhone=01234567890&Email=test@example.com&option[0][schemeoptionID]=3249&option[0][optionRateID]=2687460&option[0][optionPrice]=2.67&option[0][optionIPT]=0.45&option[0][personID]=0&option[1][schemeoptionID]=3252&option[1][optionRateID]=2681885&option[1][optionPrice]=53.34&option[1][optionIPT]=8.89
```

```xml
<API_Reply>
 <cover>
 <cancellation>
<section>Cancellation cover</section>
<limit>1500</limit>
<excess>75</excess>
 </cancellation>
 <medical>
<section>Medical Emergency Expenses</section>
<limit>5000000</limit>
<excess>100</excess>
 </medical>
 <possessions>
<section>Personal possessions</section>
<limit>1500</limit>
<excess>75</excess>
 </possessions>
 </cover>
 <Scheme>
<schemeID>369</schemeID>
<schemeName>Silver Independent</schemeName>
<purchaseDate>2011-10-13</purchaseDate>
<keyFacts>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXagentMainKF.pdf</keyFacts>
<policyWording>http://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/HXagentMainPW.pdf</policyWording>
<PolicyNumber>F1234100633</PolicyNumber>
<Annual>N</Annual>
 </Scheme>
 <PolicyOptions>
<schemeoptionID>3252</schemeoptionID>
<optionName>Winter Sports</optionName>
<optionPrice>53.34</optionPrice>
<optionNet>33.72</optionNet>
<optionIPT>8.89</optionIPT>
 </PolicyOptions>
 <ClientDetails>
 <address>
<address1>Holiday Extras</address1>
<address2>Ashford Road</address2>
<address3>Newingreen</address3>
<address4>Hythe</address4>
<address5>Kent</address5>
<postcode>CT21 4JF</postcode>
 </address>
<email>test@example.com</email>
<dayPhone>01234567890</dayPhone>
 </ClientDetails>
 <Itinerary>
<startDate>2012-10-10</startDate>
<endDate>2012-10-19</endDate>
<destinationName>Europe (exc Spain, Cyprus, Malta, Turkey)</destinationName>
 </Itinerary>
 <Pricing>
<grossAmount>42.44</grossAmount>
<netAmount>22.48</netAmount>
<overallAmount>98.45</overallAmount>
<premiumIPTAmount>5.93</premiumIPTAmount>
<medicalAmount>0</medicalAmount>
<optionsIPT>9.34</optionsIPT>
<optionsNett>37.09</optionsNett>
<optionsAmount>56.01</optionsAmount>
<overallIPTAmount>15.27</overallIPTAmount>
<overallNett>59.57</overallNett>
<overallComm>23.61</overallComm>
<premiumComm>14.03</premiumComm>
<optionsComm>9.58</optionsComm>
<overallNet>83.18</overallNet>
 </Pricing>
 <People>
 <PersonDetails>
<title>Mr</title>
<firstName>Test</firstName>
<lastName>Test</lastName>
<birthDate>1985-05-05</birthDate>
 <PersonOptions>
<schemeoptionID>3249</schemeoptionID>
<ccID>535171</ccID>
<optionRateID>0</optionRateID>
<optionPrice>2.67</optionPrice>
<optionNet>3.37</optionNet>
<optionIPT>0.45</optionIPT>
<optionEnableDuplicates>0</optionEnableDuplicates>
<optionHazardousPursuit>0</optionHazardousPursuit>
<optionName>Business Cover</optionName>
 </PersonOptions>
 </PersonDetails>
 <PersonDetails>
<title>Mrs</title>
<firstName>Test</firstName>
<lastName>Test</lastName>
<birthDate>1987-07-07</birthDate>
<arrSchemePersonOption />
 </PersonDetails>
 </People>
 <API_Header>
 <Request>
<key>foo</key>
<ABTANumber>ABCDE</ABTANumber>
<Password>ABCDE</Password>
<Address>Holiday Extras</Address>
<Address>Ashford Road</Address>
<Address>Newingreen</Address>
<Town>Hythe</Town>
<County>Kent</County>
<PostCode>CT21 4JF</PostCode>
<DayPhone>01234567890</DayPhone>
<Email>test@example.com</Email>
 <option>
<schemeoptionID>3249</schemeoptionID>
<optionRateID>2687460</optionRateID>
<optionPrice>2.67</optionPrice>
<optionIPT>0.45</optionIPT>
<personID>0</personID>
 </option>
 <option>
<schemeoptionID>3252</schemeoptionID>
<optionRateID>2681885</optionRateID>
<optionPrice>53.34</optionPrice>
<optionIPT>8.89</optionIPT>
 </option>
 </Request>
 </API_Header>
 </API_Reply>
```
