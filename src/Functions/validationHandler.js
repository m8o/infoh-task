export default function validationHandler(valuesObject) {
	let validationObject = {};
	let formIsValid = true;
	for (const [key, value] of Object.entries(valuesObject)) {
		validationObject[key] = value !== "";
		if (value === "") {
			formIsValid = false;
		}
	}
	return { validationObject, formIsValid };
}
