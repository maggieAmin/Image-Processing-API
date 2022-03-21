import express from 'express';
import logger from './logger/logger';
import resizeRoute from './routes/resizeRoute';

export const app = express();
const port = 3500;

app.get('/api/image/resize', logger, resizeRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
