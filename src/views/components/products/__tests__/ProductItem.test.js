import React from 'react';
import { shallow } from 'enzyme';

import ProductItem from '../ProductItem';

const defaultProps = {
    product: {
        img: "test",
        name: "test",
        price: 16,
        currency: "gbp",
        link: "test"
    }
}

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<ProductItem {...props} />);
    return {
        wrapper,
        props
    };
};

describe('ProductItem Component', () => {

    it('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='productItemCard']`);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const { wrapper } = setup();
        expect(wrapper.debug()).toMatchSnapshot();
    });
});