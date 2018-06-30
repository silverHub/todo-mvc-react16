import './Footer.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function Footer(props) {
	const {nbrOfIncompleteTodos, isThereCompletedTodo, clearCompleted} = props;
	return (
		<footer className="footer">
			<span
				className="todo-count"><strong>{nbrOfIncompleteTodos}</strong> item{nbrOfIncompleteTodos !== 1 ? 's' : ''}
				left</span>
			<ul className="filters">
				<li>
					<NavLink activeClassName="selected" to="/all">All</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/active">Active</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/completed">Completed</NavLink>
				</li>
			</ul>
			{ isThereCompletedTodo &&
			<button className="clear-completed" onClick={clearCompleted}>Clear completed</button> }
		</footer>
	);
}

Footer.propTypes = {
	nbrOfIncompleteTodos: PropTypes.number,
	isThereCompletedTodo: PropTypes.bool,
	clearCompleted: PropTypes.func
};
export default Footer;
