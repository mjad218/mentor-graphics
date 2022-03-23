# mentor-graphics
Mentor Graphics Weather Data coding test

## Back End
For the Back End, I am using an express server to manage the API and respose with approbriate data.

to start the back end server, you have to
1. clone the repo on your local machine
2. go to the backend directory
3. run ```npm install```
4. run ```npm start```

### Back end is ready now
the end point ``` https://localhost:4000/location ``` returns the weather data for a specific location

For the back end to run properly you need to have a Google api key to get the location with the help of the logitude and the latitude. 
Also, you need another api key for weather data. 

you can get a Google Maps API key from this page [google maps api](https://developers.google.com/maps/documentation/geocoding/get-api-key)
for the weather data API, use this website to get a key (weather api)[https://www.worldweatheronline.com/developer/] 

Finally, you need to create a .env file and add the needed keys.

## Front End 
I am gonna use Angular for the front end 
