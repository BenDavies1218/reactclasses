import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTeam: [],
    };
  }

  // Make request to pokeAPI
  async componentDidMount() {
    function getRandomPokemonId() {
      return Math.floor(Math.random() * 1025) + 1;
    }

    for (let index = 0; index < 6; index++) {
      let response = await fetch(
        "http://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()
      ).catch((error) => error);
      let data = await response.json();
      console.log(data.name);

      this.setState({ pokemonTeam: [...this.state.pokemonTeam, data] });
    }
  }

  //  data from each request

  // pass each data to pokecard component
  render() {
    return (
      <div>
        <h1>Pokemon Data Here</h1>
        {this.state.pokemonTeam &&
          this.state.pokemonTeam.map((pokemon, index) => {
            return (
              <PokemonCard
                key={crypto.randomUUID()}
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
              />
            );
          })}
      </div>
    );
  }
}
