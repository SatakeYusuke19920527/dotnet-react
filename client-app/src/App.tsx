import React from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC<{}> = () => {
  const getData = async () => {
    const result = await axios.get('api/test');
    console.log(result);
  };
  return (
    <div className="App">
      <button onClick={getData}>axios</button>
    </div>
  );
};

export default App;
