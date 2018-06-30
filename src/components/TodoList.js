import './TodoList.css';
import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList(props) {

	return (
		<ul className="todo-list">
			{
				props.todos.map(todo => <TodoListItem key={todo.id}
													  todo={todo}
													  removeTodo={props.removeTodo}
													  toggleTodo={props.toggleTodo}
													  editTodo={props.editTodo}/>)
			}
		</ul>

	);
}

TodoList.propTypes = {
	todos: PropTypes.array,
	removeTodo: PropTypes.func,
	toggleTodo: PropTypes.func
};
TodoList.defaultProps={
	todos: []
};

export default TodoList;
