import "./Layout.css";
import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Authors from "../Pages/Authors/Authors";
import Categories from "../Pages/Categories/Categories";
import Books from "../Pages/Books/Books";
import NotFound from "../Pages/NotFound";

const Layout = () => {
	return (
		<div className="iht-layout">
			<NavBar />
			<main>
				<Routes>
					<Route path="/Authors" element={<Authors />} />
					<Route path="/Categories" element={<Categories />} />
					<Route path="/Books" element={<Books />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
};

export default Layout;
