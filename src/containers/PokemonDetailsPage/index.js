import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonDetails } from '../../redux/actions/PokemonsActions';
import { withRouter } from 'react-router';
import './index.scss';
import PokemonDetails from './PokemonDetails';

const mapStateToProps = state => ({
  selectedPokemon: state.pokemons.selectedPokemon
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPokemonDetails
  }, dispatch);
}

class PokemonDetailsPage extends Component {

  componentDidMount() {
    let pokemonId;
    !this.props.selectedPokemon
      ? pokemonId = this.props.match.params.pokemonId
      : pokemonId = this.props.selectedPokemon.id;
    this.props.fetchPokemonDetails(pokemonId);
  }

  render() {
    const pokemon = this.props.selectedPokemon;

    return (
      <div className="PokemonDetailsPage">
        <Helmet>
          <title>Pokelist - Details</title>
        </Helmet>
        {
          !(pokemon && pokemon.order) || pokemon.isLoading
            ? <Loader />
            : <PokemonDetails details={pokemon} />
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetailsPage));
