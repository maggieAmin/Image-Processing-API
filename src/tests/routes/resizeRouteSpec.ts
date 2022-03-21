import supertest from 'supertest';
import { app } from '../../index';

const request = supertest(app);
describe('Test resize route input validation', () => {
  it('returns error if no filename is provided', async (done) => {
    const response = await request.get('/api/image/resize');
    expect(response.status).toBe(400);
    done();
  });
});
