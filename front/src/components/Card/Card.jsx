import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card({character, onClose, addFav, removeFav, myFavorites}) {
   const navigate = useNavigate();

   const [isFav, setIsFav] = useState();

   // Pone en Favorito un personaje o lo saca
   const handleFavorite = () => {
    console.log(isFav, removeFav, character, character.id, 'esto')
    if (myFavorites.includes(character)) {
      removeFav(character.id);
    } else {
      addFav(character);
    }
   }

   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === character.id) {
          setIsFav(true);
       }
    });
   }, [myFavorites]);

   // Crea el link a info del personaje al clickear imagen del mismo
   function navigateHandler() {
     navigate(`/detail/${character.id}`)
   }

   return (
      <div className={style.cardContainer}>

        <button onClick={handleFavorite}>{myFavorites.includes(character) ? '❤️' : '🤍'}</button>

        <div>
          <button className={style.closeButton} onClick={() => onClose(character.id)}>X</button>
          <img 
            src={character.image} 
            alt={character.name} 
            onClick={navigateHandler}
          /> 
          <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
          </Link>
        </div>

        <div className={style.card}>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin.name}</h2>
        </div>
        
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);