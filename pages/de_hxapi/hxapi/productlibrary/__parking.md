---

---

# Product Library - Car Park





## /product/foo

Where **foo** is the car park code.

Please note that any file references given should have the root http://secure.holidayextras.co.uk prepended.

eg

```
/images/prodlib/LGW8/LGW8.jpg
```
becomes
```
http://secure.holidayextras.co.uk/images/prodlib/LGW8/LGW8.jpg
```


### Method

GET



### Parameters

 | Name   | Format | Required | 
 | ----   | ------ | -------- | 
 | token  | String | N        | 
 | key    | String | Y        | 
 | fields | String | N        | 




### Request (example 1)

```
http://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey
```










### Reply (example 1)

```xml

<?xml version="1.0"?>
<API_Reply>
	<Product>
		<parent>LGW</parent>
		<child>4</child>
		<type>1</type>
		<name>Maple Manor Meet and Greet</name>
		<archived>0</archived>
		<longitude>-0.15964508056640625</longitude>
		<latitude>51.15636211351587</latitude>
		<baseProduct/>
		<browser_title>Gatwick Maple Manor Parking | Meet and Greet Parking</browser_title>
		<browser_description>Maple Manor Meet and Greet Parking takes the hassle out of arriving and departing from the airport. You will be met by a fully insured, well trained, uniformed driver who will carefully park your car at a fully secured car park just 4 miles from the terminal.</browser_description>
		<features>Meet &amp; Greet</features>
		<fax>01293 863838</fax>
		<keyword_meta>maple manor gatwick, gatwick airport maple manor parking, maple manor parking gatwick, maple manor parking, gatwick airport parking, maple manor, maple, manor, gatwick parking, meet, greet</keyword_meta>
		<telephone>01293 863322</telephone>
		<introduction>Maple Manor Meet and Greet Parking takes the hassle out of arriving and departing from the airport. You will be met by a fully insured, well trained, uniformed driver who will carefully park your car at a fully secured car park just 4 miles from the terminal. Drop-offs and pick-ups are available from the North and South terminals. There is also a NEW Car Valet Service option for only &#xA3;9.95.</introduction>
		<distance_to_airport>On airport.</distance_to_airport>
		<security_measures>The compound to which your car is taken is fully fenced or manned</security_measures>
		<arrival_procedures>Call Maple Manor on 01293 863 322 between 8am and 8pm, 24 hours after the booking is made to confirm the exact details. You must also call 07801 142165, or if busy 01293 776 447, in advance or your arrival at Gatwick to confirm these details on the day. Drive to the pre-arranged location at Gatwick North or South Terminal (see directions). You will be met by a uniformed driver who will check your car, collect your e-mail booking confirmation and take the keys.  Your car will be driven to a secured compound while you proceed direct to check in.  If you have not given us the terminal information at the time of booking then please call 01293 776 447 at least 24hrs before arrival to reconfirm.</arrival_procedures>
		<directions>Call Maple Manor on 07801 142165, or if busy 01293 776 447, before your arrival at Gatwick to re-confirm the time you wish to be met. You will be met at either the North or South Terminal as specified in your booking. Follow the directions below to meet your driver. -SOUTH TERMINAL: As you drive into the main entrance to Gatwick South Terminal keep to the offside lane and do not follow to the upper level. -Follow signs for arrivals. As the road bends to the right you will see the car rental building on your left. -Continue past the pedestrian lights and park up on the left or right. Look out for our driver with a 'Maple Manor' marked board. -NORTH TERMINAL: As you drive into the main entrance to Gatwick North take the middle lane.  Do not drive to the upper level. -Follow the signs for 'cars only' (marked with a car logo in the correct lane).  Drive to the far end of this road where you will be met outside the car rental building. Look out for a driver with a Maple Manor board.  Call Maple Manor on 07801 142165, or if busy 01293 776 447, when you are on the M23 to re-confirm your arrival time.</directions>
		<address>Woodhatch Road Salfords Nr Redhill Surrey RH1 5JH</address>
		<information>If you are returning ahead of schedule please give us at least 24 hours notice so that we can ensure you car is ready.  A &#xA3;2.50 supplement for pick-up or drop-off from 00.00 until 06.30. You must call 07801 142165 or if unsuccessful 01293 776447 when on M23 to confirm details. If your actual stay is longer than your booked stay, you will be charged extras on departure at the car park standard daily rate. Please note: No refund will be issued for part used stays and any additional time will be charged at the local gate rate.</information>
		<departure_procedures>On return from your holiday, once you have cleared customs, simply call 07801 142165, or if unsuccessful 01293 776447, then proceed to arrivals following signs for car rental. Your car will be delivered to the same point where you were met on arrival for you to collect and drive home.</departure_procedures>
		<minimum_stay>1 day (8 days from April 06 onwards)</minimum_stay>
		<disabled_facilities>Maple Manor cannot drive specially adapted vehicles but otherwise welcomes bookings from disabled customers.</disabled_facilities>
		<maximum_car_size>No mobile homes, vans, lorries, caravans or trailers are permitted.</maximum_car_size>
		<transfers>No transfers are required. Once your car is picked you proceed directly to check in!</transfers>
		<opening_periods>365 days a year</opening_periods>
		<number_of_spaces>200</number_of_spaces>
		<insurance>All cars parked or stored with Maple Manor will be on a proven direct negligence basis. Any loss or damage claims for vehicles must be made prior to the vehicle being handed over by Maple Manor. All vehicles will only be driven by qualified drivers and under Maple Manor's own specialist road risk insurance. Parking is at owner's own risk subject to printed terms and conditions.</insurance>
		<trailer_and_car>No trailers allowed</trailer_and_car>
		<bestseller>Yes</bestseller>
		<undercover_parking>Not available.</undercover_parking>
		<sellpoint_location>Avoid the hassle of parking and be met at the airport terminal on your departure and arrival.</sellpoint_location>
		<sellpoint_terminal>Officially our lowest priced Meet and Greet service at Gatwick.</sellpoint_terminal>
		<sellpoint_transfers>Eliminate transfers with this superb Meet and Greet service.</sellpoint_transfers>
		<sellpoint_parking>Secured compound with security fencing, monitored 24 hours a day.</sellpoint_parking>
		<sellpoint_security>Maple Manor make additional charges during the hours 00:00 - 6:00, please click more info before proceeding with your booking.</sellpoint_security>
		<logo>/images/prodlib/maple.jpg</logo>
		<distance_miles>4.6490992603197325</distance_miles>
		<bestselleroverride>LGZ1</bestselleroverride>
		<default_img>/images/prodlib/LGW8/LGW8.jpg</default_img>
		<premium_product>Y</premium_product>
		<custom_msg>Premium service</custom_msg>
		<priority>-2</priority>
		<terminal_unknown>If you do not know your terminal, you will need to call to confirm at least 24hrs before your arrival. Please follow the instructions on your confirmation.</terminal_unknown>
		<meet_and_greet>1</meet_and_greet>
		<car_parked_for_you>1</car_parked_for_you>
		<filter>all|N|0|Y|N</filter>
		<postcode>RH1 5JH</postcode>
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





### Request (example 2)

```
http://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey&fields=name,longitude,latitude
```





### Reply (example 2)

```xml

<?xml version="1.0"?>
<API_Reply>
	<Product>
		<name>Maple Manor Meet and Greet</name>
		<longitude>-0.15964508056640625</longitude>
		<latitude>51.15636211351587</latitude>
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





### Request (example 3) - German airport

Requests for German products return a different set of fields. Explanation of fields not currently available.

```
http://api.holidayextras.co.uk/sandbox/v1/product/FRA0?key=mytestkey
```



### Reply (example 3)

```xml

<?xml version="1.0"?>
<API_Reply>
	<Product>
		<parent>FRA</parent>
		<child>0</child>
		<type>10</type>
		<name>Airparks Parkplatz Frankfurt - Winterspecial</name>
		<archived>0</archived>
		<longitude>8.589195</longitude>
		<latitude>50.096385</latitude>
		<baseProduct/>
		<parkplatzname>Airparks Parkplatz Frankfurt - Winterspecial</parkplatzname>
		<adresse>L&#xE4;rchenstra&#xDF;e 133, 65933 Frankfurt am Main Zur Eingabe im Navigationsger&#xE4;t: L&#xE4;rchenstr. 131, 65933 Frankfurt am Main</adresse>
		<adresse_navigation>Zur Eingabe im Navigationsger&#xE4;t: L&#xE4;rchenstr. 131, 65933 Frankfurt am Main</adresse_navigation>
		<hinweis>Dieses Angebot gilt f&#xFC;r Anreisen ab 9.11.2008 und sp&#xE4;teste R&#xFC;ckreise am 30.03.2009. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Bringen Sie bitte Ihre Buchungsbest&#xE4;tigung und Ihre Flugdetails (Flugnummer und Ankunftszeit in Frankfurt) mit zum Check-in des Parkplatzes. Der Shuttletransfer erfolgt zum Terminal 1. Alle G&#xE4;ste, die ab Terminal 2 fliegen, k&#xF6;nnen ab Terminal 1 kostenfrei mit der &#xFFFD;Sky Line&#xFFFD; oder dem &#xFFFD;Flughafen-Shuttle-Bus&#xFFFD; (alle paar Minuten) zum Terminal 2 fahren.</hinweis>
		<telefon>F&#xFC;r R&#xFC;ckfragen und &#xC4;nderungen melden Sie sich bitte bei dem unter Kundenservice angegebenen Ansprechpartner. Ihren R&#xFC;cktransfer bestellen Sie bitte direkt beim Parkplatz unter Tel: + 49 (0)69/ 175 148 65 oder +49 (0)176 / 100 311 54.</telefon>
		<mindestparkdauer>1 Tag.</mindestparkdauer>
		<sicherheit>Das Gel&#xE4;nde ist eingez&#xE4;unt, video&#xFC;berwacht und 24-Stunden personell besetzt.</sicherheit>
		<sicherheit_kurzform>personell besetztes und video&#xFC;berwachtes Gel&#xE4;nde</sicherheit_kurzform>
		<anfahrt>Gern k&#xF6;nnen Sie sich eine  ausf&#xFC;hrliche Anfahrtsbeschreibung zu Airparks Frankfurt herunterladen.  Aus allen Richtungen: Fahren Sie auf die A3 in Richtung Frankfurter Kreuz/ Flughafen Frankfurt. In H&#xF6;he des Flughafens Frankfurt fahren Sie von der A3 auf die B43 in Richtung Kelsterbach/ Industriepark H&#xF6;chst ab. Nach ca. 1 km biegen Sie NICHT von der B43 in Richtung Kelsterbach ab, sondern fahren Sie weiter geradeaus auf der B40. Nach weiteren 1,5 km biegen Sie dann rechts ab auf die B40A in Richtung Frankfurt-Stadtmitte und Frankfurt-Griesheim. Sie gelangen nach ungef&#xE4;hr 4 km auf die Mainzer Landstra&#xDF;e. Passieren Sie den Geb&#xE4;udekomplex TOOM Markt/ Promarkt/ Cinestar und biegen Sie anschlie&#xDF;end an der Ampel rechts ab in die Stra&#xDF;e "In der Schildwacht". Nach ungef&#xE4;hr 400 m fahren Sie am Ende der Stra&#xDF;e erneut rechts ab in die L&#xE4;rchenstra&#xDF;e. Nach weiteren 300 m erreichen Sie auf der linken Seite die Airparks-Einfahrt.  Alternativ aus dem Westen auf der A3: Bleiben Sie bitte auf der A3 und verlassen Sie die A3 NICHT an der Ausfahrt zur A67/ B43. Folgen Sie der Beschilderung "F-H&#xF6;chst/ Kelsterbach". Verlassen Sie die A3 an der Ausfahrt "F-H&#xF6;chst/ Kelsterbach" und biegen Sie auf die B43 in Richtung "Kelsterbach/ Industriepark H&#xF6;chst".  Nun folgen Sie der Beschreibung in Richtung B40/ B40a (siehe oben).  Bitte achten Sie darauf, dass Sie der Ausschilderung zum Airparks-Parkplatz (L&#xE4;rchenstra&#xDF;e 133) und nicht zum Airparks-Parkhaus folgen! Dort checken Sie ein.</anfahrt>
		<transfer>24-Stunden-Shuttleservice zum Flughafen und zur&#xFC;ck inklusive. Alle 20 Minuten. Transferdauern ca. 10 Minuten. Der Shuttleservice erfolgt zum Busbahnhof am Terminal 1. Alle G&#xE4;ste, die ab Terminal 2 fliegen, k&#xF6;nnen von hier mit dem "Flughafen-Shuttle-Bus" oder der "Sky Line" kostenlos weiterfahren.</transfer>
		<entfernung_zum_flughafen>Transferdauer ca. 10 Minuten</entfernung_zum_flughafen>
		<transfer_kurzform>24-Stunden-Shuttleservice zum Flughafen und zur&#xFC;ck, alle 20 Minuten inklusive. Transferdauer: ca. 10 Minuten.</transfer_kurzform>
		<shuttle_times>24 Stunden</shuttle_times>
		<transferdauer>ca. 10 Minuten</transferdauer>
		<shuttle_frequency>alle 20 Minuten</shuttle_frequency>
		<shuttle_von>0000</shuttle_von>
		<shuttle_bis>2400</shuttle_bis>
		<bei_der_anreise_>Bitte fahren Sie auf dem Airparks-Parkplatz bis zum Empfang und halten Sie dort auf den markierten Fl&#xE4;chen. Bringen Sie bitte Ihre Buchungsbest&#xE4;tigung und Ihre Flugdetails mit (Flugnummer Ihre R&#xFC;ckflugs (z.B. LH 2374) und Ihre Ankunftszeit in Frankfurt). Die Flugdetails ben&#xF6;tigen wir zur besseren Koordinierung Ihres R&#xFC;cktransfers. Unser Personal erkl&#xE4;rt Ihnen kurz den Shuttleservice und weist Ihnen den Stellplatz f&#xFC;r Ihr Fahrzeug zu.</bei_der_anreise_>
		<bei_der_abreise>Begeben Sie sich bitte nach der Gep&#xE4;ckausgabe und nach der Zollabfertigung zum Airparks Shuttle Treffpunkt, Linienbushaltestelle 10 (Terminal 1, ANKUNFTS-Ebene (NICHT Abflugs-Ebene!), Halle B, Ausgang Nr. 6). Die blaue Linie f&#xE4;hrt rund um die Uhr alle 20 Minuten zum Airparks Parkplatz L&#xE4;rchenstra&#xDF;e und zum Airparks Parkhaus Franfurt. Bitte NICHT in die rote Linie einsteigen, diese f&#xE4;hrt zu einem anderen Parkplatz!"</bei_der_abreise>
		<parkplatzbetreibertipp>Gern erhalten Sie kostenlose Starthilfe.  Ihr Kfz-Pflegeservice f&#xFC;r Airparks-Kunden!  Ab sofort stehen Ihnen an allen Airparks-Standorten in Frankfurt Angebote zur Fahrzeugpflege zur Verf&#xFC;gung. Neben T&#xDC;V-Abnahme, Entfernung von Beulen und Ausbesserung von Lacksch&#xE4;den bietet Ihnen die Firma Sunshine eine breite Palette an Serviceleistungen rund um das Auto - und das alles, w&#xE4;hrend Sie im Urlaub sind. Weitere Informationen erhalten Sie unter www.Sunshine-Autopflege.de/Airparks.</parkplatzbetreibertipp>
		<barrierefreier_zugang>Es stehen auch behindertengerechte Stellpl&#xE4;tze zur Verf&#xFC;gung.</barrierefreier_zugang>
		<pkw_groesse>keine Beschr&#xE4;nkungen. Bis 5 m L&#xE4;nge und 2 m Breite: kein Aufpreis. Bis 6 m L&#xE4;nge bzw. 2,30 m Breite: 10,- &#xFFFD; Aufpreis vor Ort. &#xDC;ber 6 m L&#xE4;nge bzw. 2,30 m Breite t&#xE4;tigen Sie bitte 2 Buchungen und melden die &#xDC;bergr&#xF6;&#xDF;e nach der Buchung am Parkplatz an.</pkw_groesse>
		<usp>Unser Bestseller mit kostenlosem 24-Stunden-Shuttle zu besten Preisen.</usp>
		<zusatzvermerk>Dieses Angebot gilt f&#xFC;r Anreisen ab 9.11.2008 und sp&#xE4;teste R&#xFC;ckreise am 30.03.2009. Es ist umbuchbar und stornierbar und gilt nur solange der Vorrat reicht. Die Maximalparkdauer betr&#xE4;gt 43 Tage.</zusatzvermerk>
		<bestseller>yes</bestseller>
		<versicherung>Haftpflichtversicherung f&#xFC;r Betrieb des Parkplatzes entsprechend den gesetzlichen Bestimmungen.</versicherung>
		<company_name>Airparks</company_name>
		<company_logo>airparks.png</company_logo>
		<lat_hms>50:05:47</lat_hms>
		<long_hms>8:35:17</long_hms>
	</Product>
	<API_Header>
		<Request>
			<key>mytestkey</key>
			<v>1</v>
		</Request>
	</API_Header>
</API_Reply>


```


