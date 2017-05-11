---

---

# Übersicht


## Was ist HXAPI?

**HXAPI** macht es möglich, programmatisch mit dem Holiday Extras Reservations- und Informationssystem zu agieren.

**HXAPI** ist besser als das frühere [XML feed](http://www.holidayextras.co.uk/affiliates/xmlintro.html) und garantiert Live-Zugang zu unserer Product Library. Mit **HXAPI** kann man Produkte in den Buchungsablauf einbinden, mit dem Vorteil, dass der Kunde auf der Seite bleibt und nur eine Transaktion durchgeführt werden muss.

**HXAPI** kann sowohl mit einem Intermediary als auch Retail Konto durchgeführt werden.

Generell hat der Prozessablauf drei grundlegende Anfragen:


 1.  **Availability** - Verfügbarkeit
 2.  **Product library** - Detaillierte Informationen zu Produkten.
 3.  **Booking** - Buchung

Die erforderlichen Felder für die Anfrage hängen vom Produkt ab.



## Was beinhaltet eine Anfrage?

**HXAPI** wurde nach den REST Design Vorgaben erstellt. Das bedeutet, dass alles in Standard-HTTP erstellt wird, genau wie ein Web Browser. Komplizierte Protokolle existieren hier nicht, spezielle Kenntnisse vom Programmierteam sind nicht erforderlich. Wer mehr über das REST Design wissen will, kann [[https://en.wikipedia.org/wiki/Representational_state_transfer
 | hier]] nachlesen - allerdings werden dabei einige Programmierkenntnisse vorausgesetzt.
 | --------------------------------------------------------------------------------------

Die Anwendung sendet Befehle in HTTP und erhält eine Antwort darauf. Die verwendete HTTP Methode bestimmt die Art der Handlung.

 1.  **GET** Die gebräuchlichste Anfrage, sie erfragt Informationen von der angegebenen URL (z.B. eine Verfügbarkeitsanfrage oder von der Produktbibliothek).
 2.  **POST** Diese Anfrage erstellt etwas Neues, meistens eine Buchung.

Die automatische Antwort von **HXML** ist XML aber es sind auch andere Formate verfügbar (YML, CSV, TXT, JSON). Wie man das Format detaillierter bestimmt, ist in der [technischen Dokumentation](/intro) zu finden.







## Nutzungseinschränkungen

Wir überprüfen die Nutzung von HXAPI und bitten darum, dass alle Anwendungen verantwortungsvoll genutzt werden. Bei jeder Anwendung, die ein Volumen an Anfragen produziert, welches wir für exzessiv halten, wird das Konto gesperrt.






## Die ersten Schritte?

Um uns bezüglich HXAPI zu kontaktieren bitte eine E-Mail an <sales@holidayextras.com> schicken oder in der [technischen Dokumentation](/intro) nachschauen.
