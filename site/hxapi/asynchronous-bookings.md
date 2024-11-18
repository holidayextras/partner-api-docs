---

---

# Asynchronous Bookings

## Background

We now offer products that use an asynchronous booking process. This allows partners to handle bookings for a wider range of products. However, asynchronous bookings require a different approach compared to synchronous bookings to provide a seamless experience for customers.
This guide outlines:  
- Best practices for integrating with our API for asynchronous bookings.  
- Guidance on when and how to poll our API.  
- Details on booking statuses.  
- Information on enabling availability for async products.  

---

## Enabling Async Product Availability  

To view all supply, including async products, partners can now specify whether they want these products included in the availability response.

### Availability Request  

Partners must include a new parameter in the availability request to indicate whether to include async products.  

| Name                    | Data Type | Format  | Mandatory? | Additional Information                                    |
|-------------------------|-----------|---------|------------|----------------------------------------------------------|
| includeAsyncProducts    | Boolean   | `true`/`false` | N | If `true`, availability includes async products. Default is `false`. |

### UK Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/carpark/LGW?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2020-01-07&ArrivalTime=1200&DepartDate=2020-01-08&DepartTime=1200&NumberOfPax=1&includeAsyncProducts=true
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/carpark/LGW.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2020-01-07&ArrivalTime=1200&DepartDate=2020-01-08&DepartTime=1200&NumberOfPax=1&includeAsyncProducts=true
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### European Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/carpark/MUC?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en&includeAsyncProducts=true
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/carpark/MUC.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2017-12-01&ArrivalTime=1200&DepartDate=2017-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en&includeAsyncProducts=true
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}


### Behaviour  

- **`true`:** Availability searches include async products.  
- **`false`:** Availability searches exclude async products (default behaviour).  

---

## Booking Status Polling  

When working with asynchronous bookings, partners must poll our API to determine the status of a booking and when full booking details are ready.  

### When Polling is Required  

Polling is required when a booking has been submitted but is not yet confirmed. The `bookingStatus` field in the response from the `view booking` endpoint indicates the current status of a booking.  

Booking details such as the QR code, supplier reference, and other information will only be provided once the `bookingStatus` field is in a `CONFIRMED` state.

### How Often to Poll  

The frequency of polling depends on the product type and supplier:  
- **Standard Products:** Poll every 5–10 minutes.  
- **Long Confirmation Times (e.g., specific suppliers):** Poll every 15–30 minutes.  

### Booking Status Values  

| Status       | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `PENDING`    | Booking has been submitted but not yet confirmed with the supplier.         |
| `CONFIRMED`  | Booking has been successfully confirmed by the supplier. Full details are available. |
| `FAILED`     | Booking has failed with the supplier. |

---

## API Endpoint  

### Method  

GET  

### Endpoint  
The endpoint to use is the existing view booking endpoint: [/hxapi/viewamendcancel/view/](/hxapi/viewamendcancel/view/)


## Response Example

The response will now include a `bookingStatus` field to indicate the current status of the booking.

```json
{
  "bookingStatus": "PENDING"
}
```

---

## Best Practices  

1. **Polling Interval:**  
   - Follow the recommended intervals based on the product type or supplier.  
   - Avoid excessive requests to prevent unnecessary load on our systems.  

2. **Stop Polling:**  
   - When the `bookingStatus` is `CONFIRMED` or `FAILED`, stop polling and take the appropriate next steps.  

3. **Retry Policy:**  
   - Use exponential backoff for retries after transient errors (e.g., 500 errors or timeouts).  

---

## Workflow Example  

1. **Make a booking** 
2. **Start Polling:** Use the view booking endpoint to check the `bookingStatus`.  
   - **If `PENDING`:** Continue polling at the recommended intervals.  
   - **If `CONFIRMED`:** Retrieve full details and stop polling.  
   - **If `FAILED`:** Handle the failure appropriately.  
3. **Retrieve Full Details:** Once the booking is confirmed, on the view booking response you'll have the complete booking information using the same endpoint.

By following these practices, partners can ensure an optimal customer experience while integrating with asynchronous products.  

---
