import React from 'react';
import { shallow } from 'enzyme';

import {Sidebar} from '../Sidebar';

const defaultProps = {
    showClear: false
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Sidebar {...props} />);
    return {
        wrapper,
        props
    };
};

describe('Sidebar Component', () => {

    it('Should render without errors', () => {
        const { wrapper } = setup();
        const component = wrapper.find(`[data-test='sidebarComponent']`);
        expect(component.length).toBe(1);
    });

    it('Should render a Search input', () => {
        const { wrapper } = setup();
        const search = wrapper.find(`[data-test='searchInput']`);
        expect(search.length).toBe(1);
    });

    it('Should render a Categories', () => {
        const { wrapper } = setup();
        const categories = wrapper.find(`[data-test='categories']`);
        expect(categories.length).toBe(1);
    });

    it('Should render a Clear Button with showClear is true', () => {
        const { wrapper } = setup({ showClear: true });
        const clearButton = wrapper.find(`[data-test='clearButton']`);
        expect(clearButton.length).toBe(1);
    });

    it('Should not render a Clear Button with showClear is false', () => {
        const { wrapper } = setup({ showClear: false });
        const clearButton = wrapper.find(`[data-test='clearButton']`);
        expect(clearButton.length).toBe(0);
    });

    test('Should match snapshot', () => {
        const component = shallow(<Sidebar />);
        expect(component.debug()).toMatchSnapshot();
    });
});