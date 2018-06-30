import Title from './Title';
import React from 'react';
import {shallow} from 'enzyme';

describe('test Title component', () => {
	test('if renders', () => {
		const wrapper = shallow(<Title />);
		expect(wrapper).toMatchSnapshot();
	});
});



