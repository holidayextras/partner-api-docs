---

---

# Car Parking Upgrade

Only for UK products

[API Docs](/hxapi/) > endpoint:[upgrade](upgrade)

## Method

GET






## Parameters

 | Name         | Data Type    | Format     | Required | 
 | ----         | ---------    | ------     | -------- | 
 | key          | Alphanumeric |            | Y        | 
 | token        | Integer      | [0-9]{9}   | Y        | 
 | Product code | Alphanumeric | [A-Z,0-9]+ | Y        | 
 | AdultCount   | Integer      |            | Y        | 
 | ArrivalDate  | Date         |            | Y        | 
 | DepartDate   | Date         |            | N        | 



The file extension (js or xml) is also required.







## Example


Get add-ons available for Parking at Gatwick (LGW2)

''http://api.holidayextras.co.uk/upgrade/LGW2.xml?AdultsCount=2&ArrivalDate=01/09/17&DepartDate=10/09/17&key=foo&token=123456789''


### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="2" Result="OK" expires="2016-11-16 12:54:10">
<API_Header>
<Request>
<AdultsCount>2</AdultsCount>
<ArrivalDate>2017-09-01</ArrivalDate>
<DepartDate>2017-09-10</DepartDate>
<key>foo</key>
<token>123456789</token>
<format>xml</format>
</Request>
</API_Header>
<Hotel/>
<Supplement>
<Code>LGWNST</Code>
<Name>No1 Lounge, Gatwick South South Terminal</Name>
<AdPrice>28.00</AdPrice>
<NonDiscAdPrice>28.00</NonDiscAdPrice>
<AdDiscAmt>0.00</AdDiscAmt>
<Per>P</Per>
<Canx>Y</Canx>
<Filter>
<wistia>1</wistia>
<primary_for_product_typecarparks>1</primary_for_product_typecarparks>
</Filter>
<description>Food, drinks, books and wifi all included</description>
<supplement_type>Lounge</supplement_type>
<Date>2017-09-02</Date>
</Supplement>
<Supplement>
<Code>LGWNNM</Code>
<Name>My Lounge, Gatwick North North Terminal</Name>
<AdPrice>20.00</AdPrice>
<NonDiscAdPrice>20.00</NonDiscAdPrice>
<AdDiscAmt>0.00</AdDiscAmt>
<Per>P</Per>
<Canx>Y</Canx>
<Filter>
<primary_for_product_typecarparks>1</primary_for_product_typecarparks>
</Filter>
<description>
My Lounge is an informal space where you can let your hair down and relax.
</description>
<supplement_type>Lounge</supplement_type>
<Date>2017-09-02</Date>
</Supplement>
</API_Reply>
```

### 'Supplement' Node

```xml
<Supplement>
<Code>LGWNST</Code>
<Name>No1 Lounge, Gatwick South South Terminal</Name>
<AdPrice>28.00</AdPrice>
<NonDiscAdPrice>28.00</NonDiscAdPrice>
<AdDiscAmt>0.00</AdDiscAmt>
<Per>P</Per>
<Canx>Y</Canx>
<Filter>
<wistia>1</wistia>
<primary_for_product_typecarparks>1</primary_for_product_typecarparks>
</Filter>
<description>Food, drinks, books and wifi all included</description>
<supplement_type>Lounge</supplement_type>
<Date>2017-09-02</Date>
</Supplement>
```

 | Name              | Possible Values                                                                                                                                | Notes                                                                                                                                                                                                                                                        | 
 | ----              | ---------------                                                                                                                                | -----                                                                                                                                                                                                                                                        | 
 | Code              |                                                                                                                                                | Product code for this add-on                                                                                                                                                                                                                                 | 
 | Name              |                                                                                                                                                |                                                                                                                                                                                                                                                              | 
 | description       |                                                                                                                                                |                                                                                                                                                                                                                                                              | 
 | Per               | P,B,R                                                                                                                                          | Sale rule for add-on. Different options available (P = Per Person, B = Per Booking, R = Per Room)                                                                                                                                                            | 
 | Price             |                                                                                                                                                | Returned if add-on is Per B or R - price per add-on                                                                                                                                                                                                          | 
 | AdPrice           |                                                                                                                                                | Optionally returned if add-on is per P - price per adult                                                                                                                                                                                                     | 
 | ChPrice           |                                                                                                                                                | Optionally returned if add-on is per P - price per child                                                                                                                                                                                                     | 
 | only_for_adults   |                                                                                                                                                | If 1, add-on is for adults only                                                                                                                                                                                                                              | 
 | only_for_children |                                                                                                                                                | If 1, add-on is for children only                                                                                                                                                                                                                            | 
 | Date              |                                                                                                                                                | Date for add-on - for example a lounge add-on will be for the same day as the parking booking, however if a parking return greet add-on is selected then this will be for the return date of parking stay                                                    | 
 | number_of_days    |                                                                                                                                                | Applies to insurance add-on - maximum trip length. If you pass in both ArrivalDate and DepartDate, the most appropriate option will be returned automatically; if you don't you will get multiple insurance options with different 'number_of_days' settings | 
 | supplement_type   | Meal,Luxury,Lounge,Insurance,Quick Check-in,Charity Donation (to come: Transport, Transfer, Text Services, Currency Card, Postal Confirmation) | Type of add-on, to help with grouping. "Luxury" covers options like bottle of champagne in room                                                                                                                                                              | 
 | Canx              | Y,N                                                                                                                                            | Is add-on removable/cancellable once booked                                                                                                                                                                                                                  | 

### Pricing

It may be easier to assume all passengers/rooms on the bookings would like the addon, and this is permitted though not recommended. You should calculate and present prices based on the 'Per' flag and user input. Limit the quantity of per room & per person addons based on the Adults, Children & number of rooms sent, and per booking addons to 1.
