import React from 'react';
import { shallow } from 'enzyme';

import { Search } from '../Search';

const defaultProps = {
    history: '',
    match: '',
    category: 'All',
    searchProducts: jest.fn()
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Search {...props} />);
    return {
        wrapper,
        props
    };
};

describe('Search Component', () => {

    test('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='searchComponent']`);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<Search />);
        expect(component.debug()).toMatchSnapshot();
    });
});