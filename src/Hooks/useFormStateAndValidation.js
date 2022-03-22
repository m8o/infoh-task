import React, { useState } from "react";
import validationHandler from "../Functions/validationHandler";

const useFormStateAndValidation = (initialState) => {
	const [inputValues, setInputValues] = useState(initialState);
	let { validationObject, formIsValid } = validationHandler(inputValues);
	function handleChange(event) {
		const { name, value, checked, type } = event.target;
		if (type === "checkbox") {
			setInputValues((currentValues) => {
				return { ...currentValues, [name]: checked };
			});
		} else {
			setInputValues((currentValues) => {
				return { ...currentValues, [name]: value };
			});
		}
	}

	return {
		inputValues,
		setInputValues,
		handleChange,
		validationObject,
		formIsValid,
	};
};

export default useFormStateAndValidation;
