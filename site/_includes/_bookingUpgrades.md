### Booking Upgrades

It is possible to booking upgrade items at the same time as making a core product booking. Once the core product has been selected you must make an [Upgrade availability request](/hxapi/upgrades). Use the information in the response to pick the upgrades desired for the product. In the booking request any number of `Supplements` tags may be added but each must be for a unique upgrade. Multiple `Supplements` can be added in the request using the square bracket(`[]`) notation e.g.

```http
POST /v1/{{include.productType}}/{{include.productCode}} HTTP/1.1
Host: api.holidayextras.co.uk
Content-Type: application/x-www-form-urlencoded

ABTANumber=YourABTANumber&Password=YourPassword&Initials=YourInitials&key=YourKey&token=YourToken&ArrivalDate=2020-11-09&ArrivalTime=12:30&DepartDate=2020-11-17&DepartTime=13:45&Title=Mr&Initial=T&Surname=Test&Address=Holiday Extras Ltd&Address=Ashford Road&Town=Hythe&County=Kent&PostCode=CT214JF&Email=test@test.com&PriceCheckFlag=Y&PriceCheckPrice=50.05&CarColour=White&CarMake=Range Rover&CarModel=Vogue&Registration=TE17 STS&ReturnFlight=VIR19&Supplements[0][Code]=HXOST1&Supplements[0][Quantity]=1&Supplements[0][Date]=2020-11-09&Supplements[0][TotalPrice]=1.99&Supplements[1][Code]=STNSFS&Supplements[1][Date]=2020-11-09&Supplements[1][Adults]=2&Supplements[1][Children]=1&Supplements[1][TotalPrice]=21.00
```

For per `Room` or per `Booking` upgrades a `Quantity` must be supplied.
For per `Person` upgrades the number of `Adult` and `Children` passes must be supplied. Depending on the upgrade it may also be necessary to supplier the number of `Infants`.

#### Pricing

A `TotalPrice` must be included with each supplment node. This should be calculated as follows;

- Per `Room` or per `Booking` - `Quantity` x `Price`
- Per `Person` - (`Adults` x `AdPrice`) + (`Chilren` x `ChPrice`)

*\*NOTE\** When booking upgrades the cost of the upgrades should not be added to the `PriceCheckPrice`. This should only reflect the price of the core product.

#### FastTrack
When booking fast track passes you will receive links to the client's fast track passes in the booking response. These can be added to your own confirmation emails and will be required by the client to use their passes.
