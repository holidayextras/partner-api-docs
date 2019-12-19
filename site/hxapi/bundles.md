---

---

# Bundles

Some results that are returned from availability on the API will be what we call bundles, these consist of a main product, such as a hotel, bundled together with an additional supplement, like a dinner.

Bundles are currently only available on hotel searches.

## Availability

Bundles can be identified by their product code, which has an additional element preceding the main product code joined by a `+`.

E.g

``` xml
...
<Name>Cresta Court with 2-course dinner</Name>
<Code>MANCCT+B519</Code>
<BookingURL>/v1/hotel/HPMANCCT+B519</BookingURL>
<Price>110.65</Price>
...
```

The price given will be for the entire bundle including the supplement with the current passenger quantity ( determined by the given [room code](/hxapi/types/roomcode) ).
A [product library](/hxapi/productlibrary) request can be made with the complete bundle product code to get content related to the package as a whole instead of simply the main product. E.g `/v1/product/MANCCT+B519`

## Booking

The `BookingURL` element will contain the full product code, including prefix, that must be supplied when a bundle is to be booked, this will ensure that system books the main product as well as the appropriate supplement. When booking a bundle on a hotel search the quantity of the supplement will be determined by the given room occupancy in the `Adults` and `Children` fields.

The booking response for a bundle booking will show the main product and the booked supplement as seperate elements. The `TotalPrice` field will contain the full price of the booking, but the supplement price will also be shown separately under the `CurrentSupplements` block.

E.g

``` xml
...
<Booking>
<BookingRef>XXXXX</BookingRef>
<AgentComm>12.41</AgentComm>
<VATonComm>2.07</VATonComm>
<MoreInfoURL>/v1/booking/XXXXX</MoreInfoURL>
</Booking>
<Hotel/>
<Itinerary>
<TotalPrice>110.65</TotalPrice>
<ArrivalDate>2019-03-10</ArrivalDate>
<Nights>1</Nights>
<BoardBasis>RO</BoardBasis>
<NonSmoking>N</NonSmoking>
<ReturnFlight/>
<TerminalCode/>
<Code>MANCCT</Code>
<Name/>
<ParkingDays>0</ParkingDays>
<ParkingSpaces>0</ParkingSpaces>
</Itinerary>
<Room>
<Adults>2</Adults>
<Children>1</Children>
<Infants>0</Infants>
<Code>TRL</Code>
</Room>
<CurrentSupplements>
<Code>MANCDI</Code>
<Name>2-course dinner</Name>
<Price>29.90</Price>
<NonDiscPrice>29.90</NonDiscPrice>
<Per>person</Per>
<Adults>2</Adults>
<Children>1</Children>
<Date>2019-03-10</Date>
<Canx>Y</Canx>
<Remarks/>
</CurrentSupplements>
...
```

The product code of the supplement will also be returned in the booking response which can be used to retrieve product specific content in the [product library](/hxapi/productlibrary) request that can be displayed on booking confirmations. When creating confirmation emails be sure to highlight that the supplement has been added as a part of this booking.

## Post Booking

A bundle booking can be amended or cancelled following the same rules as a general product. The supplement has a `Canx` field in the booking response that will define if that particular add-on can be cancelled as part of the booking. It is not currently possible to amend the quantity of the supplement or remove it from the booking using the API.
