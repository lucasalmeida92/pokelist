import { actionTypes } from '../actions/PokemonsActions';

const initialState = {
  isLoading: false,
  error: false,
  list: [],
  amountPerPage: 20,
  currentPage: 0,
  selectedPokemon: null
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
        selectedPokemon: action.selectedPokemon
      }
    case actionTypes.REQUEST_POKEMON_DETAILS:
      return {
        ...state,
        selectedPokemon: {
          ...state.selectedPokemon,
          isLoading: true,
        }
      }
    case actionTypes.REQUEST_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        selectedPokemon: {
          ...state.selectedPokemon,
          ...action.details,
          description: action.description,
          isLoading: false,
        }
      }
    case actionTypes.REQUEST_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        selectedPokemon: {
          ...state.selectedPokemon,
          isLoading: false,
          error: action.error
        }
      }
    default:
      return state
  }
}
