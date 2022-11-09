import React, { useEffect, useState } from "react";
import "./card.css";
import { ShowStats } from "./showStats";
import { prominent } from "color.js";

export const Card = (props) => {
  const [pokemonName, setpokemonName] = useState([]);
  const [pokemonType, setpokemonType] = useState([]);
  const [pokemonStats, setpokemonStats] = useState([]);
  const [pokemonImg, setPokemonImg] = useState("");
  const [backColor, setbackColor] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(props.url).then((data) => data.json());
        setpokemonName(res.name[0].toUpperCase() + res.name.slice(1));
        setPokemonImg(res.sprites.front_default);
        setpokemonType(res.types.url);
        setpokemonStats(res.stats);
        setpokemonType(res.types);
        if (res.sprites.front_default !== null) {
          const color = await prominent(res.sprites.front_default, {
            amount: 2
          });
          setbackColor(color);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: "rgb(" + backColor[1] + ")"
      }}
    >
      <img src={pokemonImg} alt={pokemonName} />
      <h2>{pokemonName}</h2>
      <div className="types">
        {pokemonType.map((type) => (
          <p className="typeStyle" key={type.type.url}>
            {type.type.name}
          </p>
        ))}
      </div>
      {pokemonStats.map((stat) => (
        <ShowStats key={stat.stat.url} data={stat} />
      ))}
    </div>
  );
};
