import path from 'path';
import sharp from 'sharp';
import { ImageInputFolder, ImageOutputFolder } from '..';

export const outputFileName = (
  filename: string,
  width: number,
  height: number
): string => {
  const filnameBits = filename.split('.');
  return `${filnameBits[0]}-w${width}h${height}.${filnameBits[1]}`;
};
export const outputFilePath = (
  filename: string,
  width: number,
  height: number
): string => {
  return path.join(ImageOutputFolder, outputFileName(filename, width, height));
};

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  console.log(`Resizing image ${filename} to ${width}x${height}`);
  const inputFilePath = path.join(ImageInputFolder, filename);
  const outputFile = outputFilePath(filename, width, height);

  await sharp(inputFilePath).resize(width, height).toFile(outputFile);
};
