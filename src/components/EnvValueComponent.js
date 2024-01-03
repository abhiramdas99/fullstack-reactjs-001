// src/components/EnvValueComponent.js
import React from 'react';

const EnvValueComponent = () => {
  const myValue = process.env.REACT_APP_MY_VALUE;

  return (
    <div>
      <h2>Value from .env:</h2>
      <p>{myValue}</p>
    </div>
  );
};

export default EnvValueComponent;

