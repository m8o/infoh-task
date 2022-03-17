import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import "./Authors.css";

const Authors = () => {
	let navigate = useNavigate();
	return (
		<div className="iht-authors iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Authors</Title>
				<FloatingButton onClick={() => navigate("/Authors/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={[
						{
							about: "Full Stack Software Engineer",
							id: 1,
							name: "Fatema T. Zuhora",
						},
					]}
					hideKeys={["id"]}
				/>
			</Paper>
		</div>
	);
};

export default Authors;
