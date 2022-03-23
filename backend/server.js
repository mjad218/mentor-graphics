require("dotenv").config();
const express = require("express");
const { getLocation, getWeatherData, getAddress, getCities } = require("./helpers");
const app = express();

app.get("/location", async (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    res.json({"error" : "your query parameters are wrong"});
  }
  const location = await getLocation({ latitude, longitude });
  const address = getAddress(location);
  res.json(location);
});

app.get("/cities/:country", async (req, res) => {
  const { country } = req.params;
  let cities = await getCities(country);
  res.json(cities);
});

app.get("/weather-data", async (req, res) => {
  const { city, country } = req.query;
  if (!city && !country) {
    res.json({"error" : "your query parameters are wrong"});
  }
  const address = `${city}, ${country}`;
  let weatherData = await getWeatherData(address);
  res.json(weatherData);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`app is running \nhttp://localhost:${PORT}`);
});