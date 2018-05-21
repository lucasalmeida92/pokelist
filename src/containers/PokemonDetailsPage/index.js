import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

class PokemonDetailsPage extends Component {
  render() {
    return (
      <div className="PokemonDetailsPage">
        <Helmet>
          <title>Pokelist - Details</title>
        </Helmet>
        <h1>Pokémon Details</h1>
      </div>
    );
  }
}

export default PokemonDetailsPage;
