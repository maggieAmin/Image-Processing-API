import express from 'express';
import logger from './logger/logger';

export const app = express();
const port = 3500;

app.get('/api', logger, (req, res) => {
 res.send('Hello, world!');
});

app.listen(port, ()=> {
 console.log(`Server started at http://localhost:${port}`)
})