import supertest from 'supertest';

import { server } from '@src/server';

describe('test heathcheck route GET - /health', () => {
  it('should return http statuts 200', async () => {
    const response = await supertest(server).get('/health');

    expect(response.status).toEqual(200);
  });

  it('should return "fom" text', async () => {
    const response = await supertest(server).get('/health');

    expect(response.text).toEqual('fom');
  });
});