import React from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC<{}> = () => {
  const getData1 = async () => {
    const id = 123456;
    const result = await axios.get(`api/test/${id}/file`);
    console.log(result);
  };
  const getData2 = async () => {
    const result = await axios.get('api/WeatherForecast');
    console.log(result);
  };

  return (
    <div className="App">
      <button onClick={getData1}>axios</button>
      <button onClick={getData2}>weather</button>
    </div>
  );
};

export default App;
