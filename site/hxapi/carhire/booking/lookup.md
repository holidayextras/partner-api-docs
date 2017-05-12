---

---

# Lookup Booking

[API Docs](/hxapi/) > product:[Car Hire](/hxapi/carhire) > endpoint:[lookup booking](lookup)

```html
GET: /carHire-booking/<bookingReference>
```

## Request

The following GET parameters are mandatory:

```javascript
"key": 1,
"Email": "example@email.com", // the email address that made the booking
"ABTANumber": "AgentCode",
"Password": "xxxxxxxx",
"token": "123456789" // user token
```

## Response

Car Hire lookup booking will return the full booking details, including the customer, product and pricing details - including any commissions.

```json
{
  "API_Reply":{
    "ATTRIBUTES":{
      "System":"ABC",
      "Product":"CarHire",
      "RequestCode":7,
      "Result":"OK"
    },
    "Booking":{
      "BookingRef":"FL3SIAH-4H222220",
      "BasketRef":"",
      "SupplierRef":1049525043,
      "VoucherRef":"",
      "SupplierConfirmed":"",
      "Type":"legacy",
      "DateBooked":"2016-12-12",
      "DateCancelled":null,
      "SearchParams":{
        "agent":"TESTL",
        "pickup_location":"FL965",
        "dropoff_location":"FL965",
        "email":"example@email.com",
        "from":"2017-02-05 12:00",
        "to":"2017-02-08 16:00",
        "date_of_birth":"1990-01-04"
      },
      "Customer":{
        "email":"example@email.com",
        "phone":"01234123123",
        "date_of_birth":"1990-01-04",
        "title":"Mr",
        "first_name":"Test",
        "last_name":"test"
      },
      "Product":{
        "code":"FLERECMR",
        "price":19774,
        "name":"PEUGEOT 208 AC or Similar",
        "images":[
          {
            "src":"//static.europcar.com/carvisuals/partners/600x350/ECMR_NL.jpeg",
            "alt":"PEUGEOT 208 AC or Similar"
          }
        ],
        "brand_image":null,
        "videos":"",
        "discount":null,
        "similar_products":[

        ],
        "grouping_name":null,
        "upsell_upgrade":null,
        "upsell_products":[

        ],
        "upsell_title":null,
        "upsell_text":null,
        "ghost_upsell_products":[

        ],
        "type":"carHire",
        "package_name":"Basic",
        "on_request":"",
        "passengers":4,
        "doors":4,
        "luggage_capacity":1,
        "features":{
          "air_conditioning":true,
          "automatic_transmission":""
        },
        "provider":"EuropCar",
        "pickup_location":{
          "name":"Amsterdam (Schipol) Airport",
          "will_deliver_vehicle":"",
          "delivery_surcharge":null,
          "location_type":"At the airport",
          "depot":{
            "address_1":"AANKOMSTPASSAGE 10",
            "address_2":"ARRIVAL HALL  WEST 3  'PLAZA'",
            "address_3":"AMSTERDAM",
            "county":"",
            "country_name":"Netherlands",
            "postcode":"1118 AX",
            "phone":"31 20 3164190",
            "opening_times":{
              "mon":{
                "open":"06:30",
                "close":"23:00"
              },
              "tue":{
                "open":"06:30",
                "close":"23:00"
              },
              "wed":{
                "open":"06:30",
                "close":"23:00"
              },
              "thu":{
                "open":"06:30",
                "close":"23:00"
              },
              "fri":{
                "open":"06:30",
                "close":"23:00"
              },
              "sat":{
                "open":"07:00",
                "close":"23:00"
              },
              "sun":{
                "open":"07:00",
                "close":"23:00"
              }
            }
          }
        },
        "dropoff_location":{
          "name":"Amsterdam (Schipol) Airport",
          "will_deliver_vehicle":"",
          "delivery_surcharge":null,
          "location_type":"At the airport",
          "depot":{
            "address_1":"AANKOMSTPASSAGE 10",
            "address_2":"ARRIVAL HALL  WEST 3  'PLAZA'",
            "address_3":"AMSTERDAM",
            "county":"",
            "country_name":"Netherlands",
            "postcode":"1118 AX",
            "phone":"31 20 3164190",
            "opening_times":{
              "mon":{
                "open":"06:30",
                "close":"23:00"
              },
              "tue":{
                "open":"06:30",
                "close":"23:00"
              },
              "wed":{
                "open":"06:30",
                "close":"23:00"
              },
              "thu":{
                "open":"06:30",
                "close":"23:00"
              },
              "fri":{
                "open":"06:30",
                "close":"23:00"
              },
              "sat":{
                "open":"07:00",
                "close":"23:00"
              },
              "sun":{
                "open":"07:00",
                "close":"23:00"
              }
            }
          }
        },
        "selling_texts":[

        ],
        "special_offer":"",
        "vehicle_class":"Economy",
        "vehicle_type":"Car",
        "terms":{
          "url":"//www.flexibleautos.com/TandCs/ER%20NL.html",
          "complete":null,
          "fuel_policy":"Cars will be supplied with a full tank of fuel and should be returned full otherwise the client will be charged for missing fuel plus a refuelling charge of 20 EUR + tax.<br>",
          "excess_policy":"There is an insurance excess of between 440 EUR and 660 EUR depending on car group.<br>",
          "price_includes":[
            "Unlimited Mileage",
            "Collision Damage Waiver (with Excess)",
            "Third Party Liability Insurance",
            "Theft Waiver (with Excess)",
            "Local Tax",
            "Airport Fee"
          ]
        },
        "payment_surcharge":{

        },
        "one_way_fee":{
          "is_applicable":"",
          "details":null
        }
      },
      "Upgrades":[

      ],
      "Flights":{
        "out":null,
        "return":null
      },
      "Pricing":{
        "amount_paid":null,
        "amount_due":null,
        "total_price":19774,
        "card_surcharge":null,
        "base_price":19774,
        "cancellation_waiver":"",
        "refunded":"",
        "agent_commission":"",
        "vat_on_commission":"",
        "vat":""
      },
      "Payment":{
        "payment_type":"invalid"
      },
      "Notes":[

      ],
      "Tracking":"",
      "Client":"",
      "Remarks":"",
      "Amendable":"N",
      "Cancellable":"N",
      "Addonable":"N"
    },
    "API_Header":{
      "Request":{
        "key":1,
        "email":"example@email.com",
        "ABTANumber":"TESTL",
        "Password":"Redacted",
        "token":"244bbd6d-d65a-4015-82fe-f53aed1a5657",
        "format":"js"
      }
    }
  }
}
```
