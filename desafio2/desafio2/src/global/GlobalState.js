

import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

const GlobalState = (props) => {
    const [pais, setPais] = useState ([])
    const [cidades, setCidades] = useState ([])


    const getPais = () => {
        axios.get(`${BASE_URL}/country`)
        .then((response) => {
            setPais(response.data.results);
          })
        .catch((error) => console.log(error.message))
    }

    const getCidades = () => {
        axios.get(`${BASE_URL}/city`)
        .then((response) => {
            setCidades(response.data.results);
          })
        .catch((error) => console.log(error.message))
    }

    const data = {pais, setPais, cidades, setCidades}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

    }
export default GlobalState