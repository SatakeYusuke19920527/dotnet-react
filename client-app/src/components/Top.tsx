import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Top: React.FC<{}> = () => {
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
      <Link to="/notify">Hello</Link>
      <button onClick={getData1}>axios</button>
      <button onClick={getData2}>weather</button>
    </div>
  );
};

export default Top;
