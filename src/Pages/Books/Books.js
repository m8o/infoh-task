import "./Books.css";
import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Paper from "../../Components/Paper/Paper";
import Title from "../../Components/Title/Title";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import { useNavigate } from "react-router-dom";

const Books = () => {
	let navigate = useNavigate();
	return (
		<div className="iht-books iht-content-wrapper">
			<div className="iht-content-title-button">
				<Title>Books</Title>
				<FloatingButton onClick={() => navigate("/Books/AddNew")} />
			</div>
			<Paper>
				<DataTable
					data={[
						{
							author_id: 1,
							category_id: 1,
							is_published: false,
							name: "Code In Python",
							short_desc: "",
							tagline: "A python programming language blog!",
							uuid: "edf5b0e0-7a3b-4ea6-8890-b6bb84d2318f",
						},
					]}
					hideKeys={["author_id", "category_id", "uuid"]}
				/>
			</Paper>
		</div>
	);
};

export default Books;
