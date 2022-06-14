---

---

# Payment Gateway: Refund

[API Docs](/) > [Payment Gateway](/payment-gateway/) > [Refund](/payment-gateway/v2/refund)

## Refund Request

This endpoint will make a refund based on existing payments.

### Method

POST

### Endpoint

To make a refund, the endpoint to use is:

```
https://payment-gateway.holidayextras.co.uk/refund
```

### Request Headers

| Name  | Data Type | Format | Mandatory? | Additional Information |
| ----  | --------- | ------ | ---------- | ---------------------- |
| Content-Type | String | `application/json` | Y | This should always be `application/json` |
| Authorization   | String | `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` | Y | Base64 encoded string for the `username:password` credentials which will be created and provided to you. This header is required with every request.|
| Accept | String | `application/vnd.holidayextras.v2+json` | N | To use a different version please provide a different value. |

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

**POST**  `https://payment-gateway.holidayextras.co.uk/refund`

**HEADERS** <br />
`Content-Type: application/json` <br />
`Accept: application/vnd.holidayextras.v2+json` <br />
`Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

```
{
  "channel": "channel",
  "payments": ["testPaymentId1", "testPaymentId2"],
  "amount": "1234"
}
```

### Refund Response

#### Successful Refund
```
{
    "amount": 12.34,
    "id": "REFUND-testPaymentId1",
    "status": "SUCCESS"
}
```

#### Failed Refund

```
{
    "amount": 12.34,
    "status": "FAIL",
    "error": "Failed making refund"
}
```
