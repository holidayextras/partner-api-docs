---

---

# Car Registration

Retrieve information about a UK registered vehicle.

### URL

/car_reg/{registration}

### Method

GET

### Parameters

| Name   | Format | Required |
|--------|--------|----------|
| registration  | String | Y        |
| key    | String | Y        |

---

## Examples

#### Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.co.uk/v1/car_reg/AMS1?key=mytestkey
```
{% endcodetab %}

{% codetab JSON %}
```
https://api.holidayextras.co.uk/v1/car_reg/AMS1.js?key=mytestkey
```
Note the `.js` extension.
{% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
{% codetab XML %}
```xml
{% include_relative _examples/reply.xml %}
```
{% endcodetab %}

{% codetab JSON %}
```json
{% include_relative _examples/reply.json %}
```
{% endcodetab %}
{% endcodetabs %}


