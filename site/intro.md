---

---

#  System requirements 

The platform and programming language you use to interact with **HXAPI** is up to you. We expect the most common scenario to be a web application, written in PHP, Ruby or similar. However, you could equally use **HXAPI** in a mobile phone app or a kiosk.

The only requirements are the ability to


*  make HTTP requests

*  parse XML/JSON/csv/text files

# REST

**HXAPI** accepts [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) requests. Every request is made over **HTTP** using the standard methods. For data retrieval, you always use the GET method. For making a booking (thus creating a new resource), the POST method must be used. 

http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW2

One URL can have different functions depending on the method used to access it. Taking the URL above as an example - As a GET it returns availability and pricing information for that car park for the given time period. When posted to with the correct parameters, it makes a booking at the car park, and returns a link to where you can view the booking. 







# Server Address

Whenever writing new code or altering existing functionality, you must use the development server (sandbox). The data returned  is not 'as live', but the format and structure are the same. If you do not, you will affect metrics such as conversion rates, and of course any bookings made will be live.

The process for moving from development to live is outlined [here](/golive).

Development URL: http://api.holidayextras.co.uk/sandbox/

Live URL: http://api.holidayextras.co.uk/

To access European products please add System=ABG.
To access UK products by default System=ABC is taken.

# Getting Started

The easiest way to get started with **HXAPI** is to make a few HTTP requests in a browser or (to see the headers) programatically with CURL. [Download CURL](http://curl.haxx.se/download.html).

First a request for parking availability:

```
curl "http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW?ArrivalDate=20Jan09&ArrivalTime=1200&DepartDate=27Jan09&DepartTime=1600&token=000015778&key=mytestkey"
```

Example for a European product:

```
curl "http://api.holidayextras.co.uk/sandbox/v1/carpark/dus?ArrivalDate=20OCT15&ArrivalTime=1200&DepartDate=27OCT15&DepartTime=1600&token=000015778&key=mytestkey&System=ABG"
```

Another example - this one queries the product library about one of the car parks returned.
```
curl "http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite?token=000015778&key=mytestkey"
```
The examples so far have returned XML - this is the default format. You can also ask for the output as a javascript object by setting the file extension to '.js'.
```
curl "http://api.holidayextras.co.uk/sandbox/v1/carpark/LGW.js?ArrivalDate=20Jan09&ArrivalTime=1200&DepartDate=27Jan09&DepartTime=1600&token=000015778&key=mytestkey"
curl "http://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey"
```

# Reply Formats

**HXAPI** can return data in two several formats. The default format is XML. To specify the format explicitly, append the file extension to the requested resource.


*  .xml (default if not specified)

*  .js

*  .csv (No longer supported - as from Aug 16)

*  .txt (No longer supported - as from Aug 16)



http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite?key=mytestkey

is the same as

http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.xml?key=mytestkey

The same query, with results in javascript

http://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.js?key=mytestkey


# Application Key

 
Every partner using **HXAPI** is issued with an **application key** for identification. All requests must provide this key in order to receive a successful response. Otherwise an error is returned.

Your Account Manager  will provide you with your application key. If you have not yet been issued an application key, email us at <sales@holidayextras.com>.

For customers in contact with Holiday Extras, Munich (Germany) please email to <hxapi-contact@holidayextras.de>.

Your application key does **not** replace your Holiday Extras Agent Code - for us to track bookings you must specify your Holiday Extras Agent Code, otherwise you will not be attributed the correct commission.

Request limits are applied on a per-key basis. Thresholds can be adjusted if they prove too restrictive, but we need to protect the API from applications which make an unreasonable number of requests. There are distinct thresholds for the number of permissible requests per minute, per hour and per day. We reserve the right to alter these limits.

Any abuse or misuse of **HXAPI** may result in the application key being disabled or restricted.

# Agent Code

In addition to your application key, you must pass your Holiday Extras agent code. Agents (taking payment themselves) will need to send their password. Affiliates do not have a password, and so should not send one.

You can have multiple applications using the same agent code, but you **must use separate application keys for each application**.

# Versioning

Whenever there is a significant alteration or upgrade to the API, we increase the version number. If you continue to use a previous version, it will continue to function as before for a period of time ( approx 3 months), but we will no longer support it and after that time it may be removed or responses blocked.

#  User Token

To identify individual users between availability and booking searches, **HXAPI** provides a user token. Applications must make a request for a new user token for every user on their site. Once obtained, this token is passed as a parameter to every subsequent request.

A request for a user token **must** precede a request for availability. An availability request will not work without a valid token. Product library requests do not require a user token, although if you have one you should include it in your request to aid with tracking usage.

This mechanism is **NOT** for tracking returning users (for example, storing it in a cookie and used when they come back at a later date). Your application should take care of user tracking separately if you require it. The token merely links availability searches to bookings for a particular user during a specific session.

# Application flow

The most common scenario, or order of requests to HXAPI, would be:

 1.  Get user token
 2.  Make request for availability at chosen airport and other parameters inc. user token
 3.  (Optional) Get info for available products
 4.  Make booking for selected product

# How to cancel a booking

Bookings made against the test server can be made with a test credit card number (eg 4715059999000437). If you use a valid card number, no payment will be taken. There are a range of cards and scenarios which will allow a test booking against the test server to be processed - see [faq](/faq#test-credit-cards) for more detail.

However when you point your application to our live server, you will need to use a valid credit card, the bookings will be live and will need to be cancelled.

Please do **not** cancel bookings by ringing our call centre or using the online cancellation interface at [www.holidayextras.com](http://www.holidayextras.com). Credit card charges will **not be refunded** to your card if you use either of these methods. Send the booking references to <sales@holidayextras.com> and **all charges will be refunded**.

# Specific documentation

See [Holiday Extras API Endpoints](hxapi) for more detailed documentation on how to make requests to the API and what responses to expect. 
