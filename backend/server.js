require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

const API_URL = `https://api.worldweatheronline.com/premium/v1/weather.ashx`;
const key = process.env.KEY;
app.get('/', async ( req, res ) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log({ip})
    let data = await fetch(API_URL + `?key=${key}&q=${ip}&format=json`);
    data = await data.json();
    console.log(data);
    res.send(data);
});

app.listen( 4000, () => {
    console.log('app is running')
} ) 