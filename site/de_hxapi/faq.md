---

---

# FAQ



## Wie lautet die Adresse des Development Servers?

http://api.holidayextras.co.uk/sandbox/




## Welches ist die Adresse des Live Servers?

http://api.holidayextras.co.uk/









## Was ist mit Caching?

Wir erwarten, dass viele Anwendungentwickler die Ergebnisse bestimmter Suchen cachen wollen. Es ist zum Beispiel nicht nötig, jedesmal Locations anzufragen. Es ist viel besser, diese lokal abzuspeichern und eine Routine zu erstellen, die in regelmäßigen Abständen beim API die aktuelle Liste erfragt.

Bitte cachen Sie keine Verfügbarkeitsanfragen. Preise können sich unangekündigt ändern und die Allokation kann ablaufen.



## H00x Produktcodes

Diese werden manchmal am Ende von Parkplatzanfragen geliefert. Sie stehen für Hotels mit Parken, die Kunden, welche früh am Morgen abfliegen, als Upsell angeboten werden. Sie sollten diese ignorieren oder <sales@holidayextras.com> kontaktieren, uns Ihren Agent Code mitteilen und dann werden wir diese ausschalten.





## Kreditkartenaufschläge

Agents sollten die Elemente für Kreditkartenaufschläge ignorieren. Jegliche Bearbeitungsgebühren, die auf die Buchungen Ihrer Kunden aufgeschlagen werden, obligen Ihrer Kontrolle.

Vermittler müssen den Kreditkartenaufschlag nach unten stehendem Prinzip kalkulieren.

```
x = ((TotalPrice + CanxWaiver) / 100 ) * CCardSurchargePercent
if( x < CCardSurchargeMin) 
  x = CCardSurchargeMin
else if x > CCardSurchargeMax
  x = CCardSurchargeMax
```




## Sind die angegebenen Preise Netto-Preise oder wurde der Aufschlag bereits addiert?

Der Aufschlag wurde bereits addiert.







## Braucht Holiday Extras meine IP Adresse?

Nein. Wir verwenden eine schwarze Liste für unerwünschten Traffic, davon abgesehen kann jeder, der einen gültigen Schlüssel verwendet, bei **HXAPI** Anfragen machen.




## Wie storniere ich eine Testbuchung?

Sie müssen nur Buchungen stornieren, die auf dem Live Server gemacht wurden. Buchungen, die auf dem Development Server gemacht wurden, müssen nicht storniert werden, es wird keine Zahlung vorgenommen.

Bitte stornieren Sie Buchungen **nicht** mittels eines Anrufes in unserem Callcenter oder der Online-Stornierungs-Interface auf [www.holidayextras.com](http://www.holidayextras.com). Kreditkartengebühren werden **nicht erstattet**, wenn Sie einen dieser Wege wählen. Schicken Sie die Buchungsnummern an <sales@holidayextras.com> und **alle Gebühren werden erstattet**.
