import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.jsx";
import VehiclesCard from "./vehiclesCard.jsx";
import PlanetCard from "./planetCard.jsx";

export const Home = () => {
	const { store } = useContext(Context);
	return (

		<>
			<div className="container">
				<div className="row"> <h2>Characters</h2></div>
				<div className="row cardsInArow">
					{store.people.map((person,index) => 
						<CharacterCard
							uid={index} // Use index as a unique identifier
							name={person.name}
							gender={person.gender}
							hair_color={person.hair_color}
							eye_color={person.eye_color} 
							birth_year={person.birth_year} // Add these details
                            height={person.height}
                            mass={person.mass}
                            skin_color={person.skin_color}
							srcIMG={index + 1}
							cardType="characters"
						/>
					)}	
				</div>		
				<br></br>
				<div className="row"><h2>Planets</h2></div>
					<div className="row cardsInArow">
						{store.planets.map((planet, index) => 
						<PlanetCard 
							uid ={index}
							name={planet.name} 
							population = {planet.population}
							climate= {planet.climate}
							srcIMG={index + 1}
							cardType="planets"
							/>)}	
					</div>
					<br></br>
				<div className="row"><h2>Vehicles</h2></div>
					<div className="row cardsInArow	">
				
					{store.vehicles.map((vehicle,index) => 
						<VehiclesCard 
							uid = {index}
							name={vehicle.name}
							model={vehicle.model}
							cargo_capacity={vehicle.cargo_capacity}
							consumables={vehicle.consumables}
							srcIMG={index + 1}
							cardType="vehicles"
							/>)}	
					</div>
			</div>
		
		</>
	)
	
};
