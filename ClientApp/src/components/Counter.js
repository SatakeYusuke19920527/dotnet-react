import React, { useState } from 'react';
import axios from 'axios';

export const Counter = () => {
  const [count, setCount] = useState(0)
  const incrementCounter = () => {
    setCount(prev => prev + 1)
  }
  const getData = async () => {
    const result = await axios.get('api/test')
    console.log(result)
  }
  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{count}</strong></p>

      <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
      <button className="btn btn-primary" onClick={getData}>getData</button>
    </div>
  );
}