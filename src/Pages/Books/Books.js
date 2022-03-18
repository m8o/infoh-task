import "./Books.css";
import React, { useEffect, useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import { useNavigate } from "react-router-dom";
import fetchFunction from "../../Services/fetchFunction";

const Books = () => {
	let navigate = useNavigate();
	const [dataTableData, setDataTableData] = useState([]);

	useEffect(async () => {
		fetchDataTableData();
	}, []);
	async function fetchDataTableData() {
		const categories = await fetchFunction("get", "category").then(
			(data) => data.data
		);
		const authors = await fetchFunction("get", "author").then(
			(data) => data.data
		);
		const response = await fetchFunction("get", "book");
		if (response.status === 200 || response.status === 201) {
			setDataTableData(() => {
				let tempAuthor;
				let tempCategory;
				const temp = response.data.map((element) => {
					tempAuthor = authors.find(
						(author) => element.author_id === author.id
					);
					tempCategory = categories.find(
						(category) => element.category_id === category.id
					);
					return {
						...element,
						author: tempAuthor.name,
						category: tempCategory.name,
					};
				});
				return temp;
			});
		}
	}
	async function onDelete(id) {
		const response = await fetchFunction("delete", `book/${id}`);
		if (response.status === 200 || response.status === 201) {
			alert("deleted", response.data);
			fetchDataTableData();
		}
	}
	function onEdit(id) {
		navigate(`/Books/Edit${id}`);
	}
	return (
		<div className="iht-books iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Books</Title>
				<FloatingButton onClick={() => navigate("/Books/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={dataTableData}
					onDelete={onDelete}
					onEdit={onEdit}
					idName={["uuid", "author_id", "category_id"]}
				/>
			</Paper>
		</div>
	);
};

export default Books;
