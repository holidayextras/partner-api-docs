---

---

# Cancel booking

## /booking/foo

where foo is the Start booking reference

e.g. http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/10051848



### Method

Post



### Different requests

The cancel has 2 modes which differ only in the value of the ConfirmCancel parameter. You should first send ConfirmCancel=N. This dry-run will advise on any cancellation charges. Once the customer has agreed these with the agent, you should send the same request but with ConfirmCancel set to Y.


### Parameters

 | Name          | Type   | Format   | Required | 
 | ----          | ----   | ------   | -------- | 
 | StartCustomer | String | [0-9]{6} | Y        | 
 | BusinessUnit  | String | [0-9]{3} | Y        | 
 | Operator      | String | [A-Z]{3} | Y        | 
 | ConfirmCancel | String | [Y,N]    | Y        | 
 | key           | String |          | Y        | 
 | token         | String | [0-9]{9} | Y        | 





### Request

Dry-run
```html
http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/10213896?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=mytestkey&ConfirmCancel=N&CancelRef=TestCnx
```

Confirmed cancel
```html
http://api.holidayextras.co.uk/de-start/v1/sandbox/booking/10213896?StartCustomer=111111&BusinessUnit=222&Operator=BJT&key=mytestkey&CancelRef=HolidayCancelled&ConfirmCancel=Y
```



### Response

Dry-run
```xml
<?xml version="1.0" ?>

<API_Reply System="ABG" Version="1.0" Product="Cancel" Customer="A" Session="123456789" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>DZN32</BookingRef>
    <StartRef>10213897</StartRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelInfo>Es gibt keine Geb&#252;hr f&#252;r die Stornierung dieser Buchung</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <BusinessUnit>222</BusinessUnit>
      <ConfirmCancel>N</ConfirmCancel>
      <Operator>BJT</Operator>
      <StartCustomer>111111</StartCustomer>
      <key>foo</key>
      <token>123456789</token>
      <CancelRef>testcanx</CancelRef>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
</API_Reply>
```

Confirmed cancel
```xml
<?xml version="1.0" ?>

<API_Reply System="ABG" Version="1.0" Product="Cancel" Customer="A" Session="123456789" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>DZN31</BookingRef>
    <StartRef>10213896</StartRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelRef>70619</CancelRef>
    <CancelInfo>Bitten Sie um R&#252;ckgabe des Kundenvouchers, da er seine G&#252;ltigkeit nicht verliert</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <BusinessUnit>222</BusinessUnit>
      <CancelRef>TestCnx</CancelRef>
      <ConfirmCancel>Y</ConfirmCancel>
      <Operator>BJT</Operator>
      <StartCustomer>123456</StartCustomer>
      <key>foo</key>
      <token>123456789</token>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
</API_Reply>
```
