import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

    const [id, setId] = useState('');

    const handleChance = (event) => {
        setId(event.target.value)
    }

  return (
    <div>
      <input type="search" onChange={handleChance} value={id} className={style.SearchBar} />
          <button onClick={() => { onSearch(id); setId('') }} className={ style.buttons }>Agregar</button> { /* se ejecuta cuando alguien le hace click */ }
    </div>
  );
}
