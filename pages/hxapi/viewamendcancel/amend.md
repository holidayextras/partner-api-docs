---

---

# Amend Parking Booking















## /booking/foo

where foo is the booking reference

e.g. http://api.holidayextras.co.uk/v1/booking/ABCDE

You should typically do a view request before an amend. In this way you'll have the booking details to prepopulate fields for your user.



####  At present, the API only allows access to amend a car parking booking. This means that you will not be able to amend a hotel, hotel with car parking or lounge booking using the API. 




## How to amend a booking

Amending a booking is a two stage process, made to the same endpoint but with different parameters and via different methods. 


*  GET - Price check request - Optional. For changes which will affect the cost..

*  POST - Commit changes and charge or credit the card used to make the booking. Requires all other parameters shown below. As you can see there are a lot of parameters so it is best to use the values retrieved from a view request rather than ask the customer to fill them all in.

One way to implement this would be:

 1.  Present the user with the view of their booking details in a web form.
 2.  User edits whatever editable fields they need to change, then submits form.
 3.  If no fields which change the price are altered, application posts the whole form.
 4.  If any fields which alter the price have been changed, your application does a GET and presents the new price, asking the customer to confirm they're happy with the new price.
 5.  If user confirms the new price, post the entire form including non-price sensitive changes.
    

You could present the user with their changes before sending the HTTP request, giving them a chance to confirm or return to editing their booking again.







## Price alteration request

Some edits may alter the price. You must send a GET request to discern whether the price has changed and present this information to the customer, giving them the option to confirm or reject the new price. The fields which may affect price are:


*  ArrivalDate

*  ArrivalTime

*  DepartDate

*  DepartTime

*  NumberOfPax

This request does not affect the booking, no changes are confirmed at this point, you ought to make this clear to the customer.






### Parameters

 | Name         | Type   | Format           | Required | 
 | ----         | ----   | ------           | -------- | 
 | ArrivalDate  | Date   | YYYY-MM-DD       | Y        | 
 | ArrivalTime  | Time   | HHSS             | Y        | 
 | DepartDate   | Date   | YYYY-MM-DD       | Y        | 
 | DepartTime   | Time   | HHSS             | Y        | 
 | CarParkCode* | String | [A-Z]{3}[0-9]{1} | Y        | 
 | NumberOfPax* | Int    | [0-9]            | Y        | 
 | ABTANumber*  | String | [A-Z0-9]{5}      | Y        | 
 | key          | String |                  | Y        | 

* Required field, cannot be altered.




### Request

```html
http://api.holidayextras.co.uk/sandbox/booking/A8LUM?ArrivalDate=2009-02-10&ArrivalTime=1800&DepartDate=2009-02-20&DepartTime=2000&CarParkCode=MAN3&NumberOfPax=2&ABTANumber=FOO&key=mytestkey
```

add System=ABG for European products

### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="13" Result="OK">
  <Pricing>
    <MinPricingDuration>1</MinPricingDuration>
    <Duration>11</Duration>
    <OriginalPrice>48.00</OriginalPrice>
    <NewPrice>52.80</NewPrice>
    <PriceDifference>4.80</PriceDifference>
  </Pricing>
  <API_Header>
    <Request>
      <ArrivalDate>2009-02-10</ArrivalDate>
      <ArrivalTime>1800</ArrivalTime>
      <DepartDate>2009-02-20</DepartDate>
      <DepartTime>2000</DepartTime>
      <NumberOfPax>2</NumberOfPax>
      <ABTANumber>FOO</ABTANumber>
      <key>mytestkey</key>
      <Code>MAN3</Code>
    </Request>
  </API_Header>
  <CarPark>
    <Code>MAN3</Code>
    <Name>Airparks Handforth Dean</Name>
    <Filter>
      <recommended>1</recommended>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
    <BookingURL>/sandbox/carpark/MAN3</BookingURL>
    <MoreInfoURL>/sandbox/product/MAN3</MoreInfoURL>
  </CarPark>
</API_Reply>
```








## Confirm amend

This request actually changes the details of the booking. It is a good idea to ask the customer to confirm the changes before making this request. Use the booking details retrieved from a request 7 to prepopulate the form.












### Parameters

 | Name         | Type        | Format           | Required | 
 | ----         | ----        | ------           | -------- | 
 | ArrivalDate  | Date        | YYYY-MM-DD       | Y        | 
 | ArrivalTime  | Time        | HHSS             | Y        | 
 | DepartDate   | Date        | YYYY-MM-DD       | Y        | 
 | DepartTime   | Time        | HHSS             | Y        | 
 | CarParkCode  | String      | [A-Z]{3}[0-9]{1} | Y        | 
 | NumberOfPax  | Int         | [0-9]            | Y        | 
 | ABTANumber   | String      | [A-Z0-9]{5}      | Y        | 
 | Registration | String      |                  | N        | 
 | CarMake      | String      |                  | N        | 
 | CarModel     | String      |                  | N        | 
 | CarColour    | String      |                  | N        | 
 | Email        | Valid email |                  | Y        | 
 | Title        | String      |                  | Y        | 
 | Initial      | String      | [A-Z]{1}         | Y        | 
 | Surname      | String      |                  | Y        | 
 | Address[]    | String      |                  | Y        | 
 | Town         | String      |                  | Y        | 
 | County       | String      |                  | Y        | 
 | PostCode     | String      |                  | Y        | 
 | Confirmation | Char        | [Y,N]{1}         | Y*       | 
 | key          | String      |                  | Y        | 

* Determines whether customer will be sent a non-branded system email confirming changes. If you prefer, you can send 'N' and create your own email.

### Request

```
POST /booking/RSE3F HTTP/1.1
Host: api.holidayextras.co.uk
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 297

ABTANumber=FOO&Address%5B%5D=45%20Test%20Street&ArrivalDate=2009-04-16&ArrivalTime=1200&CarParkCode=LGV4&Confirmation=Y&County=Kent&DepartDate=2009-04-23&DepartTime=1500&Email=test%40test.com&Initial=B&NumberOfPax=3&PostCode=CT202TT&Surname=Test&Title=Mr&Town=Test&key=mytestkey

```



### Reply

```xml
<?xml version="1.0" ?>
<API_Reply Product="CarPark" RequestCode="14" Result="OK">
  <Booking>
    <BookingRef>A8LUM</BookingRef>
  </Booking>
  <CarDetails>
    <Registration></Registration>
    <CarMake></CarMake>
    <CarModel></CarModel>
    <CarColour></CarColour>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Address a="1">Test Street</Address>
    <Email>BEN.THOMPSON@HOLIDAYEXTRAS.COM</Email>
    <DataProtection></DataProtection>
  </ClientDetails>
  <Pricing>
    <OriginalPrice>48.00</OriginalPrice>
    <NewPrice>52.80</NewPrice>
    <PriceDifference>N/A</PriceDifference>
  </Pricing>
  <API_Header>
    <Request>
      <ABTANumber>FOO</ABTANumber>
      <ArrivalDate>2009-02-10</ArrivalDate>
      <ArrivalTime>1800</ArrivalTime>
      <Confirmation>Y</Confirmation>
      <DepartDate>2009-02-20</DepartDate>
      <DepartTime>2000</DepartTime>
      <Initial>T</Initial>
      <NumberOfPax>2</NumberOfPax>
      <Surname>Test</Surname>
      <Title>Mr</Title>
      <key>mytestkey</key>
      <Email>ben.thompson@holidayextras.com</Email>
      <Code>MAN3</Code>
    </Request>
  </API_Header>
  <CarPark>
    <ArrivalDate>2009-02-10</ArrivalDate>
    <DepartDate>2009-02-20</DepartDate>
    <ArrivalTime>1800</ArrivalTime>
    <DepartTime>2000</DepartTime>
    <Duration>10</Duration>
    <NumberOfPax>2</NumberOfPax>
    <ReturnFlight></ReturnFlight>
    <Code>MAN3</Code>
    <Name>Airparks Handforth Dean</Name>
    <Filter>
      <recommended>1</recommended>
      <car_parked_for_you>1</car_parked_for_you>
    </Filter>
    <BookingURL>/sandbox/carpark/MAN3</BookingURL>
    <MoreInfoURL>/sandbox/product/MAN3</MoreInfoURL>
  </CarPark>
</API_Reply>
```

