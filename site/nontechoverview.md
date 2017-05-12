---

---

# Overview

## What is HXAPI?

**HXAPI** allows you to interact programmatically with the Holiday Extras reservation and product information systems.

**HXAPI** improves upon our earlier [XML feed](http://www.holidayextras.co.uk/affiliates/xmlintro.html) and grants live access to our product library. Using **HXAPI** you can include our products in your booking flow, whilst keeping the customer within your site and the appearance of only one transaction.

You can use **HXAPI** whether your Holiday Extras account is Intermediary or Retail.

In general the procedure has three basic types of request:

 1.  **Availability** 
 2.  **Product library** - Detailed information about products.
 3.  **Booking**


The fields required for each request differ according to product.  The products and endpoints for these products can be found in the Endpoint/type reference section.


## What's in a request?

We have built **HXAPI** according to REST design principles. All that means is that everything is done using standard HTTP, just like a web browser. There are no complicated protocols, no specialist skills needed by your programming team. If you would like to read about REST design, [here is a good primer](https://en.wikipedia.org/wiki/Representational_state_transfer), but it does assume some programming knowledge

Your application sends in HTTP requests and receives a response. The HTTP method used determines the type of action.

 1.  **GET** The most common, this will **retrieve** information from the specified URL (eg an availability request, or product library).
 2.  **POST** This will be creating a new something, most often a booking.

By default the response from **HXML** is XML, but other formats (YML, CSV, TXT, JSON) are available. How to specify the format is detailed in the [technical documentation](/intro).





## Restrictions of use

We monitor usage of HXAPI and ask that all applications behave responsibly. Any application producing a volume of requests which we judge to be excessive will have its account suspended. 

The requests to our system should only be sequential as we allow only 4 requests at exactly the same time.





## Want to get started?

To contact us regarding HXAPI please email <sales@holidayextras.com> or view the [technical documentation](/intro)

For customers in contact with Holiday Extras, Munich (Germany) please email <hxapi-contact@holidayextras.de>.




