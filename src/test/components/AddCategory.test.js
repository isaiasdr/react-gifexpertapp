import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Tests in <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    });

    test('should print correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: {value} });
    });

    test('should not post information on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should should call setCategories and clear the text box', () => {
       const input = wrapper.find('input');
       const value = "test submit";
       input.simulate('change', { target: {value} });
       wrapper.find('form').simulate('submit', { preventDefault(){} });
       expect( setCategories ).toHaveBeenCalled();
       expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
       expect( wrapper.find('input').prop("value") ).toBe('');
    });
});
