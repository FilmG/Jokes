import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>();

  const getJokes = async () => {
        await axios.get('https://api.api-ninjas.com/v1/dadjokes', {
          params: {
            limit: limit
          },
          headers: {
            'X-Api-Key': 'HG4tX1CpNOujUDfwODRlCg==16v6kLGim2O29RU6'
          }
        }).then((response) => {
          setJokes(response.data)})
          .catch((error) => {
            console.error(error)
          }).finally(() => {
            setLimit(0);
          });

};





  return (
    <div className="mt-5 flex align-center justify-center">
      <div className="flex flex-col shadow max-w-96">
        <label htmlFor="jokes" className="text-center">Enter number of jokes</label>
        <div className="flex flex-row mx-5 justify-center mb-2">
        <input className="w-32 shadow appearance-none border rounded-md border-gray-300 m-1 p-1" name="jokes" type="number" min="1" max="10" value={limit} onChange={(e) => setLimit(Number(e.target.value))}/>
        <button className="border bg-blue-500 text-white rounded p-1 text-xs" onClick={getJokes}>Get Jokes</button>
        </div>
        <ul className="w-full">
          {jokes.map((joke, index) => (
            <div className="border">
              <li className="mx-2" key={index}>{joke.joke}</li>
            </div>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
