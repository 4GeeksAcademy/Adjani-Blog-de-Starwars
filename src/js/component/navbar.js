import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites ({store.favorites.length})
						</a>

						<ul className="dropdown-menu">
							{store.favorites.map((item) => <li style={{ display: "flex" }}><a className='dropdown-item'>{item.properties.name}</a> <a onClick={() => actions.addOrDelFavorite(item)}><FontAwesomeIcon icon={faTrashCan} /></a></li>)}
						</ul>
					</div>
				</div>
			</div>

		</nav>
	);
};
