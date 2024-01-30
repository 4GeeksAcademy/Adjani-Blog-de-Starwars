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
        }else {
            const searchFind = store.planets.find((item) => item._id == params.id)
            setSearch(searchFind);
        } 
        
    }

    useEffect(() => {
        details()
    }, [])

    return (
        <>
            <h1>{search?.properties?.name}</h1>
        </>
    )
}

export default Detail;