import "./Layout.css";
import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Authors from "../Pages/Authors/Authors";
import Categories from "../Pages/Categories/Categories";
import Books from "../Pages/Books/Books";
import NotFound from "../Pages/NotFound";
import AuthorForm from "../Pages/Authors/AuthorForm/AuthorForm";
import BookForm from "../Pages/Books/BookForm/BookForm";
import CategoryForm from "../Pages/Categories/CategoryForm/CategoryForm";

const Layout = () => {
	return (
		<div className="iht-layout">
			<NavBar />
			<main>
				<Routes>
					<Route path="/Authors" element={<Authors />} />
					<Route path="/Authors/AddNew" element={<AuthorForm />} />
					<Route path="/Authors/Edit:authorId" element={<AuthorForm />} />
					<Route path="/Categories" element={<Categories />} />
					<Route path="/Categories/AddNew" element={<CategoryForm />} />
					<Route
						path="/Categories/Edit:categoryId"
						element={<CategoryForm />}
					/>
					<Route path="/Books" element={<Books />} />
					<Route path="/Books/AddNew" element={<BookForm />} />
					<Route path="/Books/Edit:bookId" element={<BookForm />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
};

export default Layout;
