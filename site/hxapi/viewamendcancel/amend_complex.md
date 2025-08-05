---

---


# Amend Booking - complex (with reprice)

[API Docs](/hxapi/) > product:[amend](/hxapi/viewamendcancel/amend_complex)

The booking details that can be changed for a complex amend are as follows:

- Arrival date or time;
- Depart date or time.


## Amend Booking Request

We recommend using the [view booking](/hxapi/viewamendcancel/view) method first, to ensure that you have all the details required from the most up to date record of the booking.

You can then run a GET booking request using the amend endpoint and methodology detailed here to check the new amount (increase / decrease in price from original booking).

The recommended process for amending a booking is as follows.

1.  Call the [view booking](/hxapi/viewamendcancel/view) method to ensure that you have all the details required from the most up to date record of the booking.
2.  Compose the amendment request as per the details below i.e. include the date change details. Then send this request as a `GET` rather than a `POST`. This will return the details of the pricing change.
3.  If the client is happy with the pricing change then resend the request as a `POST` this will confirm and commit the changes.

### Method

POST

### Endpoint

The endpoint to use is (where `YourBookingRef` is the Holiday Extras booking reference):

```
https://api.holidayextras.com/v1/booking/YourBookingRef
```

### Request Parameters

NB: All parameter names are case sensitive.

For all amend booking requests, you will need to send these parameters:

| Name       | Data Type | Format            | Mandatory? | Additional Information                                                                                                                                          |
|------------|-----------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber | String    | [A-Z0-9] 5 chars  | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                 |
| Password   | String    | [A-Z0-9] 5 chars  | N*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
| Initials   | String    | [A-Z] 3 chars     | N          | The initials of the Operator / Agent.                                                                                                                           |
| key        | String    | [A-Z]             | Y          | This will be assigned to you by your Account Manager during set up.                                                                                             |
| Email      | String    | [A-Z0-9] 50 chars | Y          | Email address used to make the booking (i.e. the email address of the lead passenger)                                                                           |
| System     | String    | [A-Z] 3 chars     | Y*         | For European products, you need to pass in the value of `System=ABG` (the default is `System=ABC`, which is UK products only).                                  |

In order to amend the booking with the new details, you only need to pass in the specific parameters you want to amend. For a complex amend these are as follows:

| Name          | Data Type | Format     | Mandatory? | Additional Information                                                                                         |
|---------------|-----------|------------|------------|----------------------------------------------------------------------------------------------------------------|
| ArrivalDate   | Date      | YYYY-MM-DD | Y          | Date customer drops vehicle at car park.                                                                       |
| ArrivalTime   | Time      | HHMM       | Y          | Time customer drops vehicle at car park.                                                                       |
| DepartDate    | Date      | YYYY-MM-DD | Y          | Date customer picks up vehicle from car park.                                                                  |
| DepartTime    | Time      | HHMM       | Y          | Time customer picks up vehicle from car park.                                                                  |
| Supplements[] | -         | -          | N          | Amend supplement details by sending the parameters to amend. See [below](#upgrade-amendments) for more details |

### Upgrade Amendments

As with [booking upgrades](/hxapi/parking/bkg#booking-upgrades) it is possible to supply an array of `Supplements` to the amendment request to change the details of booked upgrades.
To make amendments you need to specify the code of the upgrade to be changed and the fields you wish to change. The available fields are as below.

| Name     | Data Type | Format | Mandatory? | Additional Information                                                                              |
|----------|-----------|--------|------------|-----------------------------------------------------------------------------------------------------|
| Adults   | Integer   | [0-9]  | N          | When specified the `Children` parameter must also be specified otherwise it will be assumed to be 0 |
| Children | Integer   | [0-9]  | N          | When specified the `Adults` parameter must also be specified otherwise it will be assumed to be 0   |
| Quantity | Integer   | [0-9]  | N          | Change the required quantity of per booking or per room upgrades                                    |
| Remove   | -         | -      | N          | The presence of this field will cause the upgrade to be removed from the booking                    |

To add new upgrades you just need to include the upgrade details in the same fashion as when booking an upgrade.

## Get Amendment Price Response

This response will be given when a `GET` version of this request is sent. This should be used to retrieve the new price before committing to amendments.

| Name                       | Additional Information                                                                                                                                                         |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pricing/OriginalPrice      | The price paid for the booking before any amendments                                                                                                                           |
| Pricing/NewPrice           | The price to be paid if the amendments are confirmed                                                                                                                           |
| Pricing/CanxWaiver         | The cost of any cancellation waiver that may be on the booking                                                                                                                 |
| Pricing/Duration           | The new duration of the stay                                                                                                                                                   |
| Pricing/MinPricingDuration | The smallest duration of stay that the price can be increased by. For example if only increasing by 1 day but the MinPricingDuration is 3 days you will be charged for 3 days. |
| Pricing/PriceDifference    | The difference between the originally paid price and the new price                                                                                                             |
| Carpark/Code               | Code of the booked product                                                                                                                                                     |
| Carpark/Name               | Name of the booked product                                                                                                                                                     |
| Carpark/MoreInfoURL        |                                                                                                                                                                                |
| Carpark/BookingURL         |                                                                                                                                                                                |
| BarCode                    |                                                                                                                                                                                |
| QRCode                     |                                                                                                                                                                                |
| API_Header/Request         | Copy of the original request params                                                                                                                                            |

*\*NOTE\** If the `Pricing/PriceDifference` is negative the minus sign will be a suffix e.g. `<PriceDifference>7.00-</PriceDifference>`

## Amend Booking Response

The amend booking response will return the booking record with all of the updated details.

For a detailed explanation of the fields returned, please see the respective booking requests for [hotels](/hxapi/hotel/bkg), [parking](/hxapi/parking/bkg) and [lounges](/hxapi/lounge/bkg).

## Worked Examples

Below are worked examples of both the request and response for amending (complex) a booking.

### Amend Booking (complex for a hotel)

#### Request

The original booking was made for a hotel staying on 1st December 2018 with 8 days parking.

```html
https://api.holidayextras.com/booking/YourBookingRef
```

```xml
{% include_relative examples/_amend_uk_hotel_booking_request.xml %}
```

#### Response

```xml
{% include_relative examples/_amend_uk_hotel_booking_response.xml %}
```

### Amend Parking Booking With Upgrades
Original booking made for 11th November 2020 with Fast track upgrade for 2 adults and 1 child

#### Request

```html
https://api.holidayextras.com/booking/YourBookingRef
```

```xml
{% include_relative examples/_amend_uk_carpark_booking_upgrade_request.xml %}
```

#### Get Amendment Price Response
```xml
{% include_relative examples/_amend_uk_carpark_booking_upgrade_price_response.xml %}
```

#### Confirm Response
```xml
{% include_relative examples/_amend_uk_carpark_booking_upgrade_response.xml %}
```