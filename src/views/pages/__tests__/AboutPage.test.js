import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../AboutPage';


describe('AboutPage Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<AboutPage />);
        expect(component.length).toBe(1);
    });

    test('Should match snapshot', () => {
        const component = shallow(<AboutPage />);
        expect(component.debug()).toMatchSnapshot();
    });
});