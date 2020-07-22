---

---

# Transfers

[API Docs](/hxapi/) > product:[Transfers](index)

## Transfer Endpoints

When using the Transfer endpoints below, you will be able to search using various types of location data which will represent the transfers pickup and dropoff points. Currently, the API will accept IATA Codes, TTI Codes and Postcodes (Postcodes can be used for UK Transfers).

 | Action                     | Endpoint                                                                     | Method |
 | ------                     | --------                                                                     | ------ |
 | Availability               | [https://api.holidayextras.co.uk/v1/transfers/search](av)                    | GET    |
 | Make Booking               | [https://api.holidayextras.co.uk/v1/transfers/[TransferCode]](bkg)           | POST   |

To View and Cancel your existing bookings, this can be done using the generic product based [View Booking](/hxapi/viewamendcancel/view/) and [Cancel Booking](/hxapi/viewamendcancel/cancel/) endpoints.
