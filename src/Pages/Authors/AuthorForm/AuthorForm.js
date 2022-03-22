import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import fetchFunction from "../../../Services/fetchFunction";
import { MdOutlineArrowBack } from "react-icons/md";
import "./AuthorForm.css";
import useFormStateAndValidation from "../../../Hooks/useFormStateAndValidation";
import { useDispatch } from "react-redux";
import { setStore } from "../../../Store/Actions/setStore";
const initialState = {
	name: "",
	about: "",
};
const AuthorForm = () => {
	let navigate = useNavigate();
	let { authorId } = useParams();
	const dispatch = useDispatch();
	const {
		inputValues,
		setInputValues,
		handleChange,
		validationObject,
		formIsValid,
	} = useFormStateAndValidation(initialState);
	useEffect(async () => {
		if (authorId) {
			const response = await fetchFunction("get", `author/${authorId}`);
			if (response.status === 200 || response.status === 201) {
				delete response.data.id;
				setInputValues(response.data);
			}
		}
	}, []);

	async function fetchDataTableData() {
		const response = await fetchFunction("get", "author");
		dispatch(setStore({ authors: response.data }));
	}
	async function handleSave() {
		let response;
		if (authorId) {
			response = await fetchFunction(
				"patch",
				`author/${authorId}`,
				inputValues
			);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully updated");
				navigate("/Authors");
			}
		} else {
			response = await fetchFunction("post", "author", inputValues);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully added");
				navigate("/Authors");
			}
		}
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<div className="iht-form__header">
				<MdOutlineArrowBack
					onClick={() => {
						navigate("/Authors");
					}}
					className="iht-icon iht-icon clickable"
				/>
				<Title>{authorId ? "Author update" : "Add new author"}</Title>
			</div>

			<Paper>
				<form className="iht-inputs-form">
					<TextField
						name="name"
						label="Name"
						value={inputValues.name}
						onChange={handleChange}
						isValid={validationObject.name}
					/>
					<TextField
						name="about"
						label="About"
						value={inputValues.about}
						onChange={handleChange}
						isValid={validationObject.about}
					/>
					<Button
						disabled={!formIsValid}
						title={authorId ? "Update author" : "Save author"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default AuthorForm;
