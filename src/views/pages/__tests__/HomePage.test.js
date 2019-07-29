import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';


describe('HomePage Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<HomePage />);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<HomePage />);
        expect(component.debug()).toMatchSnapshot();
    })
});