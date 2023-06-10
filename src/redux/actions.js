import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHAR } from "./actions-types";

export const addChar = (character) => {
    return { 
        type: ADD_CHAR, 
        payload: character
    };
};

export const addFav = (character) => {
    return { 
        type: ADD_FAV, 
        payload: character
    };
};

export const removeFav = (id) => {
    return { 
        type: REMOVE_FAV, 
        payload: id
    };
};

export const filterCards = (gender) => {
    return { 
        type: FILTER, 
        payload: gender,
    };
};

export const orderCards = (order) => {
    return { 
        type: ORDER, 
        payload: order,
    };
};