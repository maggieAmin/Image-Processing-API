import supertest from 'supertest';
import { app } from '../../index';
import { doesFileExist } from '../../routes/resizeRoute';

const request = supertest(app);
describe('Test resize route input validation', () => {
  it('returns error if no filename is provided', async (done) => {
    const response = await request.get('/api/image/resize');
    expect(response.status).toBe(400);
    done();
  });
  it('returns error if height is not a number', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&height=abc'
    );
    expect(response.status).toBe(400);
    done();
  });
  it('returns error if width is not a number', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&width=abc'
    );
    expect(response.status).toBe(400);
    done();
  });

  it('returns error if height is negative', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&height=-1'
    );
    expect(response.status).toBe(400);
    done();
  });
  it('returns error if width is negative', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&width=-1'
    );
    expect(response.status).toBe(400);
    done();
  });

  it('returns error if height is 0', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&height=0'
    );
    expect(response.status).toBe(400);
    done();
  });
  it('returns error if width is 0', async (done) => {
    const response = await request.get(
      '/api/image/resize?filename=fjord.jpg&width=0'
    );
    expect(response.status).toBe(400);
    done();
  });
  it('returns not found if no file for filename exists in `full` folder', async (done) => {
    const response = await request.get('/api/image/resize?filename=notexist');
    expect(response.status).toBe(404);
    done();
  });
  it('returns 200 if no width nor height is provided', async (done) => {
    const response = await request.get('/api/image/resize?filename=fjord.jpg');
    expect(response.status).toBe(200);
    done();
  });
});

describe('Test `doesFileExist`', () => {
  it('returns `true` if file exists', () => {
    expect(doesFileExist('fjord.jpg')).toEqual(true);
  });
  it('returns `false` if file does not exists', () => {
    expect(doesFileExist('notexist')).toEqual(false);
  });
});
