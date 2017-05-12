---

---

# Hotel Booking

As with all bookings, this must be a POST and it must be made over HTTPS. Intermediaries will be sending credit card information, Agents will send their login details so HTTPS is required in both instances.

If you do not send the ABTANumber field then your booking will not be tracked to your agent code. For agent bookings, the Password field is also required, intermediaries do not have a password.

To retrieve all details about the booking, perform a [GET request to view the booking](/hxapi/viewamendcancel) at the location specified in `<MoreInfoURL>`.

Currently, we can only accept 2 rooms per booking. If the customer needs more, you will need to make multiple requests. If an intermediary account, this would lead to multiple transactions on the credit card, and multiple charges, therefore we advise against it. Agents accounts do not suffer from this, they can make multiple requests as they process the payment themselves.

## /hotel/foo

where foo is the selected hotel code

e.g. /hotel/LHRSOF

### Method

POST

### Parameters

 | Name                  | Type          | Format                           | Required (Agents) | Required (Intermediaries) | Notes                                                                                                                                                       | 
 | ----                  | ----          | ------                           | ----------------- | ------------------------- | -----                                                                                                                                                       | 
 | key                   | String        |                                  | Y                 | Y                         |                                                                                                                                                             | 
 | token                 | Integer       | [0-9]{9}                         | Y                 | Y                         |                                                                                                                                                             | 
 | ABTANumber            | String        | [A-Z0-9]{5}                      | Y                 | Y                         |                                                                                                                                                             | 
 | Password              | String        | [A-Z0-9]{5}                      | Y                 | N                         |                                                                                                                                                             | 
 | Initials              | String        | [A-Z]{3}                         | Y                 | N                         | Initials of the agent                                                                                                                                       | 
 | ArrivalDate           | Date          | DDMMMYY                          | Y                 | Y                         |                                                                                                                                                             | 
 | Nights                | Integer       | 1                                | Y                 | Y                         |                                                                                                                                                             | 
 | BoardBasis            | String        | [RO,BB]                          | Y                 | Y                         | for European products F or U                                                                                                                                | 
 | RoomCode              | String        | [roomcode](/hxapi/types/roomcode) | Y                 | Y                         |                                                                                                                                                             | 
 | Adults                | Integer       | [1-5]                            | Y                 | Y                         |                                                                                                                                                             | 
 | Children              | Integer       | [0-4]                            | Y                 | Y                         |                                                                                                                                                             | 
 | Infants               | Integer       | [0,1,2]                          | N                 | N                         |                                                                                                                                                             | 
 | SecondRoomCode        | String        | [roomcode](/hxapi/types/roomcode) | N                 | N                         | not possible for European products                                                                                                                          | 
 | SecondRoomAdults      | Integer       | [1-5]                            | N                 | N                         | not possible for European products                                                                                                                          | 
 | SecondRoomChildren    | Integer       | [0-4]                            | N                 | N                         | not possible for European products                                                                                                                          | 
 | SecondRoomInfants     | Integer       | [0,1,2]                          | N                 | N                         | not possible for European products                                                                                                                          | 
 | ParkingDays           | Integer       | [0,8,15]                         | Y                 | Y                         |                                                                                                                                                             | 
 | CarDropoffTime        | Time          | HHMM                             | Y*                | N                         | *ONLY required if ParkingDays > 0, UK only                                                                                                                  | 
 | CarPickupDate         | Date          | DDMMMYY                          | Y*                | N                         | *ONLY required if ParkingDays > 0 UK only                                                                                                                   | 
 | CarPickupTime         | Time          | HHMM                             | Y*                | N                         | *ONLY required if ParkingDays > 0 UK only                                                                                                                   | 
 | ReturnFlight          | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | TerminalCode          | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | Registration          | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | CarMake               | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | CarModel              | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | CarColour             | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | Title                 | String        |                                  | Y                 | Y                         | titles are: Mr,Mrs,Miss,Ms,Mstr,Mr/s,Dr,Rev,Prof,Sir, Mevr,Dhr                                                                                              | 
 | Initial               | String        | [A-Z]                            | Y                 | Y                         | Initial of the customer's name                                                                                                                              | 
 | Surname               | String        |                                  | Y                 | Y                         |                                                                                                                                                             | 
 | Address[]             | String        |                                  | Y                 | Y                         | Address[0] for first line, [1] for second line, [2] for third line                                                                                          | 
 | Town                  | String        |                                  | Y                 | Y                         |                                                                                                                                                             | 
 | County                | String        |                                  | Y                 | Y                         |                                                                                                                                                             | 
 | Country               | String        |                                  | Y                 | Y                         |                                                                                                                                                             | 
 | Postcode              | String        | UK Postcode                      | Y                 | Y                         |                                                                                                                                                             | 
 | DayPhone              | Phone Number  |                                  | N                 | N                         |                                                                                                                                                             | 
 | EvePhone              | Phone Number  |                                  | N                 | Y                         |                                                                                                                                                             | 
 | Email                 | Email         | Valid email address              | Y                 | Y                         |                                                                                                                                                             | 
 | CustomerRef           | String        |                                  | N                 | N                         |                                                                                                                                                             | 
 | Remarks               | String        |                                  | N                 | N                         | Pass in Remarks for notification such as COT REQUESTED in ROOM                                                                                              | 
 | Waiver                | Boolean       | [1,0]                            | Y                 | Y                         | Assumed 0 if not supplied                                                                                                                                   | 
 | DataProtection        | String        | [Y,N]                            | N                 | N                         | Does the customer consent to receiving offers from Holiday Extras. Y = Yes, will receive offers, N = Customer data is protected. Not required, default is N | 
 | PriceCheckPrice       | Int           | (00)0.00                         | Y                 | Y                         |                                                                                                                                                             | 
 | CardHolder            | String        |                                  | N                 | Y                         |                                                                                                                                                             | 
 | CardNumber            | String        | [0-9]{14-19}                     | N                 | Y                         |                                                                                                                                                             | 
 | CV2                   | Integer       | [0-9]{3}                         | N                 | Y                         |                                                                                                                                                             | 
 | ExpiryDate            | Date          | DDMM                             | N                 | Y                         |                                                                                                                                                             | 
 | StartDate             | Date          | DDMM                             | N                 | N                         |                                                                                                                                                             | 
 | IssueNumber           | Integer       |                                  | N                 | N                         |                                                                                                                                                             | 
 | Supplements[]         | String Array  |                                  | N                 | N                         | See Supplements below                                                                                                                                       | 
 | SupplementsAdults[]   | Integer Array |                                  | N                 | N                         | See Supplements below                                                                                                                                       | 
 | SupplementsChildren[] | Integer Array |                                  | N                 | N                         | See Supplements below                                                                                                                                       | 
 | SupplementsCount[]    | Integer Array |                                  | N                 | N                         | See Supplements below                                                                                                                                       | 
 | System                | String        | ABC/ABG                          | N                 |                          
 | PriceCheckFlag        | String        | Y                                | Y                 |                          
 | PriceCheckPrice       | Value         | 12.34                            | Y                 |                          

+ DataProtection field - Does the customer consent to receiving offers from Holiday Extras. Y = Yes, will receive offers, N = Customer data is protected.

System is required to be set to ABG if you are processing bookings for European products and taking payment in Euros.
Default is ABC for UK/GBP - it is not mandatory to send if you are processing bookings for UK based products or products being processed in GBP.



#### Terms and conditions Holiday Extras GmbH, Munich

Please us the following link to display terms and conditions to the end consumer or agent. http://www.holidayextras.de/images/de-hx/pdf/agb.pdf
For further languages please change /de-hx/ into nl-hx, it-hex, en-hx, pt-hx, fr-hx, es-hx.

PriceCheckFlag and PriceCheckPrice are used to ensure that the price you have displayed to the customer at the availability stage will be booked at that price.  When you submit the request the price posted here will be compared to the live price in the system.  If the price is lower in the system the booking will be made as the customer will benefit from a saving.  If the price has changed and is higher than the price stated on availability, an error will return to explain that the price has increased, the booking can still be made but the customer must confirm that they will pay the higher amount.  You should then resubmit the request changing the PriceCheckPrice with the new price.  At this time the system will also update any availability cache so subsequent availability requests will then have the updated price. 

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

### Reply

```xml

<API_Reply Product="HotelWithParking" RequestCode="5" Result="OK">
	<Booking>
		<BookingRef>A8PBN</BookingRef>
		<MoreInfoURL>/sandbox/v1/booking/A8PBN</MoreInfoURL>
                <AgentComm>7.35-</AgentComm>
                <VATonComm>0.96-</VATonComm>
	</Booking>
	<Itinerary>
		<ArrivalDate>2009-10-15</ArrivalDate>
		<Nights>1</Nights>
		<BoardBasis>RO</BoardBasis>
		<NonSmoking>N</NonSmoking>
		<CarPickupDate>2009-10-22</CarPickupDate>
		<CarDropoffTime>1100</CarDropoffTime>
		<CarPickupTime>1200</CarPickupTime>
		<ParkingDays>15</ParkingDays>
		<ParkingSpaces>1</ParkingSpaces>
		<ReturnFlight>AB123</ReturnFlight>
		<TerminalCode>1</TerminalCode>
		<Code>LHRNOV</Code>
	</Itinerary>
	<Room>
		<Adults>2</Adults>
		<Children>0</Children>
		<Infants>0</Infants>
		<Code>DBL</Code>
	</Room>
	<ClientDetails>
		<Title>MR</Title>
		<Initial>B</Initial>
		<Surname>Test</Surname>
		<Address>4</Address>
		<Address a="2">TEST</Address>
		<Town>TESTTOWN</Town>
		<County>TESTCOUNTY</County>
		<Postcode>CT223PP</Postcode>
		<Country>ENGLAND</Country>
		<EvePhone>01303200202</EvePhone>
		<Email>BEN.THOMPSON@HOLIDAYEXTRAS.COM</Email>
		<Waiver>Y</Waiver>
		<WaiverAmount>5.00</WaiverAmount>
	</ClientDetails>
	<Pricing>
		<WaiverValue/>
	</Pricing>
	<API_Header>
		<Request>
                ...
		</Request>
	</API_Header>
</API_Reply>

```




