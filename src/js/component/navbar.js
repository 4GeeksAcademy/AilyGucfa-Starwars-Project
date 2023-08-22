import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store,actions } = useContext(Context); // Access the context

    function handleDelete(itemName){
        actions.removeFavorite(itemName);
    }

    return (
        <nav className="container-fluid navbar navbar-light mb-5">
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
                            <span className="dropdown-item">{name}
                            <button 
                                className="deleteFavorite"
                                onClick={() => handleDelete(name)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                    </svg>
                            </button>
                            </span>
                           
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
