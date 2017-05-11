---

---

# Verfügbarkeit am Flughafen








## /carpark/foo

Dort, wo foo der Location (Flughafen) Code ist

z.B. http://api.holidayextras.co.uk/v1/carpark/LHR


### Methode

GET









### Parameter

 | Name        | Type   | Format     | Required | 
 | ----        | ----   | ------     | -------- | 
 | system      | String | DE         | Y        | 
 | ArrivalDate | Date   | YYYY-MM-DD | Y        | 
 | ArrivalTime | Time   | HHSS       | Y        | 
 | DepartDate  | Date   | YYYY-MM-DD | Y        | 
 | DepartTime  | Time   | HHSS       | Y        | 
 | key         | String |            | Y        | 
 | token       | String | [0-9]{9}   | Y        | 







### Anfrage

```html
http://api.holidayextras.co.uk/v1/carpark/FRA?ArrivalDate=2009-05-20&ArrivalTime=1200&DepartDate=2009-05-27&DepartTime=1400&key=mytestkey&token=000001234&system=DE
```
















### Antwort

```xml

<?xml version="1.0" ?>

<API_Reply Product="CarPark" RequestCode="1" Result="OK">
  <CarPark>
    <CarDetails>Y</CarDetails>
    <TotalPrice>53.00</TotalPrice>
    <Name>Airparks Frankfurt Parkplatz</Name>
    <Code>FRA8</Code>
    <Filter>
      <recommended>1</recommended>
      <terminalTerminal1>1</terminalTerminal1>
    </Filter>
    <BookingURL>/v1/carpark/FRA8</BookingURL>
    <MoreInfoURL>/v1/product/FRA8</MoreInfoURL>
  </CarPark>
  <CarPark>
    <CarDetails>Y</CarDetails>
    <TotalPrice>56.00</TotalPrice>
    <Name>Airparks Parkhaus Frankfurt</Name>
    <Code>FRA6</Code>
    <Filter>
      <recommended>1</recommended>
      <terminalTerminal1>1</terminalTerminal1>
    </Filter>
    <BookingURL>/v1/carpark/FRA6</BookingURL>
    <MoreInfoURL>/v1/product/FRA6</MoreInfoURL>
  </CarPark>
  <CarPark>
    <CarDetails>Y</CarDetails>
    <TotalPrice>54.00</TotalPrice>
    <Name>Parkhaus Red Crocodile Frankfurt-Niederrad</Name>
    <Code>FRA5</Code>
    <Filter>
      <terminalTerminal1>1</terminalTerminal1>
    </Filter>
    <BookingURL>/v1/carpark/FRA5</BookingURL>
    <MoreInfoURL>/v1/product/FRA5</MoreInfoURL>
  </CarPark>
  <CarPark>
    <CarDetails>N</CarDetails>
    <TotalPrice>59.00</TotalPrice>
    <Name>Tiefgarage Kelsterbach</Name>
    <Code>FRA1</Code>
    <Filter></Filter>
    <BookingURL>/v1/carpark/FRA1</BookingURL>
    <MoreInfoURL>/v1/product/FRA1</MoreInfoURL>
  </CarPark>
  <CarPark>
    <CarDetails>Y</CarDetails>
    <TotalPrice>46.00</TotalPrice>
    <Name>Platzhirsch Parkhaus</Name>
    <Code>FRAP</Code>
    <Filter>
      <terminalTerminal1>1</terminalTerminal1>
    </Filter>
    <BookingURL>/v1/carpark/FRAP</BookingURL>
    <MoreInfoURL>/v1/product/FRAP</MoreInfoURL>
  </CarPark>
  <API_Header>
    <Request>
      <ArrivalDate>2009-05-20</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <DepartDate>2009-05-27</DepartDate>
      <DepartTime>1400</DepartTime>

      <key>mytestkey</key>
      <token>000001234</token>
      <system>DE</system>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>

```






























### Erläuterung der Datenfelder

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

#### Pricing/CreditCardSurcharge

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

### XSD

Folgt.


