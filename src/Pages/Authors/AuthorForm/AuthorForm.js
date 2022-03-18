import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import fetchFunction from "../../../Services/fetchFunction";
import "./AuthorForm.css";
const initialState = {
	name: "",
	about: "",
};
const AuthorForm = () => {
	let navigate = useNavigate();
	let { authorId } = useParams();
	const [inputValues, setInputValues] = useState(initialState);
	useEffect(async () => {
		if (authorId) {
			const response = await fetchFunction("get", `author/${authorId}`);
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
		let response;
		if (authorId) {
			response = await fetchFunction(
				"patch",
				`author/${authorId}`,
				inputValues
			);
		} else {
			response = await fetchFunction("post", "author", inputValues);
		}
		if (response.status === 200 || response.status === 201) {
			alert("Succesfully updated");
			navigate("/Authors");
		}
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<Title>{authorId ? "Author update" : "Add new author"}</Title>

			<Paper>
				<form className="iht-inputs-form">
					<TextField
						name="name"
						label="Name"
						value={inputValues.name}
						onChange={handleChange}
					/>
					<TextField
						name="about"
						label="About"
						value={inputValues.about}
						onChange={handleChange}
					/>
					<Button
						title={authorId ? "Update author" : "Save author"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default AuthorForm;
