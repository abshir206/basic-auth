'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

xdescribe('Auth Login/Logout', () => {
  it('able create a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'Silkcity92',
      password: 'Blocktaker45',
    });
    console.log (response.body);
    expect(response.username).toBe('Silkcity92');
  });
});