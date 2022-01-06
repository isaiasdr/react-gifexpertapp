import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs"

describe('Test with getGifs fetch', () => {
    test('should return 10 images', async() => {
        const gifs = await getGifs('Dragon Ball');

        expect( gifs.length ).toBe(10);
    });

    test('should return 10 images', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);
    });
}); 
