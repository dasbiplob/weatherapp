const request = require('supertest');
const app = require('./src/index'); 
const { expect } = require('chai'); 

describe('Backend Tests', () => {
  it('should return weather data for a specific location', async () => {
    const response = await request(app.callback())
      .get('/api/weather')
      .query({ lat: '12.34', lon: '56.78' });

    expect(response.status).to.equal(200);
    expect(response.type).to.equal('application/json');
  });
});
