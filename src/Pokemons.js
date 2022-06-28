import { useEffect, useState } from "react";
import Details from "./Details";

function Pokemons () {


    const [pokemons, setPokemons] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5';

    const fetchPokemons = async() => {

        const response = await fetch(url);
        const data = await response.json();
        const arrayOfPokemons = data.results;
        setPokemons(arrayOfPokemons)
        
         

    }

    useEffect(()=>{
        fetchPokemons()
    },[]);

      
    return (
    <>
    {pokemons.map(poke => {
       return <div>
        <p>{poke.name}</p>

        <Details url={poke.url} />
        
       </div> 
     })}

    </>)
}

export default Pokemons;