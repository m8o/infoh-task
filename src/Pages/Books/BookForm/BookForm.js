import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import CheckBox from "../../../Components/CheckBox/CheckBox";
import Paper from "../../../Components/Paper/Paper";
import SelectField from "../../../Components/SelectField/SelectField";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import useFormStateAndValidation from "../../../Hooks/useFormStateAndValidation";
import fetchFunction from "../../../Services/fetchFunction";
import { setStore } from "../../../Store/Actions/setStore";
import "./BookForm.css";
const initialState = {
	name: "",
	tagline: "",
	category_id: "",
	author_id: "",
	short_desc: "",
};
const BookForm = () => {
	let navigate = useNavigate();
	let { bookId } = useParams();
	const dispatch = useDispatch();
	const {
		inputValues,
		setInputValues,
		handleChange,
		validationObject,
		formIsValid,
	} = useFormStateAndValidation(initialState);
	const [optionsData, setOptionsData] = useState({ category: [], author: [] });
	useEffect(async () => {
		if (bookId) {
			const response = await fetchFunction("get", `book/${bookId}`);
			if (response.status === 200 || response.status === 201) {
				delete response.data.uuid;
				setInputValues(response.data);
			}
		}
		const category = await fetchFunction("get", "category").then(
			(data) => data.data
		);
		const author = await fetchFunction("get", "author").then(
			(data) => data.data
		);
		setOptionsData({ category, author });
	}, []);

	async function fetchDataTableData() {
		const response = await fetchFunction("get", "book");
		dispatch(setStore({ books: response.data }));
	}
	async function handleSave() {
		let response;
		if (bookId) {
			response = await fetchFunction("patch", `book/${bookId}`, inputValues);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully updated");
				navigate("/Books");
			}
		} else {
			response = await fetchFunction("post", "book", inputValues);
			if (response.status === 200 || response.status === 201) {
				fetchDataTableData();
				alert("Succesfully added");
				navigate("/Books");
			}
		}
	}
	return (
		<div className="iht-form iht-content-wrapper">
			<div className="iht-form__header">
				<MdOutlineArrowBack
					onClick={() => {
						navigate("/Books");
					}}
					className="iht-icon iht-icon clickable"
				/>
				<Title>{bookId ? "Book update" : "Add new book"}</Title>
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
						name="tagline"
						label="Tagline"
						value={inputValues.tagline}
						onChange={handleChange}
						isValid={validationObject.tagline}
					/>
					<SelectField
						label={"Category"}
						value={inputValues.category_id}
						idName="id"
						data={optionsData.category}
						name="category_id"
						onChange={handleChange}
						isValid={validationObject.category_id}
					/>
					<SelectField
						label={"Author"}
						value={inputValues.author_id}
						idName="id"
						data={optionsData.author}
						name="author_id"
						onChange={handleChange}
						isValid={validationObject.author_id}
					/>
					<TextField
						name="short_desc"
						label="Short description"
						value={inputValues.short_desc}
						onChange={handleChange}
						isValid={validationObject.short_desc}
					/>
					{bookId && (
						<CheckBox
							name="is_published"
							label="Is published"
							checked={inputValues.is_published}
							onChange={handleChange}
							isValid={validationObject.is_published}
						/>
					)}
					<Button
						disabled={!formIsValid}
						title={bookId ? "Update book" : "Save book"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default BookForm;
