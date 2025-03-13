import { Await } from "react-router";
import { PokeAPI } from "./pokeapiClient";
import { useEffect, useState } from "react"

interface PokemonCard {
  id: number;
  image: string;
  name: string;
  type: string[];
}
 
async function fetchData(): Promise<string[]> {
  const data = await PokeAPI.getPokemonsList();
  return data.results.map(item => item.name);

}

const data = await fetchData

const typeColors: { [key: string]: string } = {
  fire : "bg-red-500",
  water: "bg-blue-500",
  fly: "bg-grey-500",
  dragon: "bg-orange-500",
};
function getTypeColor(type: string) {
  const color = typeColors[type];
  return color;
}

const Card = (props: PokemonCard) => {
 return (
  <div>
              {props.id} - {props.name}
              <img src={props.image} alt={props.name} />
              <div className="flex flex-wrap">
                {props.type.map((type) => {
                  return <div className={`p-4 ${getTypeColor(type) }`}>{type}</div>;
                })}
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
          id: 1,
          name: item,
          image: item,
          type: [item],
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
