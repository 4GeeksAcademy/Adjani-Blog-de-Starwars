import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const Detail = () => {
    const params = useParams()
    const [search, setSearch] = useState({})
    const { store } = useContext(Context)

    const details = () => {
        if (params.nature == "characters") {
            const searchFind = store.characters.find((item) => item._id == params.id)
            setSearch(searchFind)
        } else {
            const searchFind = store.planets.find((item) => item._id == params.id)
            setSearch(searchFind);
        }
    }

    useEffect(() => {
        details()
    }, [])

    return (
        <>
            {
                params.nature == "characters" ?
                    <div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ paddingTop: "50px", display: "flex", width: "50%", justifyContent: "space-between" }}>
                                <div>
                                    <img style={{ width: "300px" }} src={`https://starwars-visualguide.com/assets/img/characters/${search?.uid}.jpg`} alt="" />
                                </div>
                                <div>
                                    <h1>{search?.properties?.name}</h1>
                                    <p>{search?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                            <div style={{ marginTop: "50px", marginBottom: "50px", height: "2px", backgroundColor: "black", width: "100%" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px", textAlign: "center" }}>
                            <div>
                                <h5>Name</h5>
                                <h5>{search?.properties?.name}</h5>
                            </div>
                            <div>
                                <h5>Birth Year</h5>
                                <h5>{search?.properties?.birth_year}</h5>
                            </div>
                            <div>
                                <h5>Gender</h5>
                                <h5>{search?.properties?.gender}</h5>
                            </div>
                            <div>
                                <h5>Height</h5>
                                <h5>{search?.properties?.height}</h5>
                            </div>
                            <div>
                                <h5>Skin Color</h5>
                                <h5>{search?.properties?.skin_color}</h5>
                            </div>
                            <div>
                                <h5>Hair Color</h5>
                                <h5>{search?.properties?.hair_color}</h5>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ paddingTop: "50px", display: "flex", width: "50%", justifyContent: "space-between" }}>
                                <div>
                                    <img style={{ width: "300px" }} src={`https://starwars-visualguide.com/assets/img/planets/${search?.uid}.jpg`} alt="" />
                                </div>
                                <div>
                                    <h1>{search?.properties?.name}</h1>
                                    <p>{search?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                            <div style={{ marginTop: "50px", marginBottom: "50px", height: "2px", backgroundColor: "black", width: "100%" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px", textAlign: "center" }}>
                            <div >
                                <h5>Name</h5>
                                <h5>{search?.properties?.name}</h5>
                            </div>
                            <div>
                                <h5>Climate</h5>
                                <h5>{search?.properties?.climate}</h5>
                            </div>
                            <div>
                                <h5>Population</h5>
                                <h5>{search?.properties?.population}</h5>
                            </div>
                            <div>
                                <h5>Orbital Period</h5>
                                <h5>{search?.properties?.orbital_period}</h5>
                            </div>
                            <div>
                                <h5>Rotation Period</h5>
                                <h5>{search?.properties?.rotation_period}</h5>
                            </div>
                            <div>
                                <h5>Diameter</h5>
                                <h5>{search?.properties?.diameter}</h5>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Detail;