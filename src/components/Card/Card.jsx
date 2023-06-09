import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {
   const navigate = useNavigate();

   const [isFav, setIsFav] = useState(false);

   // Pone en Favorito un personaje o lo saca
   const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image });
    }
  };
  

   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
   }, [myFavorites]);

   // Crea el link a info del personaje al clickear imagen del mismo
   function navigateHandler() {
     navigate(`/detail/${id}`)
   }

   return (
      <div className={style.cardContainer}>

         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

         <div>
           <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
           <img 
             src={image} 
             alt={name} 
             onClick={navigateHandler}
           /> 
           <Link to={`/detail/${id}`}>
             <h2>{name}</h2>
           </Link>
         </div>

         <div className={style.card}>
           <h2>Species: {species}</h2>
           <h2>Gender: {gender}</h2>
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

