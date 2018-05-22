import React, { Component } from 'react';
import './index.scss';

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pokemon = this.props.pokemon;
    let pokemonId = this.props.pokemonId;

    return (
      <a className="col col--25 Pokemon" href={`/#/pokemon/${pokemonId}`} title={pokemon.name}>
        <div className="Pokemon__image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} />
        </div>
        <h3 className="Pokemon__name">{pokemon.name}</h3>
      </a>
    );
  }
}

export default Pokemon;
