import { actionTypes } from '../actions/PokemonsActions';

const initialState = {
  isLoading: false,
  error: false,
  list: [],
  amountPerPage: 20,
  currentPage: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_POKEMONS:
      return {
        ...state,
        isLoading: true,
        currentPage: action.currentPage,
        list: []
      }
    case actionTypes.REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        list: action.list,
        previousPageApi: action.previousPageApi,
        nextPageApi: action.nextPageApi,
        total: action.total,
        isLoading: false,
        error: null
      }
    case actionTypes.REQUEST_POKEMONS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case actionTypes.SELECT_POKEMON:
      return {
        ...state,
        currentPokemon: state.list.find(pokemon => pokemon.name === action.currentPokemon)
      }
    default:
      return state
  }
}
