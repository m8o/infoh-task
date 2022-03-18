import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import fetchFunction from "../../Services/fetchFunction";
import "./Authors.css";

const Authors = () => {
	let navigate = useNavigate();
	const [dataTableData, setDataTableData] = useState([]);

	useEffect(async () => {
		fetchDataTableData();
	}, []);
	async function fetchDataTableData() {
		const response = await fetchFunction("get", "author");
		if (response.status === 200 || response.status === 201) {
			setDataTableData(response.data);
		}
	}
	async function onDelete(id) {
		const response = await fetchFunction("delete", `author/${id}`);
		if (response.status === 200 || response.status === 201) {
			alert("deleted", response.data);
			fetchDataTableData();
		}
	}
	function onEdit(id) {
		navigate(`/Authors/Edit${id}`);
	}
	return (
		<div className="iht-authors iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Authors</Title>
				<FloatingButton onClick={() => navigate("/Authors/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={dataTableData}
					onDelete={onDelete}
					onEdit={onEdit}
					idName={["id"]}
				/>
			</Paper>
		</div>
	);
};

export default Authors;
