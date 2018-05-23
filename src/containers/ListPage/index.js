import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemons } from '../../redux/actions/PokemonsActions';
import Pokemon from './Pokemon';
import Loader from '../../components/Loader';
import Pagination from './Pagination';
import './index.scss';

const mapStateToProps = (state, props) => ({
    pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPokemons
  }, dispatch);
};

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const { amountPerPage, page } = this.props;
    this.props.fetchPokemons(amountPerPage, page);
  }

  handlePageClick(page) {
    this.props.fetchPokemons(this.props.amountPerPage, page);
  }

  render() {
    const pokemons = this.props.pokemons;
    let pokemonsList = null;

    if(pokemons.list.length > 0) {
      pokemonsList = pokemons.list
        .map((pokemon, index) => {
          const pokemonUrlParts = pokemon.url.split('/');
          const pokemonId = pokemonUrlParts[pokemonUrlParts.length-2];
          return(
            <Pokemon key={index} pokemon={pokemon} pokemonId={pokemonId} />
          )
        });
    } else {
      pokemonsList = <p>No pokémon found. Please try again later.</p>;
    }

    return (
      <div className="ListPage">
        <h2>Pokémons</h2>
        <p className="ListPage__instruction">Click on a pokémon to see it's details.</p>
        <div className="row ListPage__pokemons">
          {
            pokemons.isLoading
              ? <Loader />
              : pokemonsList
          }
        </div>
        <Pagination
          currentPage={pokemons.currentPage}
          amountPerPage={pokemons.amountPerPage}
          total={pokemons.total}
          onPageClick={this.handlePageClick} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
