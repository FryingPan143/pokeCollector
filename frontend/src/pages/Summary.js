import { useSelector } from "react-redux";
import SummaryList from "../Components/SummaryList";
// import SummaryElements from "../Components/SummaryElements";
import TrainerCard from "../Components/TrainerCard";

export default function Summary() {

    const pokeState = useSelector(state => state.state.results)
    const trainer = useSelector(state => state.state.trainer);
    console.log(pokeState);

    if (trainer) {
        console.log(trainer)
    }

    let results = [];
    results = pokeState.filter(pokemon => pokemon.amount > 0) //filtrerar enbart efter Pokemons med antal över 0, för att sedan skicka det till SummaryList nedan

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



