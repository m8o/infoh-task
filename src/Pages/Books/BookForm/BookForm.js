import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import SelectField from "../../../Components/SelectField/SelectField";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import "./BookForm.css";

const BookForm = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		tagline: "",
		category_id: "",
		author_id: "",
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
						name="tagline"
						label="Tagline"
						values={inputValues.tagline}
						onChange={handleChange}
					/>
					<SelectField
						label={"Category"}
						value={inputValues.category_id}
						idName="id"
						data={[
							{
								id: 1,
								name: "Python",
								short_desc: "A python programming language blog",
							},
							{
								id: 2,
								name: "Blyathon",
								short_desc: "A Blyathon programming language blog",
							},
						]}
						name="category_id"
						onChange={handleChange}
					/>
					<Button title="Save changes" clicked={handleSave} />
				</form>
			</Paper>
		</div>
	);
};

export default BookForm;
