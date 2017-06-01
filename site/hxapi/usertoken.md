---

---

# Generating A User Token

[API Docs](/hxapi/) > endpoint:[usertoken](usertoken)

Any request to the API for either availability or to make a booking must include a valid user token. Your application should obtain a new user token for every user who embarks on an availability search. Once a user has made a booking, we expect the user token to be dropped, **it should not be reused**.

This is not intended as a mechanism for identifying returning users. If you require that functionality, your application should handle it separately.

## Method

GET

## Parameters

 | Name | Data Type | Mandatory? |
 | ---- | --------- | -------- |
 | key  | String    | Y        |



## Request

```
https://api.holidayextras.co.uk/v1/usertoken?key=YourKey
```



## Reply


```xml
<?xml version="1.0"?>
<API_Reply Result="OK">
    <Token>YourToken</Token>
    <BookingURL>/v1</BookingURL>
    <API_Header>
        <Request>
            <key>YourKey</key>
            <v>1</v>
        </Request>
    </API_Header>
</API_Reply>
```
