require("dotenv").config();
const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const { getLocation, getWeatherData, getAddress, getCities } = require("./helpers");
const cors = require('cors');

const locations = express();

locations.use(cors({
  origin: process.env.FRONT_END_URL,
  credentials: true,
  preflightContinue: false 
}));
locations.options('*', cors());

locations.get("/",async (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    res.json({"error" : "your query parameters are wrong"});
  }
  const location = await getLocation({ latitude, longitude });
  const address = getAddress(location);
  res.json(address);
});

const cities = express();

cities.use(cors({
  origin: process.env.FRONT_END_URL,
  credentials: true,
  preflightContinue: false 
}));
cities.options('*', cors());

cities.get("/:country", async (req, res) => {
  const { country } = req.params;
  let cities = await getCities(country);
  res.json(cities);
});


const weather = express();

weather.use(cors({
  origin: process.env.FRONT_END_URL,
  credentials: true,
  preflightContinue: false 
}));
weather.options('*', cors());

weather.get("/", async (req, res) => {
  const { city, country } = req.query;
  if (!city && !country) {
    res.json({"error" : "your query parameters are wrong"});
  }
  const address = `${city}, ${country}`;
  let weatherData = await getWeatherData(address);
  res.json(weatherData);
});

exports.locations = functions.https.onRequest(locations);
exports.cities = functions.https.onRequest(cities);
exports.weather = functions.https.onRequest(weather);