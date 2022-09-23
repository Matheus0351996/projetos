import React, { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { PokeListContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const PokemonListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)
    const navigate = useNavigate
    return (
    <>
        <Header title = {"Lista de Pokemons"}
        leftButtonFunction = {()=>goToPokedex(navigate)}
        />
        <PokeListContainer>
            {
                pokemons.map((poke) => {
                    return <PokemonCard key={poke.name} pokemon = {poke}/>
                })
            }      
        </PokeListContainer>    
    </>
 )
}

export default PokemonListScreen