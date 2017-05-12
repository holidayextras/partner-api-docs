---

---

# Location


## Methode

GET






## Parameter

 | Name | Data Type | Required | 
 | ---- | --------- | -------- | 
 | key  | Number    | Y        | 




## Anfrage

```
http://api.holidayextras.co.uk/sandbox/v1/location?key=mytestkey
```







## Antwort


```xml
<?xml version="1.0" ?>
<API_Reply>
  <Product>
    <Code>ABZ</Code>
    <Name>Aberdeen</Name>
    <MoreInfoURL>/sandbox/v1/product/ABZ</MoreInfoURL>
    <Type>airport</Type>
  </Product>
  <Product>
    <Code>BFS</Code>
    <Name>Belfast</Name>
    <MoreInfoURL>/sandbox/v1/product/BFS</MoreInfoURL>
    <Type>airport</Type>
  </Product>
  <Product>
    <Code>BHX</Code>
    <Name>Birmingham</Name>
    <MoreInfoURL>/sandbox/v1/product/BHX</MoreInfoURL>
    <Type>airport</Type>
  </Product>
  .
  .
  .
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>
```


