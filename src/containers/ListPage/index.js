import React, { Component } from 'react';
import request from '../../utils/request';
import Pokemon from './Pokemon';
import Loader from '../../components/Loader';
import './index.scss';

class ListPage extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      amountPerPage: 20,
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const offset = this.state.amountPerPage*(this.state.page-1);
    const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${this.state.amountPerPage}&offset=${offset}`;
    request(pokemonsUrl)
      .then(json => {
        let pokemons = [...json.results]
          .map((pokemon, index) => {
            const pokemonUrlParts = pokemon.url.split('/');
            const pokemonId = pokemonUrlParts[pokemonUrlParts.length-2];
            return(
              <a className="col col--25" href={`/#/pokemon/${pokemonId}`} title={pokemon.name}>
                <Pokemon key={index} pokemon={pokemon} pokemonId={pokemonId} />
              </a>
            )
          });
        this.setState({
          previousPageApi: json.previous,
          nextPageApi: json.next,
          totalPokemon: json.count,
          pokemons: pokemons,
          isLoading: false
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ListPage">
        <h2>Pokémons</h2>
        <p className="ListPage__instruction">Click on a pokémon to see it's details.</p>
        <div className="row ListPage__pokemons">
          {
            this.state.isLoading
              ? <Loader />
              : (this.state.pokemons.length
                ? this.state.pokemons
                : <p>No pokémon found. Please try again later.</p>)
          }
        </div>
      </div>
    );
  }
}

export default ListPage;
