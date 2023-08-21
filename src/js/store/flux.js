const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			vehicles:[],
			favorites:[],
			characterDetails: { data: null, isLoading: false }, // Initialize with null data and isLoading flag
			planetDetails: { data: null, isLoading: false }, // Initialize with null data and isLoading flag
			vehicleDetails: { data: null, isLoading: false }, // Initialize with null data and isLoading flag
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
				// fetchIndividualCharacterDetails: async (characterId) => {
				// 	try {
				// 		const response = await fetch(`https://www.swapi.tech/api/people/${characterId}/`);
				// 		if (!response.ok) {
				// 			throw new Error("Error fetching character details");
				// 		}
				// 		const characterData = await response.json();
				
				// 		// Update the characterDetails property of the store using actions
				// 		getActions().updateCharacterDetails(characterData);
				// 	} catch (error) {
				// 		console.error("Error fetching character details:", error.message); // Log the error message
				// 	}
				// },
				// updateCharacterDetails: (characterData) => {
				// 	const store = getStore();
				// 	setStore({
				// 		...store,
				// 		characterDetails: characterData
				// 	});
				// },
				fetchIndividualCharacterDetails: (characterId) => {
				// Set isLoading to true before fetching
				getActions().updateCharacterDetails({ isLoading: true });

				fetch(`https://www.swapi.tech/api/people/${characterId}/`)
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							throw new Error("Error fetching character details");
						}
					})
					.then(characterData => {
						// Update the characterDetails property of the store using actions
						getActions().updateCharacterDetails({ data: characterData, isLoading: false });
					})
					.catch(error => {
						console.error("Error fetching character details:", error.message);
						// Update characterDetails with error and isLoading set to false
						getActions().updateCharacterDetails({ data: null, isLoading: false });
					});
			},
			updateCharacterDetails: (characterData) => {
				const store = getStore();
				setStore({
					...store,
					characterDetails: characterData,
				});
			},
				fetchIndividualPlanetDetails: (planetId) => {
					fetch(`https://www.swapi.tech/api/people/${planetId}/`)
						.then(response => {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error("Error fetching planet details");
							}
						})
						.then(planetData => {
							// Update the characterDetails property of the store using actions
							getActions().updatePlanetDetails(planetData);
						})
						.catch(error => {
							console.error("Error fetching planet details:", error.message);
						});
				},
				updatePlanetDetails: (planetData) => {
					const store = getStore();
					setStore({
						...store,
						planetDetails: planetData
					});
				},
				
				fetchIndividualVehucleDetails: (vehicleId) => {
					fetch(`https://www.swapi.tech/api/people/${vehicleId}/`)
						.then(response => {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error("Error fetching vehicle details");
							}
						})
						.then(vehicleData => {
							// Update the characterDetails property of the store using actions
							getActions().updateVehicleDetails(vehicleData);
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
