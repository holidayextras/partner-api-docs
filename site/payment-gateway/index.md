---

---

# Payment Gateway

[API Docs](/index) > [Payment Gateway](index)

## Integration guide

Please read the integration guide before attempting to make any requests to these endpoints. Without the appropriate setup, you will not be able to access any of the Payment Gateway functionality.

The correct steps to get setup can be found in our [guide to getting setup.](integration)

## Versioning

This API is versioned, a specific version can be targetted with an `Accept` header on the request with a value matching `application/vnd.holidayextras.v{VERSION_NUMBER}+json`.

### Notice on sunset of v1

As of September 16th 2022 v1 of the payment gateway API will not longer be supported. Clients should ensure they are migrated fully to v2 before this time to ensure that payments can still be taken.

## Payment

| Request | Endpoint | Method | Versions |
| ------- | -------- | ------ | -------- |
| Make Payment | https://payment-gateway.holidayextras.co.uk/pay | POST | [v1](v1/pay) [v2](v2/pay) |

## Refund

| Request | Endpoint | Method | Versions |
| ------- | -------- | ------ | -------- |
| Make Refund | https://payment-gateway.holidayextras.co.uk/refund | POST | [v1](v1/refund) [v2](v2/refund) |
