---

---

# User Token

[API Docs](/hxapi/) > endpoint:[usertoken](usertoken)

Any request to **HXAPI** for either availability or to make a booking must include a valid user token. Your application should obtain a new user token for every user who embarks on an availability search. Once a user has made a booking, we expect the user token to be dropped, **it should not be reused**.

This is not intended as a mechanism for identifying returning users. If you require that functionality, your application should handle it separately.

## Method

GET






## Parameters

 | Name | Data Type | Required | 
 | ---- | --------- | -------- | 
 | key  | String    | Y        | 



## Request

```
http://api.holidayextras.co.uk/sandbox/v1/usertoken?key=mytestkey
```



## Reply


```xml
<?xml version="1.0" ?>
<API_Reply>
  <Token>000015778</Token>
  <BookingURL>/api/v1</BookingURL>
</API_Reply>
```


