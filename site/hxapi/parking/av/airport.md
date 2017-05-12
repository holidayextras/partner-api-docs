---

---

# Availability At Airport

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](/hxapi/parking/av) > request:[Availability by Airport](airport)

## /carpark/foo

where foo is the location (airport) code

e.g. http://api.holidayextras.co.uk/v1/carpark/LHR

### Method

GET


### Parameters

 | Name        | Type    | Format                                 | Required |     
 | ----        | ----    | ------                                 | -------- |     
 | ABTANumber  | String  | [A-Z0-9]{5}                            | Y        |     
 | Password    | String  | [A-Z0-9]{5}                            | N*       |     
 | Initials    | String  | [A-Z]{3}                               | N        |     
 | ArrivalDate | Date    | YYYY-MM-DD                             | Y        |     
 | ArrivalTime | Time    | HHSS                                   | Y        |     
 | DepartDate  | Date    | YYYY-MM-DD                             | Y        |     
 | DepartTime  | Time    | HHSS                                   | Y        |     
 | NumberOfPax | Integer |                                        | N        |     
 | filter      | String  | [A-Z]                                  | N*+      |     
 | fields      | String  | [A-Z]a csv list of product info fields | N*++     |     
 | top3        | Boolean | [01]                                   | N*+++    |     
 | key         | String  | [A-Z]                                  | Y        |     
 | token       | String  | [0-9]{9}                               | Y++++    | 
 | System      | String  | [A-Z]{3}                               | N        |     
 | lang        | String  | [A-Z]{2}                               | N        |     

*Password only required for agent requests. If sending this you should make your availability requests over https.

*+ Pass in filter=on_airport or filter=recommended or filter=meet_and_greet to only show car parks meeting those criteria. You can filter by any field that comes back in the filter section of the xml.

*++ A list of product info fields can be passed in to return configurable product information e.g. fields=name,address,latitude,sellingpoint

*+++ top3 - If a value of 1 is passed in for the top3 param, then a maximum of three car parks will be returned, one on airport, one other park and ride, and one other meet and greet. 

++++ you can pass in token=generate to auto-magically create you the next available sequential token.

Pass in System=ABG to access products in Europe.

Default if System is not set is System=ABC to access products in UK only.

Pass in lang=en/de/it/es/pt/nl (For System=ABG available lang=de/it/fr/nl)

[Example form](http://api.holidayextras.co.uk/form/carpark1?key=mytestkey)



### Request

```html
http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW?ArrivalDate=2017-09-20&ArrivalTime=1200&DepartDate=2017-09-27&DepartTime=1400&key=**HXAPIKEY**&token=generate&ABTANumber=**HXAGENTCODE**&Initials=BJT
```













### Reply

```xml

<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="1" Result="OK">
	<CarPark>
		<TotalPrice>80.00</TotalPrice>
		<NonDiscPrice>80.00</NonDiscPrice>
		<RequestFlags>
			<Registration>1</Registration>
		</RequestFlags>
		<Name>Long Stay</Name>
		<Code>LGW2</Code>
		<Filter>
			<on_airport>1</on_airport>
			<terminal>1</terminal>
		</Filter>
		<BookingURL>/api/sandbox/v1/carpark/LGW2</BookingURL>
		<MoreInfoURL>/api/sandbox/v1/product/LGW2</MoreInfoURL>
	</CarPark>
	<CarPark>
		<TotalPrice>72.00</TotalPrice>
		<NonDiscPrice>72.00</NonDiscPrice>
		<RequestFlags>
			<Registration>1</Registration>
		</RequestFlags>
		<Name>Summer Special</Name>
		<Code>LGW3</Code>
		<Filter>
			<on_airport>1</on_airport>
			<terminal>1</terminal>
			<car_parked_for_you>1</car_parked_for_you>
		</Filter>
		<BookingURL>/api/sandbox/v1/carpark/LGW3</BookingURL>
		<MoreInfoURL>/api/sandbox/v1/product/LGW3</MoreInfoURL>
	</CarPark>
	<Pricing>
		<CCardSurchargePercent>2.00</CCardSurchargePercent>
		<CCardSurchargeMin>1.50</CCardSurchargeMin>
		<CCardSurchargeMax>4.00</CCardSurchargeMax>
		<CancellationWaiver>
			<Waiver>0.50</Waiver>
		</CancellationWaiver>
	</Pricing>
	<API_Header>
		<Request>
			<ArrivalDate>2008-09-20</ArrivalDate>
			<ArrivalTime>1200</ArrivalTime>
			<DepartDate>2008-09-27</DepartDate>
			<DepartTime>1400</DepartTime>
			<key>mytestkey</key>
			<token>000001234</token>
			<v>1</v>
		</Request>
	</API_Header>
</API_Reply>

```






















### Fields Explained

#### CarPark/TotalPrice

The price of product **WITHOUT** any surcharges/fees added.

#### CarPark/NonDiscPrice

Non discounted price. Some agent codes apply a discount so we return this field to enable a comparison.

#### CarPark/RequestFlags

Flags listing which details the car park operator requires from the customer. If a flag is returned with a 'Y' your application should send the corresponding field/value in the booking request. These are not compulsory, the booking should still be made without these details, but it greatly reduces administrative work if they are completed. Flags are only returned when positive, if a field is not required the field will not be returned.

The flags which can be returned are:


*  Registration

*  CarMake

*  CarModel

*  CarColour

*  OutFlight

*  ReturnFlight

*  OutTerminal

*  ReturnTerminal

*  Destination

*  MobileNum

#### CarPark/Filter

We have a filter mechanism on our site, to show only meet and greet products etc. The filters that apply to a product are returned here. Possible values are:


*  meet_and_greet

*  recommended

*  on_airport

*  terminal

*  valet_included

*  car_parked_for_you

#### Europe CarParkDetailsFlag

The availability response will identify a list of flags which identify the fields required to be POSTED when making a booking.

e.g. <CarDetFlags>NNNNNNNNNNNNNNNNNN</CarDetFlags>

The order of the flags refer to these POST parameter fields respectively:


<CarDetFlags>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</CarDetFlags>


 | Position | POST Parameter | character length | what is it?                                                                        | 
 | -------- | -------------- | ---------------- | -----------                                                                        | 
 | 1        | Registration   | VARCHAR(10)      | This is the car registration                                                       | 
 | 2        | CarMake        | VARCHAR(10)      | This is the make of the car e.g. Audi                                              | 
 | 3        | CarModel       | VARCHAR(10)      | This is the model of the car e.g. A6                                               | 
 | 4        | CarColour      | VARCHAR(10)      | This is the colour of the car e.g. White                                           | 
 | 5        | NumberOfPax    | INT(2)           | This is the number of passengers in the vehicle e.g. 5                             | 
 | 6        | CarDropoffTime | HHMM             | This is the Arrival Time when you drop the car off at the car park e.g 1000        | 
 | 7        | CarPickupTime  | HHMM             | This is the time on leaving the car park when you pick up your car e.g. 1600       | 
 | 8        | OutTerminal    | VARCHAR(2)       | This is the single letter or number representation of the terminal e.g N or S or 4 | 
 | 9        | OutFltNo       | VARCHAR(10)      | This is the flight number e.g. EZY123                                              | 
 | 10       | InFltNo        | VARCHAR(10)      | This is the flight number e.g. EZY124                                              | 
 | 11       | OutFltTime     | HHMM             | This is the Departure Time of the outbound flight e.g. 1200                        | 
 | 12       | InFltTime      | HHMM             | This is the Arrival Time of the inbound flight e.g. 1500                           | 
 | 13       | MobileNum      | VARCHAR(15)      | This is the mobile number of the customer                                          | 
 | 14       | ShipName       | VARCHAR(20)      | This is the name of the ship e.g. AIDA                                             | 
 | 15       | PierName       | VARCHAR(20)      | This is the pier name                                                              | 
 | 16       | ChildSeat      | Y/N              | Is a child car seat needed?                                                        | 
 | 17       | AddlServices   | VARCHAR(50)      | This is a remarks line                                                             | 
 | 18       | RetTerminal    | VARCHAR(2)       | This is the single letter or number representation of the terminal e.g N or S or 4 | 

#### CarPark/BookingURL

The URL to go to book this product.

#### CarPark/MoreInfoURL

Link to the product library information for this product.

#### Pricing/CreditCardSurcharge

Only relevant for intermediaries, agents levy their own fees. This element should be ignored by agents.

Comprises of 3 elements

*  CCardSurchargePercent

*  CCardSurchargeMin

*  CCardSurchargeMax

The credit card surcharge IS applied to the TotalPrice + the Cancellation Waiver (see below). To prevent the surcharge from exceeding certain boundaries, we have min and max thresholds. If the amount does not come between those two figures, you should use the relevant threshold value.

Pseudo code
```
x = ((TotalPrice + CanxWaiver) / 100 ) * CCardSurchargePercent
if( x < CCardSurchargeMin) 
  x = CCardSurchargeMin
else if x > CCardSurchargeMax
  x = CCardSurchargeMax
```
#### Pricing/CancellationWaiver

We provide an optional cancellation waiver. If not taken up, cancellation will incur a fee. The fee is outlined in our terms and conditions. This value is not currently returned via the XML.

#### API_Header/Request

**HXAPI** returns every parameter you sent in the previous request, as you sent it. This is so your app doesn't have to remember anything not replied in the XML reply.
### XSD

To come.
