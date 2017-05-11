---

---

# Eine Parkplatz-Buchung machen

Dies muss POST sein, da Sie eine Buchung vornehmen. Sie muss über HTTPS erfolgen. Vermittler senden Kreditkarteninformationen, Agents senden ihre Login Angaben, folglich wird HTTPS in beiden Fällen benötigt.

Wenn Sie das Feld mit der ABTANumber (für den Agent Code) nicht senden, wird Ihre Buchung nicht auf Ihren Agent Code zurückverfolgt werden. Bei Buchungen von Agents wird das Feld für das Passwort wird ebenfalls benötigt, Vermittler haben kein Passwort.


## /carpark/foo

dort, wo foo der Parkplatz Code ist

z.B. /carpark/LHR2


### Methode

POST














































### Parameter

#### Vermittler

 | Name           | Data Type | Format       | Required | 
 | ----           | --------- | ------       | -------- | 
 | ABTANumber     | String    | [A-Z0-9]{5}  | Y        | 
 | Initials       | String    | [A-Z]{3}     | N        | 
 | ArrivalDate    | Date      | YYYY-MM-DD   | Y        | 
 | ArrivalTime    | Time      | HHMM         | Y        | 
 | DepartDate     | Date      | YYYY-MM-DD   | Y        | 
 | DepartTime     | Time      | HHMM         | Y        | 
 | Registration   |           | N §         |         
 | CarMake        | String    |              | N §     | 
 | CarModel       | String    |              | N §     | 
 | CarColour      | String    |              | N §     | 
 | OutFlight      | String    |              | N §     | 
 | ReturnFlight   | String    |              | N §     | 
 | OutTerminal    | String    |              | N §     | 
 | ReturnTerminal | String    |              | N §     | 
 | MobileNum      | String    |              | N §     | 
 | Destination    | String    |              | N §     | 
 | Title          | String    |              | Y        | 
 | Initial        | String    | [A-Z]{1}     | Y        | 
 | Surname        | String    |              | Y        | 
 | Address[]      | String    |              | Y        | 
 | Town           | String    |              | Y        | 
 | County         | String    |              | Y        | 
 | NumberOfPax    | Number    |              | Y        | 
 | PostCode       | String    |              | Y        | 
 | DayPhone       | String    |              | Y        | 
 | Email          | String    |              | Y        | 
 | CardHolder     | String    |              | Y        | 
 | CardNumber     | String    | [0-9]{14-16} | Y        | 
 | ExpiryDate     | Date      | MMYY         | Y        | 
 | StartDate      | Date      | MMYY         | N*       | 
 | IssueNumber    | Integer   |              | N*       | 
 | DataProtection | String    | Y/N          | Y+       | 
 | key            | String    |              | Y        | 
 | token          | String    | [0-9]{9}     | Y        | 
 | system         | String    | DE           | Y        | 


* Nur bei Zahlung mit Debit-Karte, falls die Karte eine solche hat.

+ DataProtection Feld - Lehnt es der Kunde ab, Angebote von Holiday Extras zu erhalten. Y = Ja, die Daten sind geschützt N = Wird Angebote erhalten.

§ Die vom Parkplatzbetreiber benötigten Datenfelder werden in der Verfügbarkeitsanfrage im `<RequestFlags>` Element angezeigt.

#### Agent

 | Name           | Data Type | Format      | Required | 
 | ----           | --------- | ------      | -------- | 
 | ABTANumber     | String    | [A-Z0-9]{5} | Y        | 
 | Password       | String    | [A-Z0-9]{5} | N        | 
 | Initials       | String    | [A-Z]{3}    | N        | 
 | ArrivalDate    | Date      | YYYY-MM-DD  | Y        | 
 | ArrivalTime    | Time      | HHMM        | Y        | 
 | DepartDate     | Date      | YYYY-MM-DD  | Y        | 
 | DepartTime     | Time      | HHMM        | Y        | 
 | Registration   |           | N §        |         
 | CarMake        | String    |             | N §     | 
 | CarModel       | String    |             | N §     | 
 | CarColour      | String    |             | N §     | 
 | OutFlight      | String    |             | N §     | 
 | ReturnFlight   | String    |             | N §     | 
 | OutTerminal    | String    |             | N §     | 
 | ReturnTerminal | String    |             | N §     | 
 | MobileNum      | String    |             | N §     | 
 | Destination    | String    |             | N §     | 
 | Title          | String    |             | Y        | 
 | Initial        | String    | [A-Z]{1}    | Y        | 
 | Surname        | String    |             | Y        | 
 | NumberOfPax    | Number    |             | Y        | 
 | key            | String    |             | Y        | 
 | token          | String    | [0-9]{9}    | Y        | 
 | system         | String    | DE          | Y        | 

§ Die vom Parkplatzbetreiber benötigten Datenfelder werden in der Verfügbarkeitsanfrage im `<RequestFlags>` Element angezeigt.






### Anfrage

#### Vermittler

```

POST /sandbox/v1/carpark/LGV4 HTTP/1.1

Host: api.holidayextras.co.uk

User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13

Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5

Accept-Language: en-us,en;q=0.5

Address%5B%5D=99%20Test%20St&ArrivalDate=2008-05-01&ArrivalTime=1200&CardHolder=Mr%20T%20Test&CardNumber=4111111111111111&Confirmation=Y&County=Testshire&DataProtection=Y&DayPhone=9999%209999&DepartDate=2008-05-08&DepartTime=1800&Email=test%40test.com&ExpiryDate=1208&Initial=T&NumberOfPax=2&PostCode=T1%201TT&Surname=Test&Title=Mr&Town=Testchester&key=mytestkey&token=123456789


```



#### Agent

```
POST /sandbox/v1/carpark/LGW2 HTTP/1.1

Host: api.holidayextras.co.uk

User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-GB; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16

Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5

Accept-Language: en-gb,en;q=0.5

Accept-Encoding: gzip,deflate

Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7

Keep-Alive: 300

Connection: keep-alive

Cookie: s_sess=%20s_cc%3Dtrue%3B%20s_sq%3D%3B

Cache-Control: max-age=0

Content-Type: application/x-www-form-urlencoded

Content-Length: 198



ABTANumber=FOO&ArrivalDate=2008-09-20&ArrivalTime=1125&DepartDate=2008-09-28&DepartTime=1135&Initial=T&Initials=BJT&NumberOfPax=2&Password=FOO&Surname=Test&Title=Mr&key=mytestkey&token=000001234
```









### Antwort

#### Vermittler

```xml

<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="4" Result="OK">
	<Booking>
		<BookingRef>A8GBV</BookingRef>
		<MoreInfoURL>/api/sandbox/v1/booking/A8GBV</MoreInfoURL>
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
			<CardNumber>4111111111111111</CardNumber>
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
		<BookingURL>/api/sandbox/v1/carpark/LGW2</BookingURL>
		<MoreInfoURL>/api/sandbox/v1/product/LGW2</MoreInfoURL>
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
		<BookingURL>/api/sandbox/v1/carpark/LGW2</BookingURL>
		<MoreInfoURL>/api/sandbox/v1/product/LGW2</MoreInfoURL>
	</CarPark>
</API_Reply>

```








### Erläuterung der Datenfelder

#### API_Header/Request/DataProtection

Zeigt an, ob der Kunde damit einverstanden ist Angebote von Holiday Extras zu erhalten.

Y = NICHT einverstanden d.h. die Daten sind geschützt
N = einverstanden

#### Booking/MoreInfoURL

In diesem Zusammenhang ein Link um die Buchungsdetails anzuzeigen.

#### CarPark/MoreInfoURL

Informationen der Produktbibliothek für diesen Parkplatz.

#### Booking/AgentComm

Der Betrag an Provision, der bei der Buchung verdient wurde?

#### Booking/VATonComm

Mehrwertsteuer, die auf die Provision gezahlt werden muss.



### XSD

Folgt.

