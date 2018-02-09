---

---

# Insurance options

[API Docs](/hxapi/) > product:[Insurance](/hxapi/insurance/options)

## Insurance Schemes Options Request

This endpoint will respond with the options available for the selected insurance scheme.

### Method

GET

### Endpoint

To request the list of options available for the selected insurance scheme, the endpoint to use is (where `<schemeCode>` is the SchemeCode, found in the [insurance scheme availability response](availability)):

```
https://api.holidayextras.co.uk/v1/insurancepolicy/<schemeCode>
```

For example, to request the options available for `SchemeCode` "8673" (Europe low risk, single trip), the endpoint is:

```
https://api.holidayextras.co.uk/v1/insurancepolicy/8673
```

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
 | birthDate[] | Date | YYYY-MM-DD | Y | Date of birth for customers. All customers requiring inclusion on this policy must provide their date of birth. You can add multiple people by enumerating each date of birth in the format birthDate[0], birthDate[1], birthDate[2], and so on. |
 | title[] | String | [A-Z] 4 chars | Y | Customer's title. All customers requiring inclusion on this policy must provide their title. You can add multiple people by enumerating each title in the format title[0], title[1], title[2], and so on. |
 | firstName[] | String | [A-Z] 15 chars | Y | Customer's first name. All customers requiring inclusion on this policy must provide their first name in full (initials will not be accepted). You can add multiple people by enumerating each first name in the format firstName[0], firstName[1], firstName[2], and so on. |
 | lastName[] | String | [A-Z] 15 chars | Y | Customer's last name. All customers requiring inclusion on this policy must provide their last name in full. You can add multiple people by enumerating each last name in the format lastName[0], lastName[1], lastName[2], and so on. |
 | destinationID | Integer | [0-9] 2 chars | Y | Found in the [insurance scheme availability response](availability) |
 | schemePrice | Float | [0-9] | Y | Found in the [insurance scheme availability response](availability) |


## Insurance Schemes Options Response

The insurance schemes options response will return all the options that are available on for the selected scheme. A summary of the request received can be found in the header field at the end of the response.

For a detailed explanation of the fields returned, please see below:

 | Field | Additional Information |
 | ----- | ---------------------- |
 | Option/SchemeOptionID | TBC |
 | Option/optionName | TBC |
 | Option/optionPrice | TBC |
 | Option/optionNet | TBC |
 | Option/optionRateID | TBC |
 | Option/optionIPT | TBC |
 | Option/optionDescriptionWording | TBC |
 | Option/optionType | TBC |
 | Option/maxValue | TBC |
 | Option/AgeGroup | TBC |
 | Option/activityBandPricing | TBC |
 | Option/activityBandPricing/schemeoptionID | TBC |
 | Option/activityBandPricing/coverWording | TBC |
 | Option/activityBandPricing/hazBand | TBC |
 | Option/activityBandPricing/optIndividualPricing | TBC |
 | Option/activityBandPricing/optIndividualPrices/IndividualPrice | This will contain various information such as: the `certificateClientID`, which must be passed through to the create policy request to include this option; the option price; a breakdown of the option Insurance Premium Tax and Net Premium. |
 | Activities/Activity | TBC |
 | Quote/certificateRef | TBC |
 | Quote/certificateID | TBC |
 | Quote/People/Person | TBC |
 | Quote/Pricing | TBC |
 | API_Header | The API returns every parameter and value you sent in the previous request. |

## Worked Examples

Below are worked examples of both the request and response for insurance schemes options.

### Insurance Schemes Options Request

```
https://api.holidayextras.co.uk/v1/insurancepolicy/8673?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&StartDate=2017-12-01&EndDate=2017-12-08&birthDate[0]=1970-01-01&title[]=Mr&firstName[]=Test&lastName[]=Test&destinationID=13&schemePrice=9.13
```

### Insurance Schemes Options Response

NB: This is a shortened example compiled from a full insurance schemes options response.

```xml
<?xml version="1.0" ?>
<API_Reply>
    <Options>
        <Option>
            <schemeoptionID>61389</schemeoptionID>
            <optionName>Gadget Cover (up to ?2000)</optionName>
            <optionPrice>15.00</optionPrice>
            <optionNet>11.86</optionNet>
            <optionRateID>12828326</optionRateID>
            <optionIPT>2.50</optionIPT>
            <optionDescriptionWording>We provide cover for your gadgets against theft, loss, accidental damage, malicious damage and unauthorised calls when you are on a trip that is covered by your travel insurance policy. The gadgets must be in good condition and full working order at the time of your trip. &#60;a href=&#34;https://secure.holidayextras.co.uk/images/groups/insurancemagenta/policy_wording/Gadget_wording_Tiga.pdf&#34; target=&#38;#39;_blank&#38;#39;&#62;Policy wording&#60;/a&#62;</optionDescriptionWording>
            <optionType>S</optionType>
            <maxValue>6</maxValue>
        </Option>
        <Option>
            <optionName>Hazardous Activity Cover</optionName>
            <AgeGroup></AgeGroup>
            <optionDescriptionWording>The policy can be extended to cover Hazardous Activities. Some activities are covered as standard, while others are covered with the payment of an additional premium. When you tick the box, please enter all the activites you will be doing, and the cover provided will be shown.</optionDescriptionWording>
            <optionType>H</optionType>
            <activityBandPricing>
                <schemeoptionID>61385</schemeoptionID>
                <coverWording>You will need to pay the additional premium to cover this activity. There is no cover under the Personal Accident or Personal Liability section of the policy while participating in this activity. Cover for medical expenses remains in place but the medical excess increases to &#38;pound;250.</coverWording>
                <hazBand>D</hazBand>
                <optIndividualPricing>1</optIndividualPricing>
                <optIndividualPrices>
                    <IndividualPrice>
                        <certificateClientID>23207639</certificateClientID>
                        <optionPrice>3.65</optionPrice>
                        <optionRateID>12831315</optionRateID>
                        <optionNetPremium>2.40</optionNetPremium>
                        <optionIPT>0.61</optionIPT>
                    </IndividualPrice>
                </optIndividualPrices>
                <Activities>
                    <Activity>Fencing (within organisers guidelines)</Activity>
                </Activities>
            </activityBandPricing>
            <activityBandPricing>
                <schemeoptionID>61386</schemeoptionID>
                <coverWording>You will need to pay the additional premium to cover this activity. There is no cover under the Personal Accident or Personal Liability section of the policy while participating in this activity. Cover for medical expenses remains in place.</coverWording>
                <hazBand>C</hazBand>
                <optIndividualPricing>1</optIndividualPricing>
                <optIndividualPrices>
                    <IndividualPrice>
                        <certificateClientID>23207639</certificateClientID>
                        <optionPrice>3.65</optionPrice>
                        <optionRateID>12829917</optionRateID>
                        <optionNetPremium>2.40</optionNetPremium>
                        <optionIPT>0.61</optionIPT>
                    </IndividualPrice>
                </optIndividualPrices>
                <Activities>
                    <Activity>Airboating</Activity>
                    <Activity>Biathlon</Activity>
                    <Activity>Bobsleigh (on a wintersports policy only)</Activity>
                    <Activity>Cross Channel Swimming (with full support team)</Activity>
                    <Activity>Dry Slope Skiing</Activity>
                    <Activity>Football or soccer (other than children?s club in resort)</Activity>
                    <Activity>Gaelic Football</Activity>
                    <Activity>Heliskiing (on a wintersports policy only)</Activity>
                    <Activity>Hockey</Activity>
                    <Activity>Ice Hockey (on a wintersports policy only)</Activity>
                    <Activity>Kite Surfing</Activity>
                    <Activity>Lacrosse</Activity>
                    <Activity>Roller Hockey</Activity>
                    <Activity>Sand Boarding</Activity>
                    <Activity>Sand surfing/skiing</Activity>
                    <Activity>Segway riding (organised tour only</Activity>
                    <Activity>Shinty</Activity>
                    <Activity>Street hockey (wearing pads and helmets)</Activity>
                    <Activity>Triathlon</Activity>
                </Activities>
            </activityBandPricing>
            <activityBandPricing>
                <schemeoptionID>61387</schemeoptionID>
                <coverWording>There is no cover under the Personal Accident or Personal Liability section of the policy while participating in this activity, but there is no need for an additional premium. Cover for medical expenses remains in place.</coverWording>
                <hazBand>B</hazBand>
                <optIndividualPricing>1</optIndividualPricing>
                <optIndividualPrices>
                    <IndividualPrice>
                        <certificateClientID>23207639</certificateClientID>
                        <optionPrice>0.00</optionPrice>
                        <optionRateID>12833670</optionRateID>
                        <optionNetPremium>0.00</optionNetPremium>
                        <optionIPT>0.00</optionIPT>
                    </IndividualPrice>
                </optIndividualPrices>
                <Activities>
                    <Activity>Archery</Activity>
                    <Activity>Camel/Elephant Riding/Trekking</Activity>
                    <Activity>Catamaran sailing (if qualified)</Activity>
                    <Activity>Clay Pigeon Shooting</Activity>
                    <Activity>Dinghy Sailing</Activity>
                    <Activity>Flying as passenger (private/small aircraft)</Activity>
                    <Activity>Go Karting (within organisers guidelines)</Activity>
                    <Activity>Jet Boating (no racing)</Activity>
                    <Activity>Jet Skiing (no racing)</Activity>
                    <Activity>Paint Balling (wearing eye protection)</Activity>
                    <Activity>Quad biking (part of an organised activity only)</Activity>
                    <Activity>Rifle range shooting,</Activity>
                    <Activity>Sailing (if qualified and in territorial waters only),</Activity>
                    <Activity>Shooting (within organisers guidelines)</Activity>
                    <Activity>Small Bore Target Shooting (within organisers guidelines)</Activity>
                    <Activity>Snow Mobiling</Activity>
                    <Activity>War Games (non-armed forces, no live ammunition, wearing eye protection)</Activity>
                    <Activity>Yachting if qualified - territorial waters only</Activity>
                </Activities>
            </activityBandPricing>
            <activityBandPricing>
                <schemeoptionID>61388</schemeoptionID>
                <coverWording>This activity is covered as standard under the policy.</coverWording>
                <hazBand>A</hazBand>
                <optIndividualPricing>1</optIndividualPricing>
                <optIndividualPrices>
                    <IndividualPrice>
                        <certificateClientID>23207639</certificateClientID>
                        <optionPrice>0.00</optionPrice>
                        <optionRateID>12828424</optionRateID>
                        <optionNetPremium>0.00</optionNetPremium>
                        <optionIPT>0.00</optionIPT>
                    </IndividualPrice>
                </optIndividualPrices>
                <Activities>
                    <Activity>Abseiling (within organisers guidelines)</Activity>
                    <Activity>Athletics</Activity>
                    <Activity>Badminton</Activity>
                    <Activity>Ballooning - Hot Air (organised pleasure rides only)</Activity>
                    <Activity>Banana Boating</Activity>
                    <Activity>Baseball</Activity>
                    <Activity>Basketball</Activity>
                    <Activity>Bowls</Activity>
                    <Activity>Boxing Training (no contact)</Activity>
                    <Activity>Bungee Jumping (within organisers guidelines)</Activity>
                    <Activity>Canoeing (up to grade 2 rivers, not white water)</Activity>
                    <Activity>Climbing Wall</Activity>
                    <Activity>Cricket</Activity>
                    <Activity>Cross Country Running</Activity>
                    <Activity>Curling</Activity>
                    <Activity>Cycling</Activity>
                    <Activity>Deep Sea Fishing</Activity>
                    <Activity>Fell walking, running - no climbing (under 5500m altitude)</Activity>
                    <Activity>Fishing</Activity>
                    <Activity>Football/soccer (children?s club in resort only)</Activity>
                    <Activity>Glacier Walking</Activity>
                    <Activity>Golf</Activity>
                    <Activity>Gymnastics (no competitions)</Activity>
                    <Activity>Handball</Activity>
                    <Activity>Heptathlon</Activity>
                    <Activity>High rope activities (within organisers guidelines)</Activity>
                    <Activity>Hiking - Inca trail/Macchu Picchu (within organisers guidelines)</Activity>
                    <Activity>Hiking up to 5449m (within organiser guidelines)</Activity>
                    <Activity>Hockey (under 16s using plastic sticks)</Activity>
                    <Activity>Horse Riding (no Polo, Hunting, Jumping)</Activity>
                    <Activity>Indoor Climbing wall</Activity>
                    <Activity>Kayaking - up to grade 2 rivers only, no white water</Activity>
                    <Activity>Marathon running</Activity>
                    <Activity>Motorcycle, motorbike and scooter riding (only as a mode of transport, rider must have a valid licence and all should be wearing a crash helmet)</Activity>
                    <Activity>Mountain Biking</Activity>
                    <Activity>Netball</Activity>
                    <Activity>Orienteering</Activity>
                    <Activity>Parascending/Parasailing (towed by boat)</Activity>
                    <Activity>Pony Trekking</Activity>
                    <Activity>Racquetball</Activity>
                    <Activity>Rambling</Activity>
                    <Activity>Rap Running/Jumping (within organisers guidelines)</Activity>
                    <Activity>Ringos</Activity>
                    <Activity>Roller skating/blading (wearing pads and helmets)</Activity>
                    <Activity>Rounders</Activity>
                    <Activity>Rowing (not racing)</Activity>
                    <Activity>Running, Sprint/Long Distance</Activity>
                    <Activity>Safari (organised tour) in a car or on foot</Activity>
                    <Activity>Sail Boarding</Activity>
                    <Activity>Scuba Diving (up to 30m - qualified or diving with a qualified instructor, no solo dives)</Activity>
                    <Activity>Sea Kayaking</Activity>
                    <Activity>Skateboarding (wearing pads/helmets)</Activity>
                    <Activity>Skidooing</Activity>
                    <Activity>Sledging (pulled by dogs or horses or reindeer as a passenger)</Activity>
                    <Activity>Sledging/Toboganning</Activity>
                    <Activity>Snorkelling</Activity>
                    <Activity>Softball</Activity>
                    <Activity>Squash</Activity>
                    <Activity>Surfing</Activity>
                    <Activity>Swimming</Activity>
                    <Activity>Swimming and snorkelling with dolphins, beluga whales, manatees, stingrays and turtles (supervised with animals in captivity or in the wild)</Activity>
                    <Activity>Swimming and snorkelling with sharks (supervised with animals in captivity only)</Activity>
                    <Activity>Table Tennis</Activity>
                    <Activity>Ten Pin Bowling</Activity>
                    <Activity>Tennis</Activity>
                    <Activity>Trampolining</Activity>
                    <Activity>Trekking - Inca trail/Macchu Picchu (within organisers guidelines)</Activity>
                    <Activity>Trekking up to 5449m (within organiser guidelines)</Activity>
                    <Activity>Tug of War</Activity>
                    <Activity>Volleyball</Activity>
                    <Activity>Wake Boarding</Activity>
                    <Activity>Water Polo</Activity>
                    <Activity>Water Skiing</Activity>
                    <Activity>White Water Rafting as an organised activity (Grades 1 to 3 only)</Activity>
                    <Activity>Windsurfing</Activity>
                    <Activity>Zip lining</Activity>
                    <Activity>Zip Trekking</Activity>
                    <Activity>Zorbing</Activity>
                </Activities>
            </activityBandPricing>
        </Option>
    </Options>
    <Quote>
        <certificateRef>B5EC12729675P23207639EA9</certificateRef>
        <certificateID>12729675</certificateID>
        <People>
            <Person>
                <personID>23207639</personID>
                <personName>Test Test</personName>
            </Person>
        </People>
        <Pricing>
            <SchemePrice>9.13</SchemePrice>
            <SchemeNet>6.01</SchemeNet>
            <SchemeIPT>1.52</SchemeIPT>
        </Pricing>
    </Quote>
    <API_Header>
        <Request>
            <ABTANumber>ITEST</ABTANumber>
            <Password>INSXL</Password>
            <key>mytestkey</key>
            <token>generate</token>
            <StartDate>2017-12-01</StartDate>
            <EndDate>2017-12-08</EndDate>
            <birthDate>1970-01-01</birthDate>
            <title>Mr</title>
            <firstName>Test</firstName>
            <lastName>Test</lastName>
            <destinationID>13</destinationID>
            <schemePrice>9.13</schemePrice>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
