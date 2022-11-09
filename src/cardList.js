import { Card } from "./card";

export const CardList = (props) => (
  <div className="card-list">
    {props.pokemons.map((pokemon) => (
      <Card key={pokemon.name} url={pokemon.url}></Card>
    ))}
  </div>
);
