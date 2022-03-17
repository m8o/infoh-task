import React from "react";
import "./TextField.css";
/**
 *
 * @property {string} label
 * @property {string} value
 * @property {string} name
 * @property {function} onChange
 * @returns
 */

const TextField = (props) => {
	return (
		<div className="iht-text-field">
			<label className="iht-text-field__label" htmlFor={props.name}>
				{props.label}:
			</label>
			<input
				className="iht-text-field__input"
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				type="text"
			/>
		</div>
	);
};

export default TextField;
