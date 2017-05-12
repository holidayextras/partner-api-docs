---

---

#  Was Sie brauchen 

Welche Platform und Programmiersprache Sie benutzen, um mit **HXAPI** zu interagieren, liegt bei Ihnen. Wir gehen davon aus, dass es in den häufigsten Fällen eine Web Anwendung ist, welche in PHP, Ruby o.ä. geschrieben ist. Jedoch könnten Sie **HXAPI** auch gleichermaßen per Mobiltelefon-Anwendung oder Internet Terminal verwenden.

Die einzigen Vorraussetzungen ist die Möglichkeit


*  HTTP Anfragen zu machen

*  XML/JSON/csv/text-Dateien zu parsen

# REST

**HXAPI** akzeptiert [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) Anfragen. Jede Anfrage wird über **HTTP** unter Verwendung der Standardverfahren gemacht. Für den Datenabruf benutzen Sie immer das GET Verfahren. Um eine Buchung zu machen (und demzufolge eine neue Quelle zu erstellen), muss das POST Verfahren verwendet werden.

http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW2

Eine URL kann, je nach Zugangsverfahren, unterschiedliche Funktionen haben. Die obige URL als Beispiel, liefert als GET Informationen über Verfügbarkeiten und Preise für den Parkplatz im gewählten Zeitraum. Wenn mit den korrekten Parametern "posted to", wird eine Buchung bei eben diesem Parkplatz gemacht und ein Link geliefert, unter dem Sie die Buchung einsehen können.

# Server Adresse

Immer wenn Sie neuen Code schreiben oder bestehende Funktionalität verändern, müssen Sie den Development Server (sandbox) verwenden. Die erhaltenen Daten sind nicht "genauso live", aber das Format und die Struktur sind gleich. Falls Sie das nicht tun, beeinflussen Sie Metriken, wie zum Beispiel Conversion Rates, und natürlich werden alle gemachten Buchungen live sein.

Der nötige Ablauf, um von Development zu Live zu gelangen, ist [hier](golive) verdeutlicht.

Development URL: http://api.holidayextras.co.uk/sandbox/

Live URL: http://api.holidayextras.co.uk/

# Die ersten Schritte

Der einfachste Weg mit **HXAPI** zu beginnen, ist in einem Browser einige HTTP Anfragen zu machen (um die Header zu sehen) oder programmatisch mit CURL. [CURL Download](http://curl.haxx.se/download.html)

Zunächst eine Anfrage nach Parkverfügbarkeiten:

```
curl "http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW?ArrivalDate=20Jan09&ArrivalTime=1200&DepartDate=27Jan09&DepartTime=1600&token=000015778&key=mytestkey"
```
Ein weiteres Beispiel - dieses fragt die Productbibliothek nach einem der in der Suche erhaltenen Parkplätze.
```
curl "http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite?token=000015778&key=mytestkey"
```
Die bisherigen Beispiele haben XML geliefert - dies ist das Default Format. Sie können auch nach dem Output als Javascript Objekt fragen, indem Sie die Dateikennung auf ".js" stellen.
```
curl "http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW.js?ArrivalDate=20Jan09&ArrivalTime=1200&DepartDate=27Jan09&DepartTime=1600&token=000015778&key=mytestkey"
curl "http://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey"
```

# Ergebnis Formate

**HXAPI** kann Daten in zwei verschiedenen Formaten liefern. Das Default Format ist XML. Um das Format explizit zu spezifizieren, fügen Sie den Dateikennung and die gewünschte Quelle an.


*  .xml (Default, falls nicht spezifiziert)

*  .js

*  .csv - (No longer supported - as from Aug 16)

*  .txt - (No longer supported - as from Aug 16)

http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite?key=mytestkey

ist das gleiche wie

http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.xml?key=mytestkey

Dieselbe Anfrage mit Ergebnissen in Javascript

http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.js?key=mytestkey

# Anwendungsschlüssel

Jeder Partner, der **HXAPI** nutzt, erhält einen **Anwendungsschlüssel** zur Identifikation. Bei allen Anfragen muss dieser Schlüssel benutzt werden, damit diese erfolgreich sind. Andernfalls tritt ein Fehler auf.

Den Anwendungsschlüssel werden Sie von Ihrem Account Manager erhalten. Falls Sie noch keinen Anwendungsschlüssel erhalten haben, schicken Sie bitte eine E-Mail an <sales@holidayextras.com>.

Ihr Anwendungsschlüssel ersetzt **nicht** Ihren Holiday Extras Agent Code - damit wir Buchungen nachverfolgen können, müssen Sie Ihren Holiday Extras Agent Code angeben, anderenfalls kann Ihnen nicht die korrekte Provision zugeschrieben werden.

Anfragehöchstgrenzen gelten auf einer pro Schlüssel-Basis. Die Grenzen können angeglichen werden, falls sie sich als zu einschränkend erweisen, allerdings müssen wir die API vor Anwendungen schützen, die eine übertriebene Anzahl an Anfragen stellen. Es gibt verschiedene Grenzen für die Anzahl der erlaubten Anfragen pro Minute, pro Stunde und pro Tag. Wir behalten uns das Recht vor diese Grenzen zu verändern.

Jeder unsachgemäße Gebrauch oder Missbrauch von **HXAPI** kann zu einer Sperrung oder Einschränkung des Anwendungsschlüssels führen.

# Agent Code

Zusätzlich zu Ihrem Anwendungsschlüssel müssen Sie auch Ihren Holiday Extras Agent Code angeben. Agents (die Zahlungen selbst annehmen) müssen ihr Passwort senden. Partner haben kein Passwort und sollten folglich keines senden.

Sie können mehrere Anwendungen haben, die den gleichen Agent Code verwenden, allerdings **müssen Sie getrennte Anwendungsschlüssel für jede einzelne Anwendung benutzen**.

# Versionen

Immer wenn es eine bedeutende Änderung oder Verbesserung des API gibt, erhöhen wir die Versionsnummer. Falls Sie eine vorherige Version weiter nutzen, wird diese für eine bestimmte Zeitspanne (ca. 3 Monate) auch weiterhin funktionieren wie zuvor, allerdings wird es uns nicht mehr möglich sein diese zu unterstützen. Nach Ablauf der Zeitspanne ist es möglich, dass die Version entfernt wird oder das Ergebnisse/Antworden blockiert werden.

#  Nutzerkennung

Um einzelne Nutzer unter Verfügbarkeits- und Buchungsanfragen zu identifizieren, stellt **HXAPI** Nutzerkennungen zur Verfügung. Anwendungen müssen für jeden Nutzer auf ihrer Seite eine neue Nutzerkennung anfordern. Sobald diese erhalten wurde, wird sie als Parameter jeder Folgeanfrage weitergereicht.

Der Anforderung einer Nutzerkennung **muss** eine Verfügbarkeitsanfrage vorausgehen. Eine Verfügbarkeitsanfrage wird ohne gültige Kennung nicht funktionieren. Für Produktbibliotheksanfragen wird keine Nutzerkennung benötigt. Falls Sie über eine Nutzerkennung verfügen, sollten Sie diese aber dennoch in Ihre Anfrage einfügen, um die Tracking Usage zu unterstützen.

Diese Methode dient **nicht** dazu, wiederkehrende Nutzer nachzuverfolgen (wie zum Beispiel diese in einem Cookie zu speichen und zu verwenden, wenn die Nutzer zu einem späteren Zeitpunkt zurückkehren). Ihre Anmeldung sollte User Tracking gesondert verwenden, wenn Sie es wünschen. Die Kennung verbindet lediglich Verfügbarkeitsanfragen mit Buchungen für einen bestimmten Nutzer während einer bestimmten Sitzung.

# Ablauf einer Anfrage

Das üblichste Szenario oder Anfragenabfolge bei HXAPI wäre:

 1.  Nutzerkennung anfordern
 2.  Verfügbarkeitsanfrage bei gewähltem Flughafen und anderen Parametern inklusive Nutzerkennung
 3.  (optional) für verfügbare Produkte Informationen anfordern
 4.  für das ausgewählte Produkt eine Buchung durchführen

# Stornierung einer Buchung

Buchungen, die auf dem Test Server gemacht wurden, können mit einer Unsinns-Kreditkartennummer (zum Beispiel 4111111111111111) gemacht werden. Wenn Sie Ihre Anfrage jedoch an unseren Live Server richten, müssen Sie eine gültige Kreditkarte verwenden. Außerdem sind diese Buchungen live und müssen storniert werden.

Bitte stornieren Sie Buchungen **nicht** mittels eines Anrufes in unserem Callcenter oder der Online-Stornierungs-Interface auf [www.holidayextras.com](http://www.holidayextras.com). Kreditkartengebühren werden **nicht erstattet**, wenn Sie einen dieser Wege wählen. Schicken Sie die Buchungsnummern an <sales@holidayextras.com> und **alle Gebühren werden erstattet**.

# Anfragen 

Klicken Sie auf die unten stehenden Links um ausführlichere Details der für jede Anfrage benötigten Parameter zu erhalten.

[Nutzerkennung](hxapi/usertoken) - Kennung, die Suchanfragen und Buchungen von Kunden verbindet.

[Produktbibliothek](hxapi/productlibrary) - Alle statistischen Daten, die mit unseren Produkten verbunden sind.

[Parken](hxapi/parking) - Verfügbarkeits- und Buchungsanfragen bei Parkplätzen.

[Location](hxapi/locations) - Die Liste gültiger Locations abfragen.

[Terminal](hxapi/terminal) - Liste der Terminals bei einer gewählten Location.
