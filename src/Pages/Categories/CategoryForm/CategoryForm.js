import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import "./CategoryForm.css";

const CategoryForm = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		short_desc: "",
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
			<Title>{"Add new category"}</Title>

			<Paper>
				<form className="iht-inputs-form">
					<TextField
						name="name"
						label="Name"
						values={inputValues.name}
						onChange={handleChange}
					/>
					<TextField
						name="short_desc"
						label="Short description"
						values={inputValues.short_desc}
						onChange={handleChange}
					/>
					<Button title="Save changes" clicked={handleSave} />
				</form>
			</Paper>
		</div>
	);
};

export default CategoryForm;
