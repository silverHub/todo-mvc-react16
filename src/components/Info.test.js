import Info from './Info';
import React from 'react';
import {shallow} from 'enzyme';

describe('test Info component', () => {
	test('if renders', () => {
		const wrapper = shallow(<Info />);
		expect(wrapper).toMatchSnapshot();
	});
});



