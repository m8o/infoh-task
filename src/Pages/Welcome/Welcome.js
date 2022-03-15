import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Welcome = () => {
	let navigate = useNavigate();
	return (
		<div className="iht-welcome">
			<h1 className="iht-welcome__title">Welcome to the BookShelf!</h1>
			<div className="iht-welcome__button-container">
				<Button
					title="Authors"
					clicked={() => {
						navigate("/Authors");
					}}
				/>
				<Button
					title="Categories"
					clicked={() => {
						navigate("/Categories");
					}}
				/>
				<Button
					title="Books"
					clicked={() => {
						navigate("/Books");
					}}
				/>
			</div>
		</div>
	);
};

export default Welcome;
