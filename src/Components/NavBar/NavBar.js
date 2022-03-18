import "./NavBar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const NavBar = () => {
	const [openNavbar, setOpenNavbar] = useState(true);
	let containerClassnameArray = ["iht-navbar__links-container"];
	let iconContainerClassnameArray = ["iht-navbar__icon", "iht-icon"];
	if (openNavbar) {
		containerClassnameArray.push("iht-navbar__links-container--open");
		iconContainerClassnameArray.push("iht-navbar__icon--open");
	}
	return (
		<div className="iht-navbar">
			<h3 className="iht-navbar__title">Bookshelf</h3>
			<div className="iht-navbar__menu">
				<MdMenu
					onClick={() => setOpenNavbar((currentState) => !currentState)}
					className={iconContainerClassnameArray.join(" ")}
				/>
				<div className={containerClassnameArray.join(" ")}>
					<NavLink
						onClick={() => setOpenNavbar(false)}
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
						onClick={() => setOpenNavbar(false)}
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
						onClick={() => setOpenNavbar(false)}
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
		</div>
	);
};

export default NavBar;
