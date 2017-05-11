---

---

# Verfügbarkeit beim Parkplatz








## /carpark/foo

Dort, wo foo der Parkplatz Code ist

z.B. http://api.holidayextras.co.uk/carpark/LHR2


### Methode

GET










### Parameter

 | Name        | Type      | Format     | Required | 
 | ----        | ----      | ------     | -------- | 
 | system      | String    | DE         | Y        | 
 | NumberOfPax | Integer   |            | Y        | 
 | ArrivalDate | Date      | YYYY-MM-DD | Y        | 
 | ArrivalTime | Time 24hr | HHSS       | Y        | 
 | DepartDate  | Date      | YYYY-MM-DD | Y        | 
 | DepartTime  | Time 24hr | HHSS       | Y        | 
 | key         | String    |            | Y        | 
 | token       | String    | [0-9]{9}   | Y        | 






### Anfrage

```html
http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW2?NumberOfPax=2&ArrivalDate=2008-09-20&ArrivalTime=1200&DepartDate=2008-09-20&DepartTime=1400&key=mytestkey&token=000001234
```









### Antwort

```xml
<?xml version="1.0"?>
<API_Reply Product="CarPark" RequestCode="3" Result="OK">
	<Pricing>
		<CCardSurchargePercent>2.00</CCardSurchargePercent>
		<CCardSurchargeAmount>1.50</CCardSurchargeAmount>
		<CancellationWaiver>
			<Waiver>0.50</Waiver>
		</CancellationWaiver>
	</Pricing>
	<API_Header>
		<Request>
			<NumberOfPax>2</NumberOfPax>
			<ArrivalDate>2008-09-20</ArrivalDate>
			<ArrivalTime>1200</ArrivalTime>
			<DepartDate>2008-09-20</DepartDate>
			<DepartTime>1400</DepartTime>
			<key>mytestkey</key>
			<token>000001234</token>
			<v>1</v>
		</Request>
	</API_Header>
	<CarPark>
		<TotalPrice>10.00</TotalPrice>
		<RequestFlags>
			<Registration>1</Registration>
		</RequestFlags>
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


#### Pricing/CreditCardSurcharge

WARTEN AUF KORREKTUR, ZUR ZEIT WERDEN NICHT ALLE 3 ELEMENTE ANGEZEIGT.

Nur relevant für Vermittler, Agents erheben ihre eigenen Gebühren. Dieses Element sollte von Agents ignoriert werden.

Wird aus 3 Elementen gebildet

*  CCardSurchargePercent

*  CCardSurchargeMin

*  CCardSurchargeMax

Die Kreditkartengebühr IS wird auf den TotalPrice + den Cancellation Waiver (siehe unten) angewendet. Um zu verhindern, dass die Gebühr gewisse Grenzen überschreitet, haben wir Minimal- und Maximalschwellenwerte. Falls der Betrag nicht zwischen diesen beiden Ziffern liegt, sollten Sie passenden Schwellenwert benutzen.

Pseudo code
```
x = ((TotalPrice + CanxWaiver) / 100 ) * CCardSurchargePercent
if( x < CCardSurchargeMin) 
  x = CCardSurchargeMin
else if x > CCardSurchargeMax
  x = CCardSurchargeMax
```

#### Pricing/CancellationWaiver

 Wir bieten einen optionalen Cancellation Waiver an. Falls dieser nicht genutzt wird, fällt bei Stornierung eine Gebühr an. Diese Gebühr wird in unseren AGBs beschrieben. Dieser Wert wird per XML gegenwärtig nicht angezeigt.

#### API_Header/Request

**HXAPI** sendet jeden Parameter, den Sie in der vorherigen Anfrage gesendet haben, so, wie Sie ihn gesendet haben. Das geschieht so, damit Ihre Anwendung sich an nichts erinnern muss, was nicht in der XML Antwort vorkam.

#### CarPark/TotalPrice

Der Produktpreis **ONHE** Aufschläge/Gebühren.

#### CarPark/NonDiscPrice

Nicht diskontierter Preis. Einige Agent Codes verwenden einen Diskont, daher bietet dieses Feld die Möglichkeit zum Vergleich.

#### CarPark/RequestFlags

Flags, die auflisten, welche Angaben der Parkplatzbetreiber vom Kuden benötigt. Wenn ein Flag mit einem 'Y' erscheint, sollte Ihre Anwendung das zugehörige Feld/ den zugehörigen Wert in der Buchungsanfrage senden. Diese Angaben sind nicht zwingend erforderlich, die Buchung könnte auch ohne sie gemacht werden, allerdings wird durch vollständige Angaben der Verwaltungsaufwand erheblich reduziert. Es werden nur positive Flags angezeigt. Wenn ein Feld nicht benötigt wird, wird das Feld nicht angezeigt.

Die Flags, die angezeigt werden können, sind:


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

Auf unserer Seite haben wir einen Filtermechanismus, um nur Meet & Greet Produkte etc. anzeigen lassen zu können. Mögliche Werte sind:


*  meet_and_greet

*  recommended

*  on_airport

*  terminal

*  valet_included

*  car_parked_for_you


#### CarPark/BookingURL

Die URL, zu der man gehen muss, um dieses Produkt zu buchen.


#### CarPark/MoreInfoURL

Link zu den Informationen der Produktbibliothek für dieses Produkt.



### XSD

Folgt.
