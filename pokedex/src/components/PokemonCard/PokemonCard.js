import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetail } from "../../routes/coordinator";
import {
    PokeCardContainer,
    ImgContainer,
    PokeImg,
    ButtonsContainer
  } from "./styled";

const PokemonCard = ({pokemon, isPokedex}) => {
    const navigate = useNavigate()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex(
            (item) => item.name === pokemon.name)

        const newPokemonList = [...pokemons]
        newPokemonList.splice(pokeIndex,1)
        const orderedPokemons = newPokemonList.sort((a,b) => {return a.id - b.id })
       
        const newPokedexList = [...pokedex, pokemon]
        const orderedPokedex = newPokedexList.sort((a,b) => {return a.id - b.id})
        
        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    }

    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex(
            (item) => item.name === pokemon.name)
        
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex,1)
        const orderedPokedex = newPokedexList.sort((a,b) => {return a.id - b.id})


        const newPokemonList = [...pokemons,pokemon]
        const orderedPokemons = newPokemonList.sort((a,b) => {return a.id - b.id })


        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    }


    return (
        <PokeCardContainer>
            <ImgContainer>
            <PokeImg
            src = {pokemon.sprites && pokemon.sprites.front_default}
            alt = {pokemon.name}
            />
            </ImgContainer>
            <ButtonsContainer>
                <button  onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                    {isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
                </button>
                <button onClick={()=>goToPokemonDetail(navigate, pokemon.name)}>
                    Ver Detalhes
                </button>
                </ButtonsContainer>
        </PokeCardContainer>
    )
}

export default PokemonCard