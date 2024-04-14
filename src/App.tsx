import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>();

  const getJokes = async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/dadjokes', {
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
            });

};





  return (
    <div className="App">
      <header className="App-header">
        <h3>Enter limit</h3>
        <input type="number" min="1" max="10" value={limit} onChange={(e) => setLimit(Number(e.target.value))} />
        <button onClick={getJokes}>Get Jokes</button>
        <ul>
          {jokes.map((joke, index) => (
            <li key={index}>{joke.joke}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
