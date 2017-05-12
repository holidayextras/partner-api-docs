---

---

# Insurance quote + options

## /insurancepolicy/foo

Where **foo** is the scheme ID from a call to [GET quotes](availability). Most parameters required by this method are returned in that reply.

### Method

GET

### Parameters

 | Name          | Format       | Required | Notes                                                    | 
 | ----          | ------       | -------- | -----                                                    | 
 | key           | String       | Y        |                                                          | 
 | ABTANumber    | String       | Y        | Required to correctly calculate and attribute commission | 
 | Password      | String       | Y        |                                                          | 
 | StartDate     | Date         | Y        | § PolicyStart                                           | 
 | EndDate       | Date         | Y        | § PolicyEnd                                             | 
 | destinationID | Number       | Y        | §                                                       | 
 | schemePrice   | Number       | Y        | § SchemePrice (if retail, you can decide your own)      | 
 | birthDate[]   | Date Array   | Y        | *                                                        | 
 | title[]       | String Array | Y        | *                                                        | 
 | firstName[]   | String Array | Y        | *                                                        | 
 | lastName[]    | String Array | Y        | *                                                        | 

* It's recommended to specify keys (eg birthDate[0], title[0] rather than just birthDate[]) to avoid any risk of mixing up passenger details

§ You should use the values from the [GET quotes](availability) reply for these fields

### Request

```
http://api.holidayextras.co.uk/v1/insurancepolicy/188?ABTANumber=FOO&Password=FOO&EndDate=2011-10-20&StartDate=2011-10-10&birthDate[0]=1945-05-05&birthDate[1]=1955-01-01&destinationID=13&firstName[0]=test&firstName[1]=test&key=foo&lastName[0]=tests&lastName[1]=test&schemePrice=12.00&title[0]=Mr&title[1]=Mrs
```

### Reply

<code xml><?xml version="1.0" ?>
<API_Reply>
    <Options>
    <Option>
      <schemeoptionID>101</schemeoptionID>
      <optionName>Excess Waiver</optionName>
      <optionPrice>26.04</optionPrice>
      <optionNet>17.97</optionNet>
      <optionRateID>17972</optionRateID>
      <optionIPT>4.34</optionIPT>
      <optionDescriptionWording>If you take this Excess Waiver option, you will not have to pay any excess in the event of a claim.</optionDescriptionWording>
      <optionType>S</optionType>
    </Option>
    <Option>
      <schemeoptionID>110</schemeoptionID>
      <optionName>Increased Cancellation</optionName>
      <optionPrice>30.64</optionPrice>
      <optionNet>40.47</optionNet>
      <optionRateID>30692</optionRateID>
      <optionIPT>5.11</optionIPT>
      <optionDescriptionWording>If your holiday costs more than &#38;#163;5,000, you can extend your Cancellation Cover by multiples of &#38;#163;1,000, up to a maximum od &#38;#163;10,000. Please select the increase you require from the drop-down list.</optionDescriptionWording>
      <optionType>M</optionType>
      <optionUpperLimit>5</optionUpperLimit>
    </Option>
    <Option>
      <optionName>Hazardous Activity Cover</optionName>
      <optionDescriptionWording>The policy can be extended to cover Hazardous Activities. Some activities are covered as standard, while others are covered with the payment of an additional premium. When you tick the box, please enter all the activites you will be doing, and the cover provided will be shown.</optionDescriptionWording>
      <optionType>H</optionType>
      <activityBandPricing>
        <schemeoptionID>103</schemeoptionID>
        <coverWording>This activity is covered as standard under the policy.</coverWording>
        <hazBand>A</hazBand>
        <optIndividualPricing>1</optIndividualPricing>
        <optIndividualPrices>
          <IndividualPrice>
            <certificateClientID>102482</certificateClientID>
            <optionPrice>0</optionPrice>
            <optionRateID>19563</optionRateID>
            <optionNetPremium>0</optionNetPremium>
            <optionIPT>0</optionIPT>
          </IndividualPrice>
          <IndividualPrice>
            <certificateClientID>102483</certificateClientID>
            <optionPrice>0</optionPrice>
            <optionRateID>19562</optionRateID>
            <optionNetPremium>0</optionNetPremium>
            <optionIPT>0</optionIPT>
          </IndividualPrice>
        </optIndividualPrices>
        <Activities>
          <Activity>Athletics</Activity>
          <Activity>Badminton</Activity>
          ...
          <Activity>Windsurfing</Activity>
          <Activity>Yachting (crewing) - inside territorial waters</Activity>
        </Activities>
      </activityBandPricing>
      ...
      <activityBandPricing>
        <schemeoptionID>694</schemeoptionID>
        <coverWording>You will need to pay the additional premium to cover this activity. There is no cover under the Personal Accident or Personal Liability section of the policy while participating in this activity. Cover for medical expenses remains in place.</coverWording>
        <hazBand>C</hazBand>
        <optIndividualPricing>1</optIndividualPricing>
        <optIndividualPrices>
          <IndividualPrice>
            <certificateClientID>102482</certificateClientID>
            <optionPrice>22.67</optionPrice>
            <optionRateID>472394</optionRateID>
            <optionNetPremium>15.47</optionNetPremium>
            <optionIPT>3.78</optionIPT>
          </IndividualPrice>
          <IndividualPrice>
            <certificateClientID>102483</certificateClientID>
            <optionPrice>22.67</optionPrice>
            <optionRateID>472129</optionRateID>
            <optionNetPremium>15.47</optionNetPremium>
            <optionIPT>3.78</optionIPT>
          </IndividualPrice>
        </optIndividualPrices>
        <Activities>
          <Activity>Abseiling</Activity>
          <Activity>Animal Conservation / Game Reserve Work</Activity>
          ...
          <Activity>Weight Lifting</Activity>
          <Activity>Zorbing</Activity>
        </Activities>
      </activityBandPricing>
    </Option>
    <Option>
      <schemeoptionID>107</schemeoptionID>
      <optionName>Wedding Cover</optionName>
      <optionDescriptionWording>Cover for your rings, attire, gifts and recordings if you are getting married while travelling. Please select this option for every traveller that requires the cover.</optionDescriptionWording>
      <optionType>P</optionType>
      <optIndividualPricing>1</optIndividualPricing>
      <optIndividualPrices>
        <IndividualPrice>
          <certificateClientID>102482</certificateClientID>
          <optionPrice>40.85</optionPrice>
          <optionRateID>21153</optionRateID>
          <optionNetPremium>30.00</optionNetPremium>
          <optionIPT>6.81</optionIPT>
        </IndividualPrice>
        <IndividualPrice>
          <certificateClientID>102483</certificateClientID>
          <optionPrice>20.43</optionPrice>
          <optionRateID>21152</optionRateID>
          <optionNetPremium>15.00</optionNetPremium>
          <optionIPT>3.40</optionIPT>
        </IndividualPrice>
      </optIndividualPrices>
    </Option>
    ...
    <Option>
      <schemeoptionID>692</schemeoptionID>
      <optionName>Golf Cover</optionName>
      <optionPrice>14.17</optionPrice>
      <optionRateID>469214</optionRateID>
      <optionNetPremium>9.67</optionNetPremium>
      <optionIPT>2.36</optionIPT>
      <optionDescriptionWording>This option increases your policy to include cover for your golfing equipment, and to cover you for anynon-refundable green fees if you can&#39;t play. Please select the option for every traveller that needs the cover.</optionDescriptionWording>
      <optionType>P</optionType>
    </Option>
    </Options>
    <Quote>
    	<certificateRef>85EC165570P306109EF8</certificateRef>
    <certificateID>52879</certificateID>
    <People>
      <Person>
        <personID>102482</personID>
        <personName>Test Tests</personName>
      </Person>
      <Person>
        <personID>102483</personID>
        <personName>Test Test</personName>
      </Person>
    </People>
    <Pricing>
      <SchemePrice>22.98</SchemePrice>
      <SchemeNet>38.67</SchemeNet>
      <SchemeIPT>9.45</SchemeIPT>
    </Pricing>
    </Quote>
    <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <Password>FOO</Password>
      <EndDate>2011-10-20</EndDate>
      <StartDate>2011-10-10</StartDate>
      <birthDate>1945-05-05</birthDate>
      <birthDate>1955-01-01</birthDate>
      <destinationID>3</destinationID>
      <firstName>test</firstName>
      <firstName>test</firstName>
      <key>foo</key>
      <lastName>tests</lastName>
      <lastName>test</lastName>
      <schemePrice>22.98</schemePrice>
      <title>Mr</title>
      <title>Mrs</title>
      <v>1</v>
    </Request>
    </API_Header>
</API_Reply></code>

### Fields explained

To book an option you will need to send schemeoptionID, optionPrice, optionRateID, optionIPT, optionType and on per-person options, optCertificateClientID. The position of these fields in the reply depends on the type of option and any variation in option pricing. The example above contains all possible variations of the Options/Option node.

#### Options/Option/optionType

Types of option


*  P = Per person

*  S = Per policy, limit one

*  M = Per policy, limit variable
    * The Options/Option/optionUpperLimit field indicates the maximum quantity

*  H = Hazardous activity cover

#### Options/Option/optIndividualPricing (and Options/Option/activityBandPricing/optIndividualPricing)

Indicates the pricing is quoted on a per-passenger basis with potentially different rates for each passenger. Use the Quote/People node to determine the certificateClientID of each passenger, you will need this to match the price within optIndividualPrices/IndividualPrice based on that if that passenger wishes to purchase the option.

#### Options/Option/activityBandPricing

This is returned on type H options. 'Activity' has a list of covered activities, and 'coverWording' contains any detail. 'hazBand' goes from 'A' to 'D', and increasing bands cover all the activities in the bands below (band C covers everything in band A and B as well). Implementation of this group of options is up to you, we have used a javascript multiple-autocomplete text box to set a hidden field based on the entered activity with the highest band, a multi-select or just listing radio buttons from A to D and letting the user check over the activities themselves may be simpler.

#### Quote/certificateRef

ID string of your temporary policy. You will need this when [POSTing](issue) to issue the policy.

### Retail - commission calculations

Pseudo code
```
ipt_rate = 20 /* 20 percent */
net = (scheme NET + sum( all selected option NETs ))
```

Basic calculation (selling scheme and all options at suggested price)
```
ipt = (scheme IPT + sum( all selected option IPTs ))
comm = ((scheme price + sum( all selected option prices)) - (net + ipt))
```

Overriding suggested selling price calculation
```
your_price = 100
if( your_price < net ):
  ipt = net / (1 + (ipt_rate/100))
else:
  ipt = your_price / (1 + (ipt_rate/100))
comm = (your_price - (net + ipt))
```

