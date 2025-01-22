---

---

# Terminal

## Method

GET






## Parameters

 | Name | Data Type | Required |
 | ---- | --------- | -------- |
 | key  | Number    | Y        |




## Request

```
https://api-sandbox.holidayextras.com/v1/terminal/LGW?key=YourKey
```







## Reply

```xml
<?xml version="1.0" ?>
<API_Reply>
  <Terminal>
    <Name>North</Name>
    <Code>LGWN</Code>
  </Terminal>
  <Terminal>
    <Name>South</Name>
    <Code>LGWS</Code>
  </Terminal>
  <API_Header>
    <Request>
      <key>mytestkey</key>
      <v>1</v>
    </Request>
  </API_Header>
</API_Reply>
```
