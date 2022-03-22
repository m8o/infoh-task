import "./Books.css";
import React, { useEffect } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import { useNavigate } from "react-router-dom";
import fetchFunction from "../../Services/fetchFunction";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromStore } from "../../Store/Actions/deleteFromStore";
import { setStore } from "../../Store/Actions/setStore";

const Books = () => {
	const { books, deletedBooks } = useSelector((state) => state);
	let navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (books.length === 0) {
			fetchDataTableData();
		}
	}, []);

	async function fetchDataTableData() {
		const categories = await fetchFunction("get", "category").then(
			(data) => data.data
		);
		const authors = await fetchFunction("get", "author").then(
			(data) => data.data
		);
		const books = await fetchFunction("get", "book").then((data) => data.data);

		dispatch(setStore({ categories, authors, books }));
	}
	async function onDelete(id) {
		dispatch(deleteFromStore("books", id));
		alert("Deleted!");
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
					data={books}
					deletedData={deletedBooks}
					onDelete={onDelete}
					onEdit={onEdit}
					idName={["uuid", "author_id", "category_id"]}
				/>
			</Paper>
		</div>
	);
};

export default Books;
