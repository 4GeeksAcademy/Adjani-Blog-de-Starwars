const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			characters: [],
			planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			addOrDelFavorite: (itemFavorite) => {
				const store = getStore();
				if (store.favorites.includes(itemFavorite)) {
					setStore({ favorites: store.favorites.filter((favorite2) => favorite2 !== itemFavorite) });
				} else {
					setStore({ favorites: [...store.favorites, itemFavorite] });
				}
			},
			getCharacters: () => {
				fetch(`${getStore().urlBase}/people`)
					.then(response => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then(response => response.json())
								.then((data) => {
									setStore({
										characters: [...getStore().characters, data.result]
									})
								}).catch((error) => {
									console.log(error)
								})
						}
					}).catch((error) => {
						console.log(error)
					})
			},
			getPlanets: () => {
				fetch(`${getStore().urlBase}/planets`)
					.then(response => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then(response => response.json())
								.then((data) => {
									setStore({
										planets: [...getStore().planets, data.result]
									})
								}).catch((error) => {
									console.log(error)
								})
						}
					}).catch((error) => {
						console.log(error)
					})
			},
		}
	};
};

export default getState;
