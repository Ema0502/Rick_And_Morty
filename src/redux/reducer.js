import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    MyFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
              ...state,
              MyFavorites: [...state.allCharactersFav, payload],
              allCharactersFav: [...state.allCharactersFav, payload],
            };
        case REMOVE_FAV:
            return {
                ...state,
                MyFavorites: state.MyFavorites.filter((fav) => fav.id !== payload)
            };
        case FILTER:
            const allCharactersFavFilter = state.allCharactersFav.filter((character) => character.gender === payload)
            return {
                ...state,
                MyFavorites:
                    payload === "allCharacters"
                        ? [...state.allCharactersFav]
                        : allCharactersFavFilter
            };
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
              ...state,
              MyFavorites:
                payload === "A"
                  ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                  : allCharactersFavCopy.sort((a, b) => b.id - a.id),
            };
        default:
            return { ...state }
    }
};

export default reducer;