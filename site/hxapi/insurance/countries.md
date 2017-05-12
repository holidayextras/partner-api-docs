---

---

# Insurance countries





## /insurancecountries/foo

Where **foo** is the [ country code](index).



### Method

GET



### Parameters

 | Name  | Format | Required | 
 | ----  | ------ | -------- | 
 | token | String | N        | 
 | key   | String | Y        | 




### Request (example 1)

```
http://api.holidayextras.co.uk/v1/insurancecountries?token=000015778&key=mytestkey
```










### Reply (example 1)

```xml
<API_Reply>
  <country>Albania</country>
  <country>Andorra</country>
  <country>Armenia</country>
  ...
  <country>United Kingdom</country>
  <country>Vatican City</country>
  <country>Yugoslavia (Former)</country>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <token>000015778</token>
    </Request>
  </API_Header>
</API_Reply></code>
