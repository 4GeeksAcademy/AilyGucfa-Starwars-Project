import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

const cardStyling = {
    width: "21rem"
}

const VehiclesCard = (props) => {
    const {actions} = useContext(Context);

    const addToFavorites = () => {
        actions.addFavorite(props.name)
    }

    return (

        <>
            <div className="card"
                style={cardStyling}>
                <img src={
                        `https://starwars-visualguide.com/assets/img/vehicles/${
                            props.srcIMG
                        }.jpg`
                    }
                    className="card-img-top planet-card-image"
                    alt="..."
                    onError={
                        (e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }
                    }/>
                <div className="card-body">
                    <h5 className="card-title">
                        {
                        props.name
                    }</h5>
                    <p className="card-text">Model: {
                        props.model
                    }</p>
                    <p className="card-text">Consumable: {
                        props.consumables
                    } </p>
                    <p className="card-text">Cargo Capacity: {
                        props.cargo_capacity
                    } </p>
                    <Link to={
                        `/vehiclesDetails/${
                            props.uid
                        }`
                    }>
                        <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
                    </Link>
                    <button className="heartIcon"
                        onClick={addToFavorites}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};
VehiclesCard.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    consumables: PropTypes.string,
    cargo_capacity: PropTypes.string


}

export default VehiclesCard;
