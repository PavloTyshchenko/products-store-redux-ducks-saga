import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import { ProductsPage } from '../ProductsPage';

const defaultProps = {
    getProducts: jest.fn(),
    searchProducts: jest.fn(),
    showClear: false,
    clearProducts: jest.fn(),
    match: {
        params: {
            category: 'All',
            term: ''
        }
    }
};

const setup = (propsOption = {}) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<ProductsPage {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST Products page', () => {

    test('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='productsPage']`);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const { wrapper } = setup();
        expect(wrapper.debug()).toMatchSnapshot();
    });

    // describe('TEST Logic', () => {

    //     describe('TEST useEffect', () => {

    //         test('Should call getProducts first', () => {
    //             let container;
    //             container = document.createElement('div');
    //             document.body.appendChild(container);
    //             act(() => {
    //                 ReactDOM.render(<ProductsPage {...defaultProps} />, container);
    //             })
    //             const { wrapper, props } = setup();
    //             expect(props.getProducts).toHaveBeenCalledTimes(1);
    //         });
    //     });
    // });
});