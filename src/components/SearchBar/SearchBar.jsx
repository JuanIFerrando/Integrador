import React from 'react';
import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (evento) => {
      setId(evento.target.value);
   };

   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type='search' onChange={handleChange} />
         <button style={{height:"30px"}} onClick={ () => {onSearch(id)} }>Agregar</button>
      </div>
   );
}