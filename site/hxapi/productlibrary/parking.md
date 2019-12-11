---
---

# Product Library - Car Park

[API Docs](/hxapi/) > endpoint:[product](/hxapi/productlibrary/parking)

## /product/CarParkCode

### Method

GET

### Parameters

 | Name   | Format | Required |
 | ----   | ------ | -------- |
 | token  | String | N        |
 | key    | String | Y        |
 | fields | String | N        |

### Request (example 1)

{% codetabs %}
{% codetab Live (XML) %}
```
https://api.holidayextras.co.uk/v1/product/LGW4/lite?token=000015778&key=mytestkey
```
{% endcodetab %}
{% codetab Live (JSON) %}
```
https://api.holidayextras.co.uk/v1/product/LGW4/lite.js?token=000015778&key=mytestkey
```
Note the `.js` extension.
{% endcodetab %}
{% codetab Sandbox (XML) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey
```
{% endcodetab %}
{% codetab Sandbox (JSON) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### Reply (example 1)

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
  <Product>
    <name>Maple Parking Meet and Greet North</name>
    <tripappcarparkname>Maple Parking Meet and Greet North</tripappcarparkname>
    <terminal>North</terminal>
    <advance_purchase>0</advance_purchase>
    <address>Gatwick airport, &lt;br /&gt;West Sussex&lt;br /&gt;RH6 0LL</address>
    <car_stored_at>1 of 4 secured sites</car_stored_at>
    <telephone>01293 652 299</telephone>
    <mg_confirmation_phone_number>You should call car park on 01293 652299 and choose option 1 when you're about 20 minutes from the terminal (which will normally be when you're on the M23).</mg_confirmation_phone_number>
    <fax>01293 652 288</fax>
    <logo>/imageLibrary/Images/3174-gatwick-airport-maple-parking-approved-operator.png</logo>
    <tripappimages>/imageLibrary/Images/4686-maple-parking-meet-greet-25-years.png;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-1.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-4.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-3.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-5.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-7-2.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-6.jpg</tripappimages>
    <brand_image>/imageLibrary/Images/4686-maple-parking-meet-greet-25-years.png</brand_image>
    <mobile_image>/imageLibrary/Images/4686-gatwick-airport-parking-mobile-mapleparkingM&amp;GNorth.png</mobile_image>
    <tripappcarparksellpoint>You can't go wrong with Maple Parking's 25 years of experience.</tripappcarparksellpoint>
    <tripappintroduction>&lt;strong&gt;Drop-off at North Terminal. Stroll to check-in.&lt;/strong&gt;&#xD;
 &#xD;
&lt;h2&gt;Need to know:&lt;/h2&gt;&#xD;
&#xD;
North Terminal: Drive your car to the Sofitel hotel car park and head to the dedicated meet &amp; greet area. Park in a meet and greet bay and look out for a uniformed driver.&lt;br /&gt;&#xD;
Walk to the terminal in 3 minutes. &lt;br /&gt;&#xD;
 &#xD;
When you get back give the driver a call to let them know you're ready and your car will be returned to you where you were met on arrival.&#xD;
 &#xD;
&lt;h2&gt; Accessibility: &lt;/h2&gt;&#xD;
 &#xD;
This service is suitable for customers with limited mobility, as a shuttle bus is not required&#xD;
 &#xD;
&lt;h2&gt;Security:&lt;/h2&gt;&#xD;
 &#xD;
The car park is secured by: &lt;br /&gt;&#xD;
- Fencing &lt;br /&gt;&#xD;
- Manned 24 hours a day &lt;br /&gt;&#xD;
 &#xD;
&lt;h2&gt;The small print:&lt;/h2&gt;&#xD;
 &#xD;
- Your car will be parked in a secured compound, up to 6 miles from the airport. &lt;br /&gt;&#xD;
 &#xD;
- There is no height restriction at the North terminal, but a 2m restriction for the South.&lt;br /&gt;&#xD;
 &#xD;
- Maple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. &lt;br /&gt;&#xD;
 &#xD;
- Maple Parking cannot accept vehicles with 8 or more seats. &lt;br /&gt;&#xD;
&#xD;
- Any extra days' parking is £10 per day. &lt;br /&gt;&#xD;
 &#xD;
- All airport fees are included. &lt;br /&gt;&#xD;
&#xD;
- Booking confirmations must be printed and taken with you.</tripappintroduction>
    <tripapptransfertip>Drop off near the terminal, just a few minutes walk from check-in.</tripapptransfertip>
    <tripappcarparkstory>&lt;strong&gt;North Terminal&lt;/strong&gt; - head to the Sofitel car park, take a ticket. Follow signs for 'meet &amp; greet operators' - walk to the terminal in 3 minutes.&#xD;
&lt;br /&gt;&#xD;
&lt;h2&gt;Returning to the airport:&lt;/h2&gt;&#xD;
 &#xD;
- Once you've collected your luggage, call the car park to request the driver to meet you with the car. You'll be given instructions on where to meet your driver. &lt;br /&gt;&#xD;
 &#xD;
At their discretion, Maple Parking will give you up until midnight on the date you have booked to collect your car. If you go into the next day you will be charged £10 per day.</tripappcarparkstory>
    <directions>&lt;strong&gt; Here are your directions to the car park:&lt;/strong&gt;&lt;br /&gt;&#xD;
- For satnavs use postcode RH6 0PJ but only as far as the main North Terminal roundabout&lt;br /&gt; &#xD;
- As you enter the North Terminal from the main roundabout, stay in the right-hand lane for "Drop Off and Hotels".&lt;br /&gt;&#xD;
- Keep in the right-hand lane following signs for "hotels" and "Sofitel Hotel". &lt;br /&gt;&#xD;
- Keep driving towards the pedestrian traffic lights between the two hotels. &lt;br /&gt;&#xD;
- Turn right immediately after the traffic lights into the Sofitel car park.&lt;br /&gt;&#xD;
- Take a ticket from the barrier and keep it for the driver.&lt;br /&gt;&#xD;
- Once in the car park follow signs for "meet &amp; greet operators". &lt;br /&gt;&#xD;
- When you arrive in the dedicated meet &amp; greet area, park in a meet and greet bay and look out for a uniformed driver.&lt;br /&gt;&#xD;
- If you need any help finding the meeting point then please call Maple Parking on 01293 533 000 and select option 1.&lt;br /&gt;&#xD;
- Walk to the terminal in 3 minutes.&lt;br /&gt;</directions>
    <arrival_procedures>You don't need to call Maple Parking on your way to the airport unless your travel plans have changed. If you do need to contact the car park on the day call them on 01293 652 299 and choose option 1.&lt;br /&gt;&#xD;
&#xD;
When you reach the car park: &lt;strong&gt;Take at ticket the barrier and keep it for the driver.&lt;/strong&gt; Once in the car park follow signs for "meet &amp; greet operators". When you arrive in the dedicated meet &amp; greet area, park in a meet and greet bay and look out for a uniformed driver.&#xD;
&lt;br /&gt;&#xD;
- Take all of your belongings out of the car, including your car park ticket.&lt;br /&gt;&#xD;
- The driver will take a photo and check your car over for damage.&lt;br /&gt;&#xD;
- Give them your booking confirmation and car keys, as well as your return flight information.  &lt;br /&gt; &#xD;
- Walk to the terminal in 3 minutes.&lt;br /&gt;&lt;br /&gt;&#xD;
&#xD;
If you are arriving back to another terminal, please check with the driver when dropping off your car for the new instructions.</arrival_procedures>
    <departure_procedures>Once you've collected your luggage, call the car park on 01293 533 000 and select option 1, to let Maple Parking know that you are ready for your car. &lt;br /&gt; &#xD;
&#xD;
- As you exit North Terminal International Arrivals, turn right and exit the building&lt;br /&gt; &#xD;
- Once outside, cross both roads and keep heading straight ahead between the car parks, under the covered walkway to the main terminal forecourt.&lt;br /&gt;&#xD;
- Once at the main terminal forecourt, you will see the Sofitel hotel.&lt;br /&gt;&#xD;
- Cross the road at the pedestrian lights and bear left through the Sofitel car park - following signs for "Meet &amp; Greet Operators" located within the hotel car park.&lt;br /&gt;&#xD;
- Your car will be returned by our uniformed staff in the meet and greet reception area.&lt;br /&gt;&#xD;
&lt;strong&gt;Please be aware that if you don't collect your car within 20 minutes of calling the car park you'll need to pay the Short Stay parking fee. If you are returning earlier than the date or time that you booked, please ring Maple Parking on 01293 533 000, 24 hours in advance to avoid any delays.&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
&#xD;
Maple Parking will need to confirm your identity and you'll be asked to check over your car again, then your keys will be handed back to you along with a ticket to get out of the car park. &lt;br /&gt; If you get back early, call Maple Parking as soon as you can. They need as much notice as possible to get your car ready so you aren't kept waiting. You won't get a refund for any unused parking time.&lt;br /&gt; Please be aware that if you are late in collecting your car after your phone call to say you're ready to be met, you may incur additional charges from the car park. If you are delayed on your return you will be charged £10 per day by Maple Parking.&lt;br /&gt;</departure_procedures>
    <meet_and_greet>1</meet_and_greet>
    <car_parked_for_you>1</car_parked_for_you>
    <has_electric_charging>0</has_electric_charging>
    <keep_keys>0</keep_keys>
    <maximum_car_size>Maple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. You'll be charged extra if your car is too large. Minibuses and vehicles with 8 or more seats can't be taken for Meet and Greet services. If you have a specially adapted vehicle this will need to be checked with the car park. To see if Maple Parking can take your vehicle, call us on 0800 093 5478.&lt;br /&gt;&lt;br /&gt;&#xD;
&#xD;
&#xD;
If your vehicle is taller than 1.80m please inform the car park when you call and they will meet you in an alternative area outside the car park. &lt;br /&gt; &lt;br /&gt;</maximum_car_size>
    <information>It's your responsibility to make sure that your vehicle's road tax is valid, it holds a valid MOT certificate and is roadworthy. If your car isn't legal or safe to drive, Maple Parking won't be able to drive it to the car park, and you also won't be able to get a refund.&lt;br /&gt;&lt;br /&gt;&#xD;
&#xD;
&#xD;
Maple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. If your vehicle is taller than 1.8m please inform the car park when you call and they will meet you in an alternative area outside the car park. Minibuses and vehicles with 8 or more seats are not accepted.&lt;br /&gt;&lt;br /&gt;&#xD;
&#xD;
If you have a specially adapted vehicle this will need to be checked with the car park. To see if Maple Parking can take your vehicle, call 0800 093 5478.&lt;br /&gt;&lt;br /&gt;&#xD;
&#xD;
If using a Sat Nav please use postcode: RH6 0NX. Please note it is best to follow the directions to get to the correct meeting point as this Satnav postcode gives an approximate location. &lt;br /&gt; &lt;br /&gt;&#xD;
&#xD;
Any extra days' parking is £10 per day. &lt;br /&gt; &lt;br /&gt;&#xD;
&#xD;
Booking confirmations must be printed and taken with you.</information>
    <why_bookone>Our cheapest Meet and Greet at the North terminal is also our most popular - it's airport approved too.</why_bookone>
    <why_booktwo>Maple Parking Meet and Greet is a member of the Gatwick Airport Approved Operator scheme. This means that they have been audited and inspected by the airport to ensure they meet customer service standards.</why_booktwo>
    <why_bookthree>Eliminate transfers with this popular Meet and Greet service.</why_bookthree>
    <why_bookfour>Your car will be parked at a secured compound with security fencing, monitored 24 hours a day.</why_bookfour>
    <introduction>With 20 years' experience in providing a great service, Maple Parking Meet and Greet parking is a firm favourite with our customers and it's easy to see why. One of their professional, insured chauffeurs will meet you at the North terminal and park your car for you in a secured car park while you catch your flight. It couldn't be simpler and all for this low price. We only sell airport-approved Meet and Greet services and Maple Parking is no exception.</introduction>
    <security_measures>While you're away, your car will be stored in a secured car park. All have been awarded the police Park Mark award, the Trading Standards Authority's Buy With Confidence award and are approved by Gatwick airport. All of the car parks are surrounded by a fence and are either manned 24 hours, have CCTV in use, or have dedicated 24 hour security patrols.</security_measures>
    <disabled_facilities>The car park welcomes bookings from owners of specially adapted vehicles. However, this must be by prior arrangement to ensure availability of appropriately-trained drivers. To see if the car park can take your vehicle, call us on 0800 093 5478.</disabled_facilities>
    <park_mark>1</park_mark>
    <transfer_frequency>0</transfer_frequency>
    <transfer_earliest>00:01</transfer_earliest>
    <transfer_latest>23:59</transfer_latest>
    <transfer_time>0</transfer_time>
    <equivalent_product>LGO8</equivalent_product>
    <insurance>Parking is always at the vehicle owner's own risk and subject to the car park's Terms &amp; Conditions of storage. &lt;br /&gt; &lt;br /&gt;&#xD;
The car park use experienced drivers who are fully insured to drive your vehicle on the public highway. All cars parked or stored with Maple Manor will be on a proven direct negligence basis. Any claims for loss or damage must be made prior to  the vehicle being handed over.</insurance>
    <other_services_provided>Maple Manor now offer a valeting service from just &amp;pound;9.95. &lt;br /&gt;&#xD;
Please call Maple Manor to enquire about or to book this service.</other_services_provided>
    <alternative_product_code_post>LGU6</alternative_product_code_post>
    <awin_commission_group>GATWICKOFFSITEPARKING</awin_commission_group>
    <upsell_upgrades>LGWMMC,LGWNNT,LGWASC,LGWNNM,GADCOA,LGWMME</upsell_upgrades>
    <latitude>51.161308</latitude>
    <longitude>-0.175491</longitude>
    <tripapplogo>0</tripapplogo>
    <opening_periods>365 days a year</opening_periods>
    <gateprice>£10.00 per day - subject to change</gateprice>
    <bestseller>Yes</bestseller>
    <convenient>It doesn't get more convenient than a Meet and Greet service. With Maple Manor parking at Gatwick airport you're met at the terminal on arrival and your car is delivered to you on your return. Cut out the hassle of parking and save time on transfers by booking a convenient Meet and Greet service with Maple Manor.</convenient>
    <distance_miles>0.8</distance_miles>
    <upgrades_available>1</upgrades_available>
    <tfhrpricing>daily</tfhrpricing>
    <bestselleroverride>LGZ1</bestselleroverride>
    <default_img>/images/prodlib/LGW8/LGW8.jpg</default_img>
    <premium_product>Y</premium_product>
    <custom_msg>Premium service</custom_msg>
    <browser_description>Maple Manor Meet and Greet Parking takes the hassle out of parking your car and getting transfers to and from the airport. You will be met by a fully insured, experienced, uniformed driver who park your car for you at a fully secured car park just a short drive from the terminal.</browser_description>
    <browser_title>Maple Manor Parking Gatwick</browser_title>
    <features>Meet &amp; Greet</features>
    <keyword_meta>maple manor gatwick, gatwick airport maple manor parking, maple manor parking gatwick, maple manor parking, gatwick airport parking, maple manor, maple, manor, gatwick parking, meet, greet</keyword_meta>
    <on_airport>0</on_airport>
    <security_barrier>1</security_barrier>
    <security_fencing>1</security_fencing>
    <security_patrols>1</security_patrols>
    <sellpoint_location>Avoid the hassle of parking and be met at the airport terminal.</sellpoint_location>
    <sellpoint_parking>Secured compound with security fencing, monitored 24 hours a day.</sellpoint_parking>
    <sellpoint_security>Secured compound with security fencing, monitored 24 hours a day.</sellpoint_security>
    <sellpoint_terminal>Officially our lowest priced Meet and Greet service at Gatwick.</sellpoint_terminal>
    <sellpoint_transfers>Eliminate transfers with this superb Meet and Greet service.</sellpoint_transfers>
    <show_for_mobile>1</show_for_mobile>
    <terminal_unknown>If you do not know your terminal, you will need to call to confirm at least 24 hours before your arrival. Please follow the instructions on your confirmation.</terminal_unknown>
    <transfers>No transfers are required. Once your car is picked up you proceed directly to check in.</transfers>
    <undercover_parking>Not available.</undercover_parking>
    <bcp_priority>892</bcp_priority>
    <custom_pins>Drop-off point,51.161825797546975,-0.17751036811205267,m&amp;g.png,pin1,N</custom_pins>
    <snow_cancellations>Standard T&amp;Cs</snow_cancellations>
    <snow_overdue>Standard charge</snow_overdue>
    <snow_past_date_bookings>Standard T&amp;Cs</snow_past_date_bookings>
    <priority>892</priority>
    <parent>LGW</parent>
    <child>4</child>
    <type>1</type>
    <lang>en</lang>
    <archived>0</archived>
    <unnamed/>
    <ghost>0</ghost>
    <postcode>RH6 0LL</postcode>
    <base_product/>
    <lang_en_archived>false</lang_en_archived>
    <accessible>0</accessible>
  </Product>
  <API_Header>
    <Request>
      <token>000015778</token>
      <key>mytestkey</key>
      <v>1</v>
      <version>lite</version>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "Product": [
      {
        "name": "Maple Parking Meet and Greet North",
        "tripappcarparkname": "Maple Parking Meet and Greet North",
        "terminal": "North",
        "advance_purchase": "0",
        "address": "Gatwick airport, <br />West Sussex<br />RH6 0LL",
        "car_stored_at": "1 of 4 secured sites",
        "telephone": "01293 652 299",
        "mg_confirmation_phone_number": "You should call car park on 01293 652299 and choose option 1 when you're about 20 minutes from the terminal (which will normally be when you're on the M23).",
        "fax": "01293 652 288",
        "logo": "/imageLibrary/Images/3174-gatwick-airport-maple-parking-approved-operator.png",
        "tripappimages": "/imageLibrary/Images/4686-maple-parking-meet-greet-25-years.png;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-1.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-4.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-3.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-5.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-7-2.jpg;/imageLibrary/Images/84684-gatwick-maple-manor-meet-and-greet-6.jpg",
        "brand_image": "/imageLibrary/Images/4686-maple-parking-meet-greet-25-years.png",
        "mobile_image": "/imageLibrary/Images/4686-gatwick-airport-parking-mobile-mapleparkingM&GNorth.png",
        "tripappcarparksellpoint": "You can't go wrong with Maple Parking's 25 years of experience.",
        "tripappintroduction": "<strong>Drop-off at North Terminal. Stroll to check-in.</strong>\r\n \r\n<h2>Need to know:</h2>\r\n\r\nNorth Terminal: Drive your car to the Sofitel hotel car park and head to the dedicated meet & greet area. Park in a meet and greet bay and look out for a uniformed driver.<br />\r\nWalk to the terminal in 3 minutes. <br />\r\n \r\nWhen you get back give the driver a call to let them know you're ready and your car will be returned to you where you were met on arrival.\r\n \r\n<h2> Accessibility: </h2>\r\n \r\nThis service is suitable for customers with limited mobility, as a shuttle bus is not required\r\n \r\n<h2>Security:</h2>\r\n \r\nThe car park is secured by: <br />\r\n- Fencing <br />\r\n- Manned 24 hours a day <br />\r\n \r\n<h2>The small print:</h2>\r\n \r\n- Your car will be parked in a secured compound, up to 6 miles from the airport. <br />\r\n \r\n- There is no height restriction at the North terminal, but a 2m restriction for the South.<br />\r\n \r\n- Maple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. <br />\r\n \r\n- Maple Parking cannot accept vehicles with 8 or more seats. <br />\r\n\r\n- Any extra days' parking is £10 per day. <br />\r\n \r\n- All airport fees are included. <br />\r\n\r\n- Booking confirmations must be printed and taken with you.\r\n \r\n",
        "tripapptransfertip": "Drop off near the terminal, just a few minutes walk from check-in.",
        "tripappcarparkstory": "<strong>North Terminal</strong> - head to the Sofitel car park, take a ticket. Follow signs for 'meet & greet operators' - walk to the terminal in 3 minutes.\r\n<br />\r\n<h2>Returning to the airport:</h2>\r\n \r\n- Once you've collected your luggage, call the car park to request the driver to meet you with the car. You'll be given instructions on where to meet your driver. <br />\r\n \r\nAt their discretion, Maple Parking will give you up until midnight on the date you have booked to collect your car. If you go into the next day you will be charged £10 per day.\r\n\r\n",
        "directions": "<strong> Here are your directions to the car park:</strong><br />\r\n- For satnavs use postcode RH6 0PJ but only as far as the main North Terminal roundabout<br /> \r\n- As you enter the North Terminal from the main roundabout, stay in the right-hand lane for \"Drop Off and Hotels\".<br />\r\n- Keep in the right-hand lane following signs for \"hotels\" and \"Sofitel Hotel\". <br />\r\n- Keep driving towards the pedestrian traffic lights between the two hotels. <br />\r\n- Turn right immediately after the traffic lights into the Sofitel car park.<br />\r\n- Take a ticket from the barrier and keep it for the driver.<br />\r\n- Once in the car park follow signs for \"meet & greet operators\". <br />\r\n- When you arrive in the dedicated meet & greet area, park in a meet and greet bay and look out for a uniformed driver.<br />\r\n- If you need any help finding the meeting point then please call Maple Parking on 01293 533 000 and select option 1.<br />\r\n- Walk to the terminal in 3 minutes.<br />\r\n",
        "arrival_procedures": "You don't need to call Maple Parking on your way to the airport unless your travel plans have changed. If you do need to contact the car park on the day call them on 01293 652 299 and choose option 1.<br />\r\n\r\nWhen you reach the car park: <strong>Take at ticket the barrier and keep it for the driver.</strong> Once in the car park follow signs for \"meet & greet operators\". When you arrive in the dedicated meet & greet area, park in a meet and greet bay and look out for a uniformed driver.\r\n<br />\r\n- Take all of your belongings out of the car, including your car park ticket.<br />\r\n- The driver will take a photo and check your car over for damage.<br />\r\n- Give them your booking confirmation and car keys, as well as your return flight information.  <br /> \r\n- Walk to the terminal in 3 minutes.<br /><br />\r\n\r\nIf you are arriving back to another terminal, please check with the driver when dropping off your car for the new instructions.\r\n",
        "departure_procedures": "Once you've collected your luggage, call the car park on 01293 533 000 and select option 1, to let Maple Parking know that you are ready for your car. <br /> \r\n\r\n- As you exit North Terminal International Arrivals, turn right and exit the building<br /> \r\n- Once outside, cross both roads and keep heading straight ahead between the car parks, under the covered walkway to the main terminal forecourt.<br />\r\n- Once at the main terminal forecourt, you will see the Sofitel hotel.<br />\r\n- Cross the road at the pedestrian lights and bear left through the Sofitel car park - following signs for \"Meet & Greet Operators\" located within the hotel car park.<br />\r\n- Your car will be returned by our uniformed staff in the meet and greet reception area.<br />\r\n<strong>Please be aware that if you don't collect your car within 20 minutes of calling the car park you'll need to pay the Short Stay parking fee. If you are returning earlier than the date or time that you booked, please ring Maple Parking on 01293 533 000, 24 hours in advance to avoid any delays.</strong>\r\n<br />\r\n\r\nMaple Parking will need to confirm your identity and you'll be asked to check over your car again, then your keys will be handed back to you along with a ticket to get out of the car park. <br /> If you get back early, call Maple Parking as soon as you can. They need as much notice as possible to get your car ready so you aren't kept waiting. You won't get a refund for any unused parking time.<br /> Please be aware that if you are late in collecting your car after your phone call to say you're ready to be met, you may incur additional charges from the car park. If you are delayed on your return you will be charged £10 per day by Maple Parking.<br />",
        "meet_and_greet": 1,
        "car_parked_for_you": 1,
        "has_electric_charging": "0",
        "keep_keys": "0",
        "maximum_car_size": "Maple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. You'll be charged extra if your car is too large. Minibuses and vehicles with 8 or more seats can't be taken for Meet and Greet services. If you have a specially adapted vehicle this will need to be checked with the car park. To see if Maple Parking can take your vehicle, call us on 0800 093 5478.<br /><br />\r\n\r\n\r\nIf your vehicle is taller than 1.80m please inform the car park when you call and they will meet you in an alternative area outside the car park. <br /> <br />",
        "information": "It's your responsibility to make sure that your vehicle's road tax is valid, it holds a valid MOT certificate and is roadworthy. If your car isn't legal or safe to drive, Maple Parking won't be able to drive it to the car park, and you also won't be able to get a refund.<br /><br />\r\n\r\n\r\nMaple Parking can only take cars that fit into a standard size parking space, which is 2.4m x 4.8m. If your vehicle is taller than 1.8m please inform the car park when you call and they will meet you in an alternative area outside the car park. Minibuses and vehicles with 8 or more seats are not accepted.<br /><br />\r\n\r\nIf you have a specially adapted vehicle this will need to be checked with the car park. To see if Maple Parking can take your vehicle, call 0800 093 5478.<br /><br />\r\n\r\nIf using a Sat Nav please use postcode: RH6 0NX. Please note it is best to follow the directions to get to the correct meeting point as this Satnav postcode gives an approximate location. <br /> <br />\r\n\r\nAny extra days' parking is £10 per day. <br /> <br />\r\n\r\nBooking confirmations must be printed and taken with you.\r\n\r\n",
        "why_bookone": "Our cheapest Meet and Greet at the North terminal is also our most popular - it's airport approved too.",
        "why_booktwo": "Maple Parking Meet and Greet is a member of the Gatwick Airport Approved Operator scheme. This means that they have been audited and inspected by the airport to ensure they meet customer service standards.",
        "why_bookthree": "Eliminate transfers with this popular Meet and Greet service.",
        "why_bookfour": "Your car will be parked at a secured compound with security fencing, monitored 24 hours a day.",
        "introduction": "With 20 years' experience in providing a great service, Maple Parking Meet and Greet parking is a firm favourite with our customers and it's easy to see why. One of their professional, insured chauffeurs will meet you at the North terminal and park your car for you in a secured car park while you catch your flight. It couldn't be simpler and all for this low price. We only sell airport-approved Meet and Greet services and Maple Parking is no exception.",
        "security_measures": "While you're away, your car will be stored in a secured car park. All have been awarded the police Park Mark award, the Trading Standards Authority's Buy With Confidence award and are approved by Gatwick airport. All of the car parks are surrounded by a fence and are either manned 24 hours, have CCTV in use, or have dedicated 24 hour security patrols.",
        "disabled_facilities": "The car park welcomes bookings from owners of specially adapted vehicles. However, this must be by prior arrangement to ensure availability of appropriately-trained drivers. To see if the car park can take your vehicle, call us on 0800 093 5478.",
        "park_mark": 1,
        "transfer_frequency": "0",
        "transfer_earliest": "00:01",
        "transfer_latest": "23:59",
        "transfer_time": "0",
        "equivalent_product": "LGO8",
        "insurance": "Parking is always at the vehicle owner's own risk and subject to the car park's Terms & Conditions of storage. <br /> <br />\r\nThe car park use experienced drivers who are fully insured to drive your vehicle on the public highway. All cars parked or stored with Maple Manor will be on a proven direct negligence basis. Any claims for loss or damage must be made prior to  the vehicle being handed over.",
        "other_services_provided": "Maple Manor now offer a valeting service from just &pound;9.95. <br />\r\nPlease call Maple Manor to enquire about or to book this service.",
        "alternative_product_code_post": "LGU6",
        "awin_commission_group": "GATWICKOFFSITEPARKING",
        "upsell_upgrades": "LGWMMC,LGWNNT,LGWASC,LGWNNM,GADCOA,LGWMME",
        "latitude": 51.161308,
        "longitude": -0.175491,
        "tripapplogo": "0",
        "opening_periods": "365 days a year",
        "gateprice": "£10.00 per day - subject to change",
        "bestseller": "Yes",
        "convenient": "It doesn't get more convenient than a Meet and Greet service. With Maple Manor parking at Gatwick airport you're met at the terminal on arrival and your car is delivered to you on your return. Cut out the hassle of parking and save time on transfers by booking a convenient Meet and Greet service with Maple Manor.",
        "distance_miles": "0.8",
        "upgrades_available": 1,
        "tfhrpricing": "daily",
        "bestselleroverride": "LGZ1",
        "default_img": "/images/prodlib/LGW8/LGW8.jpg",
        "premium_product": "Y",
        "custom_msg": "Premium service",
        "browser_description": "Maple Manor Meet and Greet Parking takes the hassle out of parking your car and getting transfers to and from the airport. You will be met by a fully insured, experienced, uniformed driver who park your car for you at a fully secured car park just a short drive from the terminal.",
        "browser_title": "Maple Manor Parking Gatwick",
        "features": "Meet & Greet",
        "keyword_meta": "maple manor gatwick, gatwick airport maple manor parking, maple manor parking gatwick, maple manor parking, gatwick airport parking, maple manor, maple, manor, gatwick parking, meet, greet",
        "on_airport": "0",
        "security_barrier": 1,
        "security_fencing": 1,
        "security_patrols": 1,
        "sellpoint_location": "Avoid the hassle of parking and be met at the airport terminal.",
        "sellpoint_parking": "Secured compound with security fencing, monitored 24 hours a day.\r\n",
        "sellpoint_security": "Secured compound with security fencing, monitored 24 hours a day.",
        "sellpoint_terminal": "Officially our lowest priced Meet and Greet service at Gatwick.",
        "sellpoint_transfers": "Eliminate transfers with this superb Meet and Greet service.",
        "show_for_mobile": 1,
        "terminal_unknown": "If you do not know your terminal, you will need to call to confirm at least 24 hours before your arrival. Please follow the instructions on your confirmation.",
        "transfers": "No transfers are required. Once your car is picked up you proceed directly to check in.",
        "undercover_parking": "Not available.",
        "bcp_priority": 892,
        "custom_pins": "Drop-off point,51.161825797546975,-0.17751036811205267,m&g.png,pin1,N",
        "snow_cancellations": "Standard T&Cs",
        "snow_overdue": "Standard charge",
        "snow_past_date_bookings": "Standard T&Cs",
        "priority": 892,
        "parent": "LGW",
        "child": 4,
        "type": 1,
        "lang": "en",
        "archived": "0",
        "unnamed": "",
        "ghost": "0",
        "_airport": "LGW",
        "postcode": "RH6 0LL",
        "_a_tfhrpricing": [
          "daily"
        ],
        "_a_terminal_lozenge": [],
        "base_product": "",
        "_prodcode": "LGW4",
        "_updated_date": "2019-12-02",
        "_base_name": null,
        "_a_name": [
          "Maple Parking Meet and Greet"
        ],
        "_a_unnamed": [],
        "_a_tripappcarparkname": [
          "Maple Parking Meet and Greet North"
        ],
        "_a_terminal": [
          "North"
        ],
        "_group": {
          "terminal": [
            "North"
          ],
          "meet_and_greet": [
            1
          ],
          "on_airport": [
            "0"
          ]
        },
        "_a_tripappmaincode": [],
        "_a_car_stored_at": [
          "1 of 4 secured sites"
        ],
        "_a_telephone": [
          "01293 652 299"
        ],
        "_a_mg_confirmation_phone_number": [
          "You should call car park on 01293 652299 and choose option 1 when you're about 20 minutes from the terminal (which will normally be when you're on the M23)."
        ],
        "_a_wistia_key": [],
        "_filter": {
          "meet_and_greet": 1
        },
        "_a_copy_reviews_from": [],
        "_a_equivalent_flex_products": [],
        "_a_equivalent_product": [
          "LGO8"
        ],
        "_a_alternative_product_code_post": [
          "LGU6"
        ],
        "_a_ghost_upsell_products": [],
        "_a_upsell_products": [],
        "_a_upsell_upgrades": [
          "LGWMMC",
          "LGWNNT",
          "LGWASC",
          "LGWNNM",
          "GADCOA",
          "LGWMME"
        ],
        "_a_gateprice": [
          "£10.00 per day - subject to change"
        ],
        "_a_brand": [],
        "_default_lang": "en",
        "_prodtype": "CarParks",
        "_generated": "2019-12-02 14:08:59",
        "lang_en_archived": "false",
        "accessible": ""
      }
    ],
    "ATTRIBUTES": {
      "Result": "OK"
    },
    "API_Header": {
      "Request": {
        "token": "000015778",
        "key": "mytestkey",
        "v": 1,
        "format": "js",
        "version": "lite"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}

### Request (example 2)

{% codetabs %}
{% codetab Live (XML) %}
```
https://api.holidayextras.co.uk/v1/product/LGW4/lite?token=000015778&key=mytestkey&fields=name,longitude,latitude
```
{% endcodetab %}
{% codetab Live (JSON) %}
```
https://api.holidayextras.co.uk/v1/product/LGW4/lite.js?token=000015778&key=mytestkey&fields=name,longitude,latitude
```
Note the `.js` extension.
{% endcodetab %}
{% codetab Sandbox (XML) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey&fields=name,longitude,latitude
```
{% endcodetab %}
{% codetab Sandbox (JSON) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey&fields=name,longitude,latitude
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}


### Reply (example 2)

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
  <Product>
    <name>Maple Parking Meet and Greet North</name>
    <longitude>-0.175491</longitude>
    <latitude>51.161308</latitude>
  </Product>
  <API_Header>
    <Request>
      <token>000015778</token>
      <key>mytestkey</key>
      <fields>name,longitude,latitude</fields>
      <v>1</v>
      <version>lite</version>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "Product": [
      {
        "name": "Maple Parking Meet and Greet North",
        "longitude": -0.175491,
        "latitude": 51.161308
      }
    ],
    "ATTRIBUTES": {
      "Result": "OK"
    },
    "API_Header": {
      "Request": {
        "token": "000015778",
        "key": "mytestkey",
        "fields": "name,longitude,latitude",
        "v": 1,
        "format": "js",
        "version": "lite"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}

### Fields Explained

#### parent

Contains the location code of product - eg LGW, LHR etc. Parent and child provide the composite key to create the product code.

eg LGW + 2 = LGW2

#### child

Numeric identifier to be appended to parent to create product code.

#### type

Product type - 1 = car park, 2 = hotels, 3 = lounges

#### archived

Boolean - if a product is no longer offered for sale it will be marked as archived but remain in the product library. It will not be returned in availability searches and the product cannot be booked.

#### longitude/latitude

Co-ordinates for plugging in to Google Maps etc. We do not provide any map functionality other than these co-ordinates.

#### baseProduct

HX use only.

#### browser_title/browser_description

HX use only.

#### features

Obsolete.


#### distance_to_airport

This will be either a number or a string such as 'On airport'. Not guaranteed to be a number.

#### trailer_and_car

Car park specific rules regarding trailers.

#### bestseller

Ignore, for HX internal use.

#### undercover_parking

Is parking area covered, or in the open?

#### sellpoint_******

Sellpoint fields are used to note positive aspects about the product.

The possible fields are sellpoint_location,
sellpoint_terminal, sellpoint_transfers, sellpoint_parking, sellpoint_security.

#### logo

Logo of company. Prepend http://secure.holidayextras.co.uk/

#### distance_miles

Calculated distance from location to airport. If present, guaranteed to be a number.

#### bestselleroverride

HX use only.


#### default_img

Our stock image for the car park. Prepend http://secure.holidayextras.co.uk/

#### premium_product

HX use only.

#### custom_msg

HX use only.

#### priority

HX use only.

#### terminal_unknown

If customer does not know their terminal, display this message.

#### recommended

Boolean -

#### on_airport

Boolean - is the car park on airport (as opposed to off-site)?

#### terminal

String - Where appropriate, the terminal(s) served by the car park.


#### meet_and_greet

Boolean - is the product a Meet & Greet service?

#### valet_included

Boolean - is the car cleaned while customer is away.

#### car_parked_for_you

Boolean - does the car park park the vehicles for the customer?

#### filter

HX use only

#### accessible

Boolean - is the product accessible for disabled customers?

### Request (example 3) - German airport

Requests for German products return a different set of fields. Explanation of fields not currently available.

{% codetabs %}
{% codetab Live (XML) %}
```
https://api.holidayextras.co.uk/v1/product/FRA0?key=mytestkey
```
{% endcodetab %}
{% codetab Live (JSON) %}
```
https://api.holidayextras.co.uk/v1/product/FRA0.js?key=mytestkey
```
Note the `.js` extension.
{% endcodetab %}
{% codetab Sandbox (XML) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/FRA0?key=mytestkey
```
{% endcodetab %}
{% codetab Sandbox (JSON) %}
```
https://api.holidayextras.co.uk/sandbox/v1/product/FRA0.js?key=mytestkey
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### Reply (example 3)

{% codetabs %}
{% codetab XML %}
```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
  <Product>
    <parkplatzname>Airparks Parkplatz Frankfurt - Winterspecial</parkplatzname>
    <language>en</language>
    <tax_location>GER</tax_location>
    <tax_type>SP</tax_type>
    <umsatzsteuer_id>DE813463160</umsatzsteuer_id>
    <terminallocated>0</terminallocated>
    <car_parked_for_you>0</car_parked_for_you>
    <meet_and_greet>0</meet_and_greet>
    <valet_included>0</valet_included>
    <mindestparkdauer>1</mindestparkdauer>
    <maximum_stay>35</maximum_stay>
    <release_days>0</release_days>
    <adresse>Lärchenstraße 133, 65933 Frankfurt am Main</adresse>
    <adresse_navigation>Lärchenstr. 131, 65933 Frankfurt am Main</adresse_navigation>
    <ghost_product_alternative_content>Das Airparks Parkplatz Frankfurt Winterspecial ist bei unseren Kunden sehr beliebt und zu ihrem Reisetermin leider ausgebucht.</ghost_product_alternative_content>
    <telefon>+49 (0)69 / 175 148 65 oder +49 (0)176 / 100 311 54</telefon>
    <sellingpoint>Book now: our winter special is only available for a limited time. Note new cancellation policy.</sellingpoint>
    <hinweis>&lt;strong&gt;Dieses Angebot gilt für Anreisen ab 02.11.2019 und späteste Rückreise am 04.04.2020. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Bitte beachten Sie, dass bei Umbuchungen gegebenenfalls ein Aufpreis anfallen kann. Die Maximalparkdauer beträgt 35 Tage.&lt;/strong&gt;&lt;br /&gt;&#xD;
&lt;strong&gt;Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails (Flugnummer des Rückfluges und Ankunftszeit in Frankfurt) mit zum Check-in des Parkplatzes.&lt;/strong&gt;&lt;br /&gt;&#xD;
Der Shuttletransfer erfolgt zum Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können ab Terminal 1 kostenfrei mit der Sky Line oder dem Flughafen-Shuttle-Bus (alle paar Minuten) zum Terminal 2 fahren. &lt;br /&gt;&#xD;
Der Transfer ist für maximal 5 Personen möglich. Unser Tipp: Setzen Sie Ihre Mitfahrer zuerst am Flughafen ab! &lt;br /&gt;&#xD;
Wir empfehlen Ihnen, ca. 2,5 Stunden vor Ihrer Abflugzeit am Parkplatz anzureisen. Bitte beachten Sie dies bei der Angabe Ihrer Anreisezeit, da ansonsten kein pünktlicher Transfer gewährleistet werden kann.</hinweis>
    <anfahrt>&lt;strong&gt;Aus allen Richtungen:&lt;/strong&gt; Auf die A3 in Richtung Frankfurter Kreuz/ Flughafen Frankfurt fahren. In Höhe des Flughafens Frankfurt von der A3 auf die B43 in Richtung Kelsterbach/ Industriepark Höchst abfahren. NICHT auf die B43 in Richtung Kelsterbach abbiegen sondern, sondern weiter geradeaus fahren auf der B40. Nach weiteren 1,5 km rechts abbiegen auf die B40A in Richtung Frankfurt-Stadtmitte. Nach ungefähr 4 km auf gelangt man auf die Mainzer Landstraße. Dort den Gebäudekomplex TOOM Markt/ Promarkt/ Cinestar passieren und anschließend an der Ampel rechts abbiegen in die Straße "In der Schildwacht". Nach ungefähr 400 m am Ende der Straße erneut rechts abbiegen in die Lärchenstraße. Nach weiteren 300 m erreicht man auf der linken Seite die Airparks-Einfahrt.&#xD;
&lt;br /&gt;&#xD;
Bitte darauf achten, dass man der Ausschilderung zum Airparks-Parkplatz (Lärchenstraße 133) und nicht zum Airparks-Parkhaus folgt!  &lt;br /&gt;</anfahrt>
    <anfahrt_kurz>&lt;strong&gt;Aus allen Richtungen:&lt;/strong&gt; Auf die A3 in Richtung Frankfurter Kreuz/ Flughafen Frankfurt fahren. In Höhe des Flughafens Frankfurt von der A3 auf die B43 in Richtung Kelsterbach/ Industriepark Höchst abfahren. NICHT auf die B43 in Richtung Kelsterbach abbiegen sondern, sondern weiter geradeaus fahren auf der B40. Nach weiteren 1,5 km rechts abbiegen auf die B40A in Richtung Frankfurt-Stadtmitte. Nach ungefähr 4 km auf gelangt man auf die Mainzer Landstraße. Dort den Gebäudekomplex TOOM Markt/ Promarkt/ Cinestar passieren und anschließend an der Ampel rechts abbiegen in die Straße "In der Schildwacht". Nach ungefähr 400 m am Ende der Straße erneut rechts abbiegen in die Lärchenstraße. Nach weiteren 300 m erreicht man auf der linken Seite die Airparks-Einfahrt.&#xD;
&lt;br /&gt;&#xD;
Bitte darauf achten, dass man der Ausschilderung zum Airparks-Parkplatz (Lärchenstraße 133) und nicht zum Airparks-Parkhaus folgt!  &lt;br /&gt;</anfahrt_kurz>
    <transfer>Bustransfer von 02:00-00:40 Uhr zum Flughafen und zurück inklusive. Der Shuttle fährt alle 20 Minuten nach festem Fahrplan zu jeder vollen Stunde, 20 und 40 Minuten nach jeder vollen Stunde. Transferdauer: ca. 10 Minuten. &lt;br /&gt; &lt;br /&gt;&#xD;
Der Shuttleservice erfolgt zum Busbahnhof am Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können von hier mit dem "Flughafen-Shuttle-Bus" oder der "Sky Line" kostenlos weiterfahren.</transfer>
    <shuttle_von>0200</shuttle_von>
    <shuttle_bis>0040</shuttle_bis>
    <shuttle_frequency>alle 20 Minuten</shuttle_frequency>
    <transfer_kurzform>Transfer von 02:00 bis 00:40 Uhr alle 20 Min. inklusive. Transferdauer: ca. 10 Minuten.</transfer_kurzform>
    <transfer_kurz>Bustransfer von 02:00-00:40 Uhr inklusive. Der Transfer fährt zum Terminal 1, zum Terminal 2 fährt kostenfrei die Sky Line.</transfer_kurz>
    <tripappintroduction>From now on there will be an administrative charge of at least 10 EUR for the cancellation of the car park on the day after the booking. &#xD;
Avoid charges by adding the Flexi Package or contacting the travel agency.&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Entfernung zum Flughafen&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Transferdauer: ca. 10 Minuten&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Sicherheit&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Eingezäunter, beleuchteter, videoüberwachter und 24 Stunden personell besetzter Parkplatz. Es finden regelmäßige Kontrollgänge statt.&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Hinweis&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Dieses Angebot gilt für Anreisen ab 02.11.2019 und späteste Rückreise am 04.04.2020. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Bitte beachten Sie, dass bei Umbuchungen gegebenenfalls ein Aufpreis anfallen kann. Die Maximalparkdauer beträgt 35 Tage.&lt;/strong&gt;&lt;br /&gt;&#xD;
&lt;strong&gt;Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails (Flugnummer des Rückfluges und Ankunftszeit in Frankfurt) mit zum Check-in des Parkplatzes.&lt;/strong&gt;&lt;br /&gt;&#xD;
Der Shuttletransfer erfolgt zum Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können ab Terminal 1 kostenfrei mit der Sky Line oder dem Flughafen-Shuttle-Bus (alle paar Minuten) zum Terminal 2 fahren. &lt;br /&gt;&#xD;
Der Transfer ist für maximal 5 Personen möglich. Unser Tipp: Setzen Sie Ihre Mitfahrer zuerst am Flughafen ab! &lt;br /&gt;&#xD;
Wir empfehlen Ihnen, ca. 2,5 Stunden vor Ihrer Abflugzeit am Parkplatz anzureisen. Bitte beachten Sie dies bei der Angabe Ihrer Anreisezeit, da ansonsten kein pünktlicher Transfer gewährleistet werden kann. &#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Barrierefreier Zugang&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Behindertengerechte Stellplätze sind auf Anfrage verfügbar. Der Transferbus ist bedingt behindertengerecht.&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Pkw Groesse&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Max. Höhe: unbegrenzt; max. Breite: 2,00 m; max. Länge: 5,00 m; größere PKW bis 6 m Länge bzw. 2,30 m Breite auf Anfrage beim Kundenservice und gegen Aufpreis von 10,- EUR vor Ort möglich. Über 6 m Länge bzw. 2,30 m Breite tätigen Sie bitte 2 Buchungen und melden die Übergröße nach der Buchung am Parkplatz an.&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Versicherung&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Haftpflichtversicherung für den Betrieb des Parkplatzes entsprechend den gesetzlichen Bestimmungen.&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt;&#xD;
&lt;strong&gt;Adresse&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Lärchenstraße 133, 65933 Frankfurt am Main&#xD;
&lt;br /&gt;&#xD;
&lt;br /&gt; &#xD;
&lt;strong&gt;Parkplatzbetreibertipp&lt;/strong&gt;&#xD;
&lt;br /&gt;&#xD;
Es stehen Frauenparkplätze zur Verfügung. Gern erhalten Sie auch kostenfrei Starthilfe.</tripappintroduction>
    <videoid>rf1jZK4pkNI</videoid>
    <shuttle_times>2:00 - 00:40 Uhr</shuttle_times>
    <transferdauer>ca. 10 Minuten</transferdauer>
    <entfernung_zum_flughafen>Transferdauer: ca. 10 Minuten</entfernung_zum_flughafen>
    <transfer_time>10</transfer_time>
    <transfer_minutes>10</transfer_minutes>
    <sicherheit>Eingezäunter, beleuchteter, videoüberwachter und 24 Stunden personell besetzter Parkplatz. Es finden regelmäßige Kontrollgänge statt.</sicherheit>
    <sicherheit_kurzform>Eingezäunter, beleuchteter, 24h personell besetzter, videoüberwachter und regelmäßig kontrollierter Parkplatz.</sicherheit_kurzform>
    <bei_der_anreise_>Bitte fahren Sie auf dem Airparks-Parkplatz bis zum Empfang und halten Sie dort auf den gelb markierten Check-in Parkplätzen. &lt;font color="#FF0000"&gt;&lt;strong&gt;Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails mit (Flugnummer Ihre Rückflugs (z.B. LH 2374) und Ihre Ankunftszeit in Frankfurt).&lt;/strong&gt;&lt;/font&gt; Die Flugdetails benötigen wir zur besseren Koordinierung Ihres Rücktransfers. Unser Personal erklärt Ihnen kurz den Shuttleservice und weist Ihnen den Stellplatz für Ihr Fahrzeug zu.</bei_der_anreise_>
    <bei_der_abreise>Begeben Sie sich bitte nach der Gepäckausgabe und nach der Zollabfertigung zum Airparks Shuttle Treffpunkt in der ANKUNFTS-EBENE nach der Halle A auf dem angrenzenden Parkplatz P 29 (Terminalgebäude verlassen, links gehen bis zum Ende von Halle A). Die blaue Linie fährt von 02:00-00:40 Uhr alle 20 Minuten nach festem Fahrplan zum Airparks Parkplatz Lärchenstraße und zum Airparks Parkhaus Frankfurt (Abfahrt jeweils zu jeder vollen Stunde, um 20 und 40 Minuten nach jeder vollen Stunde). Bitte NICHT in die rote Linie einsteigen, diese fährt zu einem anderen Parkplatz! &lt;br /&gt; &#xD;
&lt;strong&gt;Bitte beachten Sie:&lt;/strong&gt; Unsere Parkleistungen werden nach Kalendertagen abgerechnet. Sofern Sie weitere Kalendertage wie in Ihrer Buchung angegeben nutzen werden, müssen diese nachgebucht werden.</bei_der_abreise>
    <barrierefreier_zugang>Behindertengerechte Stellplätze sind auf Anfrage verfügbar. Der Transferbus ist bedingt behindertengerecht.</barrierefreier_zugang>
    <pkw_groesse>Max. Höhe: unbegrenzt; max. Breite: 2,00 m; max. Länge: 5,00 m; größere PKW bis 6 m Länge bzw. 2,30 m Breite auf Anfrage beim Kundenservice und gegen Aufpreis von 10,- EUR vor Ort möglich. Über 6 m Länge bzw. 2,30 m Breite tätigen Sie bitte 2 Buchungen und melden die Übergröße nach der Buchung am Parkplatz an.</pkw_groesse>
    <kindersitz>Kindersitze und Sitzerhöhungen sind nicht erforderlich da ein Linienbus als Shuttlefahrzeug eingesetzt wird.</kindersitz>
    <parkplatzbetreibertipp>Es stehen Frauenparkplätze zur Verfügung. Gern erhalten Sie auch kostenfrei Starthilfe.</parkplatzbetreibertipp>
    <produktinfolink>Ausführliche Produktinformationen zum Ausdrucken finden Sie unter http://www.holidayextras.de/produktinfos.html</produktinfolink>
    <versicherung>Haftpflichtversicherung für den Betrieb des Parkplatzes entsprechend den gesetzlichen Bestimmungen.</versicherung>
    <discount_type>%</discount_type>
    <prodlogo>/imageLibrary/Images/b0c/AP-P-Fra-Winter.gif</prodlogo>
    <recommended>0</recommended>
    <airparks_owned>yes</airparks_owned>
    <on_airport>0</on_airport>
    <distance_miles>9.0</distance_miles>
    <latitude>50.096400</latitude>
    <longitude>8.589200</longitude>
    <company_logo>airparks.png</company_logo>
    <company_name>Airparks</company_name>
    <google_map>&lt;a href="http://bit.ly/nWlatb"&gt;http://bit.ly/nWlatb&lt;/a&gt;</google_map>
    <logo>/imageLibrary/Images/Airparks.gif</logo>
    <zusatzvermerk>This offer is valid for arrivals from the 3rd of November 2018 and departures not later than the 12th of April 2019. The maximum parking duration is 35 days. The Airparks Winter-Special is amendable, cancelable and bookable only while stocks last. There might be an additional charge for amendments.</zusatzvermerk>
    <merchandising>From now on there will be an administrative charge of at least 10 EUR for the cancellation of the car park on the day after the booking. &#xD;
Avoid charges by adding the Flexi Package or contacting the travel agency.</merchandising>
    <special_offer_text>Winterspecial</special_offer_text>
    <tripappimages>/imageLibrary/Images/FRA0_Icon_Test.png;/imageLibrary/Images/FRA890_N_01_2019.jpg;/imageLibrary/Images/FRA890_N_02_2019.jpg;/imageLibrary/Images/FRA890_N_03_2019.jpg;/imageLibrary/Images/FRA890_N_04_2019.jpg;/imageLibrary/Images/FRA890_N_05_2019.jpg;/imageLibrary/Images/FRA890_N_06_2019.jpg</tripappimages>
    <parent>FRA</parent>
    <child>0</child>
    <type>10</type>
    <lang>en</lang>
    <archived>0</archived>
    <name>Airparks Open Air Car Park Frankfurt Winterspecial</name>
    <ghost>0</ghost>
    <base_product/>
    <bestseller>yes</bestseller>
    <videoid_version>
      <hx>rf1jZK4pkNI</hx>
      <HX>rf1jZK4pkNI</HX>
    </videoid_version>
    <lang_en_archived>false</lang_en_archived>
    <unnamed/>
    <accessible>0</accessible>
  </Product>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>
```
{% endcodetab %}
{% codetab JSON %}
```json
{
  "API_Reply": {
    "Product": [
      {
        "parkplatzname": "Airparks Parkplatz Frankfurt - Winterspecial",
        "language": "en",
        "tax_location": "GER",
        "tax_type": "SP",
        "umsatzsteuer_id": "DE813463160",
        "terminallocated": "0",
        "car_parked_for_you": "0",
        "meet_and_greet": "0",
        "valet_included": "0",
        "mindestparkdauer": 1,
        "maximum_stay": 35,
        "release_days": "0",
        "adresse": "Lärchenstraße 133, 65933 Frankfurt am Main",
        "adresse_navigation": "Lärchenstr. 131, 65933 Frankfurt am Main",
        "ghost_product_alternative_content": "Das Airparks Parkplatz Frankfurt Winterspecial ist bei unseren Kunden sehr beliebt und zu ihrem Reisetermin leider ausgebucht. ",
        "telefon": "+49 (0)69 / 175 148 65 oder +49 (0)176 / 100 311 54",
        "sellingpoint": "Book now: our winter special is only available for a limited time. Note new cancellation policy.",
        "hinweis": "<strong>Dieses Angebot gilt für Anreisen ab 02.11.2019 und späteste Rückreise am 04.04.2020. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Bitte beachten Sie, dass bei Umbuchungen gegebenenfalls ein Aufpreis anfallen kann. Die Maximalparkdauer beträgt 35 Tage.</strong><br />\r\n<strong>Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails (Flugnummer des Rückfluges und Ankunftszeit in Frankfurt) mit zum Check-in des Parkplatzes.</strong><br />\r\nDer Shuttletransfer erfolgt zum Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können ab Terminal 1 kostenfrei mit der Sky Line oder dem Flughafen-Shuttle-Bus (alle paar Minuten) zum Terminal 2 fahren. <br />\r\nDer Transfer ist für maximal 5 Personen möglich. Unser Tipp: Setzen Sie Ihre Mitfahrer zuerst am Flughafen ab! <br />\r\nWir empfehlen Ihnen, ca. 2,5 Stunden vor Ihrer Abflugzeit am Parkplatz anzureisen. Bitte beachten Sie dies bei der Angabe Ihrer Anreisezeit, da ansonsten kein pünktlicher Transfer gewährleistet werden kann. ",
        "anfahrt": "<strong>Aus allen Richtungen:</strong> Auf die A3 in Richtung Frankfurter Kreuz/ Flughafen Frankfurt fahren. In Höhe des Flughafens Frankfurt von der A3 auf die B43 in Richtung Kelsterbach/ Industriepark Höchst abfahren. NICHT auf die B43 in Richtung Kelsterbach abbiegen sondern, sondern weiter geradeaus fahren auf der B40. Nach weiteren 1,5 km rechts abbiegen auf die B40A in Richtung Frankfurt-Stadtmitte. Nach ungefähr 4 km auf gelangt man auf die Mainzer Landstraße. Dort den Gebäudekomplex TOOM Markt/ Promarkt/ Cinestar passieren und anschließend an der Ampel rechts abbiegen in die Straße \"In der Schildwacht\". Nach ungefähr 400 m am Ende der Straße erneut rechts abbiegen in die Lärchenstraße. Nach weiteren 300 m erreicht man auf der linken Seite die Airparks-Einfahrt.\r\n<br />\r\nBitte darauf achten, dass man der Ausschilderung zum Airparks-Parkplatz (Lärchenstraße 133) und nicht zum Airparks-Parkhaus folgt!  <br />",
        "anfahrt_kurz": "<strong>Aus allen Richtungen:</strong> Auf die A3 in Richtung Frankfurter Kreuz/ Flughafen Frankfurt fahren. In Höhe des Flughafens Frankfurt von der A3 auf die B43 in Richtung Kelsterbach/ Industriepark Höchst abfahren. NICHT auf die B43 in Richtung Kelsterbach abbiegen sondern, sondern weiter geradeaus fahren auf der B40. Nach weiteren 1,5 km rechts abbiegen auf die B40A in Richtung Frankfurt-Stadtmitte. Nach ungefähr 4 km auf gelangt man auf die Mainzer Landstraße. Dort den Gebäudekomplex TOOM Markt/ Promarkt/ Cinestar passieren und anschließend an der Ampel rechts abbiegen in die Straße \"In der Schildwacht\". Nach ungefähr 400 m am Ende der Straße erneut rechts abbiegen in die Lärchenstraße. Nach weiteren 300 m erreicht man auf der linken Seite die Airparks-Einfahrt.\r\n<br />\r\nBitte darauf achten, dass man der Ausschilderung zum Airparks-Parkplatz (Lärchenstraße 133) und nicht zum Airparks-Parkhaus folgt!  <br />",
        "transfer": "Bustransfer von 02:00-00:40 Uhr zum Flughafen und zurück inklusive. Der Shuttle fährt alle 20 Minuten nach festem Fahrplan zu jeder vollen Stunde, 20 und 40 Minuten nach jeder vollen Stunde. Transferdauer: ca. 10 Minuten. <br /> <br />\r\nDer Shuttleservice erfolgt zum Busbahnhof am Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können von hier mit dem \"Flughafen-Shuttle-Bus\" oder der \"Sky Line\" kostenlos weiterfahren.",
        "shuttle_von": "0200",
        "shuttle_bis": "0040",
        "shuttle_frequency": "alle 20 Minuten",
        "transfer_kurzform": "Transfer von 02:00 bis 00:40 Uhr alle 20 Min. inklusive. Transferdauer: ca. 10 Minuten.",
        "transfer_kurz": "Bustransfer von 02:00-00:40 Uhr inklusive. Der Transfer fährt zum Terminal 1, zum Terminal 2 fährt kostenfrei die Sky Line.\r\n ",
        "tripappintroduction": "From now on there will be an administrative charge of at least 10 EUR for the cancellation of the car park on the day after the booking. \r\nAvoid charges by adding the Flexi Package or contacting the travel agency.\r\n<br />\r\n<br />\r\n<strong>Entfernung zum Flughafen</strong>\r\n<br />\r\nTransferdauer: ca. 10 Minuten\r\n<br />\r\n<br />\r\n<strong>Sicherheit</strong>\r\n<br />\r\nEingezäunter, beleuchteter, videoüberwachter und 24 Stunden personell besetzter Parkplatz. Es finden regelmäßige Kontrollgänge statt.\r\n<br />\r\n<br />\r\n<strong>Hinweis</strong>\r\n<br />\r\n<strong>Dieses Angebot gilt für Anreisen ab 02.11.2019 und späteste Rückreise am 04.04.2020. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Bitte beachten Sie, dass bei Umbuchungen gegebenenfalls ein Aufpreis anfallen kann. Die Maximalparkdauer beträgt 35 Tage.</strong><br />\r\n<strong>Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails (Flugnummer des Rückfluges und Ankunftszeit in Frankfurt) mit zum Check-in des Parkplatzes.</strong><br />\r\nDer Shuttletransfer erfolgt zum Terminal 1. Alle Gäste, die ab Terminal 2 fliegen, können ab Terminal 1 kostenfrei mit der Sky Line oder dem Flughafen-Shuttle-Bus (alle paar Minuten) zum Terminal 2 fahren. <br />\r\nDer Transfer ist für maximal 5 Personen möglich. Unser Tipp: Setzen Sie Ihre Mitfahrer zuerst am Flughafen ab! <br />\r\nWir empfehlen Ihnen, ca. 2,5 Stunden vor Ihrer Abflugzeit am Parkplatz anzureisen. Bitte beachten Sie dies bei der Angabe Ihrer Anreisezeit, da ansonsten kein pünktlicher Transfer gewährleistet werden kann. \r\n<br />\r\n<br />\r\n<strong>Barrierefreier Zugang</strong>\r\n<br />\r\nBehindertengerechte Stellplätze sind auf Anfrage verfügbar. Der Transferbus ist bedingt behindertengerecht.\r\n<br />\r\n<br />\r\n<strong>Pkw Groesse</strong>\r\n<br />\r\nMax. Höhe: unbegrenzt; max. Breite: 2,00 m; max. Länge: 5,00 m; größere PKW bis 6 m Länge bzw. 2,30 m Breite auf Anfrage beim Kundenservice und gegen Aufpreis von 10,- EUR vor Ort möglich. Über 6 m Länge bzw. 2,30 m Breite tätigen Sie bitte 2 Buchungen und melden die Übergröße nach der Buchung am Parkplatz an.\r\n<br />\r\n<br />\r\n<strong>Versicherung</strong>\r\n<br />\r\nHaftpflichtversicherung für den Betrieb des Parkplatzes entsprechend den gesetzlichen Bestimmungen.\r\n<br />\r\n<br />\r\n<strong>Adresse</strong>\r\n<br />\r\nLärchenstraße 133, 65933 Frankfurt am Main\r\n<br />\r\n<br /> \r\n<strong>Parkplatzbetreibertipp</strong>\r\n<br />\r\nEs stehen Frauenparkplätze zur Verfügung. Gern erhalten Sie auch kostenfrei Starthilfe.",
        "videoid": "rf1jZK4pkNI",
        "shuttle_times": "2:00 - 00:40 Uhr",
        "transferdauer": "ca. 10 Minuten",
        "entfernung_zum_flughafen": "Transferdauer: ca. 10 Minuten",
        "transfer_time": 10,
        "transfer_minutes": 10,
        "sicherheit": "Eingezäunter, beleuchteter, videoüberwachter und 24 Stunden personell besetzter Parkplatz. Es finden regelmäßige Kontrollgänge statt.",
        "sicherheit_kurzform": "Eingezäunter, beleuchteter, 24h personell besetzter, videoüberwachter und regelmäßig kontrollierter Parkplatz.",
        "bei_der_anreise_": "Bitte fahren Sie auf dem Airparks-Parkplatz bis zum Empfang und halten Sie dort auf den gelb markierten Check-in Parkplätzen. <font color=\"#FF0000\"><strong>Bringen Sie bitte Ihre Buchungsbestätigung und Ihre Flugdetails mit (Flugnummer Ihre Rückflugs (z.B. LH 2374) und Ihre Ankunftszeit in Frankfurt).</strong></font> Die Flugdetails benötigen wir zur besseren Koordinierung Ihres Rücktransfers. Unser Personal erklärt Ihnen kurz den Shuttleservice und weist Ihnen den Stellplatz für Ihr Fahrzeug zu.",
        "bei_der_abreise": "Begeben Sie sich bitte nach der Gepäckausgabe und nach der Zollabfertigung zum Airparks Shuttle Treffpunkt in der ANKUNFTS-EBENE nach der Halle A auf dem angrenzenden Parkplatz P 29 (Terminalgebäude verlassen, links gehen bis zum Ende von Halle A). Die blaue Linie fährt von 02:00-00:40 Uhr alle 20 Minuten nach festem Fahrplan zum Airparks Parkplatz Lärchenstraße und zum Airparks Parkhaus Frankfurt (Abfahrt jeweils zu jeder vollen Stunde, um 20 und 40 Minuten nach jeder vollen Stunde). Bitte NICHT in die rote Linie einsteigen, diese fährt zu einem anderen Parkplatz! <br /> \r\n<strong>Bitte beachten Sie:</strong> Unsere Parkleistungen werden nach Kalendertagen abgerechnet. Sofern Sie weitere Kalendertage wie in Ihrer Buchung angegeben nutzen werden, müssen diese nachgebucht werden.",
        "barrierefreier_zugang": "Behindertengerechte Stellplätze sind auf Anfrage verfügbar. Der Transferbus ist bedingt behindertengerecht.",
        "pkw_groesse": "Max. Höhe: unbegrenzt; max. Breite: 2,00 m; max. Länge: 5,00 m; größere PKW bis 6 m Länge bzw. 2,30 m Breite auf Anfrage beim Kundenservice und gegen Aufpreis von 10,- EUR vor Ort möglich. Über 6 m Länge bzw. 2,30 m Breite tätigen Sie bitte 2 Buchungen und melden die Übergröße nach der Buchung am Parkplatz an.",
        "kindersitz": "Kindersitze und Sitzerhöhungen sind nicht erforderlich da ein Linienbus als Shuttlefahrzeug eingesetzt wird.",
        "parkplatzbetreibertipp": "Es stehen Frauenparkplätze zur Verfügung. Gern erhalten Sie auch kostenfrei Starthilfe.",
        "produktinfolink": "Ausführliche Produktinformationen zum Ausdrucken finden Sie unter http://www.holidayextras.de/produktinfos.html",
        "versicherung": "Haftpflichtversicherung für den Betrieb des Parkplatzes entsprechend den gesetzlichen Bestimmungen.",
        "discount_type": "%",
        "prodlogo": "/imageLibrary/Images/b0c/AP-P-Fra-Winter.gif",
        "recommended": "0",
        "airparks_owned": "yes",
        "on_airport": "0",
        "distance_miles": 9,
        "latitude": 50.0964,
        "longitude": 8.5892,
        "company_logo": "airparks.png",
        "company_name": "Airparks",
        "google_map": "<a href=\"http://bit.ly/nWlatb\">http://bit.ly/nWlatb</a>",
        "logo": "/imageLibrary/Images/Airparks.gif",
        "zusatzvermerk": "This offer is valid for arrivals from the 3rd of November 2018 and departures not later than the 12th of April 2019. The maximum parking duration is 35 days. The Airparks Winter-Special is amendable, cancelable and bookable only while stocks last. There might be an additional charge for amendments.",
        "merchandising": "From now on there will be an administrative charge of at least 10 EUR for the cancellation of the car park on the day after the booking. \r\nAvoid charges by adding the Flexi Package or contacting the travel agency.",
        "special_offer_text": "Winterspecial",
        "tripappimages": "/imageLibrary/Images/FRA0_Icon_Test.png;/imageLibrary/Images/FRA890_N_01_2019.jpg;/imageLibrary/Images/FRA890_N_02_2019.jpg;/imageLibrary/Images/FRA890_N_03_2019.jpg;/imageLibrary/Images/FRA890_N_04_2019.jpg;/imageLibrary/Images/FRA890_N_05_2019.jpg;/imageLibrary/Images/FRA890_N_06_2019.jpg",
        "parent": "FRA",
        "child": "0",
        "type": 10,
        "lang": "en",
        "archived": "0",
        "name": "Airparks Open Air Car Park Frankfurt Winterspecial",
        "ghost": "0",
        "_airport": "FRA",
        "_a_tax_location": [
          "GER"
        ],
        "_a_tax_type": [
          "SP"
        ],
        "base_product": "",
        "_prodcode": "FRA0",
        "_updated_date": "2019-09-23",
        "bestseller": "yes",
        "_base_name": null,
        "videoid_version": {
          "hx": "rf1jZK4pkNI",
          "HX": "rf1jZK4pkNI"
        },
        "_a_equivalent_prod_for_airparks": [],
        "_a_equivalent_product": [],
        "_filter": {
          "car_parked_for_you": "0",
          "meet_and_greet": "0",
          "valet_included": "0",
          "recommended": "0",
          "on_airport": "0",
          "special_offer_text": "Winterspecial"
        },
        "_a_terminal": [],
        "_a_ghost_upsell_products": [],
        "_a_test_transfer": [],
        "_default_lang": "de",
        "_prodtype": "GermanParking",
        "_generated": "2019-12-05 15:16:15",
        "lang_en_archived": "false",
        "unnamed": "",
        "accessible": ""
      }
    ],
    "ATTRIBUTES": {
      "Result": "OK"
    },
    "API_Header": {
      "Request": {
        "key": "mytestkey",
        "v": 1,
        "format": "js"
      }
    }
  }
}
```
{% endcodetab %}
{% endcodetabs %}
