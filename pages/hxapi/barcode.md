# Barcode

currently in use only in UK

Some airport carparks, and other products, have the ability to scan barcodes, speeding up arrival procedures. This endpoint simply enables you to specify a booking reference and receive a **Code128** barcode representation of that in return. 

In our experience, the size can be scaled down, but you must keep the proportions the same to prevent blurring. 
## Method

GET


## Parameters

 | Name       | Data Type    | Format         | Required | 
 | ----       | ---------    | ------         | -------- | 
 | key        | Number       |                | Y        | 
 | BookingRef | Alphanumeric | [A-z,0-9]{5}   | Y        | 
 | angle      | Numeric      | Multiple of 90 | N        | 

The file extension is also required, to tell the API to return the correct image headers.

## Request

```
http://api.holidayextras.co.uk/sandbox/v1/barcode/ABCDE.png?key=foo
```

So you can include it in your page as easily as...

```
`<img src="http://api.holidayextras.co.uk/sandbox/v1/barcode/ABCDE.png?key=foo" />`
```


The image can be rotated to fit the side of a page:

```
http://api.holidayextras.co.uk/sandbox/v1/barcode/ABCDE.png?key=foo&angle=90
```
Or
```
http://api.holidayextras.co.uk/sandbox/v1/barcode/ABCDE.png?key=foo&angle=270
```


## Reply

The reply in this case will be an image, not XML.

## QR Code

To enable a QR code you use google charts, just add the booking ref as value for chl=  ​so in the example below the booking ref would be HX123.​

http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=HX123&chld=H|0
