import React from 'react';
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";   


export default function Cards({ characters, onClose } /* props */ ) {
   /* const { characters, onClose } = props; */

   return (
      <div className={style.cardsContainer}>
         {characters.map((character) => {
            return (
              <Card 
                key={character.id} 
                character={character} 
                onClose={onClose} 
              />
            )   
         })}
      </div>
   );   
}