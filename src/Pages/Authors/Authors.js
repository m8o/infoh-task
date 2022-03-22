import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import fetchFunction from "../../Services/fetchFunction";
import { deleteFromStore } from "../../Store/Actions/deleteFromStore";
import { setStore } from "../../Store/Actions/setStore";
import "./Authors.css";

const Authors = () => {
	const { authors, deletedAuthors } = useSelector((state) => state);
	let navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (authors.length === 0) {
			fetchDataTableData();
		}
	}, []);
	async function fetchDataTableData() {
		const response = await fetchFunction("get", "author");
		dispatch(setStore({ authors: response.data }));
	}
	async function onDelete(id) {
		dispatch(deleteFromStore("authors", id));
		alert("Deleted!");
	}
	function onEdit(id) {
		navigate(`/Authors/Edit${id}`);
	}
	console.log(authors);
	return (
		<div className="iht-authors iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Authors</Title>
				<FloatingButton onClick={() => navigate("/Authors/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={authors}
					deletedData={deletedAuthors}
					onDelete={onDelete}
					onEdit={onEdit}
					idName={["id"]}
				/>
			</Paper>
		</div>
	);
};

export default Authors;
