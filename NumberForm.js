import React, { useState } from 'react';
import NumberList from './NumberList';

const NumberForm = ({ fetchNumbers }) => {
  const [url, setUrl] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNumbers(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter URL:
        <input type="text" value={url} onChange={handleInputChange} />
      </label>
      <button type="submit">Fetch Numbers</button>
    </form>
  );
};

export default NumberForm;
