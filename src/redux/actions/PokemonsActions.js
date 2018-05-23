import request from '../../utils/request';

export const actionTypes = {
  REQUEST_POKEMONS: 'REQUEST_POKEMONS',
  REQUEST_POKEMONS_SUCCESS: 'REQUEST_POKEMONS_SUCCESS',
  REQUEST_POKEMONS_ERROR: 'REQUEST_POKEMONS_ERROR',
  SELECT_POKEMON: 'SELECT_POKEMON',
  REQUEST_POKEMON_DETAILS: 'REQUEST_POKEMON_DETAILS',
  REQUEST_POKEMON_DETAILS_SUCCESS: 'REQUEST_POKEMON_DETAILS_SUCCESS',
  REQUEST_POKEMON_DETAILS_ERROR: 'REQUEST_POKEMON_DETAILS_ERROR',
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

export const selectPokemon = (id) => ({
  type: actionTypes.SELECT_POKEMON,
  selectedPokemon: {
    id: parseInt(id)
  },
});

export const requestPokemonDetails = () => ({
  type: actionTypes.REQUEST_POKEMON_DETAILS
});

export const requestPokemonDetailsSuccess = (json, description) => ({
  type: actionTypes.REQUEST_POKEMON_DETAILS_SUCCESS,
  details: json,
  description
});

export const requestPokemonDetailsError = error => ({
  type: actionTypes.REQUEST_POKEMON_DETAILS_ERROR,
  error
});

export const fetchPokemonDetails = id => {
  return dispatch => {
    dispatch(requestPokemonDetails());

    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'+id;
    return request(pokemonUrl)
      .then(json => {

        request(json.species.url)
          .then(json2 => {
            const description = json2.flavor_text_entries
              .filter(entry => entry.language.name === 'en')[0]
              .flavor_text;
            dispatch(requestPokemonDetailsSuccess(json, description));
          }).catch(error => {
            dispatch(requestPokemonDetailsError(error));
            // throw(error);
          });

      }).catch(error => {
        dispatch(requestPokemonDetailsError(error));
        // throw(error);
      });
  };
};
