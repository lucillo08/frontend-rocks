//sito di luca pirovano
import { Await } from "react-router";
import { PokeAPI } from "./pokeapiClient";
import { useEffect, useState } from "react"

interface PokemonCard {
  id: number;
  image: string;
  name: string;
  type: string[];
}
 
async function fetchData(): Promise<PokemonCard[]> {
  
  const data = await PokeAPI.getPokemonsList();

  const pokemon = await PokeAPI.getPokemonByName(data.results[0].name);
  const pokemons = await Promise.all(data.results.map((pokemon) => {
    return PokeAPI.getPokemonByName(pokemon.name);
  }));
  return pokemons.map((pokemon) => {
    return {
  id:pokemon.id,
  name: pokemon.name,
  image: pokemon.sprites.other["official-artwork"].front_shiny ?? "",
  type: pokemon.types.map((t) => t.type.name),
}});
}



const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  poison: "bg-purple-500",
  bug: "bg-green-500",
  normal: "bg-gray-500",
  dragon: "bg-purple-700",
  steel: "bg-gray-700",
  flying: "bg-indigo-400",
  rock: "bg-yellow-700",
  ground: "bg-yellow-500",

};
function getTypeColor(type: string) {
  const color = typeColors[type];
  return color;
}

const Card = (props: PokemonCard) => {
 return (
  <div className="border p-5 m-7 bg-white rounded-lg shadow-md w-60 text-center">
  <div>
              {props.id} - {props.name}
              <img src={props.image} alt={props.name} />
              <div className="flex flex-wrap">
                {props.type.map((type) => {
                  return <div className={`p-4 ${getTypeColor(type) }`}>{type}</div>;
                })}
              </div>
            </div>
            </div>
 )
}
export const App = () => {
  const [data, setData] = useState<PokemonCard[]>([]);
  
  useEffect(() => {
    fetchData().then((results) => {
      setData (
        results.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          type: item.type,
          }))
      );
    });

  

  }, []);
  
  return (
    <div>
      <div className="flex flex-wrap bg-white grid grid-cols-4">
        {data.map((item) => {
          return <Card
          id={item.id}
          name={item.name}
          image={item.image}
          type={item.type}
          />
            
          
        })}
      </div>
    </div>
  );
};


    

export const Detail = () => {
 return null
}
