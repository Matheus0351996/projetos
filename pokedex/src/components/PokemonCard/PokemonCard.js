import React from "react";
import {useNavigate} from "react-router-dom"
import { goToPokemonDetail } from "../../routes/coordinator";
import {
    PokeCardContainer,
    ImgContainer,
    PokeImg,
    ButtonsContainer
  } from "./styled";

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate()

    return (
        <PokeCardContainer>
            <ImgContainer>
            <PokeImg
            src = {pokemon.sprites && pokemon.sprites.front_default}
            alt = {pokemon.name}
            />
            </ImgContainer>
            <ButtonsContainer>
                <button>
                    Adicionar a Pokedex
                </button>
                <button onClick={()=>goToPokemonDetail(navigate, pokemon.name)}>
                    Ver Detalhes
                </button>
                </ButtonsContainer>
        </PokeCardContainer>
    )
}

export default PokemonCard