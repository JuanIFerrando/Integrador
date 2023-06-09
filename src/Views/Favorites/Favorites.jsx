/* import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react"; */

/* const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites);

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }

    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
    }

    return(
        <>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">emale</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">ALL Characters</option>
        </select>

        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
          {favorites.map(({ character }) => {
            return (
                <Card 
                  key={character.id} 
                  character={character} 
                />
            );
          })}
        </>
    );
}; */

/* function Favorites({favorites}) {
    return (
        <div>
          <Cards characters={favorites} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites); */

/* export default Favorites; */

import { useDispatch, connect } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      
      {myFavorites?.map(fav => {
        return (
          <Card 
            key={fav.id} 
            id={fav.id}
            name={fav.name} 
            species={fav.species} 
            gender={fav.gender} 
            image={fav.image}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(
  mapStateToProps,
  null,
)(Favorites);


