import './ToggleAll.css';
import React from 'react';
import PropTypes from 'prop-types';

function ToggleAll(props) {
	return (
		<React.Fragment>
			<input id="toggle-all" className="toggle-all" type="checkbox" onChange={props.onToggleAll}/>
			<label htmlFor="toggle-all">Mark all as complete</label>
		</React.Fragment>
	);
}

ToggleAll.propTypes = {
	onToggleAll: PropTypes.func
};
export default ToggleAll;
