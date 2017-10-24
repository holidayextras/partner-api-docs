---

---

# Payment

For all UK partners and any new partners integrating after **1st July 2017**, Holiday Extras will not accept payment details being passed through the API. The responsibility for collecting and processing payment from the customer is the responsibility of the partner.

If you have any questions concerning this then please contact your Account Manager.

## Existing integrations

For existing integrations *in Europe only* we will continue to support the following payment methods via the API:

### SEPA

To make a payment using SEPA, the following fields must be included in the booking request:

| Name | Data Type	| Format	| Mandatory?	| Additional Information |
|------|------------|---------|-------------|------------------------|
| AccountName | String | [A-Z0-9] | Y | Name on the account |
| AccountNumber | String | See additional information | Y | The IBAN account number. The IBAN number structure comprises 2 character country code, 2 character check digits (integer), followed by up to 30 characters (integers). [More information on IBAN.](http://www.sepaforcorporates.com/single-euro-payments-area/iban-number-format-sepa-country/) |
| SortCode | String | [0-9] 11 chars  | Y | The SEPA sort code |

The following test details can be used in sandbox only:

- AccountName - Mr T Test
- AccountNumber - DE00000000000000000066
- SortCode - 99999999999

### Payment by credit or debit card

To make a payment using credit or debit cards, you must use a different endpoint to that stated in the Detailed Guides. This is to enable us to tokenise the card details before they reach our systems.

The endpoints that must be used are:

Sandbox:

`https://payment.holidayextras.co.uk/legacy/sandbox/`

Production:

`https://payment.holidayextras.co.uk/legacy/`

In order for us to process the payment, the following fields must be included in the booking request:

| Name | Data Type	| Format	| Mandatory?	| Additional Information |
|------|------------|---------|-------------|------------------------|
| CardNumber | String | [0-9] Max 16 chars | Y | Name on the account |
| ExpiryDate | Date | MMYY | Y | The expiry date of the card |
| CV2 | Integer | [0-9] 4 chars | Y* | * This is a mandatory requirement for partners in the UK; for European partners this is discretionary. <br>The 3 digit number printed in the signature space of most cards (For Amex only, it is a 4 digit number printed on the front of the card). Also known as "CVV" or "CVV2".  |

The following test details can be used in sandbox only:

#### Visa Credit Card:
- CardNumber	- 4715059999000437
- ExpiryDate	- 05/21
- CV2	Integer - 222

#### Visa Debit Card:
- CardNumber	- 4508750015741019
- ExpiryDate	- 05/21
- CV2	Integer - 222

#### American Express:
- CardNumber	- 345678000000007
- ExpiryDate	- 05/21
- CV2	Integer - 2222

NB: We do not provide test card details for the production (live) environment.
