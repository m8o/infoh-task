import "./SelectField.css";
import React from "react";
/**
 *
 * @property {string} label
 * @property {string} idName
 * @property {array} data
 * @property {string} name
 * @property {string} value
 * @property {function} onChange
 * @property {boolean} disabled
 * @returns
 */
const SelectField = (props) => {
	const options = props.data.map((element) => (
		<option value={element[props.idName]}>{element.name}</option>
	));
	return (
		<div className="iht-select-field">
			<label className="iht-select-field__label" htmlFor={props.name}>
				{props.label}:
			</label>
			<select
				disabled={props.disabled}
				className="iht-select-field__input"
				name={props.name}
				onChange={props.onChange}
				value={props.value}
			>
				<option disabled value={""}></option>
				{options}
			</select>
		</div>
	);
};

export default SelectField;
