import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); 

describe('Test GifGrid', () => {
    const value = 'test'; 

    test('should show GifGrid correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={value} /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show images when load images useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:3000/werever',
            title: 'Wenas'
        },
        {
            id: 'ABC123',
            url: 'https://localhost:3000/werever',
            title: 'Wenas'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category={value} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
});