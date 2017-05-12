---

---

# Parking

[API Docs](/hxapi/) > product:[Parking](index)

These are the parking requests.


 | Action                   | Endpoint                                                                            | Method | 
 | ------                   | --------                                                                            | ------ | 
 | Availability at airport  | [http://api.holidayextras.co.uk/v1/carpark/foo](av/airport)           | GET    | 
 | Availability at car park | [http://api.holidayextras.co.uk/v1/carpark/foo](av/carpark)           | GET    | 
 | Space count at car park  | [http://api.holidayextras.co.uk/v1/carparkspaces/foo](spaces/carpark) | GET    | 
 | Upgrades                 | [http://api.holidayextras.co.uk/v1/upgrade/foo](/hxapi/upgrade)                      | GET    | 
 | Make booking at car park | [https://api.holidayextras.co.uk/v1/carpark/foo](bkg)                 | POST   | 


# Important notices

**Important!** These points have created problems for partners in the past.


## Merging product library data into availability response

You can specify a comma-separated list of fields to pull back from the product library. This overcomes the need for partners to do multiple HTTP requests. Just specify a parameter named 'fields' and include the product library field names there. 
```
eg...&fields=field_a,field_b,field_c
```

The method for querying the product library as a separate request [is outlined here](/hxapi/productlibrary/parking).

## Advance purchase

There is a field in the product library for car parks, named 'advance_purchase'. Advance purchase products are non-refundable and non-cancellable. As a result, the Cancellation Waiver must not be sold to customers purchasing a product with advance_purchase set to 1.


## User token

If your application does not grab a new user token for each user on your site before making requests to the carpark endpoint, we have no way of differentiating between your customers. We've had several partners send through the same number for every customer. This has made it difficult to trace bookings when a problem has required investigation. Please ensure that you request a User Token before doing any parking requests.

[How to request a user token](/hxapi/usertoken)


## Request flags

The request flags brought back from availability searches indicate the fields required in the booking by the car park. You must retrieve this information from the customer. There are occasions where your booking will go through without sending this information but can fail later when importing the bookings to car parks. This causes us considerable administrative difficulties. Please, make sure your application sends all requested fields.

```xml
<RequestFlags>
	<Registration>1</Registration>
</RequestFlags>
```

## Total price  - <Pricing> element

The cost of the Credit Card surcharge applies to the price of parking + cancellation waiver (if taken).

So in the reply for a booking request you may see something like
```xml
<AmountPaid>43.56</AmountPaid>
<TotalPrice>42.06</TotalPrice>
<CCSurchargeAmount>1.50</CCSurchargeAmount>
<CanxWaiver>0.50</CanxWaiver>
```
... and expect <AmountPaid> to total £44.06 (because 42.06 + 1.50 + 0.50 = 44.06). This is not an error, the <CanxWaiver> amount has already been added to the parking price of £41.56 to create <TotalPrice>, and the credit card surcharge is then applied to that value, giving <AmountPaid>.


## Images

We have recently moved all our images into an internal image library. The paths provided in the API will no longer be valid.

However for each of the products you will see a key called tripappimages - these are the best images to use.  There will be an array split by a ;

e.g. http://api.holidayextras.co.uk/v1/product/LGW4.js?token=000015778&key=mytestkey&fields=tripappimages

You can specify the specific product library fields you need using this syntax and adding fields=x,y,z, etc. 

The domain you can source them to is //static4.holidayextras.com

You would need to replace /imageLibrary/Images/ with /libraryimages

e.g. /imageLibrary/Images/81818-LGW-maple-manor-North2.png 

should be replaced with //static4.holidayextras.com/libraryimages/81818-LGW-maple-manor-North2.png


## European Products ONLY

Pass in System=ABG to access products in Europe.

Default if System is not set should be System=ABC to access products in UK only.

You will need to create a voucher for the customer yourself by using the following information from the product library, plus the information from the booking response:

mandatory fields are:



*  car park name <name> or <parkplatzname>

*  car park adress <adresse>

*  car park phone number <telefon>

*  important information <hinweis>

*  transfer information <transfer>

*  approach <anfahrt>

*  arrival <bei_der_anreise_>

*  size of vehicle <pkw_groesse>

optional fields are:

*  departure <bei_der_abreise_>

*  information for handicapped people <barrierefreier_zugang>

*  security information <sicherheit>

*  information on insurance <versicherung>

Please always add our terms and conditions (refer to "make a booking at car park" section) 
Example: 
Service provider: Holiday Extras GmbH | Aidenbachstr. 52 | 81379 München | Germany. Terms and conditions of Holiday Extras, available at http://www.holidayextras.de/images/en-hx/pdf/agb.pdf, apply.
 

