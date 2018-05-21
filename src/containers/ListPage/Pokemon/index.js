import React, { Component } from 'react';
import FA from 'react-fontawesome';
import './index.scss';

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pokemon = this.props.pokemon;
    let pokemonId = this.props.pokemonId;

    return (
      <div className="Pokemon">
        <div className="Pokemon__image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} />
        </div>
        <h3 className="Pokemon__name">{pokemon.name}</h3>
      </div>
    );
  }
}

export default Pokemon;
