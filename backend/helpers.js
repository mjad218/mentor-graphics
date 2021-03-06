const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getLocation = async ({ latitude, longitude }) => {
  const MAPS_API = `https://maps.googleapis.com/maps/api/geocode/json`;
  const MAPS_API_KEY = process.env.MAPS_API_KEY;
  let location = await fetch(
    MAPS_API + `?latlng=${latitude},${longitude}&key=${MAPS_API_KEY}`
  );
  location = await location.json();
  return location;
};

const getWeatherData = async (location = "Egypt") => {
  const API_URL = `https://api.worldweatheronline.com/premium/v1/weather.ashx`;
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  let data = await fetch(
    API_URL + `?key=${WEATHER_API_KEY}&q=${location}&format=json`
  );
  data = await data.json();
  return data;
};

const getAddress = (location) => {
  const address = location.results[0].address_components;
  const country = address.filter( loc => loc.types.includes('country') )[0].long_name;
  const city = address.filter( loc => loc.types.includes('administrative_area_level_1') )[0].long_name;
  return {country, city};
};

const getCities = async (country) => {
  country = country.toLowerCase().trim();
  const CITIES_API = `https://countriesnow.space/api/v0.1/countries/cities`;
  let cities = await fetch(CITIES_API, {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country }),
  });
  cities = await cities.json();
  return cities;
};
module.exports = {
  getLocation,
  getWeatherData,
  getAddress,
  getCities,
};