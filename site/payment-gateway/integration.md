---

---

# Payment Gateway: Integration

[API Docs](/payment-gateway/) > [Payment Gateway](integration)

## Getting Setup

This explains the step by step process of getting setup in order to be able to access the Payment Gateway.

### 1. Ask for authentication credentials

You need to contact your Holiday Extras representative to get your authentication credentials created. These credentials are required with every request made to the Payment Gateway endpoints. Without them, you will not be able to access these endpoints. The authentication credentials should be passed in an `auth` header, demonstrated in each of endpoints documentation.

### 2. Ask for a channel

When integrating with the Payment Gateway, we will provide you with a channel to pass in the body of every request. This is for us to use to determine who is using our Payment Gateway. Please see the endpoint documentation for usage on the `channel` parameter.
