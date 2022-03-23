require("dotenv").config();
const express = require("express");
const { getLocation, getWeatherData, getCountry, getCities } = require("./helpers");
const app = express();

app.get("/location", async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    res.json({"error" : "your query parameters are wrong"});
  }

  const location = await getLocation({ latitude, longitude });
  const country = getCountry(location);

  let weatherData = await getWeatherData(country);
  let cities = await getCities(country);
  weatherData.cities = cities;
  res.json(weatherData);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`app is running \nhttp://localhost:${PORT}`);
});
