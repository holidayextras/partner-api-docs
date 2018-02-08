---

---

# Payment Gateway: Refund

[API Docs](/hxapi/) > [Payment Gateway](refund)

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
| Accept | String | `V1` | N | Defaults to V1. To use a different version please provide a different value. |

### Request Parameters

NB: All parameter names are case sensitive.

 | Name  | Data Type | Format | Mandatory? | Additional Information |
 | ----  | --------- | ------ | ---------- | ---------------------- |
 | channel | String | [A-Z] | Y | This will be supplied with your authentication credentials. |
  | business | String | [A-Z] | Y | This will be supplied with your authentication credentials. |
 | orders | Array | [String, String] | Y | An array listing all payments made for this booking. |
 | amount | String | [0-9] | Y | The price (in pence) to be refunded. |

## Refund Response

For a detailed explanation of the fields returned, please see below:

 | Field | Additional Information |
 | ----- | ---------------------- |
 | amount | The amount that has been refunded |
 | creationTime | The time the refund was made |
 | currency | The currency used to make the refund |
 | id | The unique id of the refund |
 | status | The status of the refund |
 | totalAuthorizedAmount | The total amount authorised |
 | totalCapturedAmount | The total amount captured |
 | totalRefundedAmount | The total amount refunded for this orderId |

## Examples

Below are examples of both the request and response for a refund.

### Refund Request

**POST**  `https://api.holidayextras.co.uk/v1/pay`

**HEADERS** <br />
`Content-Type: application/json` <br />
`Accept: v1` <br />
`auth: testUser:testPassword`

```
{
  "channel": "magenta",
  "business": "insurance",
  "orders": ["testOrderId"],
  "amount": "1234"
}
```

### Refund Response

```
{
    "amount": 12.34,
    "creationTime": "2018-02-08T11:59:44.050Z",
    "currency": "GBP",
    "id": "REFUND-testOrderId",
    "status": "EXCESSIVELY_REFUNDED",
    "totalAuthorizedAmount": 0,
    "totalCapturedAmount": 0,
    "totalRefundedAmount": 12.34
}
```
