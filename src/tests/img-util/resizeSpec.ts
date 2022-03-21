import { outputFileName, outputFilePath } from '../../img-util/resize';

describe('Test `outputFileName()`', () => {
  it('returns `fjord-w200h200.jpg` if input is fjord.jpg, 200, 200', () => {
    expect(outputFileName('fjord.jpg', 200, 200)).toEqual('fjord-w200h200.jpg');
  });
});

describe('Test `outputFilePath()`', () => {
  it('returns `assets/thumbs/fjord-w200h200.jpg` if input is fjord.jpg, 200, 200', () => {
    expect(
      outputFilePath('fjord.jpg', 200, 200).endsWith(
        'assets/thumbs/fjord-w200h200.jpg'
      )
    ).toEqual(true);
  });
});
