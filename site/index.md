# Welcome to Holiday Extras

[Holiday Extras](http://www.holidayextras.co.uk/) is the UK market leader for airport hotels and other travel ancillaries including airport parking, lounges, insurance and car hire.

The purpose of this documentation is to enable you to quickly on-board with our API, so you can start searching for and booking our products in *just a few hours*.

## Contents

[Getting Started](intro)

[Detailed Guides](hxapi/)

[FAQs](/faq)


## Versioning

|Version Number|Date|Details|
|--------------|----|-------|
|1.9.6 | 6th December 2018 | Updated sandbox hostname for legacy payments (EU) |
|1.9.5 | 3rd October 2018 | Mandatory Infants parameter added for Lounges.|
|1.9.4 | 10th September 2018 | Holidayextras booking ref field size increased from 5 to 12 characters.|
|1.9.3 | 9th July 2018 | Security doc added. Extra field explanations added to View Booking section.|
|1.9.2 | 19th June 2018 | Accessibility flag added.|
|1.9.1 | 12th April 2018 | Add docs for BarCode node.|
|1.9 | 12th March 2018 | DE Start section overhauled.|
|1.8.1 | 2nd March 2018 | Max pax per Lounge booking changed from 9 to 4.|
|1.8 | 23rd February 2018 | Locations Request section updated.|
|1.7 | 16th February 2018 | Payment Gateway section added.|
|1.6 | 12th February 2018 | View/Amend/Cancel docs updated.|
|1.5.1 | 2nd February 2018 | Booking Confirmation info updated.|
|1.5 | 16th January 2018 | Lounge documentation overhauled.|
|1.4.1 | 11th December 2017 | URL link to PDF included in Create, Amend and View Booking responses.|
|1.4 | 26th September 2017 | Added section for updating booking flight details.|
|1.3 | 4th September 2017 | Insurance section overhauled.|
|1.2.2         | 18th August 2017 | Updated Account Setup section.|
|1.2.1         | 14th August 2017 | Added Direct Debit and SEPA mandate forms/links.|
|1.2           | 7th August 2017 | Payment section added clarifying supported methods including SEPA.|
|1.1.3         | 25th July 2017 | CarPickupDate format changed from DDMMMYY to YYYY-MM-DD in Hotel Booking request. |
|1.1.2         | 24th July 2017 | Update endpoints for hotel availability and make booking.|
|1.1.1         |5th July 2017| Removal of references to DE hotel endpoints.|
|1.1           |31st May 2017| Update to documentation, including: Intro, Index and Car Parking guides.|
|1.0           |March 2017| Migration of API in back end from legacy stack to new (no changes for partners).|

As a guide, we will update the version of the API docs according to the size and impact of the change:

__Minor releases:__
e.g. documentation updates or changes to API not requiring Partner changes.

__Major releases__
e.g. addition of new products and functionality or significant changes to structure of API requiring Partner changes.

We reserve the right to remove outdated and unused functionality, and make changes that may result in deprecation of existing methods. Where this occurs, we will contact you via your Account Manager to advise. Older methods of using the API will be supported for a period of time whilst updates are made by our partners.


## Payment Gateway Guides

These endpoints for the [Payment Gateway](/payment-gateway). Please check the table below for details of which endpoints are available.

|Payment Endpoints|UK|Europe|
|-----------------|--|------|
|[Pay](/payment-gateway/pay)|Yes|Yes|
|[Refund](/payment-gateway/refund)|Yes|Yes|
