import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import useFormStateAndValidation from "../../../Hooks/useFormStateAndValidation";
import fetchFunction from "../../../Services/fetchFunction";
import { setStore } from "../../../Store/Actions/setStore";
import "./CategoryForm.css";
const initialState = {
	name: "",
	short_desc: "",
};
const CategoryForm = () => {
	let navigate = useNavigate();
	let { categoryId } = useParams();
	const dispatch = useDispatch();
	const {
		inputValues,
		setInputValues,
		handleChange,
		validationObject,
		formIsValid,
	} = useFormStateAndValidation(initialState);
	useEffect(async () => {
		if (categoryId) {
			const response = await fetchFunction("get", `category/${categoryId}`);
			if (response.status === 200 || response.status === 201) {
				delete response.data.id;
				setInputValues(response.data);
			}
		}
	}, []);

	async function fetchDataTableData() {
		const response = await fetchFunction("get", "category");
		dispatch(setStore({ categories: response.data }));
	}
	async function handleSave() {
		if (categoryId) {
			const response = await fetchFunction(
				"patch",
				`category/${categoryId}`,
				inputValues
			);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully updated");
				navigate("/Categories");
			}
		} else {
			const response = await fetchFunction("post", "category", inputValues);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully added");
				navigate("/Categories");
			}
		}
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<div className="iht-form__header">
				<MdOutlineArrowBack
					onClick={() => {
						navigate("/Categories");
					}}
					className="iht-icon iht-icon clickable"
				/>
				<Title>{categoryId ? "Category update" : "Add new category"}</Title>
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
						name="short_desc"
						label="Short description"
						value={inputValues.short_desc}
						onChange={handleChange}
						isValid={validationObject.short_desc}
					/>
					<Button
						disabled={!formIsValid}
						title={categoryId ? "Update category" : "Save category"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default CategoryForm;
