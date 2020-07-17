---

---

# Product Library

The data returned from a Product Library request depends on the type of product you ask for. A request for a car park returns different fields than a request for a hotel.

By default, only fields that contain a value are returned.

You can specify the fields you want returned. Simply add the parameter fields and specify the field names. An error/warning element will be returned for any fields which do not exist, but the request will still return those elements for which there is a value. If you request a valid field, but there is no value, it will not be returned.


The purpose of most of the fields should be self-explanatory. If there is anything you do not understand, please email <sales@holidayextras.com>. There are no guarantees about the types of data returned, you should make no assumptions about a specific field being an integer etc.

Data returned should not be cached locally for periods of time greater than one day (24 hours).


### URL

/product/{productCode}

### Method

GET

### Parameters

| Name   | Format | Required |
|--------|--------|----------|
| token  | String | N        |
| key    | String | Y        |
| fields | String | N        |

## Available Fields

The available fields vary by product type. For each product type there is a recommended list of fields which should be requested to get the information required to effectively sell the product.

{% codetabs %}

  {% codetab Parking %}
    {% include_relative _parkingFields.md %}
  {% endcodetab %}

  {% codetab Hotel room only %}
    {% include_relative _hotelOnlyFields.md %}
  {% endcodetab %}

  {% codetab Hotel with parking %}
    {% include_relative _hotelParkingFields.md %}
  {% endcodetab %}

  {% codetab Lounge %}
    {% include_relative _loungeFields.md %}
  {% endcodetab %}

  {% codetab Fast track %}
    {% include_relative _fastTrackFields.md %}
  {% endcodetab %}

{% endcodetabs %}

---

## Examples

### Example 1 - Default Response

#### Request

{% codetabs %}
  {% codetab Live (XML) %}
    ```
    https://api.holidayextras.co.uk/v1/product/LGW4/lite?token=000015778&key=mytestkey
    ```
  {% endcodetab %}

  {% codetab Live (JSON) %}
    ```
    https://api.holidayextras.co.uk/v1/product/LGW4/lite.js?token=000015778&key=mytestkey
    ```
    Note the `.js` extension.
  {% endcodetab %}

  {% codetab Sandbox (XML) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey
    ```
  {% endcodetab %}

  {% codetab Sandbox (JSON) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey
    ```
    Note the `.js` extension.
  {% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
  {% codetab XML %}
    ```xml
    {% include_relative _examples/parking_reply_1.xml %}
    ```
  {% endcodetab %}

  {% codetab JSON %}
    ```json
    {% include_relative _examples/parking_reply_1.json %}
    ```
  {% endcodetab %}
{% endcodetabs %}

---

### Example 2 - Restricted field list

#### Request

{% codetabs %}
  {% codetab Live (XML) %}
    ```
    https://api.holidayextras.co.uk/v1/product/LGW4/lite?token=000015778&key=mytestkey&fields=name,longitude,latitude
    ```
  {% endcodetab %}

  {% codetab Live (JSON) %}
    ```
    https://api.holidayextras.co.uk/v1/product/LGW4/lite.js?token=000015778&key=mytestkey&fields=name,longitude,latitude
    ```
    Note the `.js` extension.
  {% endcodetab %}

  {% codetab Sandbox (XML) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite?token=000015778&key=mytestkey&fields=name,longitude,latitude
    ```
  {% endcodetab %}

  {% codetab Sandbox (JSON) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/LGW4/lite.js?token=000015778&key=mytestkey&fields=name,longitude,latitude
    ```
    Note the `.js` extension.
  {% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
  {% codetab XML %}
    ```xml
    {% include_relative _examples/parking_reply_2.xml %}
    ```
  {% endcodetab %}

  {% codetab JSON %}
    ```json
    {% include_relative _examples/parking_reply_2.json %}
    ```
  {% endcodetab %}
{% endcodetabs %}

---

### Example 3 - German Parking Request

#### Request

Requests for German products return a different set of fields. Explanation of fields not currently available.

{% codetabs %}
  {% codetab Live (XML) %}
    ```
    https://api.holidayextras.co.uk/v1/product/FRA0?key=mytestkey
    ```
  {% endcodetab %}

  {% codetab Live (JSON) %}
    ```
    https://api.holidayextras.co.uk/v1/product/FRA0.js?key=mytestkey
    ```
    Note the `.js` extension.
  {% endcodetab %}

  {% codetab Sandbox (XML) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/FRA0?key=mytestkey
    ```
  {% endcodetab %}

  {% codetab Sandbox (JSON) %}
    ```
    https://api.holidayextras.co.uk/sandbox/v1/product/FRA0.js?key=mytestkey
    ```
    Note the `.js` extension.
  {% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
  {% codetab XML %}
    ```xml
    {% include_relative _examples/parking_reply_3.xml %}
    ```
  {% endcodetab %}

  {% codetab JSON %}
    ```json
    {% include_relative _examples/parking_reply_3.json %}
    ```
  {% endcodetab %}
{% endcodetabs %}
