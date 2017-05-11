---

---

# FAQ

## What is the development server address?

http://api.holidayextras.co.uk/sandbox/

Whenever writing new code or altering existing functionality, you must use the development server (sandbox). The data returned is not 'as live', but the format and structure are the same. If you do not, you will affect metrics such as conversion rates, and any bookings made will be live.



## What is the live server address?

http://api.holidayextras.co.uk/







## What about caching?

We anticipate that many application developers will want to cache the results to certain searches. For example, there is no need to request locations every time. Much better to store these locally and create a routine that calls the API at regular intervals to get the latest list.

We suggest that you do not cache availability requests though. Prices can change without notice and allocation can run out.



## H00x product codes

These are sometimes returned at the end of car parking requests. They represent hotels with parking to be offered as an upsell to customers taking early morning flights. You should ignore these or contact <sales@holidayextras.com>, tell us your agent code and we will disable them.

## Test Credit Cards

In order to make card bookings through our development server (sandbox) one of the following test cards must be used to process the transaction, with the correct CV2 and expiry date as shown below:

Visa Credit Card - 4715059999000437
CV2 - 222
Expiry - 05/17

Visa Debit Card - 4508750015741019
CV2 - 222
Expiry - 05/17

Amex - 345678000000007
CV2 - 2222
Expiry - 05/17

## Credit card surcharges

Agents should ignore the credit card surcharge elements. Any processing or handling fees charged on your customers' bookings are under your control.

Intermediaries must calculate the credit card surcharge using the logic below.

```
x = ((TotalPrice + CanxWaiver) / 100 ) * CCardSurchargePercent
if( x < CCardSurchargeMin) 
  x = CCardSurchargeMin
else if x > CCardSurchargeMax
  x = CCardSurchargeMax
```





## The prices returned, are they net or with markup already added?

Markup already added.






## Do Holiday Extras need my IP address?

No. We use a blacklist for unwelcome traffic, otherwise anyone can make requests to **HXAPI** as long as they use a valid key. 




## How do I cancel a test booking?

You only need to cancel bookings made to the live server. You do not need to cancel bookings made on the development server, no payment is actually taken.

Please do **not** cancel bookings by ringing our call centre or using the online cancellation interface at [www.holidayextras.com](http://www.holidayextras.com). Credit card charges will **not be refunded** to your card if you use either of these methods. Send the booking references to <sales@holidayextras.com> and **all charges will be refunded**.

## FAQ Germany/European product specific (System=ABG)

Currency - Right now and for the near future there's only EUR and GBP. All European products, accessed through System=ABG are returned in EUR and all UK products in GBP.

Number of Pax - is actually required, as the car parks need to plan their shuttle capacities. 

Cancellation Process - Car parks can be cancelled free of charge until 24h before the beginning of the arrival day (basically two days before arrival). If cancelled between 24h before arrival day and arrival day, the charge is 50%. Later than that bookings can only be cancelled by our service team. Customers need to be aware of our terms and conditions, so it would be needed to show the link to our terms and conditions them during booking process (please see section booking parking, booking hotel). Easiest solution for after booking would be to offer the customer a form or/and phone number for cancellations or ammendmends. We do have our own inhouse call center, which handles requests quickly.

QR code - is not needed for Germany/European products. 

shuttle time = 24 hours calculation? - No, they are on a daily basis, but we need the shuttle times for a better planning on the parking space regarding shuttle.

Availability test/live system - The status of the data in the test system is December 2015

Car park details - We are asked to collect them in the name of the parking provider. They need them to organize their services.

Error messages - we can provide you a list of error messages. It is planned to provide them in different languages.

Booking number/ABTA number - the combination of both is always unique




