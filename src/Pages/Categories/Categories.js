import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import fetchFunction from "../../Services/fetchFunction";
import "./Categories.css";

const Categories = () => {
	let navigate = useNavigate();
	const [dataTableData, setDataTableData] = useState([]);

	useEffect(async () => {
		fetchDataTableData();
	}, []);
	async function fetchDataTableData() {
		const response = await fetchFunction("get", "category");
		if (response.status === 200 || response.status === 201) {
			setDataTableData(response.data);
		}
	}
	async function onDelete(id) {
		const response = await fetchFunction("delete", `category/${id}`);
		if (response.status === 200 || response.status === 201) {
			alert("deleted", response.data);
			fetchDataTableData();
		}
	}
	function onEdit(id) {
		navigate(`/Categories/Edit${id}`);
	}
	return (
		<div className="iht-categories iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Catgories</Title>
				<FloatingButton onClick={() => navigate("/Categories/AddNew")} />
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

export default Categories;
