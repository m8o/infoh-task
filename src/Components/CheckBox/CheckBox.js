import React from "react";
import "./CheckBox.css";
/**
 *
 * @property {string} label
 * @property {string} checked
 * @property {string} name
 * @property {function} onChange
 * @returns
 */

const CheckBox = (props) => {
	return (
		<div className="iht-check-box">
			<label className="iht-check-box__label" htmlFor={props.name}>
				{props.label}:
			</label>
			<input
				className="iht-check-box__input"
				name={props.name}
				checked={props.checked}
				onChange={props.onChange}
				type="checkbox"
			/>
		</div>
	);
};

export default CheckBox;
