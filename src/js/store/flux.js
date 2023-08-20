const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			vehicles:[],
			favorites:[]
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
