import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import "./Authors.css";

const Authors = () => {
	return (
		<div className="iht-authors iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title size="small">Authors</Title>
				<FloatingButton />
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
