---

---

# Barcode

An increasing number of car parks, and other products, are updating the way they operate to introduce scanning systems in order to speed up arrival procedures. You will be required to include a 2D barcode on every customer confirmation. The only instance where you should not include a 2D barcode is when a car park stipulates that a QR code is required.

This endpoint simply enables you to specify a booking reference and receive a **Code128** barcode representation of that in return.

In our experience, the size can be scaled down, but you must keep the proportions the same to prevent blurring.

### URL

/barcode/{bookingRef}

### Method

GET

## Parameters

| Name  | Data Type | Format         | Required |
|-------|-----------|----------------|----------|
| key   | Number    |                | Y        |
| angle | Numeric   | Multiple of 90 | N        |


The file extension is also required, to tell the API to return the correct image headers.

#### Request

```
https://api-sandbox.holidayextras.com/v1/barcode/ABCDE.png?key=YourKey
```

So you can include it in your page as easily as...

```
<img src="https://api-sandbox.holidayextras.com/v1/barcode/ABCDE.png?key=YourKey" />
```


The image can be rotated to fit the side of a page:

```
https://api-sandbox.holidayextras.com/v1/barcode/ABCDE.png?key=YourKey&angle=90
```
Or
```
https://api-sandbox.holidayextras.com/v1/barcode/ABCDE.png?key=YourKey&angle=270
```


#### Reply

The reply in this case will be an image, not XML.

## QR Code

You can establish whether a car park requires a QR code by including the parameter '&fields=qr_code' within your request. The response will either be '0' or '1'.

A QR code can be generated in the same fashion as a barcode, just call the `/qrcode/` API.

#### Request

```
https://api-sandbox.holidayextras.com/v1/qrcode/ABCDE.png?key=YourKey
```

So you can include it in your page as easily as...

```
<img src="https://api-sandbox.holidayextras.com/v1/qrcode/ABCDE.png?key=YourKey" />
```

<div id="qr_code"></div>
If the Response contains `QRCodeValue` propery, you can use HEX Barcode generator to create a QR code

```
https://barcode-generator.dock-yard.io/?bcid=qrcode&text=ABCDE&eclevel=Q
```

You can also include it in your page

```
<img src="https://barcode-generator.dock-yard.io/?bcid=qrcode&text=ABCDE&eclevel=Q" />
```