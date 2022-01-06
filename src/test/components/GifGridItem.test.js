import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in Component GifGridItem', () => {

    const title = "Prueba";
    const url = "https://localhost.test.jpg";

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('should show GifGridItem correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a paragraph with the title', () => {
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });

    test('should have a image equal to url from props', () => {
        const img = wrapper.find('img');

        expect( img.props().src ).toBe( url );
    });
    
    test('should have a image with alt to title', () => {
        const img = wrapper.find('img');

        expect( img.props().alt ).toBe( title );
    });

    test('should have a div with class animate__fadeIn', () => {
        const div = wrapper.find('div');
        
        expect( div.props().className ).toMatch( 'animate__fadeIn' );
    });
});