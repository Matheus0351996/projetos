import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonList } from "../../routes/coordinator";
import { PokeListContainer } from "./styled";

const PokedexScreen = () => {
    const navigate = useNavigate()
    const {pokedex} =useContext(GlobalStateContext)
    return (
    <>
        <Header 
        title={"Pokédex"}
        leftButtonFunction = { () =>goToPokemonList(navigate)}
         />
         <PokeListContainer>
            {
                pokedex && pokedex.map((poke) =>{
                    return <PokemonCard key={poke.name} isPokedex pokemon = {poke}/>
                })
            }
         </PokeListContainer>
    </>
    )
}

export default PokedexScreen