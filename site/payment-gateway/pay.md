---

---

# Payment Gateway: Pay

[API Docs](/payment-gateway/) > [Payment Gateway](pay)

## Payment Request

This endpoint will take payment using a token and required payment parameters.

### Method

POST

### Endpoint

To make a payment, the endpoint to use is:

```
https://api.holidayextras.co.uk/v1/pay
```

### Request Headers

| Name  | Data Type | Format | Mandatory? | Additional Information |
| ----  | --------- | ------ | ---------- | ---------------------- |
| Content-Type | String | `application/json` | Y | This should always be `application/json` |
| auth   | String | `username:password` | Y | This will be created and provided to you, and is required with every request.|
| Accept | String | `V1` | N | Defaults to V1. To use a different version please provide a different value. |

### Request Parameters

NB: All parameter names are case sensitive.

 | Name  | Data Type | Format | Mandatory? | Additional Information |
 | ----  | --------- | ------ | ---------- | ---------------------- |
 | channel | String | [A-Z] | Y | This will be supplied with your authentication credentials. |
 | paymentId | String | [A-Z] | Y | A unique ID to be used when making the payment. |
 | token   | String | [0-9] | Y | A tokenised card to make the payment against. |
 | paymentReference | String | [A-Z] | Y | A reference used to group multiple payments together, doesn't need to be unique. |
 | amount | String | [0-9] | Y | The price (in pence) to be paid. |

## Payment Response

For a detailed explanation of the fields returned, please see below:

 | Field | Additional Information |
 | ----- | ---------------------- |
 | amount | The amount that has been paid |
 | status | The status of the payment |
 | error | The error if the payment fails |

## Examples

Below are examples of both the request and response for a new payment.

### Payment Request

**POST**  `https://api.holidayextras.co.uk/v1/pay`

**HEADERS** <br />
`Content-Type: application/json` <br />
`Accept: v1` <br />
`auth: testUser:testPassword`

```
{
  "channel": "channel",
  "paymentId": "testPaymentId",
  "token": "4111111111111111",
  "paymentReference": "testPaymentRef",
  "amount": "1234"
}
```

### Payment Response


#### Successful payment

```
{
    "amount": 12.34,
    "id": "testPaymentId",
    "status": "Success"
}
```

#### Failed payment

```
{
    "amount": 12.34,
    "status": "Failed",
    "error": "Failed to make payment"
}
```
