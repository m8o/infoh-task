import React, { useState } from "react";
import "./TextField.css";
/**
 *
 * @property {string} label
 * @property {string} value
 * @property {string} name
 * @property {function} onChange
 * @property {boolean} disabled
 * @returns
 */

const TextField = (props) => {
	const [isTouched, setIsTouched] = useState(false);
	let inputClassnameArray = ["iht-text-field__input"];
	if (!props.isValid && isTouched) {
		inputClassnameArray.push("fail");
	}
	return (
		<div className="iht-text-field">
			<label className="iht-text-field__label" htmlFor={props.name}>
				{props.label}:
			</label>
			<input
				disabled={props.disabled}
				className={inputClassnameArray.join(" ")}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				type="text"
				onBlur={() => setIsTouched(true)}
			/>
		</div>
	);
};

export default TextField;
