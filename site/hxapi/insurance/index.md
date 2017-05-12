---

---

# Insurance Countries

 | Action                             | Endpoint                                                                                                          | Method | 
 | ------                             | --------                                                                                                          | ------ | 
 | List all Valid Regions             | [http://api.holidayextras.co.uk/v1/insurancecountries](/hxapi/insurancecountries)                                  | GET    | 
 | List all Countries in Valid Region | [http://api.holidayextras.co.uk/v1/insurancecountries/foo ](/hxapi/insurancecountries#insurancecountriesfoo)      | GET    | 
 | Search for Specific Country        | [http://api.holidayextras.co.uk/v1/insurancecountries/search](/hxapi/insurancecountries#insurancecountriessearch) | GET    | 

# Insurance Policies

## Insurance Direct/Intermediary

**Requesting options and issuing policies is not yet available via our API for Direct/Intermediary partners.** If you expect to issue a policy a customer will pay for directly via a credit card that our API will process, this API does not support that, though we plan to in future. At the moment the best workaround would be to use the quotes API to get a price, then link through to our scheme selection, options or payment pages.

 | Action                                               | Endpoint                                                                                     | Method | Note | 
 | ------                                               | --------                                                                                     | ------ | ---- | 
 | Request insurance quote for Europe low-risk          | [http://api.holidayextras.co.uk/v1/insurancepolicy/EUROPELOW](availability)  | GET    | *    | 
 | Request insurance quote for Europe high-risk         | [http://api.holidayextras.co.uk/v1/insurancepolicy/EUROPEHIGH](availability) | GET    | *    | 
 | Request insurance quote for World wide including USA | [http://api.holidayextras.co.uk/v1/insurancepolicy/WWXUSA](availability)     | GET    |      | 
 | Request insurance quote for World wide excluding USA | [http://api.holidayextras.co.uk/v1/insurancepolicy/WWIUSA](availability)     | GET    |      | 
 | Request insurance quote for Europe                   | [http://api.holidayextras.co.uk/v1/insurancepolicy/EUROPE](availability)     | GET    | *    | 

* The Europe low-risk and Europe high-risk destinations are what we will use for most schemes issued, if in doubt, use /EUROPEHIGH and /EUROPELOW. A few partners can use /EUROPE, if you can, you will know who you are.

##  Insurance Retail 

Please note retail insurance uses the same API endpoints as the above Direct insurance. To see destinations and pricing for Retail policies, ensure your ABTANumber and Password are included as parameters with every request, for example:

```
http://api.holidayextras.co.uk/v1/insurancepolicy?key=mytestkey&ABTANumber=FOO&Password=FOO
```

The retail API is only suitable if you are set up as a retail agent with us, please check with our sales team if you are not sure about this. You will need to collect payment from the customer yourself and will be separately invoiced by us for the policies you issue.

## Insurance Policies

