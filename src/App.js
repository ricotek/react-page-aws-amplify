import React from 'react';
import Clock from 'react-live-clock';


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello there!</h1>
      <h2> Welcome to my react page on amplify</h2>
      <h3>The time is <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/East'} /></h3>
    
    </div>
  );
}

export default App;
