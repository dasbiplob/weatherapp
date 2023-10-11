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
// eslint-disable-next-line no-undef
} = process.env;

const appId = APPID || '6a43d8562acdd6b0879d60232bd769e0';
const mapURI = MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const targetCity = TARGET_CITY || 'Helsinki,fi';
const port = PORT || 9000;

const app = new Koa();
const router = new Router();

app.use(cors());

const fetchWeather = async (lat, lon) => {
  //const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&`;
  console.log('Endpoint:', endpoint);
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

router.get('/api/weather', async ctx => {
  const { lat, lon } = ctx.query; // Retrieve latitude and longitude from query parameters
  const weatherData = await fetchWeather(lat, lon);
  console.log(weatherData)
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
