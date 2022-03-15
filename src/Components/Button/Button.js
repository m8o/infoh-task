import React from "react";
import "./Button.css";
/**
 *
 * @param {*} props
 * @returns
 */
const Button = (props) => {
	return (
		<button type="button" className="iht-button" onClick={props.clicked}>
			{props.title}
		</button>
	);
};

export default Button;
