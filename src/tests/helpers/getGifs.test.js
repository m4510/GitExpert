import { getGifts } from '../../helpers/getGifs';

describe('Test getGifs fetch request', () => {
  test('should take category as argument and return 10 results', async () => {
    const category = 'Goku';

    const gifts = await getGifts(category);

    expect(gifts.length).toBe(10);
  });
});
