import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';


describe('testing Input component', () => {

	test('if renders', () => {
		expect(shallow(<Input />)).toMatchSnapshot();
	});

	test('if returns typed text on onEnter', () => {
		const mockFn = jest.fn();
		const wrap = shallow(<Input onEnter={mockFn} />);

		// type something
		 wrap.find('input').simulate('change', { target: { value: 'typedInText' }});

		// hit Enter
		wrap.find('input').simulate('keyDown', { key: 'Enter'});
		expect(mockFn).toBeCalledWith('typedInText');
	});
});

