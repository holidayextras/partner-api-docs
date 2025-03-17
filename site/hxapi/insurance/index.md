---

---

# Insurance

[API Docs](/hxapi/) > product:[Insurance](index)

## Insurance Endpoints

 | Request | Endpoint | Method |
 | ------- | -------- | ------ |
 | List all regions and / or countries | [https://api.holidayextras.co.uk/v1/insurancecountries](countries) | GET |
 | Request insurance schemes available | [https://api.holidayextras.co.uk/v1/insurancepolicy/RegionCode](availability) | GET |
 | Request options for insurance scheme | [https://api.holidayextras.co.uk/v1/insurancepolicy/SchemeCode](options) | GET |
 | Create insurance policy | [https://api.holidayextras.co.uk/v1/insurancepolicy/CertificateRef](createpolicy) | POST |


## Insurance User Journey

Below is a diagram detailing how the endpoints can be used to create an insurance user journey. More information on each endpoint can be found in the detailed guides listed above.

![Insurance Workflow](https://github.com/holidayextras/partner-api-docs/raw/master/site/hxapi/insurance/workflow.png)
