---

---

# Location

## Method

GET









## Parameters

 | Name  | Data Type | Required |
 | ----  | --------- | -------- |
 | key   | Number    | Y        |
 | type* | Number    | N        |

* type - if you only require locations for a specific product, specify the product type as follows:


*  &type=1 - parking

*  &type=2 - hotels (with and without parking)

*  &type=3 - lounges

For European products please select

*  &type=10 - parking

*  &type=8  -  hotels

## Request

```
https://api.holidayextras.co.uk/sandbox/v1/location?key=mytestkey
```





## Reply


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


One you have this information you can then get a list of all sites at this location if required, example show below:

## Request

```
https://api.holidayextras.co.uk/sandbox/v1/product/ABZ?key=mytestkey
```

For hotels we also have an option to list all of the hotel product codes, listing the location, hotel name, address and star rating

## Request

```
http://www.hxstats.co.uk/hotel-list.php
```

For European products please find an example of a request for all available airports

```
https://api.holidayextras.co.uk/v1/location?key=mytestkey&type=carpark&system=de&lang=de
```

and in addition with specific information

Hotels
```
https://api.holidayextras.co.uk/sandbox/v1/product/FRA?key=mytestkey&fields=latitude,longitude,address&System=ABG&type=8
```

Parking
```
https://api.holidayextras.co.uk/sandbox/v1/product/FRA?key=mytestkey&fields=latitude,longitude,address&System=ABG&type=10
```
