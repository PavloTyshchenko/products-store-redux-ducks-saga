import React from 'react';
import { shallow } from 'enzyme';

import {Products} from '../Products';

const defaultProps = {
    products: [],
    category: 'All',
    search_term: '',
    loading: false,
    showClear: false
};


const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Products {...props} />);
    return {
        wrapper,
        props
    };
};

describe('Products Component', () => {

    it('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='productsComponent']`);
        expect(component.length).toBe(1);
    });

    it('Should render loading when loading is true', () => {
        const { wrapper } = setup({ loading: true });
        const component = wrapper.find(`[data-test='spinner']`);
        expect(component.length).toBe(1);
    });

    it('Should render alert when showClear is true, products length is 0 and loading is false', () => {
        const { wrapper } = setup({ showClear: true, loading: false  });
        const component = wrapper.find(`[data-test='alert']`);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const { wrapper } = setup({ products: [ { name: '1'}, { name: '2'}], showClear: false, loading: false});
        expect(wrapper.debug()).toMatchSnapshot();
    });
});