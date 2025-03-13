import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

 export const Detail = () => {
  const { id } = useParams();
  return <div>barbabraus:{id}</div>
 }
export const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("barbara");

  useEffect(() => {
    if (count === 4) {
      setTitle("4 barbarelle")
    }
  },[count])

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
          {title}
        </h1>

        <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
            onClick={() => setCount((count) => count + 4)}
          >
            Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
          </button>

          <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={() => setTitle("MEGA barbara")}
          >
            Cambia
            
          </button>
          <Link to="/frontend-rocks/barbabraus/1">link alla pagina di dettaglio</Link>
          <p className="text-center">
            Modifica <code>src/App.tsx</code> e salva per testare l'hot reload
          </p>

          
        </div>
      </div>
    </div>
  );
}
