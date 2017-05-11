---

---

# Cancel



## /booking/foo

where foo is the booking reference

e.g. http://api.holidayextras.co.uk/v1/booking/ABCDE

Cancelling a booking is a two step process. You must first request the details of the booking via a GET, present them to the customer to confirm. You can then cancel the booking via POST.

## Preliminary cancellation request

### Method

GET






### Parameters

 | Name            | Type   | Format   | Required | 
 | ----            | ----   | ------   | -------- | 
 | CreditCardLast4 | Int    | [0-9]{4} | N*       | 
 | key             | String |          | Y        | 




This is a general request, is is therefore not product specific. So a booking of any type, i,e parking, hotel, lounge can be cancelled using the booking reference and the same request parameters it does not need to vary by product.


### Request

```html
http://api.holidayextras.co.uk/v1/booking/ABCDE?CreditCardLast4=1111&key=mytestkey
```








### Reply

```xml

<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="Cancel" Customer="A" Session="999999999" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>ABCDE</BookingRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelInfo>~61There is no charge for cancelling this booking</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <CreditCardLast4>1111</CreditCardLast4>
    </Request>
  </API_Header>
</API_Reply>
```

At this point, the booking has not been cancelled. This first request just checks that the booking can be cancelled and shows whether or not there is a fee for cancelling. Please do not be tempted to skip this step, the customer should be informed if they are not going to be refunded the full amount.

## Preliminary cancellation request (Agents Only)

### Method

GET






### Parameters

 | Name          | Type   | Format                  | Required | 
 | ----          | ----   | ------                  | -------- | 
 | ABTANumber    | String |                         | Y        | 
 | Password      | String |                         | Y        | 
 | ConfirmCancel | String | N                       | Y        | 
 | CancelRef     | String | Initials or Voucher ref | Y        | 
 | key           | String |                         | Y        | 







### Request

```html
http://api.holidayextras.co.uk/v1/booking/ABCDE?ABTANumber=youragentcode&Password=yourpassword&ConfirmCancel=N&CancelRef=voucher/initial&key=foo
```

For European products please add System=ABG

```html
http://api.holidayextras.co.uk/v1/booking/ABCDE?ABTANumber=youragentcode&Password=yourpassword&ConfirmCancel=N&key=foo&System=ABG
```








### Reply

```xml

<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="Cancel" Customer="A" Session="999999999" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>ABCDE</BookingRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelInfo>There is no charge for cancelling this booking</CancelInfo>
    <RefundAmount>52.24</RefundAmount>
  </Cancel>
  <API_Header>
    <Request>
      <ABTANumber>youragentcode</ABTANumber>
      <Password>yourpassword</Password>
      <ConfirmCancel>N</ConfirmCancel>
      <key>foo</key>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>
```

At this point, the booking has not been cancelled. This first request just checks that the booking can be cancelled and shows whether or not there is a fee for cancelling. Please do not be tempted to skip this step, the customer should be informed if they are not going to be refunded the full amount.

## Confirm cancellation request


### Method

Post



### Parameters


 | Name            | Type   | Format   | Required | 
 | ----            | ----   | ------   | -------- | 
 | CreditCardLast4 | Int    | [0-9]{4} | N*       | 
 | key             | String |          | Y        | 
 | ConfirmCancel   | String | Y/N      | Y        | 





### Request

```
http://api.holidayextras.co.uk/booking/ABCDE

POST /booking/ABCDE HTTP/1.1
Host: api.holidayextras.co.uk
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 34

CreditCardLast4=5383&key=mytestkey&ConfirmCancel=Y
```



### Response

```xml
<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="Cancel" Customer="A" Session="999999999" RequestCode="9" Result="OK">
  <Booking>
    <BookingRef>RV5ZB</BookingRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelRef>NZ805</CancelRef>
    <CancelInfo>Please be aware your booking will be reinstated if your booking confirmation voucher is used</CancelInfo>
  </Cancel>
  <API_Header>
    <Request>
      <CreditCardLast4>5383</CreditCardLast4>
      <key>mytestkey</key>
      <ConfirmCancel>Y</ConfirmCancel>
    </Request>
  </API_Header>
</API_Reply>

```

## Confirm cancellation request (Agents Only)


### Method

Post



### Parameters


 | Name          | Type   | Format | Required | 
 | ----          | ----   | ------ | -------- | 
 | ABTANumber    | String |        | Y        | 
 | Password      | String |        | Y        | 
 | ConfirmCancel | String | Y/N    | Y        | 
 | CancelRef     | String |        | Y        | 
 | key           | String |        | Y        | 





### Request

```
http://api.holidayextras.co.uk/booking/ABCDE

POST /booking/ABCDE HTTP/1.1
Host: api.holidayextras.co.uk
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 34

ABTANumber=youragentcode&Password=yourpassword&key=foo&ConfirmCancel=Y&CancelRef=Foo
```


### Response

```xml
<?xml version="1.0" ?>
<API_Reply System="ABC" Version="1.0" Product="Cancel" Customer="A" Session="999999999" RequestCode="9" Result="OK">
<Booking>
    <BookingRef>ABCDE</BookingRef>
  </Booking>
  <Cancel>
    <CancelFee>0.00</CancelFee>
    <CancelRef>12345</CancelRef>
    <CancelInfo>Please retrieve your client&#39;s copy of voucher as booking will be reinstated if used</CancelInfo>
    <RefundAmount>52.24</RefundAmount>
  </Cancel>
  <API_Header>
    <Request>
      <ABTANumber>youragentcode</ABTANumber>
      <Password>yourpassword</Password>
      <key>foo</key>
      <ConfirmCancel>Y</ConfirmCancel>
      <CancelRef>Foo</CancelRef>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>

```
