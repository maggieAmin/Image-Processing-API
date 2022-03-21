import express from 'express';

const logger = (req: express.Request, res: express.Response, next: Function): void => { 
    console.log(`[${req.url}][${JSON.stringify(req.query)}] event logged`);
    next();
}

export default logger;