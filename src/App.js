import React from 'react';
import './App.scss';
import CardRow from './components/row/CardRow';

let dogList = ['labrador','bichon frise','pitbull','wolfdog','jack russel','poodle','st bernard','wiener dog', 'bulldog', 'Boxer', 'Pomeranian', 'Pug', 'Cocker Spaniel', 'Border Collie', 'Shiba inu', 'Akita', 'Dalmatian', 'Whippet', 'Corgi', 'Chow Chow', 'Basenji', 'Shih Tzu', 'Rottweiler', 'Malteser', 'Grand Danois']

function App() {
  shuffle(dogList)
  console.log(dogList)
  dogList[12] = 'FREE';
  return (
    <div className="App">
      <header className="App-header">
      <CardRow data={dogList.slice(0, 5)} cardNumbers={[1,2,3,4,5]}/>
      <CardRow data={dogList.slice(5, 10)} cardNumbers={[6,7,8,9,10]}/>
      <CardRow data={dogList.slice(10, 15)} cardNumbers={[11,12,13,14,15]}/>
      <CardRow data={dogList.slice(15, 20)} cardNumbers={[16,17,18,19,20]}/>
      <CardRow data={dogList.slice(20, 25)} cardNumbers={[21,22,23,24,25]}/>
      </header>
    </div>
  );
}

function shuffle(arr) {
  var i = arr.length, k , temp;      // k is to generate random index and temp is to swap the values
  while(--i > 0){
    k = Math.floor(Math.random() * (i+1));
    temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
  }
}

export default App;
