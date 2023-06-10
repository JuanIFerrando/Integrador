import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHAR } from "./actions-types";



const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state=initialState, {type, payload}) => {
    switch ( type ) {
        case ADD_CHAR:
            return {
                ...state, 
                allCharacters: state.myFavorites.includes(payload) ? [...state.allCharacters] : [...state.allCharacters, payload]
            };

        case ADD_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.includes(payload) ? [...state.myFavorites] : [...state.myFavorites, payload]
            };
        
        case REMOVE_FAV:
            console.log(state.myFavorites, 'favoritos')
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(
                    (character) => character.id !== Number(payload)
                )
            }; 
            
        case FILTER:
            console.log(payload, 'filtro')
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
            console.log(state.allCharacters, 'filtrados')
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }    

        case ORDER:
            console.log(payload, 'orden')
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                   payload === "A"
                   ? allCharactersCopy.sort((a, b) => a.id - b.id)
                   : allCharactersCopy.sort((a, b) => b.id - a.id)
            }    

        default:
            return {
                ...state
            };
    }
};

export default rootReducer;