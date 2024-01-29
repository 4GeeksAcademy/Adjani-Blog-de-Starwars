import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					<div className="myCard">
						<div>
							<img src="https://picsum.photos/id/237/200/200" alt="" />
						</div>
						<div className="body-text">
							<p>Nombre</p>
							<p>Gender</p>
							<p>Hair Color</p>
							<p>Eye Color</p>
						</div>
						<div className="button-footer" style={{ justifyContent: "space-between", display: "flex" }}>
							<button className="btn btn-outline-primary">Learn more</button>
							<button className="btn btn-outline-warning">C</button>
						</div>
					</div>
				</div>
			</div>
				<div className="container mt-5">
					<h1 className="text-danger">Planets</h1>
					<div className="my-carousel">
						<div className="myCard">
							<div>
								<img src="https://picsum.photos/id/237/200/200" alt="" />
							</div>
							<div className="body-text">
								<p>Population:</p>
								<p>Terrain:</p>
							</div>
							<div className="button-footer" style={{ justifyContent: "space-between", display: "flex" }}>
								<button className="btn btn-outline-primary">Learn more</button>
								<button className="btn btn-outline-warning">C</button>
							</div>
						</div>
					</div>
				</div>
			</>
			)
};
