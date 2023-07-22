import React, { useState } from 'react';
import axios from 'axios';
import NumberForm from './NumberForm';
import NumberList from './NumberList';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async (urls) => {
    try {
      const response = await axios.get('http://localhost:8008/numbers', { params: { url: urls } });
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h1>Number Management App</h1>
      <NumberForm fetchNumbers={fetchNumbers} />
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;
