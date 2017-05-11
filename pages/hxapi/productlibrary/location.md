---

---

# Product Library - Location


## /location


This request returns all valid locations and their codes.

### Request

```
http://api.holidayextras.co.uk/sandbox/v1/location?key=mytestkey
```


### Reply

```xml
<?xml version="1.0"?>
<API_Reply>
	<Product>
		<Code>ABZ</Code>
		<Name>Aberdeen</Name>
		<MoreInfoURL>/sandbox/v1/product/ABZ</MoreInfoURL>
		<Type>airport</Type>
	</Product>
	<Product>
		<Code>BFS</Code>
		<Name>Belfast</Name>
		<MoreInfoURL>/sandbox/v1/product/BFS</MoreInfoURL>
		<Type>airport</Type>
	</Product>
	.
	.
	.
	<API_Header>
		<Request>
			<key>mytestkey</key>
			<v>1</v>
		</Request>
	</API_Header>
</API_Reply>

```
