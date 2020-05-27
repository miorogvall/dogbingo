import React from 'react';
import './App.scss';
import CardRow from './components/row/CardRow';

const json = {
  "breeds": {
    0: {
      "dog": "labrador",
      "chosen": false
    },
    1: {
      "dog": "bichon frise",
      "chosen": false
    },
    2: {
      "dog": "pitbull",
      "chosen": false
    },
    3: {
      "dog": "jack russel",
      "chosen": false
    },
    4: {
      "dog": "poodle",
      "chosen": false
    },
    5: {
      "dog": "st bernard",
      "chosen": false
    },
    6: {
      "dog": "wolfdog",
      "chosen": false
    },
    7: {
      "dog": "corgi",
      "chosen": false
    },
    8: {
      "dog": "shar pei",
      "chosen": false
    },
    9: {
      "dog": "akita",
      "chosen": false
    },
    10: {
      "dog": "new dog",
      "chosen": false
    },
  }
}

function App() {
  console.log(json)
  return (
    <div className="App">
      <header className="App-header">
      <CardRow data={json.breeds}/>
      <CardRow data={json.breeds}/>
      <CardRow data={json.breeds}/>
      <CardRow data={json.breeds}/>
      <CardRow data={json.breeds}/>
      </header>
    </div>
  );
}

export default App;
