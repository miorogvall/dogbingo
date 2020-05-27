import React from 'react';
import './App.scss';
import CardRow from './components/row/CardRow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
      </header>
    </div>
  );
}

export default App;
