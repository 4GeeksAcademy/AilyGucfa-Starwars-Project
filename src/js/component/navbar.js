import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img id="topPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Star_Wars_-_The_Force_Awakens_logo.png/330px-Star_Wars_-_The_Force_Awakens_logo.png" /> </span>
			</Link>
			<div className="dropdown me-4">
  				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites
 				 </button>
			</div>
		</nav>
	);
};
