---

---

# Product Upgrades

[API Docs](/hxapi/) > [Product Upgrades](/hxapi/upgrade)

## Upgrades Availability Request

Upgrades are currently only supported for parking, hotel and lounge bookings. Upgrades can be requested on a per product basis.

#### Method

GET

#### Endpoint

/upgrade/{productCode}

NB: Where `productCode` is the code of the base product i.e. the parking/hotel/lounge etc. product.

```
https://api.holidayextras.com/v1/upgrade/LGV4
```

## Request Parameters

| Name        | Data Type | Format           | Mandatory? | Additional Information                                                                                                                                          |
|-------------|-----------|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ABTANumber  | String    | [A-Z0-9] 5 chars | Y          | This is also known as an 'agent code'. <br>This will be confirmed to you by your Account Manager during set up.                                                 |
| Password    | String    | [A-Z0-9] 5 chars | Y*         | Password required for retail agent requests - intermediaries do not require a password.<br>This will be confirmed to you by your Account Manager during set up. |
| Initials    | String    | [A-Z] 3 chars    | N          | The initials of the Operator / Agent.                                                                                                                           |
| key         | String    | [A-Z]            | Y          | This will be assigned to you by your Account Manager during set up.                                                                                             |
| token       | String    | [0-9] 9 chars    | Y          | Please see [user token endpoint](/hxapi/usertoken) for details of how to generate a token.                                                                      |
| ArrivalDate | String    | YYYY-MM-DD       | Y          | This should be the same as the `ArrivalDate` from the base product request.                                                                                     |
| ArrivalTime | Time      | HHMM             | Y          | This should be the same as the `ArrivalTime` from the base product request.                                                                                     |
| DepartDate  | Date      | YYYY-MM-DD       | N          | This should be the same as the `DepartDate` from the base product request.                                                                                      |
| DepartTime  | Time      | HHMM             | N          | This should be the same as the `DepartTime` from the base product request.                                                                                      |
| Adults      | Integer   | [0-9]            | Y*         | Mandatory for Lounge upgrade requests. Number of adults in the party                                                                                            |
| Children    | Integer   | [0-9]            | Y*         | Mandatory for Lounge upgrade requests. Number of children in the party                                                                                          |


## Upgrade Availability Response

The response will return a list of available upgrades.
Upgrades are sold on a per booking, per person, or per room basis.
Upgrades can be for the day before travel, day of departure or day of return.

| Field              | Additional Information                                                                      |
|--------------------|---------------------------------------------------------------------------------------------|
| Code               | Product code for the upgrade                                                                |
| Name               | Name of the upgrade                                                                         |
| Per                | Pricing basis, either per *P*erson, per *B*ooking, per *R*oom                               |
| Canx               | Whether the upgrade is cancellable (Y/N)                                                    |
| description        |                                                                                             |
| supplement_type    | Type classification for the upgrade                                                         |
| Date               | Date the upgrade is to be booked for. Format YYYY-MM-DD                                     |
| only_for_adults    | Upgrades restricted to adult only parties e.g. Adult only lounges                           |
| Price              | The price of the upgrade minus any discounts. Only present for per booking upgrades         |
| NonDiscPrice       | The total price of the upgrade before discounts. Only present for per booking upgrades      |
| DiscAmt            | The amount of any discount applied. Only present for per booking upgrades                   |
| AdPrice            | The per adult price minus any discounts. Only present for per person upgrades               |
| NonDiscAdPrice     | The per adult price before any discounts. Only present for per person upgrades              |
| AdDiscAmt          | The amount of discount applied to the per adult price. Only present for per person upgrades |
| ChPrice            | The per child price minus any discounts. Only present for per person upgrades               |
| NonDiscChPrice     | The per child price before any discounts. Only present for per person upgrades              |
| ChDiscAmt          | The amount of discount applied to the child price. Only present for per person upgrades     |
| API_Header/Request | The API returns every parameter and value you sent in the request.                          |

## Examples

### Example 1 - Carpark Upgrades

#### Request

{% codetabs %}
  {% codetab XML %}
  ```
https://api.holidayextras.com/v1/upgrade/STN5?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2020-11-03&ArrivalTime=12:30&DepartDate=2020-11-11&DepartTime=13:45
  ```
  {% endcodetab %}

  {% codetab JSON %}
```
https://api.holidayextras.com/v1/upgrade/STN5.js?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2020-11-03&ArrivalTime=12:30&DepartDate=2020-11-11&DepartTime=13:45
```
  {% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
{% codetab XML %}
```xml
{% include_relative examples/_example_1_response.xml %}
```
{% endcodetab %}

{% codetab JSON %}
```json
{% include_relative examples/_example_1_response.json %}
```
{% endcodetab %}
{% endcodetabs %}

### Example 1 - Hotel Upgrades

#### Request

{% codetabs %}
{% codetab XML %}
```
https://api.holidayextras.com/v1/upgrade/LGWSOF?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2020-11-03&ArrivalTime=12:30&DepartDate=2020-11-11&DepartTime=13:45
```
{% endcodetab %}

{% codetab JSON %}
```
https://api.holidayextras.com/v1/upgrade/LGWSOF.js?ABTANumber=YourABTANumber&Password=YourPassword&key=YourKey&token=YourToken&ArrivalDate=2020-11-03&ArrivalTime=12:30&DepartDate=2020-11-11&DepartTime=13:45
```
{% endcodetab %}
{% endcodetabs %}

#### Response

{% codetabs %}
{% codetab XML %}
```xml
{% include_relative examples/_example_2_response.xml %}
```
{% endcodetab %}

{% codetab JSON %}
```json
{% include_relative examples/_example_2_response.json %}
```
{% endcodetab %}
{% endcodetabs %}