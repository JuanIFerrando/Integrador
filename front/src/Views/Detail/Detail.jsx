import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Detail() {
    const {id} = useParams();
    
    const [character, setCharacter] = useState({}); 

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then((response) => 
          setCharacter(response.data)
        );
     }, [id]);

     /* useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
 */
/* 
     useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});  
     }, [id]);
 */
    return (
        <div>
          {character.name ? (
            <>
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.origin?.name}</p>
              <img 
                src={character.image}
                alt="img"
              />    
            </>
          ) : (
            <h3>Loading...</h3>
          )}  
        </div>
    );
};