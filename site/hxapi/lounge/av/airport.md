---

---

# Lounge availability at airport


## /lounge/foo

where foo is the airport code

e.g. http://api.holidayextras.co.uk/v1/lounge/LHR


### Method

GET





### Parameters

 | Name        | Type    | Format      | Required | 
 | ----        | ----    | ------      | -------- | 
 | ABTANumber  | String  | [A-Z0-9]{5} | Y        | 
 | Password    | String  | [A-Z0-9]{5} | N*       | 
 | Initials    | String  | [A-Z]{3}    | N        | 
 | ArrivalDate | Date    | YYYY-MM-DD  | Y        | 
 | ArrivalTime | Time    | HHII        | Y        | 
 | Adults      | Integer |             | Y        | 
 | Children    | Integer |             | N        | 
 | key         | String  |             | Y        | 
 | token       | String  | [0-9]{9}    | Y        | 

*Password field only required for agents. If sending, requests should be made over https.
II = Minutes


### Request


```html
http://api.holidayextras.co.uk/v1/lounge/LHR?ABTANumber=WEB1&ArrivalDate=2016-10-03&ArrivalTime=1200&Adults=2&Children=1&key=mytestkey&token=123456789
```



### Response

```xml
<?xml version="1.0" ?>
<API_Reply Product="Lounge" RequestCode="1" Result="OK">
  <Lounge>
    <Price>57.50</Price>
    <NonDiscPrice>57.50</NonDiscPrice>
    <Name>Holideck (Terminal 4)</Name>
    <Code>LHRKL4</Code>
    <BookingURL>/v1/lounge/LHRKL4</BookingURL>
    <MoreInfoURL>/v1/product/LHRKL4</MoreInfoURL>
  </Lounge>
  <Lounge>
    <Price>59.85</Price>
    <NonDiscPrice>59.85</NonDiscPrice>
    <Name>Servisair Lounge (Terminal 1)</Name>
    <Code>LHRSA1</Code>
    <BookingURL>/v1/lounge/LHRSA1</BookingURL>
    <MoreInfoURL>/v1/product/LHRSA1</MoreInfoURL>
  </Lounge>
  <Lounge>
    <Price>59.85</Price>
    <NonDiscPrice>59.85</NonDiscPrice>
    <Name>Servisair Lounge (Terminal 3)</Name>
    <Code>LHRSA3</Code>
    <BookingURL>/v1/lounge/LHRSA3</BookingURL>
    <MoreInfoURL>/v1/product/LHRSA3</MoreInfoURL>
  </Lounge>
  <Pricing>
    <CCardSurchargePercent>2.00</CCardSurchargePercent>
    <CCardSurchargeMin>1.50</CCardSurchargeMin>
    <CCardSurchargeMax>4.00</CCardSurchargeMax>
  </Pricing>
  <API_Header>
    <Request>
      <ArrivalDate>2009-10-03</ArrivalDate>
      <ArrivalTime>1200</ArrivalTime>
      <Adults>2</Adults>
      <Children>1</Children>
      <key>mytestkey</key>
      <token>123456789</token>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>

```
