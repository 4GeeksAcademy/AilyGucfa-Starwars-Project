import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-4 h1"> Starwars</span>
			</Link>
			<div className="dropdown me-4">
  				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites
 				 </button>
			</div>
		</nav>
	);
};
