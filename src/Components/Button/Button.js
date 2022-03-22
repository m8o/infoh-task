import React from "react";
import "./Button.css";
/**
 *
 * @property {string} title
 * @property {function} clicked
 * @returns
 */
const Button = (props) => {
	let buttonClassnameArray = ["iht-button"];
	if (props.disabled) {
		buttonClassnameArray.push("disabled");
	}
	return (
		<button
			type="button"
			disabled={props.disabled}
			className={buttonClassnameArray.join(" ")}
			onClick={props.clicked}
		>
			{props.title}
		</button>
	);
};

export default Button;
