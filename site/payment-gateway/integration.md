---

---

# Payment Gateway: Integration

[API Docs](/) > [Payment Gateway](/payment-gateway/) > [Integration](/payment-gateway/integration/)

## How it works

This is a high overview of how the payment flow works.

There are 2 main steps in our payment gateway integration system. You will need to:

1. Integrate our frontend payment script on your payment page
2. Make token payment requests to our API from your backend system (with the token provided by the frontend script)

The goal of the frontend payment script is to make it possible for customers to provide their card details in a secure way.

Once customers provide their card number, the card number gets tokenised and it's only this token we'll be using throughout the payment flow afterwards. This token is secure and cannot be used for anything else than making payments within the HX payment system.

The frontend payment script will need a placeholder provided by you which will sit in your form. When the placeholder is in place, the script will create several DOM elements which are needed for the user to interact with so that a token can be gathered by the customer. Once the token is populated on the page, the form can be submitted and you will have access to the token in your backend.

Then you will need to make a POST request to our payment gateway API with that token for making a payment.

## Getting Setup

This explains the step by step process of getting setup in order to be able to access the Payment Gateway.

### 1. Ask for authentication credentials

You need to contact your Holiday Extras representative to get your authentication credentials created. These credentials are required with every request made to the Payment Gateway endpoints. Without them, you will not be able to access these endpoints. The authentication credentials should be passed in an `auth` header, demonstrated in each of endpoints documentation.

### 2. Ask for a channel

When integrating with the Payment Gateway, we will provide you with a channel to pass in the body of every request. This is for us to use to determine who is using our Payment Gateway. Please see the endpoint documentation for usage on the `channel` parameter.

### 3. Integrate the frontend payment script

To integrate the script into your page you need a few prerequisites. You will need to:

- have your domain served on https
- add an empty placeholder HTML element into your form
- load the payment script on the page
- configure the script on page load

Here is a very simple example snippet that demonstrates this:

```html
<form>
  ... the contents of your existing form
  <!-- Add the payment placeholder -->
  <div id="hx-payment-placeholder"></div>
  ... rest of your form with any other inputs and the submit button, etc
</form>

... any other content you have on your page

<!-- Add the frontend payment script -->
<script src="https://api.holidayextras.co.uk/payment-gateway/payment.1.0.0.min.js"></script>
<!-- Configure the script -->
<script>
window.hxPayment.configure({
  paymentFailed: false // you will need to dynamically provide the value for this
})
</script>
```

The placeholder div is used by the payment script to put the appropriate DOM elements it needs in order to get the customer card details.

The fields that get created are:
- expiry date input (needed for tokenising the card number)
- token input (needed so that it gets submitted with your form to make a payment)
- obfuscated card number input (will be used only if there were 2 failed attempts to get the card number via DTMF)
- button to trigger DTMF

When the payment script loads on the page and gets configured, it will put those fields so the customer can input the expiry date and then trigger our DTMF system. If the customer successfully inputs their card number via DTMF in a secure way the script will populate the token field with the payment token. When the form gets submitted that token can be used on the backend to make a token payment.

If DMTF fails 2 times the payment script will fallback to putting a card number input on the page which will be replaced by an iframe for inputting the card number in a secure way. Once the card number and expiry dates are populated, the script will again automatically populate the token field.

You don't need to track the count of failures as this is done by the payment script. All you need to do is to provide a boolean value for the result of the last payment attempt. This should be done on each page load when the payment script gets configured.
