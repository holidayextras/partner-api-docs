---

---

# Transfers

[API Docs](/hxapi/) > product:[Transfers](index)

## Transfer Endpoints

When using the Transfer endpoints below, you will be able to search using various types of location data which will represent the transfers pickup and dropoff points. Currently, the API will accept IATA Codes, TTI Codes and Postcodes (Postcodes can be used for UK Transfers).

You will need a token to call the api. To get the user token use the existing endpoint: [Get Token](https://docs.holidayextras.co.uk/hxapi/usertoken/).

For the complete API specification, see the [OpenAPI schema](https://api.holidayextras.co.uk/v1/transfers/openapi.yml).


 | Action                     | Endpoint                                                                     | Method |
 | ------                     | --------                                                                     | ------ |
 | Availability               | [https://api.holidayextras.co.uk/v1/transfers/search](av)                    | GET    |
 | Make Booking               | [https://api.holidayextras.co.uk/v1/transfers/[TransferCode]](bkg)           | POST   |
 | View Booking               | [https://api.holidayextras.co.uk/v1/transfers/booking/[BookingRef]](view)    | GET    |
 | Cancel Booking             | [https://api.holidayextras.co.uk/v1/transfers/booking/[BookingRef]](cancel)  | DELETE |
 | Cancellation Policy        | [https://api.holidayextras.co.uk/v1/transfers/[BookingRef]/cancellation-policy](cancellation-policy) | GET    |
 | Amend Booking              | not supported                                                                |   -    |

To **View** your existing bookings, use the [View Booking](view) endpoint. To **Cancel** your existing bookings, use the [Cancel Booking](cancel) endpoint.
