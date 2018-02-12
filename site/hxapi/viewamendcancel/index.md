---

---

# Manage A Booking

[API Docs](/hxapi/) > product:[viewamendcancel](index)

## Manage A Booking Endpoints

Here are the endpoints for managing a booking:

| View booking | [https://api.holidayextras.co.uk/v1/booking/YourBookingRef](view) | GET |
| Amend booking - Simple | [https://api.holidayextras.co.uk/v1/booking/YourBookingRef] (amend_simple) | POST |
| Amend booking - Complex | [https://api.holidayextras.co.uk/v1/booking/YourBookingRef] (amend_complex) | POST |
| Cancel booking | [https://api.holidayextras.co.uk/v1/booking/YourBookingRef](cancel) | POST |

## Manage A Booking Top Tips

The three methods provided will enable your customers via your integration to manage their own booking online.

### Amending a booking

We allow both simple and complex amends:

- A ***simple amend*** is where the booking details are updated, without affecting the price. This is also known as an "amend no re-price". For example, adding a car registration number to a parking booking.
- A ***complex amend*** is where the booking details are updated and this does affect the price. This is also known as an "amend re-price". For example, changing the date of a booking.
