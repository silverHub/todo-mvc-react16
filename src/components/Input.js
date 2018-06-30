import './Input.css';
import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
	state = {
		value: ''
	};

	onKeyDown = event => {
		if (event.key === 'Enter') {
			this.props.onEnter(this.state.value);
			this.setState({ value: ''});
		}
	};

	render() {
		/* Controlled native input*/
		return <input className="new-todo"
					  placeholder="What needs to be done?"
					  value={this.state.value}
					  onChange={event => this.setState({value: event.target.value})}
					  onKeyDown={this.onKeyDown}
					  autoFocus/>;
	}

}

Input.propTypes = {
	onEnter: PropTypes.func
};

export default Input;
