---

---

# Payment Gateway: Refund

[API Docs](/payment-gateway/) > [Payment Gateway](refund)

## Refund Request

This endpoint will make a refund based on existing payments.

### Method

POST

### Endpoint

To make a refund, the endpoint to use is:

```
https://api.holidayextras.co.uk/v1/refund
```

### Request Headers

| Name  | Data Type | Format | Mandatory? | Additional Information |
| ----  | --------- | ------ | ---------- | ---------------------- |
| Content-Type | String | `application/json` | Y | This should always be `application/json` |
| auth   | String | `username:password` | Y | This will be created and provided to you, and is required with every request.|
| Accept | String | `application/vnd.holidayextras.v1+json` | N | To use a different version please provide a different value. |

### Request Parameters

NB: All parameter names are case sensitive.

 | Name  | Data Type | Format | Mandatory? | Additional Information |
 | ----  | --------- | ------ | ---------- | ---------------------- |
 | channel | String | [A-Z] | Y | This will be supplied with your authentication credentials. |
 | payments | Array | [String, String] | Y | An array listing all payments made for this booking. |
 | amount | String | [0-9] | Y | The price (in pence) to be refunded. |

## Refund Response

For a detailed explanation of the fields returned, please see below:

 | Field | Additional Information |
 | ----- | ---------------------- |
 | amount | The amount that has been refunded |
 | status | The status of the refund |
 | error | The error if the refund fails |

## Examples

Below are examples of both the request and response for a refund.

### Refund Request

**POST**  `https://api.holidayextras.co.uk/v1/pay`

**HEADERS** <br />
`Content-Type: application/json` <br />
`Accept: application/vnd.holidayextras.v1+json` <br />
`auth: testUser:testPassword`

```
{
  "channel": "channel",
  "payment": ["testPaymentId1", "testPaymentId2"],
  "amount": "1234"
}
```

### Refund Response

#### Successful Refund
```
{
    "amount": 12.34,
    "id": "REFUND-testPaymentId1",
    "status": "Success"
}
```

#### Failed Refund

```
{
    "amount": 12.34,
    "status": "Fail",
    "error": "Failed making refund"
}
```
