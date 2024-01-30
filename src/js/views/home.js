import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					{store.characters.map((item) => {
						return (
							<div className="myCard">
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="" />
								</div>
								<div className="body-text">
									<p><strong>Nombre: </strong>{item.properties.name}</p>
									<p><strong>Gender: </strong>{item.properties.gender}</p>
									<p><strong>Hair Color: </strong>{item.properties.hair_color}</p>
									<p><strong>Eye Color: </strong>{item.properties.eye_color}</p>
								</div>
								<div className="button-footer" style={{ justifyContent: "space-between", display: "flex" }}>
									<Link to={`/characters/${item._id}`} className="btn btn-outline-primary">Learn more</Link>
									<button className="btn btn-outline-warning">C</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carousel">
					{store.planets.map((item) => {
						return (
							<div className="myCard">
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="" />
								</div>
								<div className="body-text">
									<p><strong>Population: </strong>{item.properties.population}</p>
									<p><strong>Terrain: </strong>{item.properties.terrain}</p>
								</div>
								<div className="button-footer" style={{ justifyContent: "space-between", display: "flex" }}>
									<Link to={`/planets/${item._id}`} className="btn btn-outline-primary">Learn more</Link>
									<button className="btn btn-outline-warning">C</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
};
