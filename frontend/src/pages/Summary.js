import { store } from "..";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import SummaryList from "../Components/SummaryList";
import SummaryElements from "../Components/SummaryElements";
import TrainerCard from "../Components/TrainerCard";

export default function Summary() {
    // console.log(store.getState())

    const pokeState = useSelector(state => state.state.results)
    const trainer = useSelector(state => state.state.trainer);
    console.log(pokeState);

    if (trainer) {
        console.log(trainer)
    }

    let results = [];


    results = pokeState.filter(pokemon => pokemon.amount > 0) //resultatet på de Pokemons med antal över 0




    return (
        <section className="summary-page">
            <section className="sp-side-panel">
                {(trainer) ? <TrainerCard trainer={trainer} /> : null}
            </section>
            <section className="sp-pokemons">
                <SummaryList results={results} />
            </section>
        </section>


    )
}



