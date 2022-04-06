
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPokemon, decrementPokemon, addState } from './actions/actions'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection'
import Summary from './pages/Summary';


function App() {

  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const url = "http://localhost:5000/data.json";
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(data => setPokemons(data))

  }, [])

  dispatch(addState(pokemons))

  return (

    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Collection" element={<Collection state={pokemons} />} />
          <Route path="Summary" element={<Summary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
