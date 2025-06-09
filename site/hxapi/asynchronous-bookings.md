---

---

# Asynchronous Bookings <span style="color: red; font-size: medium;">Draft</span>

## Background

We now offer products that use an asynchronous booking process. This approach enables partners to handle a broader range of products, including those requiring longer confirmation times or complex supplier interactions. By adopting asynchronous bookings, partners can unlock new opportunities for growth, access a more extensive inventory, and offer customers a seamless booking experience.
<br>
<br>
Asynchronous bookings require a different approach compared to synchronous bookings to ensure smooth integration and maintain customer satisfaction.
<br>
<br>

## Enabling Async Product Availability  

To view all supply, including async products, partners can now specify whether they want these products included in the availability response.

### Availability Request  

Partners must include a new parameter in the availability request to indicate whether to include async products.  

| Name                    | Data Type | Format  | Mandatory? | Additional Information                                    |
|-------------------------|-----------|---------|------------|----------------------------------------------------------|
| includeAsyncProducts    | Boolean   | `true`/`false` | N | If `true`, availability includes async products. Default is `false`. |

> **Note:**  
> **Async products** are products that require additional time for confirmation due to complex supplier interactions or backend processes. Unlike standard products, they do not provide immediate booking confirmation. Instead, bookings for these products are processed in stages, with their status transitioning from `pending`, `confirmed`, `cancelled`, or `error` as the confirmation process completes.

### UK Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/carpark/LGW?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2025-01-07&ArrivalTime=1200&DepartDate=2025-01-08&DepartTime=1200&NumberOfPax=1&includeAsyncProducts=true
```
{% endcodetab %}
{% codetab JSON %}
```https://api.holidayextras.co.uk/v1/carpark/LGW.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2025-01-07&ArrivalTime=1200&DepartDate=2025-01-08&DepartTime=1200&NumberOfPax=1&includeAsyncProducts=true
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### European Products Availability Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/carpark/MUC?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2025-12-01&ArrivalTime=1200&DepartDate=2025-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en&includeAsyncProducts=true
```
{% endcodetab %}
{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/carpark/MUC.js?ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2025-12-01&ArrivalTime=1200&DepartDate=2025-12-08&DepartTime=1200&NumberOfPax=1&System=ABG&lang=en&includeAsyncProducts=true
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

### Behavior

- **`true`:** Availability searches include async products.
- **`false`:** Availability searches exclude async products (default behavior).
- 
---

## Making an Async Booking

We have introduced a new parameter to the booking endpoint to support asynchronous bookings. This parameter helps indicate that the booking is an async booking and aligns with the availability request parameter.

### Booking Request Parameter

| Name                    | Data Type | Format          | Mandatory? | Additional Information                                            |
|-------------------------|-----------|-----------------|------------|--------------------------------------------------------------------|
| includeAsyncProducts    | Boolean   | `true`/`false` | N          | If `true`, the booking is treated as asynchronous. Default is `false`. |

### Behavior

- **`true`:** The booking will be processed asynchronously. A response will indicate that the booking has been created but not yet confirmed.
- **`false`:** The booking will follow the standard synchronous process.

### Request
Use the existing request examples: [/hxapi/parking/bkg/](/hxapi/parking/bkg/) and add the `includeAsyncProducts=true` query parameter.

### Response Structure for Async Bookings

When the `includeAsyncProducts` parameter is set to `true` and the booking is processed asynchronously, the response will closely resemble the normal synchronous booking response. However, certain properties will be missing, as they are only available after the booking is fully confirmed.

#### Missing Properties:
- **QR Code:** Not provided until the booking is confirmed.
- **Supplier Reference:** Only included in the response once the supplier confirms the booking.
- **Joining Instructions:** These details will be added once the booking reaches a `confirmed` state.

#### Added Property:
- **`bookingStatus`:** Indicates the current status of the booking (`pending`, `confirmed`, `cancelled`, or `error`).
- **`suggestedPollingInterval`:** Specifies the recommended interval in seconds for polling the view booking endpoint. The polling frequency varies based on the product type and supplier.

---

## Booking Polling  

When working with asynchronous bookings, partners must poll our API to determine the status of a booking and when full booking details are ready.  

### When Polling is Required  

Polling is required when a booking has been submitted with the `includeAsyncProducts=true` parameter.
The `bookingStatus` field in the response from the `view booking` endpoint indicates the current status of a booking.  

Booking details such as the QR code, supplier reference, and other information will only be provided once the `bookingStatus` field is in a `confirmed` state.

### How Often to Poll  

The frequency of polling depends on the product type and supplier.
On the initial booking response, we provide a `suggestedPollingInterval` field to guide partners on the recommended polling frequency.

### Booking Status Values  

| Status      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `pending`   | Booking has been submitted but not yet confirmed with the supplier.         |
| `confirmed` | Booking has been successfully confirmed by the supplier. Full details are available. |
| `error`     | Booking has failed with the supplier. |
| `cancelled` | Booking has been cancelled, either by the partner or the supplier.         |

---

### API Endpoint
The endpoint to use is the existing view booking endpoint: [/hxapi/viewamendcancel/view/](/hxapi/viewamendcancel/view/)

### Response Example

The response will now include a `bookingStatus` field to indicate the current status of the booking and a `suggestedPollingInterval` field to guide partners on the recommended polling frequency.

```json
{
  "bookingStatus": "pending",
  "suggestedPollingInterval": 300
}
```

---

## Best Practices  

1. **Polling Interval:**  
   - Follow the recommended intervals provided in the response.  
   - Avoid excessive requests to prevent unnecessary load on our systems.  

2. **Stop Polling:**  
   - When the `bookingStatus` is `confirmed` or `error`, stop polling and take the appropriate next steps. 

3. **Retry Policy:**  
   - Use exponential backoff for retries after transient errors (e.g., 500 errors or timeouts).  

---

## Workflow Example  

1. Make a booking 
2. Start Polling: Use the view booking endpoint to check the `bookingStatus`.  
   - **If `pending`:** Continue polling at the recommended intervals.  
   - **If `confirmed`:** Retrieve full details and stop polling.  
   - **If `error`:** Handle the failure appropriately.
   - **If `cancelled`:** Handle the cancellation appropriately.
3. Retrieve Full Details: Once the booking is confirmed, on the view booking response you'll have the complete booking information using the same endpoint.

By following these practices, partners can ensure an optimal customer experience while integrating with asynchronous products.  

---


### Documentation to follow for amendments and cancellations
