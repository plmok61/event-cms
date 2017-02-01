import React from 'react';
import '../assets/styles/App.css';

const App = ({ children }) => {
  return (
    <div className="App">
      <div>{ children }</div>
    </div>
  );
};

export default App;
