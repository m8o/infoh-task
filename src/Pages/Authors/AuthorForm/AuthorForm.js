import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import "./AuthorForm.css";

const AuthorForm = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		about: "",
	});
	function handleChange(event) {
		const { name, value } = event.target;
		setInputValues((currentValues) => {
			return { ...currentValues, [name]: value };
		});
	}
	function handleSave() {
		console.log("post data", inputValues);
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<Title>{"Add new author"}</Title>

			<Paper>
				<form className="iht-inputs-form">
					<TextField
						name="name"
						label="Name"
						values={inputValues.name}
						onChange={handleChange}
					/>
					<TextField
						name="about"
						label="About"
						values={inputValues.about}
						onChange={handleChange}
					/>
					<Button title="Save changes" clicked={handleSave} />
				</form>
			</Paper>
		</div>
	);
};

export default AuthorForm;
