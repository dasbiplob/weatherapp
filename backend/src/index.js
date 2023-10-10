const debug = require('debug')('weathermap');
const Koa = require('koa');
const Router = require('koa-router');
const fetch = require('node-fetch');
const cors = require('kcors');

const {
  APPID,
  MAP_ENDPOINT,
  TARGET_CITY,
  PORT
} = process.env;

const appId = APPID || '6a43d8562acdd6b0879d60232bd769e0';
const mapURI = MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const targetCity = TARGET_CITY || 'Helsinki,fi';
const port = PORT || 9000;

const app = new Koa();
const router = new Router();

app.use(cors());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

const fetchWeatherByCoordinates = async (lat, lon) => {
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&`;
  console.log(endpoint);
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

router.get('/api/weather/:lat/:lon', async ctx => {
  const { lat, lon } = ctx.params;
  //const weatherData = await fetchWeather();
  const weatherData = await fetchWeatherByCoordinates(lat, lon);
  console.log(weatherData);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
