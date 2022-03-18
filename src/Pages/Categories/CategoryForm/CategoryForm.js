import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import fetchFunction from "../../../Services/fetchFunction";
import "./CategoryForm.css";
const initialState = {
	name: "",
	short_desc: "",
};
const CategoryForm = () => {
	let navigate = useNavigate();
	let { categoryId } = useParams();
	const [inputValues, setInputValues] = useState(initialState);
	useEffect(async () => {
		if (categoryId) {
			const response = await fetchFunction("get", `category/${categoryId}`);
			if (response.status === 200 || response.status === 201) {
				delete response.data.id;
				setInputValues(response.data);
			}
		}
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;
		setInputValues((currentValues) => {
			return { ...currentValues, [name]: value };
		});
	}

	async function handleSave() {
		if (categoryId) {
			const response = await fetchFunction(
				"patch",
				`category/${categoryId}`,
				inputValues
			);
			if (response.status === 200 || response.status === 201) {
				alert("Succesfully updated");
				navigate("/Categories");
			}
		} else {
			const response = await fetchFunction("post", "category", inputValues);
			if (response.status === 200 || response.status === 201) {
				alert("Succesfully added");
				setInputValues(initialState);
			}
		}
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<Title>{categoryId ? "Category update" : "Add new category"}</Title>

			<Paper>
				<form className="iht-inputs-form">
					<TextField
						name="name"
						label="Name"
						value={inputValues.name}
						onChange={handleChange}
					/>
					<TextField
						name="short_desc"
						label="Short description"
						value={inputValues.short_desc}
						onChange={handleChange}
					/>
					<Button
						title={categoryId ? "Update category" : "Save category"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default CategoryForm;
