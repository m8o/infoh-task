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
import "./Categories.css";

const Categories = () => {
	const { categories, deletedCategories } = useSelector((state) => state);
	let navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (categories.length === 0) {
			fetchDataTableData();
		}
	}, []);
	async function fetchDataTableData() {
		const response = await fetchFunction("get", "category");
		dispatch(setStore({ categories: response.data }));
	}
	async function onDelete(id) {
		dispatch(deleteFromStore("categories", id));
		alert("Deleted!");
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
					data={categories}
					deletedData={deletedCategories}
					onDelete={onDelete}
					onEdit={onEdit}
					idName={["id"]}
				/>
			</Paper>
		</div>
	);
};

export default Categories;
