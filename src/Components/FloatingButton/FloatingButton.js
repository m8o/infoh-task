import React from "react";
import { MdAdd } from "react-icons/md";
import "./FloatingButton.css";
/**
 *
 * @property {function} onClick - onclick function
 * @returns floating button for adding new records
 */

const FloatingButton = (props) => {
	return (
		<button
			type="button"
			className={"iht-floatingButton"}
			onClick={props.onClick}
		>
			<MdAdd className="iht-icon" />
		</button>
	);
};

export default FloatingButton;
