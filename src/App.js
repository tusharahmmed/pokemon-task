import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import CardItem from './components/CardItem/CardItem';
import { useEffect, useState } from 'react';

function App() {

  // states
  const [serchName, setSerchName] = useState('');
  const [pokemonData, setPokemonData] = useState({});

  // check object length
  const objLenth = Object.keys(pokemonData).length;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${serchName.pokemonName}`)
      .then(res => res.json())
      .then(data => setPokemonData(data));
  }, [serchName])






  return (
    <div className="App">
      <Header setSerchName={setSerchName} />
      {
        objLenth ? <CardItem data={pokemonData} /> : ''
      }
    </div>
  );
}

export default App;
