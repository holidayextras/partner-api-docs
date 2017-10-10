---

---

#  Getting Started

## Integration Process

In our experience, the most successful integrations (delivered on-time, free from defects) are the ones that follow our [integration process](/integration_process). Here you can find details on the process, including how to create an account.

## System requirements

The platform and programming language you use to interact with our API is up to you. We expect the most common use case to be the creation of a web or mobile application.

The only system requirements are the ability to:

*  make HTTPS requests;
*  parse XML and/or JSON files.

### Note: We have be permanently disabled all non-HTTPS access. Your systems will need to be making all of their API calls via HTTPS only.

### Rate Limiting

Request limits are applied on a per-key basis. Thresholds can be adjusted if they prove too restrictive, but we need to protect our API from applications which make an unreasonable number of requests. There are distinct thresholds for the number of permissible requests per minute, per hour and per day. We reserve the right to alter these limits.

Any abuse or misuse of our API may result in the application key being disabled or restricted.

## Overview of our API

The detailed guides assume a level of programming knowledge. You should be familiar with HTTPS, XML, JavaScript and server-side programming.

### API Design

Our API has been designed following [RESTful principles](https://en.wikipedia.org/wiki/Representational_state_transfer). Every request is made over `https` using the standard method. For data retrieval, you always use the GET method. For making a booking (thus creating a new resource), the POST method must be used.

A single URL can have different functions depending on the method used to access it. Using the following URL as an example with each method:

```
https://api.holidayextras.co.uk/v1/carpark/LGW2
```

GET - returns availability and pricing information for that car park;

POST -  makes a booking at that car park.

### Server Address

Whenever writing new code or altering existing functionality, you *must* use the sandbox server as a testing environment, before deploying to production.

The data returned  in the sandbox is not 'as live', but the format and structure are the same. If you do not, you will affect metrics such as conversion rates, and you will be responsible for any test bookings that have been made in the live environment, i.e. payment.

Sandbox URL: https://api.holidayextras.co.uk/sandbox/

Live URL: https://api.holidayextras.co.uk/


### Reply Formats

Our API can return data in two formats: XML (default) and JavaScript. To specify the format explicitly, append the file extension to the request.

*  .xml (default if not specified)
*  .js

```
https://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite?key=YourKey
```

is the same as

```
https://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.xml?key=YourKey
```

The same query, with results in javascript

```
https://api.holidayextras.co.uk/sandbox/v1/prodlib/LGW2/lite.js?key=YourKey
```

### User Journey

Each product generally follows the same journey:

1. Generate a user token;
2. Search for availability;
3. Make a booking;
4. View the booking.

Additional requests can be made for locations and additional product information. Please refer to each product's [detailed guide](/hxapi/) for more specific detail on the user journey.

### Making Test Bookings

Bookings made against the test server can be made with a test credit card number. If you use a valid card number, no payment will be taken. There are a range of cards and scenarios which will allow a test booking against the test server to be processed - see [FAQ](/faq#test-credit-cards) for more detail.

However when you point your application to our live server, you will need to use a valid credit card: the bookings will be live and will need to be cancelled.

Please do not cancel bookings by ringing our call centre or using the online cancellation interface at [www.holidayextras.com](http://www.holidayextras.com). Credit card charges will *not be refunded* to your card if you use either of these methods. Send the booking references to <sales@holidayextras.com> and all charges will be refunded.

## Go Live Procedure

Before you can deploy your code to production and start making live bookings, we will need you to contact us to confirm how your application is interacting with our API and ensure all agreements are in place.

## Where to next?

If you are ready to begin, we suggest you start with our [Detailed Guides](/hxapi/).
