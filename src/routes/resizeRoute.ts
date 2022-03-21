import express from 'express';

const resizeRoute = (req: express.Request, res: express.Response) => {
  // Verify that the user provided the required parameter: filename
  if (!req.query['filename']) {
    // No filename parameter return error!
    res.status(400); // Bad request
    res.send('No filename provided');
    return;
  }

  // Check if size is provided; otherwise use width & height 200x200

  res.send('Hello, world!');
};

export default resizeRoute;
