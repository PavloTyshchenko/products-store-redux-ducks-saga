import React from 'react';
import { shallow } from 'enzyme';

import { Categories } from '../Categories';

const defaultProps = {
    history: '',
    categories: ['All'],
    category: 'All',
    search_term: '',
    searchProducts: jest.fn()
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Categories {...props} />);
    return {
        wrapper,
        props
    };
};

describe('Categories Component', () => {

    it('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='categoriesComponent']`);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const { wrapper } = setup();
        expect(wrapper.debug()).toMatchSnapshot();
    });

});