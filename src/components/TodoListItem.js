import './TodoListItem.css';
import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {

	state = {
		edit: false
	};

	startEdit = () => {
		this.setState({edit: true});
	};

	stopEdit = () => {
		this.setState({edit: false});
	};

	onEdit = event => {
		const newValue = event.target.value.trim();

		if (event.key === 'Escape') {
			this.stopEdit();
		}

		if (event.type === 'blur' || event.key === 'Enter' || event.key === 'Tab') {
			// check value
			if (newValue !== '') {
				// change label
				this.props.editTodo({...this.props.todo, label: newValue});
			} else {
				// remove item
				this.props.removeTodo(this.props.todo.id)
			}
			this.stopEdit();
		}
	};


	render() {
		const {todo, toggleTodo, removeTodo} = this.props;
		const {label, completed, id} = todo;
		const {edit}  = this.state;

		return (
			<li className={ `${completed ? 'completed' : ''} ${edit ? 'editing' : ''}`}>
				<div className="view">
					<input className="toggle" type="checkbox" checked={completed} onChange={() => {
						toggleTodo(id)
					}}/>
					<label onDoubleClick={this.startEdit}>{label}</label>
					<button className="destroy" onClick={() => {
						removeTodo(id)
					}}/>
				</div>
				{edit && <input className="edit"
								autoFocus="true"
								defaultValue={label}
								onBlur={this.onEdit}
								onKeyDown={this.onEdit}/>}
			</li>
		);
	}
}

TodoListItem.propTypes = {
	todo: PropTypes.shape({
		label: PropTypes.string,
		completed: PropTypes.bool
	}),
	removeTodo: PropTypes.func,
	toggleTodo: PropTypes.func
};
TodoListItem.defaultProps = {};

export default TodoListItem;
