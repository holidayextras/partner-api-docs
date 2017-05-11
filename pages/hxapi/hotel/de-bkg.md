---

---

# German Hotel Booking





## /hotel/foo

Where foo is the hotel code to book

eg http://api.holidayextras.co.uk/de-start/v1/sandbox/hotel/FRAAST


NB - With this we can book multiple rooms of the same type. If different types have to be booked, we have to decide hwo to do this. Have started by adding the num rooms param.

### Parameters

 | Name          | Type    | Format     | Required | 
 | ----          | ----    | ------     | -------- | 
 | StartCustomer | String  | [0-9]{6}   | Y        | 
 | BusinessUnit  | String  | [0-9]{3}   | Y        | 
 | Operator      | String  | [A-Z]{3}   | Y        | 
 | ArrivalDate   | Date    | YYYY-MM-DD | Y        | 
 | Nights        | Integer | [0-9]      | Y        | 
 | BoardBasis    | String  |            | Y        | 
 | NonSmoking    | String  |            | Y        | 
 | ParkingDays   | Integer |            | Y        | 
 | ParkingSpaces | Integer |            | Y        | 
 | NumberOfRooms | Integer |            | Y        | 
 | RoomCode      | String  |            | Y        | 
 | Rooms         | Integer | [0-9]      | Y        | 
 | Adults        | Integer |            | Y        | 
 | Children      | Integer |            | Y        | 
 | Infants       | Integer |            | Y        | 
 | Title         | String  |            | Y        | 
 | Initial       | String  | [A-Z]{1}   | Y        | 
 | Surname       | String  |            | Y        | 
 | Remarks       | String  |            | N        | 




(POST)

znt -> api
```
http://api.holidayextras.co.uk/de-start/v1/sandbox/hotel/FRAACH?Adults=2&ArrivalDate=15OCT10&BoardBasis=U&BusinessUnit=222&Children=0&Infants=0&Initial=T&Nights=1&NonSmoking=Y&Operator=BJT&ParkingDays=8&ParkingSpaces=1&Registration=CP54JOV&Remarks=Ben%20testing%205&RoomCode=DZ&Rooms=1&StartCustomer=111111&Surname=Test&Title=Mr&key=foo&token=123456789
```

api -> chauntry
```xml
<API_Request System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" Session="000000015" RequestCode="5">                                            
<Agent>                                                                         
        <StartCustomer>111111</StartCustomer>                                   
        <BusinessUnit>222</BusinessUnit>                                        
        <Operator>JMB</Operator>                                                
</Agent>                                                                        
<Itinerary>                                                                     
	<ArrivalDate>15Mar10</ArrivalDate>                                              
	<Nights>1</Nights>                                                              
	<HotelCode>FRAAST</HotelCode>                                                   
	<BoardBasis>U</BoardBasis>                                                      
	<NonSmoking>Y</NonSmoking>                                                      
	<ParkingDays>8</ParkingDays>                                                    
	<ParkingSpaces>1</ParkingSpaces>                                                
</Itinerary>                                                                    
<Room r="1">                                                                    
	<RoomCode>DZ</RoomCode>                                                         
	<Rooms>1</Rooms>                                                                
	<Adults>2</Adults>                                                              
	<Children>0</Children>                                                          
	<Infants>0</Infants>                                                            
</Room>                                                                         
<CarDetails>                                                                    
	<Registration>AB03CDE</Registration>                                            
</CarDetails>                                                                   
<ClientDetails>                                                                 
	<Title>Mr</Title>                                                               
	<Initial>T</Initial>                                                            
	<Surname>TEST</Surname>
	<Remarks>Ben testing 1</Remarks>
</ClientDetails>                                                                
</API_Request>  
```

Chauntry -> api
```xml
<?xml version="1.0"?>
<API_Reply System="ABG" Version="1.0" Product="HotelWithParking" Customer="A" Session="000000015" RequestCode="5" Result="OK">
  <Booking>
    <BookingRef>T6518</BookingRef>
    <AgentComm/>
    <VATonComm/>
    <StartRef>10051939</StartRef>
  </Booking>
  <Itinerary>
    <ArrivalDate>15MAR10</ArrivalDate>
    <Nights>1</Nights>
    <HotelCode>FRAAST</HotelCode>
    <BoardBasis>U</BoardBasis>
    <NonSmoking>Y</NonSmoking>
    <ParkingDays>8</ParkingDays>
    <ParkingSpaces>1</ParkingSpaces>
  </Itinerary>
  <Room r="1">
    <RoomCode>DZ</RoomCode>
    <Rooms>1</Rooms>
    <Adults>2</Adults>
    <Children>0</Children>
    <Infants>0</Infants>
  </Room>
  <CarDetails>
    <Registration>AB03CDE</Registration>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Remarks>BEN TESTING 1</Remarks>
  </ClientDetails>
</API_Reply>
```

api -> znt

```xml
<?xml version="1.0"?>
<API_Reply Product="HotelWithParking" RequestCode="5" Result="OK">
  <Booking>
    <BookingRef>T6518</BookingRef>
    <AgentComm/>
    <VATonComm/>
    <StartRef>10051939</StartRef>
  </Booking>
  <Itinerary>
    <ArrivalDate>15MAR10</ArrivalDate>
    <Nights>1</Nights>
    <HotelCode>FRAAST</HotelCode>
    <BoardBasis>U</BoardBasis>
    <NonSmoking>Y</NonSmoking>
    <ParkingDays>8</ParkingDays>
    <ParkingSpaces>1</ParkingSpaces>
  </Itinerary>
  <Room>
    <RoomCode>DZ</RoomCode>
    <Rooms>1</Rooms>
    <Adults>2</Adults>
    <Children>0</Children>
    <Infants>0</Infants>
  </Room>
  <CarDetails>
    <Registration>AB03CDE</Registration>
  </CarDetails>
  <ClientDetails>
    <Title>MR</Title>
    <Initial>T</Initial>
    <Surname>TEST</Surname>
    <Remarks>BEN TESTING 1</Remarks>
  </ClientDetails>
</API_Reply>
```
