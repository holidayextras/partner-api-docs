---

---

# Nutzerkennung

Jede Anfrage bei **HXAPI**, sei es nach Verfügbarkeit oder um eine Buchung zu machen, muss eine gültige Nutzerkennung enthalten. Ihre Anwendung sollte für jeden Nutzer, der eine Verfügbarkeitsanfrage stellt, eine neue Nutzerkennung erhalten. Sobald eine Nutzer eine Buchung gemacht hat, sollte die Nutzerkennung **nicht weiter verwendet werden**.

Dies ist nicht als Methode gedacht, um wiederkehrende Nutzer zu identifizieren. Wenn Sie solch eine Funktion benötigen, sollte Ihre Anwendung das separat handhaben.


## Methode

GET







## Parameter

 | Name | Data Type | Required | 
 | ---- | --------- | -------- | 
 | key  | String    | Y        | 



## Anfrage

```
http://api.holidayextras.co.uk/api/v1/usertoken?key=mytestkey
```





## Antwort


```xml
<?xml version="1.0" ?>
<API_Reply>
  <Token>000015778</Token>
  <BookingURL>/api/v1</BookingURL>
</API_Reply>
```


