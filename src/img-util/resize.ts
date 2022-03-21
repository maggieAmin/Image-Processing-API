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

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const inputFilePath = path.join(ImageInputFolder, filename);
  const outputFilePath = path.join(
    ImageOutputFolder,
    outputFileName(filename, width, height)
  );

  const outputFile = await sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath);

  return outputFilePath;
};
