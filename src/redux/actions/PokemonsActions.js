import request from '../../utils/request';

export const actionTypes = {
  REQUEST_POKEMONS: 'REQUEST_POKEMONS',
  REQUEST_POKEMONS_SUCCESS: 'REQUEST_POKEMONS_SUCCESS',
  REQUEST_POKEMONS_ERROR: 'REQUEST_POKEMONS_ERROR',
  SELECT_POKEMON: 'SELECT_POKEMON'
};

export const requestPokemons = page => ({
  type: actionTypes.REQUEST_POKEMONS,
  currentPage: page
});

export const requestPokemonsSuccess = json => ({
  type: actionTypes.REQUEST_POKEMONS_SUCCESS,
  list: json.results,
  previousPageApi: json.previous,
  nextPageApi: json.next,
  total: json.count,
});

export const requestPokemonsError = error => ({
  type: actionTypes.REQUEST_POKEMONS_ERROR,
  list: [],
  error
});

export const fetchPokemons = (amountPerPage = 20, page = 1) => {
  return dispatch => {
    dispatch(requestPokemons(page));

    const offset = amountPerPage * (page-1);
    const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${amountPerPage}&offset=${offset}`;

    return request(pokemonsUrl)
      .then(json => {
        dispatch(requestPokemonsSuccess(json));
      }).catch(error => {
        dispatch(requestPokemonsError(error));
        // throw(error);
      });
  };
};

export const selectPokemon = currentPokemon => ({
  type: actionTypes.SELECT_POKEMON,
  currentPokemon
});
