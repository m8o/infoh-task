import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Welcome from "./Pages/Welcome/Welcome";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./Store/Actions/getAllData";

function App() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getData("all"));
	// }, []);

	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="*" element={<Layout />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
