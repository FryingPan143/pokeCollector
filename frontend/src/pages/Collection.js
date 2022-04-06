import PokeList from "../Components/PokeList";
import { useDispatch, useSelector } from 'react-redux';
import refresh from '../img/refresh.png';
import { resetPokemon, addState } from '../actions/actions';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "../Components/Header";

export default function Collection() {

    return (
        <section className="collection-page">
            <Header />
            <nav className='navbar'>
                <Link to="/" className='nb-button'>Home </Link>
                <Link to="../Collection" className='nb-button'>Collection </Link>
                <Link to="../Summary" className='nb-button'> Summary </Link>
            </nav>
            <section className='pokeBoard'>
                <PokeList />
            </section>
        </section>
    )
}