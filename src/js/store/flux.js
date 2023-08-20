const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			vehicles:[],
			favorites:[],
			characterDetails: {}, // Initialize with an empty object
            planetDetails: {} // Initialize with an empty object
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
				fetchInvidualCharacterDetails: async (characterId) => {
					try {
						const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
						if (!response.ok) {
							throw new Error("Error fetching character details");
						}
						const characterData = await response.json();
				
						// Get the current store state
						const store = getStore();
				
						// Update the characterDetails property of the store with the fetched data
						setStore({
							...store,
							characterDetails: characterData
						});
					} catch (error) {
						console.error("Error fetching character details:", error);
					}
				},
				fetchIndividualPlanetDetails: async (planetId) => {
					try {
						const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
						if (!response.ok) {
							throw new Error("Error fetching planet details");
						}
						const planetData = await response.json();
				
						// Get the current store state
						const store = getStore();
				
						// Update the planetdetails property of the store with the fetched data
						setStore({
							...store,
							planetDetails: planetData
						});
					} catch (error) {
						console.error("Error fetching character details:", error);
					}
				},
				fetchIndividualVehicleDetails : () => {
					try {
						
					} catch (error) {
						
					}
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
