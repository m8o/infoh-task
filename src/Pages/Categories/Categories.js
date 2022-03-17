import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import "./Categories.css";

const Categories = () => {
	let navigate = useNavigate();
	return (
		<div className="iht-categories iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Catgories</Title>
				<FloatingButton onClick={() => navigate("/Categories/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={[
						{
							id: 1,
							name: "Python",
							short_desc: "A python programming language blog",
						},
					]}
					hideKeys={["id"]}
				/>
			</Paper>
		</div>
	);
};

export default Categories;
