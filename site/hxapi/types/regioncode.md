---

---

# Region Codes

Five or six character region codes determine which region of the world an [insurance policy](/hxapi/insurance) will cover. It is safer to confirm which country your customer is travelling to and map it to the region than ask them the region directly.

### Endpoints

 | Action                    | Endpoint                                                                                                          | Method |
 | ------                    | --------                                                                                                          | ------ |
 | List regions              | [https://api.holidayextras.co.uk/v1/insurancecountries/](/hxapi/insurancecountries)                                 | GET    |
 | List countries for region | [https://api.holidayextras.co.uk/v1/insurancecountries/foo](/hxapi/insurancecountries#insurancecountriesfoo)       | GET    |
 | Search by country         | [https://api.holidayextras.co.uk/v1/insurancecountries/search](/hxapi/insurancecountries#insurancecountriessearch) | GET    |

### Intermediary/Direct System

 | Code   | Our ID | Destination       | Covered Countries                                                       |
 | ----   | ------ | -----------       | -----------------                                                       |
 | EUROPE | 6      | Europe Low-risk   | https://api.holidayextras.co.uk/v1/insurancecountries/EUROPELOW?key=foo  |
 | EUROPE | 7      | Europe High-risk  | https://api.holidayextras.co.uk/v1/insurancecountries/EUROPEHIGH?key=foo |
 | WWIUSA | 3      | Worldwide inc USA | https://api.holidayextras.co.uk/v1/insurancecountries/WWIUSA?key=foo     |
 | WWXUSA | 5      | Worldwide exc USA | https://api.holidayextras.co.uk/v1/insurancecountries/WWXUSA?key=foo     |

### Retail System

 | Code   | Our ID | Destination             | Covered Countries                                                                                    |
 | ----   | ------ | -----------             | -----------------                                                                                    |
 | UKROI  | 1      | UK & Ireland            | https://api.holidayextras.co.uk/v1/insurancecountries/UKROI?ABTANumber=foo&Password=yourpassword      |
 | EUROPE | 6      | Europe Low-risk         | https://api.holidayextras.co.uk/v1/insurancecountries/EUROPELOW?ABTANumber=foo&Password=yourpassword  |
 | EUROPE | 7      | Europe High-risk        | https://api.holidayextras.co.uk/v1/insurancecountries/EUROPEHIGH?ABTANumber=foo&Password=yourpassword |
 | AUSNZ  | 4      | Australia & New Zealand | https://api.holidayextras.co.uk/v1/insurancecountries/AUSNZ?ABTANumber=foo&Password=yourpassword      |
 | WWIUSA | 3      | Worldwide inc USA       | https://api.holidayextras.co.uk/v1/insurancecountries/WWIUSA?ABTANumber=foo&Password=yourpassword     |
 | WWXUSA | 5      | Worldwide exc USA       | https://api.holidayextras.co.uk/v1/insurancecountries/WWXUSA?ABTANumber=foo&Password=yourpassword     |

