import React, { Component } from "react";
import { CardList } from "./cardList";
import "./styles.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      search: ""
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <header>
          <h1>Pokédex</h1>
          <p>Cherchez le pokemon qu'il vous faut</p>
          <SearchBox
            placeholder="Nom du pokemon"
            handleChange={this.handleChange}
          />
        </header>
        <CardList pokemons={fileteredPokemons}></CardList>
      </div>
    );
  }
}
export default App;
