---

---

# Availability

[API Docs](/hxapi/) > product:[Car Hire](/hxapi/carhire) > endpoint:[availability](availability)

```html
GET: /carHire/products
```

## Request

The following GET parameters are mandatory:

```javascript
"key": 1,
"From": "YYYY-MM-DD",
"ArrivalTime": "HHmm", // 24 hour time format
"To": "YYYY-MM-DD",
"DepartTime": "HHmm", // 24 hour time format
"PickupLocation": "FL965", // code from the locations request
"DropoffLocation": "FL965", // code from the locations request
"DateOfBirth": "YYYY-MM-DD",
"token": "123456789" // user token
```

Example request:
```html
http://api.holidayextras.co.uk/v1/sandbox/carHire/products.js?key=1&From=06NOV16&ArrivalTime=1200&To=13NOV&DepartTime=1600&PickupLocation=FL965&DropoffLocation=FL965&DateOfBirth=1990-10-13
```

## Response

Car Hire returns all of each product's content within the availability request (repeated elements omitted and represented by {…}).

```json
{
  "API_Reply": {
    "ATTRIBUTES": {
      "Product": "CarHire",
      "RequestCode": 1,
      "Result": "OK",
      "expires": "2016-11-03 12:53:25"
    },
    "CarHire": [
      {
        "ATTRIBUTES": [],
        "Name": "PEUGEOT 208 AC or Similar",
        "Code": "FLERECMR",
        "BookingURL": "/carHire/FLERECMR.js",
        "MoreInfoURL": null,
        "PackageName": "Inclusive",
        "VehicleType": "Car",
        "Surcharge": {
          "credit": {
            "calculated": 400,
            "total": 26223,
            "percent": 2.5,
            "min": 150,
            "max": 400
          },
          "debit": {
            "calculated": 0,
            "total": 25823
          }
        },
        "Passengers": 4,
        "Provider": "EuropCar",
        "TotalPrice": 258.23,
        "VehicleClass": "Economy",
        "LuggageCapacity": 1,
        "PickupLocation": {
          "name": "Amsterdam (Schipol) Airport",
          "willDeliverVehicle": "",
          "deliverySurcharge": null,
          "address1": "AANKOMSTPASSAGE 10",
          "address2": "ARRIVAL HALL  WEST 3  'PLAZA'",
          "address3": "AMSTERDAM",
          "countryName": "Netherlands",
          "postcode": "1118 AX",
          "phone": "31 20 3164190",
          "locationType": "At the airport",
          "openingTimes": {
            "mon": {
              "open": "06:30",
              "close": "23:00"
            },
            "tue": {
              "open": "06:30",
              "close": "23:00"
            },
            "wed": {
              "open": "06:30",
              "close": "23:00"
            },
            "thu": {
              "open": "06:30",
              "close": "23:00"
            },
            "fri": {
              "open": "06:30",
              "close": "23:00"
            },
            "sat": {
              "open": "07:00",
              "close": "23:00"
            },
            "sun": {
              "open": "07:00",
              "close": "23:00"
            }
          }
        },
        "Images": [
          {
            "src": "//static.europcar.com/carvisuals/partners/600x350/ECMR_NL.jpeg",
            "alt": "PEUGEOT 208 AC or Similar"
          }
        ],
        "AllowNoContent": null,
        "Terms": {
          "url": "//www.flexibleautos.com/TandCs/ER%20NL.html",
          "complete": [
            {
              "heading": "EXCESS",
              "text": "There is an insurance excess of between 440 EUR and 660 EUR depending on car group."
            },
            {
              "heading": "FUEL",
              "text": "Cars will be supplied with a full tank of fuel and should be returned full otherwise the client will be charged for missing fuel plus a refuelling charge of 20 EUR + tax."
            },
            {
              "heading": "DEPOSIT",
              "text": "The lead driver must have a credit card in their name. A deposit will be taken from the card to cover fuel and the insurance excess."
            },
            {
              "heading": "ADDITIONAL DRIVER",
              "text": "The cost for an additional driver is payable locally 4.2 EUR + tax per day, maximum charge 42 EUR + tax per rental."
            },
            {
              "heading": "DRIVING LICENCE REQUIREMENTS",
              "text": "All drivers must have held a full, valid national license. UK License for at least one year. Only the photo card part of the licence is required however if the driver also has a paper part, we recommend that they take this with them.   The driver must also provide an additional form of photographic ID in the form of a Full Valid Passport.\n\nOverseas Licence: International driving permit is required with all non-European licences if the driving licence is written in a language or characters different to those of the renting country. Even when an International Driving License is required, a domestic licence must be provided."
            },
            {
              "heading": "BABY SEATS / BOOSTER SEATS",
              "text": "Child seats are available on request at a cost of 4.2 EUR + tax per day, maximum charge 42 EUR + tax per rental."
            },
            {
              "heading": "AGE RESTRICTIONS",
              "text": "Minimum rental age is 21 years. \n\nMinimum driving license period – 1 year."
            },
            {
              "heading": "GPS UNITS / NAVIGATION",
              "text": "GPS units are available from airport locations at a cost of 10.08 EUR + tax per day, maximum charge 100.84 EUR + tax per rental."
            },
            {
              "heading": "OUT OF HOURS",
              "text": "On a request basis only at a charge of 25 EUR + tax."
            },
            {
              "heading": "DRIVING RESTRICTIONS",
              "text": "The renter is allowed to drive in: Andorra, Austria, Belgium, France, Denmark, Finland, Germany, Ireland, Italy, Luxembourg, The Netherlands, Norway, Portugal, Spain (except Ceuta & Melilla), Sweden, Switzerland and the United Kingdom."
            },
            {
              "heading": "GRACE PERIOD",
              "text": "Europcar allows a grace period of 30 minutes."
            },
            {
              "heading": "WHATS NOT INCLUDED",
              "text": "Personal Accident Insurance \nOptional extras signed for locally\nOne Way Rental Charges \nParking Fines, Toll charges, congestions charges, Key Replacement\nTow Charges"
            }
          ],
          "fuelPolicy": "Cars will be supplied with a full tank of fuel and should be returned full otherwise the client will be charged for missing fuel plus a refuelling charge of 20 EUR + tax.<br>",
          "excessPolicy": "There is an insurance excess of between 440 EUR and 660 EUR depending on car group.<br>",
          "priceIncludes": [
            "Unlimited Mileage",
            "Collision Damage Waiver (with Excess)",
            "Third Party Liability Insurance",
            "Theft Waiver (with Excess)",
            "Local Tax",
            "Airport Fee"
          ]
        },
        "Price": 25823,
        "Doors": 4,
        "SellingTexts": [
          "FUEL - Full to Full",
          "EXCESS - Standard Excess"
        ],
        "OnRequest": "",
        "NonDiscPrice": 258.23,
        "DropoffLocation": {
          "name": "Amsterdam (Schipol) Airport",
          "willDeliverVehicle": "",
          "deliverySurcharge": null,
          "address1": "AANKOMSTPASSAGE 10",
          "address2": "ARRIVAL HALL  WEST 3  'PLAZA'",
          "address3": "AMSTERDAM",
          "countryName": "Netherlands",
          "postcode": "1118 AX",
          "phone": "31 20 3164190",
          "locationType": "At the airport",
          "openingTimes": {
            "mon": {
              "open": "06:30",
              "close": "23:00"
            },
            "tue": {
              "open": "06:30",
              "close": "23:00"
            },
            "wed": {
              "open": "06:30",
              "close": "23:00"
            },
            "thu": {
              "open": "06:30",
              "close": "23:00"
            },
            "fri": {
              "open": "06:30",
              "close": "23:00"
            },
            "sat": {
              "open": "07:00",
              "close": "23:00"
            },
            "sun": {
              "open": "07:00",
              "close": "23:00"
            }
          }
        },
        "Features": {
          "airConditioning": null,
          "automaticTransmission": ""
        },
        "Discount": null,
        "SupplierData": {
          "rateQualifier": "E162281612011054F0",
          "productId": 1,
          "baseProductCurrency": "GBP",
          "excessRefundPolicy": {
            "price": 4193,
            "discount": null
          }
        }
      },
      {...}
    ],
    "Pricing": {
      "CCardSurchargePercent": 2.5,
      "CCardSurchargeMin": 1.5,
      "CCardSurchargeMax": 4
    },
    "API_Header": {
      "Request": {
        "key": 1,
        "From": "2016-11-06",
        "ArrivalTime": 1200,
        "To": "2016-11-13",
        "DepartTime": 1600,
        "PickupLocation": "FL965",
        "DropoffLocation": "FL965",
        "DateOfBirth": "1990-10-10",
        "format": "js"
      }
    }
  }
}
```
