import React, { useEffect } from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import fetchFunction from "../../Services/fetchFunction";
import { useDispatch } from "react-redux";
import { setStore } from "../../Store/Actions/setStore";

const Welcome = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	useEffect(async () => {
		const categories = await fetchFunction("get", "category").then(
			(data) => data.data
		);
		const authors = await fetchFunction("get", "author").then(
			(data) => data.data
		);
		const books = await fetchFunction("get", "book").then((data) => data.data);

		dispatch(setStore({ categories, authors, books }));
	}, []);

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
