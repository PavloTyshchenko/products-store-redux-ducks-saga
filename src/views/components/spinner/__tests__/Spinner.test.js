import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';

describe('Spinner Component', () => {

    it('It should render without errors', () => {
        const component = shallow(<Spinner />);
        const wrapper = component.find(`[data-test='spinnerComponent']`);
        expect(wrapper.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<Spinner />);
        expect(component.debug()).toMatchSnapshot();
    });
});