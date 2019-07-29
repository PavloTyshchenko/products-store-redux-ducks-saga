import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from '../NavigationBar';

describe('NavigationBar Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<NavigationBar />);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<NavigationBar />);
        expect(component.debug()).toMatchSnapshot();
    });
});