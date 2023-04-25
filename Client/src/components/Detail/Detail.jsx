import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "662ddc107487.c4a3b4f41cf902f81e57";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
     ({ data }) => {
       if (data.name) {
         setCharacter(data);
       } else {
         window.alert("No hay personajes con ese ID");
       }
     }
   );
   return setCharacter({});
}, [id]);

    return (
      <div>
        {character ? <h2>{character.name}</h2> : null}
        {character ? <h2>{character.status}</h2> : null}
        {character ? <h2>{character.species}</h2> : null}
        {character ? <h2>{character.gender}</h2> : null}
        <h2>{character?.origin?.name}</h2>
        <img src={character.image} alt="" />
      </div>
    );
}

export default Detail;