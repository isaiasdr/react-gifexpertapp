import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('test in hook useFetchGifs', () => {
    test('should return the initial state', async() => {
        const category = 'Jujutsu Kaisen';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data.length ).toBe(0);
        expect( loading ).toBe(true);
    });

    test('should return a array of images and loading in false', async() => {
        const category = 'Jujutsu Kaisen';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    });
});
