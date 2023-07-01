import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
/* import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards"; */

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites);
    console.log(favorites, 'fav')
    const dispatch = useDispatch();

    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
    };
  
    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
    };

    return(
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

          {favorites.map((character) => {
            return (
                <Card 
                  key={character.id} 
                  character={character} 
                />
            );
          })}
        </>
    );
};

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

export default Favorites;

