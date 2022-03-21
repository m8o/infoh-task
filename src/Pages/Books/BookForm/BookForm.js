import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import CheckBox from "../../../Components/CheckBox/CheckBox";
import Paper from "../../../Components/Paper/Paper";
import SelectField from "../../../Components/SelectField/SelectField";
import TextField from "../../../Components/TextField/TextField";
import Title from "../../../Components/Title/Title";
import fetchFunction from "../../../Services/fetchFunction";
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
	const [inputValues, setInputValues] = useState(initialState);
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

	function handleChange(event) {
		const { name, value, checked, type } = event.target;
		console.log(event);
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

	async function handleSave() {
		let response;
		if (bookId) {
			response = await fetchFunction("patch", `book/${bookId}`, inputValues);
		} else {
			response = await fetchFunction("post", "book", inputValues);
		}

		if (response.status === 200 || response.status === 201) {
			alert("Succesfully updated");
			navigate("/Books");
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
					/>
					<TextField
						name="tagline"
						label="Tagline"
						value={inputValues.tagline}
						onChange={handleChange}
					/>
					<SelectField
						label={"Category"}
						value={inputValues.category_id}
						idName="id"
						data={optionsData.category}
						name="category_id"
						onChange={handleChange}
					/>
					<SelectField
						label={"Author"}
						value={inputValues.author_id}
						idName="id"
						data={optionsData.author}
						name="author_id"
						onChange={handleChange}
					/>
					<TextField
						name="short_desc"
						label="Short description"
						value={inputValues.short_desc}
						onChange={handleChange}
					/>
					{bookId && (
						<CheckBox
							name="is_published"
							label="Is published"
							checked={inputValues.is_published}
							onChange={handleChange}
						/>
					)}
					<Button
						title={bookId ? "Update book" : "Save book"}
						clicked={handleSave}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default BookForm;
