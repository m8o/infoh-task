import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="iht-navbar">
			<h3 className="iht-navbar__title">Bookshelf</h3>
			<div className="iht-navbar__links-container">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "iht-navbar__link iht-navbar__link--active"
							: "iht-navbar__link"
					}
					to="/Authors"
				>
					Authors
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "iht-navbar__link iht-navbar__link--active"
							: "iht-navbar__link"
					}
					to="/Categories"
				>
					Categories
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "iht-navbar__link iht-navbar__link--active"
							: "iht-navbar__link"
					}
					to="/Books"
				>
					Books
				</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
