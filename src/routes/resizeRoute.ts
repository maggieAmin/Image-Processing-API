import express from 'express';
import fs from 'fs';
import path from 'path';
import { ImageInputFolder } from '..';
import { outputFilePath, resizeImage } from '../img-util/resize';

export const doesFileExist = (filename: string): boolean => {
  const filepath = path.join(ImageInputFolder, filename);
  return fs.existsSync(filepath);
};

const resizeRoute = async (req: express.Request, res: express.Response) => {
  // Verify that the user provided the required parameter: filename
  if (!req.query['filename']) {
    // No filename parameter return error!
    res.status(400); // Bad request
    res.send('No filename provided');
    return;
  }
  const filename: string = req.query['filename'].toString();

  if (!doesFileExist(filename)) {
    // No file in `full` folder for filename return error!
    res.status(404); // Not found
    res.send('No file in `full` folder for filename');
    return;
  }

  // Check if size is provided; otherwise use default width & height 200x200
  let width: number;
  if (req.query['width']) {
    width = parseInt(req.query['width'].toString());
  } else {
    width = 200;
  }

  let height: number;
  if (req.query['height']) {
    height = parseInt(req.query['height'].toString());
  } else {
    height = 200;
  }

  // If image is already resized return it from thumbs folder
  const outputFile = outputFilePath(filename, width, height);
  if (!fs.existsSync(outputFile)) {
    console.log(`File ${outputFile} does not already exist.`);
    await resizeImage(filename, width, height);
  }
  res.sendFile(outputFile, { root: process.cwd() });
};

export default resizeRoute;
