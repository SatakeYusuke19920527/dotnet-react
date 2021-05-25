import React from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC<{}> = () => {
  const getData1 = async () => {
    const result = await axios.get('api/Test');
    console.log(result);
  };
  const getData2 = async () => {
    const result = await axios('api/WeatherForecast');
    console.log(result);
  };
  const getData3 = async () => {
    const result = await fetch('api/WeatherForecast');
    console.log(result);
  };
  return (
    <div className="App">
      <button onClick={getData1}>axios</button>
      <button onClick={getData2}>weather</button>
      <button onClick={getData3}>weather</button>
    </div>
  );
};

export default App;
