const request = require('supertest');
const app = require('../server/app');
const {connection} = require('../database/index');
require('./jest.config');


describe('Test methods', () => {
  beforeAll(() => {
    connection.connect();
  });
  afterAll((done) => {
    connection.disconnect(done);
  });
});


describe('Test the root path', () => {
  test('It should respond to GET method', () => {
    return request(app).get('/Reviews/1').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});