// Created by steinitz on 08 Aug 2016

import React, {PropTypes} from 'react';

const Checkbox = ({name, label, onChange, checked}) =>
{
	return (
		<div>
			<div key = {name}>
				<input
					type		= "checkbox"
					name		= {name}
					checked		= {checked}
					onChange	= {onChange}
				/>
				<label className = "checkboxLabel">{name}</label>
			</div>
		</div>
	);
};

Checkbox.propTypes = {
	name: 		PropTypes.string.isRequired,
	label: 		PropTypes.string,
	onChange: 	PropTypes.func.isRequired,
	checked:	PropTypes.bool
};

export default Checkbox;
