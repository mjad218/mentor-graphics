require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const requestCountry = require('request-country');

const app = express();

app.set("trust proxy", "loopback");

app.use(requestCountry.middleware({
    attributeName: 'requestCountryCode',
    privateIpCountry: 'US' 
  }));

const API_URL = `https://api.worldweatheronline.com/premium/v1/weather.ashx`;
const key = process.env.KEY;
app.get('/', async ( req, res ) => {
    console.log({country : req.requestCountryCode});
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log({ip});
    // let data = await fetch(API_URL + `?key=${key}&q=${ip}&format=json`);
    // data = await data.json();~
    // console.log(data);
    res.send(ip);
});

app.listen( 4000,() => {
    console.log('app is running')
} ) 