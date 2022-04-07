import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { incrementPokemon, decrementPokemon, addState } from '../actions/actions'
import PokeCard from './PokeCard';
import store from '..'

export default function PokeList(props) {

    // console.log(props.list.state.results)
    const pokeState = useSelector(state => state.state.results);

    // const dispatch = useDispatch();

    return (
        //ternary på pokeState, annars hinner den inte ta emot datan och skapar då errors, om pokeState får data så skall det mappa ut Pokecard för varje Pokemon som finns 
        //i listan
        (pokeState) ? pokeState.map((pokemon) => (
            <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} amount={pokemon.amount} type={pokemon.type} img={pokemon.picture} />
        )) : null
    );
}