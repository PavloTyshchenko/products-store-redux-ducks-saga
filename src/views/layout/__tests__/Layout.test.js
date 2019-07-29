import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';
import NavigationBar from '../NavigationBar';


describe('Layout Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<Layout />);
        expect(component.length).toBe(1);
    });

    it('Should render a Container', () => {
        const component = shallow(<Layout />);
        const container = component.find(`[data-test='container']`);
        expect(container.length).toBe(1);
    });

    it('Should render a NavigationBar', () => {
        const component = shallow(<Layout />);
        const navBar = component.find(`[data-test='navBar']`);
        expect(navBar.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<Layout />);
        expect(component.debug()).toMatchSnapshot();
    });
});