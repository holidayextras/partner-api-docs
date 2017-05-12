---

---

# Hotels

[API Docs](/hxapi/) > product:[Hotels](index)

These are the hotel with parking requests. If available, the options returned are for 0, 8 and 15 days parking. If the customer requires room only, please choose the zero days parking option. There is no specific hotel-only request.

 | Action                                     | Endpoint                                                                         | Method | 
 | ------                                     | --------                                                                         | ------ | 
 | UK and Europe - Availability at hotel      | [http://api.holidayextras.co.uk/v1/sandbox/hotel/foo](av)            | GET    | 
 | UK ONLY - Upgrades at hotel                | [http://api.holidayextras.co.uk/v1/sandbox/upgrade/foo](/hxapi/upgrade)           | GET    | 
 | UK and Europe - Make booking at hotel      | [http://api.holidayextras.co.uk/v1/sandbox/hotel/foo](bkg)           | POST   | 
 | DE ZNT linked - Availability at hotel      | [http://api.holidayextras.co.uk/v1/de/sandbox/hotel/foo](de-av)      | GET    | 
 | DE ZNT linked - Room availability at hotel | [http://api.holidayextras.co.uk/v1/de/sandbox/hotel/foo](de-av-room) | GET    | 
 | DE ZNT linked - Make booking at hotel      | [http://api.holidayextras.co.uk/v1/de/sandbox/hotel/foo](de-bkg)     | POST   | 

# Important Notices

## Merging product library data into availability response

You can specify a comma-separated list of fields to pull back from the product library. This overcomes the need for partners to do multiple HTTP requests, one for every hotel returned. Just specify a parameter named 'fields' and include the product library field names there. 
```
eg...&fields=field_a,field_b,field_c
```

The method for querying the product library as a separate request [is outlined here](/hxapi/productlibrary/parking)

## Advance purchase

There is a field in the product library for hotels, named noncancellable_nonrefundable. Advance purchase products are non-refundable and non-cancellable. As a result, the Cancellation Waiver must not be sold to customers purchasing a product with advance_purchase set to 1.

## Day Use Only

There is a field in the product library for hotels, named 'day_use_only'. Day use products must not be sold to customers wishing to have an overnight stay where day_use_only is set to 1.


## Parking Includes Arrival

In order to establish whether the package includes parking for the night of the hotel stay the parking_includes_arrival field needs to be taken into account.

<parking_includes_arrival>0</parking_includes_arrival> - This indicates  whether the parking period starts on the arrival date at the hotel or the next day when the customer is flying.

So 0 means that the night of your stay is not counted, so there is free overnight parking, and the amount of days parking will be from the next day

So 1 means that the parking starts from the date the customer checks into the hotel, and the amount of days parking will start from that day.


## Mystery / Un-named Products

There are some hotels in which the name field will not provide the name of the hotel e.g <Name>Mystery 4-star hotel</Name>.  This should not be provided to the customer until the booking is made, along with other details such as address, hotel images, restaurant names etc.


## European Products

Pass in System=ABG to access products in Europe.

Default if System is not set should be System=ABC to access products in UK only.

You will need to create a voucher for the customer yourself by using the following information from the product library, plus the information from the booking response:

Relevant keys from the php API are (besides the booking specifics like date, name of the hotel, name of the customer...)


*  name

*  adresse

*  GPS coordinates (latitude, longitude)

*  telefon

*  anfahrt (how to get to the hotel)

*  transfer

*  parken (information on car park at the hotel)

*  boardbasis (will be delivered back in the bookings response)

*  frühstücksinformationen (information on breakfast offer in the hotel)

*  zimmerausstattung (room facilities)

*  kinderangebot (child policy)

*  anreise (check in time)

*  weitere_informationen (additional information such as city tax)

http://api.holidayextras.co.uk/v1/product/AMSDOR?key=HXAPI&lang=nl&fields=name,adresse,latitude,longitude,telefon,anfahrt,transfer,parken,fruehstuecksinformationen,zimmerausstattung,kinderangebot,anreise,weitere_informationen,barrierefreier_zugang,haustiere

Please always add our terms and conditions (please also refer to “make a booking at car park” section) 

Example: Service provider: Holiday Extras GmbH | Aidenbachstr. 52 | 81379 München | Germany. Terms and conditions of Holiday Extras, available at http://www.holidayextras.de/images/de-hx/pdf/agb.pdf, apply.
