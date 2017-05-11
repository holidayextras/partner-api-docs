---

---

# Hotel Availability Without RoomType

This request is only available on the German system. It has not yet been implememented, but should not vary from this.


## /hotel/foo

where foo is the location (airport) code

e.g. http://api.holidayextras.co.uk/de/v1/hotel/FRA

### Method

GET







### Parameters

 | Name               | Type    | Format      | Required | 
 | ----               | ----    | ------      | -------- | 
 | ABTANumber         | String  | [A-Z0-9]{5} | Y        | 
 | Password           | String  | [A-Z0-9]{5} | N*       | 
 | Initials           | String  | [A-Z]{3}    | Y        | 
 | ArrivalDate        | Date    | YYYY-MM-DD  | Y        | 
 | CarPickupDate      | Date    | YYYY-MM-DD  | Y        | 
 | Nights             | Int     | [0-9]       | Y        | 
 | ParkingPriorToStay | Boolean | [Y,N]       | Y        | 
 | key                | String  |             | Y        | 
 | token              | String  | [0-9]{9}    | Y        | 

* Password required for Agents



### Request

```html
http://api.holidayextras.co.uk/de/v1/hotel/FRA?ABTANumber=FOO&Password=FOO&Initials=BJT&key=foo&token=999999999&ArrivalDate=2010-01-15&CarPickupDate=2010-01-22&Nights=1&ParkingPriorToStay=N
```




### Reply

```xml

<?xml version="1.0" ?>
<API_Reply Product="HotelWithParking" RequestCode="1" Result="OK">
  	<Hotel>
		<Code>FRAACH</HotelCode>
		<Name>ACHAT Hotel Airport - Frankfurt</HotelName>
		<StarRating>4</StarRating>
		<ParkingDays>8</ParkingDays>
		<OnAirport>N</OnAirport>
		<FamilyRooms>N</FamilyRooms>
		<CarParkOnSite>N</CarParkOnSite>
		<Transfer24Hour>N</Transfer24Hour>
		<TwinDoublePrice>166.00</TwinDoublePrice>
		<SinglePrice>N/A</SinglePrice>
		<BoardBasis>RO</BoardBasis>
	</Hotel>
	<Hotel>
		<HotelCode>FRAMAX</HotelCode>
		<HotelName>Steigenberger Hotel Frankfurt-Langen</HotelName>
		<StarRating>4</StarRating>
		<ParkingDays>8</ParkingDays>
		<OnAirport>N</OnAirport>
		<FamilyRooms>N</FamilyRooms>
		<CarParkOnSite>N</CarParkOnSite>
		<Transfer24Hour>N</Transfer24Hour>
		<TwinDoublePrice>185.00</TwinDoublePrice>
		<SinglePrice>N/A</SinglePrice>
		<BoardBasis>BB</BoardBasis>
	</Hotel>
  .
  .
  .
	<API_Header>
		<Request>
			<ABTANumber>FOO</ABTANumber>
			<Password>TESTA</Password>
			<Initials>BJT</Initials>
			<key>foo</key>
			<token>999999999</token>
			<ArrivalDate>2010-01-15</ArrivalDate>
			<CarPickupDate>2010-01-22</CarPickupDate>
			<Nights>1</Nights>
			<ParkingPriorToStay>N</ParkingPriorToStay>
		</Request>
	</API_Header>
</API_Reply>

```























