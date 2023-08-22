const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			vehicles:[],
			favoriteItems:[],
			characterDetails: {}, 
			planetDetails: {}, 
			vehicleDetails: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			initialLoading: () => {
				getActions().fetchPeople();
				getActions().fetchVehicles();
				getActions().fetchPlanets();
			},

			fetchPeople: () => {
				fetch("https://swapi.dev/api/people ")
					.then(response => {
						if (response.ok) {
							console.log("The response is successful");
							return response.json();
						} else {
							throw new Error(response.statusText);
						}
					})
					.then(data => {
						setStore({people:data.results})
					})
					.catch(error => console.log("There was a problem", error));
				},
			
				fetchVehicles: async () => {
					const response = await fetch("https://swapi.dev/api/vehicles")
					let data = await response.json();
					setStore({vehicles:data.results})
					
				},

				fetchPlanets: async () => {
					const response =await fetch("https://swapi.dev/api/planets")
					let data = await response.json();
					setStore({planets:data.results})
				},
				fetchIndividualCharacterDetails: (characterId) => {
					fetch(`https://swapi.dev/api/people/${characterId}/`)
						.then(response => {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error("Error fetching character details");
							}
					})
					.then(characterData => {
						// This .then block receives the JSON data of the character details. 
						getActions().updateCharacterDetails({data: characterData});
					})
					.catch(error => {
						console.error("Error fetching character details:", error.message);
						getActions().updateCharacterDetails();
					});
			},
			// Updates the character details in the store with new data
			updateCharacterDetails: (characterData) => {
				const store = getStore(); //get the current state of the store
				//setStore() it is like you're telling your app to update the information in the store. 
				setStore({
					...store,
					characterDetails: characterData,
				}); 
			},
				fetchIndividualPlanetDetails: (planetId) => {
					fetch(`https://swapi.dev/api/planets/${planetId}/`)
						.then(response => {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error("Error fetching planet details");
							}
						})
						.then(planetData => {
							getActions().updatePlanetDetails({data: planetData});
						})
						.catch(error => {
							console.error("Error fetching planet details:", error.message);
							getActions().updatePlanetDetails();
						});
				},
				updatePlanetDetails: (planetData) => {
					const store = getStore();
					setStore({
						...store,
						planetDetails: planetData
					});
				},
				
				fetchIndividualVehicleDetails: (vehicleId) => {
					fetch(`https://swapi.dev/api/vehicles/${vehicleId}/`)
						.then(response => {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error("Error fetching vehicle details");
							}
						})
						.then(vehicleData => {
							getActions().updateVehicleDetails({data:vehicleData});
						})
						.catch(error => {
							console.error("Error fetching vehicle details:", error.message);
						});
				},
				updateVehicleDetails: (vehicleData) => {
					const store = getStore();
					setStore({
						...store,
						vehicleDetails: vehicleData
					});
				},
				addFavorite: (name) => {
					const store = getStore(); //current state of the store 
					const updatedFavorites = [...store.favoriteItems, name]; // create a new array, spreads the existing array of favorite characters and adds adds the new characterName to the end
					setStore({ favoriteItems: updatedFavorites });
				},
				
				changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
