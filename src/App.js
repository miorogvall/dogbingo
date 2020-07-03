import React from 'react';
import './App.scss';
import CardRow from './components/row/CardRow';

let dogList = ['labrador','bichon frise','pitbull','wolfdog','jack russel','poodle','st bernard','wiener dog', 'bulldog', 'Boxer', 'Pomeranian', 'Pug', 'Cocker Spaniel', 'Border Collie', 'Shiba inu', 'Akita', 'Dalmatian', 'Whippet', 'Corgi', 'Chow Chow', 'Basenji', 'Shih Tzu', 'Rottweiler', 'Malteser', 'Grand Danois']


function App() {
  shuffle(dogList)
  console.log(dogList)
  dogList[12] = 'FREE';
  console.log(window.saveGame)

  // use savegame here so its the same shuffle as the UI
  if (window.localStorage.saveGame !== undefined) {

  } else {
    let game = {
      "0": {
        "race": dogList[0],
        "checked": "false"
      },
      "1": {
        "race": dogList[1],
        "checked": "false"
      },
      "2": {
        "race": dogList[2],
        "checked": "false"
      },
      "3": {
        "race": dogList[3],
        "checked": "false"
      },
      "4": {
        "race": dogList[4],
        "checked": "false"
      },
      "5": {
        "race": dogList[5],
        "checked": "false"
      },
      "6": {
        "race": dogList[6],
        "checked": "false"
      },
      "7": {
        "race": dogList[7],
        "checked": "false"
      },
      "8": {
        "race": dogList[8],
        "checked": "false"
      },
      "9": {
        "race": dogList[9],
        "checked": "false"
      },
      "10": {
        "race": dogList[0],
        "checked": "false"
      },
      "11": {
        "race": dogList[11],
        "checked": "false"
      },
      "12": {
        "race": dogList[12],
        "checked": "true"
      },
      "13": {
        "race": dogList[13],
        "checked": "false"
      },
      "14": {
        "race": dogList[14],
        "checked": "false"
      },
       "15": {
        "race": dogList[15],
        "checked": "false"
      },
      "16": {
        "race": dogList[16],
        "checked": "false"
      },
      "17": {
        "race": dogList[17],
        "checked": "false"
      },
      "18": {
        "race": dogList[18],
        "checked": "false"
      },
      "19": {
        "race": dogList[19],
        "checked": "false"
      },
       "20": {
        "race": dogList[20],
        "checked": "false"
      },
      "21": {
        "race": dogList[21],
        "checked": "false"
      },
      "22": {
        "race": dogList[22],
        "checked": "false"
      },
      "23": {
        "race": dogList[23],
        "checked": "false"
      },
      "24": {
        "race": dogList[24],
        "checked": "false"
      },
    }
    localStorage.setItem("saveGame", JSON.stringify(game));
  }
    
    var saveGame = localStorage.getItem('saveGame')
    saveGame = JSON.parse(saveGame)
    let dog = Object.values(saveGame)
    console.log(dog[0].race)
  return (
    <div className="App">
      <header className="App-header">
      <CardRow data={[dog[0].race, dog[1].race, dog[2].race, dog[3].race, dog[4].race]} cardNumbers={[1,2,3,4,5]}/>
      <CardRow data={[dog[5].race, dog[6].race, dog[7].race, dog[8].race, dog[9].race]} cardNumbers={[6,7,8,9,10]}/>
      <CardRow data={[dog[10].race, dog[11].race, dog[12].race, dog[13].race, dog[14].race]} cardNumbers={[11,12,13,14,15]}/>
      <CardRow data={[dog[15].race, dog[16].race, dog[17].race, dog[18].race, dog[19].race]} cardNumbers={[16,17,18,19,20]}/>
      <CardRow data={[dog[20].race, dog[21].race, dog[22].race, dog[23].race, dog[24].race]} cardNumbers={[21,22,23,24,25]}/>
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

// set initial false state as game is starting without boxes checked
window.gameState = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: true,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false
};

// set localstorage if there is no save since before
if(window.localStorage.dogGame === undefined) {
  window.localStorage.dogGame = '';
} else {
}

export default App;
