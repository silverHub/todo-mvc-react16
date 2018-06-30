import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';
jest.mock('./TodoListItem', () => 'TodoListItem');

describe('testing TodoList', () => {

	test('if renders if not todos', () => {
		expect(shallow(<TodoList />)).toMatchSnapshot();
	});

	test('if renders if not todos', () => {
		const todos = [
			{ id : 1},
			{ id : 2},
			{ id : 3}
		];
		expect(shallow(<TodoList todos={todos} />)).toMatchSnapshot();
	});


});
