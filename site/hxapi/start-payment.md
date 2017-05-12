---

---

# Add payment to existing booking






## /booking/foo

where foo is the Start booking reference

e.g. http://api.holidayextras.co.uk/v1/de/booking/10213904


## Full payment only

At the moment HXAPI does not enforce full payment, it is technically possible to pay only a portion of the amount due. Your application is responsible for ensuring that the correct amount is paid, we will not raise an error if it's over or under.

Therefore a search is effectively mandatory before payment, to retrieve the amount payable.

### Method

POST








### Parameters

 | Name            | Type    | Format                   | Required | 
 | ----            | ----    | ------                   | -------- | 
 | StartCustomer   | String  | [0-9]{6}                 | Y        | 
 | BusinessUnit    | String  | [0-9]{3}                 | N*       | 
 | Operator        | String  | [A-Z]{3}                 | Y        | 
 | CardNumber*     | String  | [0-9]{18}                | Y        | 
 | ExpiryDate      | Date    | MMYY                     | Y        | 
 | StartDate*      | Date    | MMYY                     | N        | 
 | IssueNumber*    | Integer | [0-9]{1,2}               | N        | 
 | Cardholder*     | String  |                          | Y        | 
 | AccountNumber§ | String  | [0-9]{?}                 | Y        | 
 | SortCode§      | String  | [0-9]{8}                 | Y        | 
 | AccountName§   | String  |                          | Y        | 
 | Amount          | Decimal | [0-9]{1-5}.[0-9]{2}      | Y        | 
 | BkgProduct±    | String  | CarPark,HotelWithParking | N        | 
 | key             | String  |                          | Y        | 
 | token           | String  | [0-9]{9}                 | Y        | 

* For credit card payments only

§ For laschtschrift payments only

± Have added BkgProduct as a parameter to specify the product. If none is specified, it will default to CarPark. If the incorrect product is specified, the payment request will fail.





### Credit card payment

#### Request

(Convert to post)

```
http://api.holidayextras.co.uk/de-start/sandbox/v1/booking/10213905?Amount=32.00&BkgProduct=CarPark&BusinessUnit=222&CardNumber=4111111111111111&Cardholder=T%20Test&ExpiryDate=0511&Operator=BJT&StartCustomer=111111&key=mytestkey&token=123456789
```

#### Response

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="17" Result="OK">
  <Booking>
    <BookingRef>DZN40</BookingRef>
    <StartRef>10213905</StartRef>
    <Result>Credit Card payment now on file against booking</Result>
  </Booking>
  <API_Header>
    <Request>
      <Amount>32.00</Amount>
      <BusinessUnit>222</BusinessUnit>
      <CardNumber>4111111111111111</CardNumber>
      <Cardholder>T Test</Cardholder>
      <ExpiryDate>0511</ExpiryDate>
      <Operator>BJT</Operator>
      <StartCustomer>111111</StartCustomer>
      <key>foo</key>
      <token>123456789</token>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark></CarPark>
</API_Reply>
```





### Laschtschrift payment

#### Request
(Convert to post)
```html
http://api.holidayextras.co.uk/de-start/sandbox/v1/booking/10213906?AccountName=T%20Test&AccountNumber=123456&Amount=32.00&BusinessUnit=222&Operator=BJT&SortCode=12345678&StartCustomer=111111&key=mytestkey&token=123456789
```

#### Response

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="17" Result="OK">
  <Booking>
    <BookingRef>DZN41</BookingRef>
    <StartRef>10213906</StartRef>
    <Result>Bacs/Lastschrift payment now on file against booking</Result>
  </Booking>
  <API_Header>
    <Request>
      <Amount>32.00</Amount>
      <BusinessUnit>222</BusinessUnit>
      <Operator>BJT</Operator>
      <StartCustomer>111111</StartCustomer>
      <key>foo</key>
      <token>123456789</token>
      <AccountNumber>123456</AccountNumber>
      <SortCode>12345678</SortCode>
      <AccountName>T Test</AccountName>
      <system>de</system>
      <System>ABG</System>
    </Request>
  </API_Header>
  <CarPark></CarPark>
</API_Reply>
```
