---

---

# Hotel or Car Parking Upgrade

only for UK products

[API Docs](/hxapi/) > endpoint:[upgrade](upgrade)

## Method

GET






## Parameters

 | Name         | Data Type    | Format     | Required                      | 
 | ----         | ---------    | ------     | --------                      | 
 | key          | Alphanumeric |            | Y                             | 
 | token        | Integer      | [0-9]{9}   | Y                             | 
 | Product code | Alphanumeric | [A-Z,0-9]+ | Y                             | 
 | AdultCount   | Integer      |            | Y                             | 
 | ArrivalDate  | Date         |            | Y                             | 
 | DepartDate   | Date         |            | N                             | 
 | RoomCode[]   | Array        |            | Only if searching for a hotel | 



The file extension (js or xml) is also required.







## Example

Get add-ons available for Gatwick Hilton:

''http://api.holidayextras.co.uk/upgrade/LGWHIL.xml?AdultsCount=2&ArrivalDate=01/09/10&DepartDate=10/09/10&key=foo&token=123456789''

Or Get add-ons available for Luton Airparks

''http://api.holidayextras.co.uk/upgrade/LTN2.xml?AdultsCount=2&ArrivalDate=01/09/16&DepartDate=10/09/16&key=foo&token=123456789''


### Reply

```xml
<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="General" Customer="A" Session="123456789" RequestCode="12" Result="OK">
  <Itinerary>
    <SiteCode>LGWHIL</SiteCode>
  </Itinerary>
  <Supplement>
    <Code>LGWHDI</Code>
    <Name>Three-course buffet dinner</Name>
    <AdPrice>12.50</AdPrice>
    <Per>P</Per>
    <Canx>Y</Canx>
    <description>Do you have dinner plans? Make a night of it, upgrade your package to include a three-course dinner. After a long drive to the airport, unwind in the Garden Restaurant and satisfy your hunger with a hearty meal. Serving a full buffet menu, the Garden Restaurant is sure to have something to suit everyone&#39;s taste buds.</description>
    <supplement_type>Meal</supplement_type>
    <Date>2010-09-01</Date>
  </Supplement>
  <Supplement>
    <Code>LGWHDX</Code>
    <Name>Deluxe room</Name>
    <Price>25.00</Price>
    <Per>R</Per>
    <Canx>Y</Canx>
    <description>Taking a well deserved break? Do it in style with a deluxe room. Featuring a large walk-in shower, a soft double bed, and high speed Internet access. Kick off your shoes and enjoy the first-rate standards of a Hilton deluxe room.</description>
    <supplement_type>Luxury</supplement_type>
    <Date>2010-09-01</Date>
  </Supplement>
  <Supplement>
    <Code>LGWHCD</Code>
    <Name>FREE dinner for children under 10 years</Name>
    <AdPrice>0.00</AdPrice>
    <Per>P</Per>
    <Canx>Y</Canx>
    <description>Taking the kids away? Well if you dine at the hotel then the Hilton will let your children eat for FREE. So if they&#39;re under 10 years old and you&#39;ve chosen the adults dinner upgrade then you can pick this FREE dinner option.</description>
    <supplement_type>Meal</supplement_type>
    <only_for_children>1</only_for_children>
    <only_for_adults>0</only_for_adults>
    <Date>2010-09-01</Date>
  </Supplement>

[...]  

  <API_Header>
    <Request>
      <AdultsCount>2</AdultsCount>
      <ArrivalDate>2010-09-01</ArrivalDate>
      <DepartDate>2010-09-10</DepartDate>
      <key>foo</key>
      <token>123456789</token>
      <format>xml</format>
    </Request>
  </API_Header>
</API_Reply>
```

### 'Supplement' Node

```xml
  <Supplement>
    <Code>LGWHCD</Code>
    <Name>FREE dinner for children under 10 years</Name>
    <AdPrice>0.00</AdPrice>
    <Per>P</Per>
    <Canx>Y</Canx>
    <description>Taking the kids away? Well if you dine at the hotel then the Hilton will let your children eat for FREE. So if they&#39;re under 10 years old and you&#39;ve chosen the adults dinner upgrade then you can pick this FREE dinner option.</description>
    <supplement_type>Meal</supplement_type>
    <only_for_children>1</only_for_children>
    <only_for_adults>0</only_for_adults>
    <Date>2010-09-01</Date>
  </Supplement>
```

 | Name              | Possible Values                                                                                                                                | Notes                                                                                                                                                                                                                                                       | 
 | ----              | ---------------                                                                                                                                | -----                                                                                                                                                                                                                                                       | 
 | Code              |                                                                                                                                                | Product code for this addon                                                                                                                                                                                                                                 | 
 | Name              |                                                                                                                                                |                                                                                                                                                                                                                                                             | 
 | description       |                                                                                                                                                |                                                                                                                                                                                                                                                             | 
 | Per               | P,B,R                                                                                                                                          | Sale rule for addon (P = Per Person, B = Per Booking, R = Per Room)                                                                                                                                                                                         | 
 | Price             |                                                                                                                                                | Returned if addon is Per B or R - price per addon                                                                                                                                                                                                           | 
 | AdPrice           |                                                                                                                                                | Optionally returned if addon is per P - price per adult                                                                                                                                                                                                     | 
 | ChPrice           |                                                                                                                                                | Optionally returned if addon is per P - price per child                                                                                                                                                                                                     | 
 | only_for_adults   |                                                                                                                                                | If 1, addon is for adults only                                                                                                                                                                                                                              | 
 | only_for_children |                                                                                                                                                | If 1, addon is for children only                                                                                                                                                                                                                            | 
 | Date              |                                                                                                                                                | Date for addon - for example on a hotel booking, a dinner will be on the same date as the hotel stay, a breakfast or a lounge will be on the day after                                                                                                      | 
 | number_of_days    |                                                                                                                                                | Applies to insurance addon - maximum trip length. If you pass in both ArrivalDate and DepartDate, the most appropriate option will be returned automatically; if you don't you will get multiple insurance options with different 'number_of_days' settings | 
 | supplement_type   | Meal,Luxury,Lounge,Insurance,Quick Check-in,Charity Donation (to come: Transport, Transfer, Text Services, Currency Card, Postal Confirmation) | Type of addon, to help with grouping. "Luxury" covers options like bottle of champagne in room                                                                                                                                                              | 
 | Canx              | Y,N                                                                                                                                            | Is addon removeable/cancellable once booked                                                                                                                                                                                                                 | 

### Pricing

It may be easier to assume all passengers/rooms on the bookings would like the addon, and this is permitted though not recommended. You should calculate and present prices based on the 'Per' flag and user input. Limit the quantity of per room & per person addons based on the Adults, Children & number of rooms sent, and per booking addons to 1.
