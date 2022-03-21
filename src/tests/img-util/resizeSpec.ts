import { outputFileName } from '../../img-util/resize';

describe('Test `outputFileName()`', () => {
  it('returns `fjord-w200h200.jpg` if input is fjord.jpg, 200, 200', () => {
    expect(outputFileName('fjord.jpg', 200, 200)).toEqual('fjord-w200h200.jpg');
  });
});
