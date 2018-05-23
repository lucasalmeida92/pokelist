import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPokemon } from '../../../redux/actions/PokemonsActions';
import { withRouter } from 'react-router';
import './index.scss';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    selectPokemon
  }, dispatch);
};

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e, pokemonId) {
    e.preventDefault();
    this.props.selectPokemon(pokemonId);
    this.props.history.push('/pokemon/'+pokemonId);
  }

  render() {
    let pokemon = this.props.pokemon;
    let pokemonId = this.props.pokemonId;

    return (
      <a className="col col--25 Pokemon" href="#" onClick={(e) => this.handleOnClick(e, pokemonId)} title={pokemon.name}>
        <div className="Pokemon__image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} />
        </div>
        <h3 className="Pokemon__name">{pokemon.name}</h3>
      </a>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Pokemon));
