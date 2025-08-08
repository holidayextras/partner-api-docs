---

---

# Lookup Locations

[API Docs](/hxapi/) > product:[Car Hire](/hxapi/carhire) > endpoint:[locations](/hxapi/carhire/locations)

```html
GET: /carHire/locations
```

## Request

The following GET parameters are mandatory:

```javascript
"key": 1,
"Query": "London"
```

Query searches against name and/or country_name.

Example request:
```html
https://api.holidayextras.com/v1/carHire/locations.js?key=1&Query=London
```

## Response

Car Hire returns a list of locations, including a location code, name and country. The location code can be used as part of an Availability request when searching for Pickup or Dropoff locations.

```json
{
  "API_Reply": {
    "Locations": [
      {
        "code": "FL965",
        "name": "Amsterdam (Schipol) Airport",
        "country_name": "Netherlands"
      },
      {...},
      {...}
    ]
  }
}
```
