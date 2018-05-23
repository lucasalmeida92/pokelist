import React, { Component } from 'react';
import './index.scss';
import FA from 'react-fontawesome';
import Info from './Info';

class PokemonDetails extends Component {
  render() {
    const details = this.props.details;

    if(details) {
      let types = [...details.types]
        .sort((a,b) =>  a.slot - b.slot)
        .map((type, index) => {
          const name = type.type.name;
          return <span key={index} className={`PokemonDetails__type PokemonDetails--${name}`}>{name}</span>;
        });

      const mainType = details.types[details.types.length-1].type.name;
      const abilities = details.abilities.map(ability => ability.ability.name);

      const stats = details.stats.map((stat, index) => {
        const style = {width: stat.base_stat+'px'};
        return (
          <div key={index} className="PokemonDetails__stat">
            <p>{stat.stat.name}:</p>
            <p><span style={style}>{stat.base_stat}</span></p>
          </div>
        )
      });

      return (
        <div className={`PokemonDetails PokemonDetails--${mainType}`}>
          <div className="PokemonDetails__wrapper">

            <h2 className="PokemonDetails__name">{details.name}</h2>

            <div className="row">
              <div className="col col--40 PokemonDetails__image-wrapper">
                <div className="PokemonDetails__image">
                  <img src={details.sprites.front_default} alt={details.name} />
                </div>
              </div>
              <div className="col col--60 PokemonDetails__main-info">
                <p className="PokemonDetails__description">
                  <FA name="quote-left" />
                  {details.description}
                </p>
                <div>
                  {types}
                </div>
              </div>
            </div>

            <div className="PokemonDetails__other-info">
              <p>Other info:</p>
              <Info title="Weight">
                {details.weight/10} Kg
              </Info>
              <Info title="Height">
                {details.height/10} m
              </Info>
              <Info title="Abilities">
                {abilities.join(', ')}
              </Info>
              <Info title="Stats">
                {stats}
              </Info>
            </div>

          </div>
        </div>
      )
    } else {
      return (`Can't load pokémon data`);
    }
  }
}

export default PokemonDetails;
