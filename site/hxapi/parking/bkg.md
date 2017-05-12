---

---

# Make booking at car park

[API Docs](/hxapi/) > product:[Parking](/hxapi/parking) > endpoint:[carpark](av) > [Make Booking](bkg)

This must be a POST, as you are making a booking. It must be made over HTTPS. Intermediaries will be sending credit card information, Agents will send their login details so HTTPS is required in both instances.

If you do not send the ABTANumber field (for agent code) then your booking will not be tracked to your agent code. For agent bookings, the Password field is also required, intermediaries do not have a password.


To retrieve all details about the booking, perform a GET request to view the booking at the location specified in `<MoreInfoURL>`. [Instructions on how to view a booking](/hxapi/viewamendcancel/view).

# Post-booking

For parking products, once the booking has been made, you should include a barcode on your confirmation page and email. This is a simple representation of the booking reference and it just involves another call to the api. Details are available [here](/hxapi/barcode).

## /carpark/foo

where foo is the carpark code

e.g. /carpark/LHR2

### Method

POST

### Parameters

#### Intermediary

We no longer accept card payments taken via the API - this will be updated to include a TOKEN to pass in payment.
A new API service will be availble to obtain a token from a Credit Card number - you must prove that you are PCI compliant before this service is available for you.

 | Name                  | Data Type     | Format       | Required      | 
 | ----                  | ---------     | ------       | --------      | 
 | ABTANumber            | String        | [A-Z0-9]{5}  | Y             | 
 | Initials              | String        | [A-Z]{3}     | N             | 
 | ArrivalDate           | Date          | YYYY-MM-DD   | Y             | 
 | ArrivalTime           | Time          | HHMM         | Y             | 
 | DepartDate            | Date          | YYYY-MM-DD   | Y             | 
 | DepartTime            | Time          | HHMM         | Y             | 
 | Registration          | String        |              | N §          | 
 | CarMake               | String        |              | N §          | 
 | CarModel              | String        |              | N §          | 
 | CarColour             | String        |              | N §          | 
 | OutFlight             | String        |              | N §          | 
 | ReturnFlight          | String        |              | N §          | 
 | OutTerminal           | String        |              | N §          | 
 | ReturnTerminal        | String        |              | N §          | 
 | MobileNum             | String        |              | N §          | 
 | Destination           | String        |              | N §          | 
 | Title                 | String        |              | Y             | 
 | Initial               | String        | [A-Z]{1}     | Y             | 
 | Surname               | String        |              | Y             | 
 | Address[]             | String        |              | Y             | 
 | Town                  | String        |              | Y             | 
 | County                | String        |              | Y             | 
 | NumberOfPax           | Number        |              | Y             | 
 | PostCode              | String        |              | Y             | 
 | DayPhone              | String        |              | Y             | 
 | Email                 | String        |              | Y             | 
 | CardHolder            | String        |              | Y             | 
 | CardToken             | String        | [0-9]{14-16} | Y             | 
 | CV2                   | Integer       | [0-9]{3-4}   | Y             | 
 | ExpiryDate            | Date          | MMYY         | Y             | 
 | StartDate             | Date          | MMYY         | N*            | 
 | IssueNumber           | Integer       |              | N*            | 
 | Waiver                | Boolean       | 1/0          | N (default N) | 
 | DataProtection        | Char          | Y/N          | N (default N) | 
 | CustomerRef           | String        |              | N             | 
 | key                   | String        |              | Y             | 
 | token                 | String        | [0-9]{9}     | Y             | 
 | Supplements[]         | String Array  |              | N             | 
 | SupplementsAdults[]   | Integer Array |              | N             | 
 | SupplementsChildren[] | Integer Array |              | N             | 
 | SupplementsCount[]    | Integer Array |              | N             | 
 | System                | String        | ABC/ABG      | N             | 
 | PriceCheckFlag        | String        | Y            | Y             | 
 | PriceCheckPrice       | Value         | 12.34        | Y             | 


* Only required for debit card purchases where card has one.

+ DataProtection field - Does the customer consent to receiving offers from Holiday Extras. Y = Yes, will receive offers, N = Customer data is protected.

OutTerminal & ReturnTerminal - Must comprise of airport code + identifier. Eg LGW2, LHR5 etc. If in doubt, the terminals (where appropriate) are available on a per location basis, from here (change the airport code for different airports):

System is required to be set to ABG if you are processing bookings for European products and taking payment in Euros.
Default is ABC for UK/GBP - it is not mandatory to send if you are processing bookings for UK based products or products being processed in GBP.

#### Supplements

 | Param                 | Explanation                                                                                         | 
 | -----                 | -----------                                                                                         | 
 | Supplements[]         | An array of codes that identify the add-ons that supplement a hotel booking                         | 
 | SupplementsAdults[]   | An array containing the number of adults for each supplement that is sold on a Per Person basis     | 
 | SupplementsChildren[] | An array containing the number of children for each supplement that is sold on a Per Person basis   | 
 | SupplementsCount[]    | An array containing the quantity of each supplement that is sold on a Per Booking or Per Room basis | 

##### Supplement Parameter examples

 | Supplements[]    | SupplementsAdults[SupplementCode] | SupplementsChildren[SupplementCode] | SupplementsCount[SupplementCode] | Supplement Basis | Explantation                                                                              | 
 | -------------    | --------------------------------- | ----------------------------------- | -------------------------------- | ---------------- | ------------                                                                              | 
 | SUPPLEMENT_CODE1 | 1                                 | 0                                   | 0                                | PER PERSON       | Booking Basis is PP so Adults and Children params are used, Count param is ignored        | 
 | SUPPLEMENT_CODE2 | 1                                 | 1                                   | 0                                | PER PERSON       | Booking Basis is PP so Adults and Children params are used, Count param is ignored        | 
 | SUPPLEMENT_CODE3 | 0                                 | 0                                   | 1                                | PER BOOKING      | Booking Basis is PB so Adults and Children params are used, Count param is ignored        | 
 | SUPPLEMENT_CODE4 | 0                                 | 0                                   | 1                                | PER ROOM         | Booking Basis is PP so Count param is used and the Adults and Children params are ignored | 
 | SUPPLEMENT_CODE5 | 0                                 | 0                                   | 2                                | PER ROOM         | Booking Basis is PP so Count param is used and the Adults and Children params are ignored | 

##### The same data as above expressed in the way that it should be submitted

 | Field                                   | Value              | 
 | -----                                   | -----              | 
 | Supplements[]                           | 'SUPPLEMENT_CODE1' | 
 | Supplements[]                           | 'SUPPLEMENT_CODE2' | 
 | Supplements[]                           | 'SUPPLEMENT_CODE3' | 
 | Supplements[]                           | 'SUPPLEMENT_CODE4' | 
 | Supplements[]                           | 'SUPPLEMENT_CODE5' | 
 | Field                                   | Value              | 
 | SupplementsAdults['SUPPLEMENT_CODE1']   | 1                  | 
 | SupplementsAdults['SUPPLEMENT_CODE2']   | 1                  | 
 | SupplementsAdults['SUPPLEMENT_CODE3']   | 0                  | 
 | SupplementsAdults['SUPPLEMENT_CODE4']   | 0                  | 
 | SupplementsAdults['SUPPLEMENT_CODE5']   | 0                  | 
 | Field                                   | Value              | 
 | SupplementsChildren['SUPPLEMENT_CODE1'] | 0                  | 
 | SupplementsChildren['SUPPLEMENT_CODE2'] | 1                  | 
 | SupplementsChildren['SUPPLEMENT_CODE3'] | 0                  | 
 | SupplementsChildren['SUPPLEMENT_CODE4'] | 0                  | 
 | SupplementsChildren['SUPPLEMENT_CODE5'] | 0                  | 
 | Field                                   | Value              | 
 | SupplementsCount['SUPPLEMENT_CODE1']    | 0                  | 
 | SupplementsCount['SUPPLEMENT_CODE2']    | 0                  | 
 | SupplementsCount['SUPPLEMENT_CODE3']    | 1                  | 
 | SupplementsCount['SUPPLEMENT_CODE4']    | 1                  | 
 | SupplementsCount['SUPPLEMENT_CODE5']    | 2                  | 


#### Terms and conditions Holiday Extras GmbH, Munich

Please us the following link to display terms and conditions to the end consumer or agent. http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
For further languages please change /de-hx/ into nl-hx, it-hex, en-hx, pt-hx, fr-hx, es-hx.

PriceCheckFlag and PriceCheckPrice are used to ensure that the price you have displayed to the customer at the availability stage will be booked at that price.  When you submit the request the price posted here will be compared to the live price in the system.  If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price.  At this time the system will also update any availability cache so subsequent availability requests will then have the updated price. 

[http://api.holidayextras.co.uk/terminal/LGW?key=mytestkey](http://api.holidayextras.co.uk/terminal/LGW?key=mytestkey)

#### Agent

 | Name                  | Data Type     | Format      | Required             | 
 | ----                  | ---------     | ------      | --------             | 
 | ABTANumber            | String        | [A-Z0-9]{5} | Y                    | 
 | Password              | String        | [A-Z0-9]{5} | N                    | 
 | Initials              | String        | [A-Z]{3}    | N                    | 
 | ArrivalDate           | Date          | YYYY-MM-DD  | Y                    | 
 | ArrivalTime           | Time          | HHMM        | Y                    | 
 | DepartDate            | Date          | YYYY-MM-DD  | Y                    | 
 | DepartTime            | Time          | HHMM        | Y                    | 
 | Registration          | String        |             | N §                 | 
 | CarMake               | String        |             | N §                 | 
 | CarModel              | String        |             | N §                 | 
 | CarColour             | String        |             | N §                 | 
 | OutFlight             | String        |             | N §                 | 
 | ReturnFlight          | String        |             | N §                 | 
 | OutTerminal           | String        |             | N §                 | 
 | ReturnTerminal        | String        |             | N§                  | 
 | MobileNum             | String        |             | N §                 | 
 | Destination           | String        |             | N §                 | 
 | Title                 | String        |             | Y                    | 
 | Initial               | String        | [A-Z]{1}    | Y                    | 
 | Surname               | String        |             | Y                    | 
 | Address[]             | String        |             | Y (can be set as NA) | 
 | Town                  | String        |             | Y (can be set as NA) | 
 | County                | String        |             | Y (can be set as NA) | 
 | PostCode              | String        |             | Y (can be set as NA) | 
 | Email                 | String        |             | Y (can be set as NA) | 
 | NumberOfPax           | Number        |             | Y                    | 
 | Waiver                | Boolean       | 1/0         | N (default N)        | 
 | key                   | String        |             | Y                    | 
 | token                 | String        | [0-9]{9}    | Y                    | 
 | Supplements[]         | String Array  |             | N                    | 
 | SupplementsAdults[]   | Integer Array |             | N                    | 
 | SupplementsChildren[] | Integer Array |             | N                    | 
 | SupplementsCount[]    | Integer Array |             | N                    | 
 | System                | String        | ABC/ABG     | N                    | 
 | PriceCheckFlag        | String        | Y           | Y                    | 
 | PriceCheckPrice       | Value         | 12.34       | Y                    | 

§ The fields required by the carpark are returned in the availability request, in the `<RequestFlags>` element.

Address, County, Town, PostCode and Email can be hardcoded as NA to enable booking


For European products (system=ABG) please disregard keys "registration to destination" and use the keys "Europe CarParkDetailsFlag in section Availability at airport/car park.


Terminal - Must comprise of airport code + identifier. Eg LGW2, LHR5 etc. If in doubt, the terminals (where appropriate) are available on a per location basis, from here (change the airport code for different airports):

[http://api.holidayextras.co.uk/terminal/LGW?key=mytestkey](http://api.holidayextras.co.uk/terminal/LGW?key=mytestkey)

System is required to be set to ABG if you are processing bookings for European products and taking payment in Euros.
Default is ABC for UK/GBP - it is not mandatory to send if you are processing bookings for UK based products or products being processed in GBP.

PriceCheckFlag and PriceCheckPrice are used to ensure that the price you have displayed to the customer at the availability stage will be booked at that price.  When you submit the request the price posted here will be compared to the live price in the system.  If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price.  At this time the system will also update any availability cache so subsequent availability requests will then have the updated price. 




### Request

#### Intermediary

```

POST /sandbox/v1/carpark/LGV4 HTTP/1.1

Host: api.holidayextras.co.uk

...

Accept-Language: en-us,en;q=0.5


ABTANumber=**HXAGENTCODE**&Address%5B%5D=99%20Test%20St&ArrivalDate=2008-05-01&ArrivalTime=1200&CardHolder=Mr%20T%20Test&CardToken=12341234123412341234&Confirmation=Y&County=Testshire&DataProtection=Y&DayPhone=9999%209999&DepartDate=2008-05-08&DepartTime=1800&Email=test%40test.com&ExpiryDate=1208&Initial=T&NumberOfPax=2&PostCode=T1%201TT&Surname=Test&Title=Mr&Town=Testchester&key=**HXAPIKEY**&token=123456789


```



#### Agent

```
POST /sandbox/v1/carpark/LGW2 HTTP/1.1

Host: api.holidayextras.co.uk

...

Content-Type: application/x-www-form-urlencoded

Content-Length: 198


ABTANumber=**HXAGENTCODE**&ArrivalDate=2008-09-20&ArrivalTime=1125&DepartDate=2008-09-28&DepartTime=1135&Initial=T&Initials=BJT&NumberOfPax=2&Password=**HXAGENTPASSWORD**&Surname=Test&Title=Mr&key=**HXAPIKEY**&token=000001234
```










### Reply

#### Intermediary

```xml

<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="4" Result="OK">
	<Booking>
		<BookingRef>A8GBV</BookingRef>
		<MoreInfoURL>/sandbox/v1/booking/A8GBV</MoreInfoURL>
	</Booking>
	<Pricing>
		<AmountPaid>91.80</AmountPaid>
		<CCardSurchargePercent>2.00</CCardSurchargePercent>
		<CCardSurchargeAmount>1.80</CCardSurchargeAmount>
	</Pricing>
	<API_Header>
		<Request>
			<Address>1 Test Street</Address>
			<ArrivalDate>2008-09-20</ArrivalDate>
			<ArrivalTime>1125</ArrivalTime>
			<CardHolder>T Test</CardHolder>
			<CardToken>1234123412341234</CardToken>
			<County>Test</County>
			<DataProtection>N</DataProtection>
			<DayPhone>01303 222222</DayPhone>
			<DepartDate>2008-09-28</DepartDate>
			<DepartTime>1135</DepartTime>
			<Email>tommo245@gmail.com</Email>
			<ExpiryDate>2008-07-21</ExpiryDate>
			<Initial>T</Initial>
			<NumberOfPax>2</NumberOfPax>
			<PostCode>CT203RP</PostCode>
			<Surname>Test</Surname>
			<Title>Mr</Title>
			<Town>Test</Town>
			<key>mytestkey</key>
			<token>000001234</token>
			<v>1</v>
		</Request>
	</API_Header>
	<CarPark>
		<TotalPrice>90.00</TotalPrice>
		<ArrivalDate>2008-09-20</ArrivalDate>
		<DepartDate>2008-09-28</DepartDate>
		<ArrivalTime>1125</ArrivalTime>
		<DepartTime>1135</DepartTime>
		<Duration>8</Duration>
		<NumberOfPax>2</NumberOfPax>
		<Code>LGW2</Code>
		<Name>Long Stay</Name>
		<Filter>
			<on_airport>1</on_airport>
			<terminal>1</terminal>
		</Filter>
		<BookingURL>/sandbox/v1/carpark/LGW2</BookingURL>
		<MoreInfoURL>/sandbox/v1/product/LGW2</MoreInfoURL>
	</CarPark>
</API_Reply>


```

#### Agent

```xml

<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="5" Result="OK">
	<Booking>
		<BookingRef>A8GBW</BookingRef>
		<AgentComm>13.50-</AgentComm>
		<VATonComm>2.01-</VATonComm>
	</Booking>
	<API_Header>
		<Request>
			<ArrivalDate>2008-09-20</ArrivalDate>
			<ArrivalTime>1125</ArrivalTime>
			<DepartDate>2008-09-28</DepartDate>
			<DepartTime>1135</DepartTime>
			<Initial>T</Initial>
			<NumberOfPax>2</NumberOfPax>
			<Surname>Test</Surname>
			<Title>Mr</Title>
			<key>mytestkey</key>
			<token>000001234</token>
			<ABTANumber>FOO</ABTANumber>
			<Password>FOO</Password>
			<Initials>BJT</Initials>
			<v>1</v>
		</Request>
	</API_Header>
	<CarPark>
		<TotalPrice>90.00</TotalPrice>
		<ArrivalDate>2008-09-20</ArrivalDate>
		<DepartDate>2008-09-28</DepartDate>
		<ArrivalTime>1125</ArrivalTime>
		<DepartTime>1135</DepartTime>
		<Duration>8</Duration>
		<NumberOfPax>2</NumberOfPax>
		<Code>LGW2</Code>
		<Name>Long Stay</Name>
		<Filter>
			<on_airport>1</on_airport>
			<terminal>1</terminal>
		</Filter>
		<BookingURL>/sandbox/v1/carpark/LGW2</BookingURL>
		<MoreInfoURL>/sandbox/v1/product/LGW2</MoreInfoURL>
	</CarPark>
</API_Reply>

```


### Fields Explained

#### API_Header/Request/DataProtection

Indicates whether customer has opted to receive Holiday Extras offers.

Y = opted OUT ie data is protected
N = opted IN

#### Booking/MoreInfoURL

In this context a link to view the booking details.

#### CarPark/MoreInfoURL

Product library information about the car park.

#### Booking/AgentComm

The amount of commission earned on the booking.

#### Booking/VATonComm

VAT payable on the commission.

