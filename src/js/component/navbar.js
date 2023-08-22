import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context); // Access the context
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img
                        id="starwarsImage"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Star_Wars_-_The_Force_Awakens_logo.png/330px-Star_Wars_-_The_Force_Awakens_logo.png"
                        alt="Star Wars Logo"
                    />
                </span>
            </Link>
            <div className="dropdown me-4">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites <span className="favoriteLenght">{store.favoriteItems.length}</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favoriteItems.map((name, index) => (
                        <li key={index}>
                            <span className="dropdown-item">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
