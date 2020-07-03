import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

  }
  
  handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn,
      }));

      let checkedBoxes = window.localStorage.dogGame.split(',')
      let isInArray = checkedBoxes.filter(number => number == this.props.cardNumber);
      console.log(checkedBoxes.filter(number => number == this.props.cardNumber))

      if(isInArray.length > 0) {
        window.gameState[this.props.cardNumber] = !this.state.isToggleOn;
      localStorage.setItem("dogGame", localStorage.getItem("dogGame")+`${this.props.cardNumber},`);
      console.log('was in array')
      } else {
        window.gameState[this.props.cardNumber] = !this.state.isToggleOn;
        let value = this.props.cardNumber;
        let result = checkedBoxes.filter(x => x !== value);
        console.log(result);
        localStorage.setItem('dogGame', result)
        console.log('was not array')
      }
      
      console.log(window.localStorage.dogGame)
      this.checkBingo(window.gameState)
/*       console.log(window.localStorage.dogGame.split(',')) */
  }

  checkBingo(gameState) {
    if((gameState[5] && gameState[9] && gameState[13] && gameState[17] && gameState[21] === true)) {
      console.log('you are winner')
    } else if((gameState[1] && gameState[7] && gameState[13] && gameState[19] && gameState[25] === true)) {
      console.log('you are winner')
    } else if((gameState[1] && gameState[6] && gameState[11] && gameState[16] && gameState[21] === true)) {
      console.log('you are winner')
    } else if((gameState[2] && gameState[7] && gameState[12] && gameState[17] && gameState[22] === true)) {
      console.log('you are winner')
    } else if((gameState[3] && gameState[8] && gameState[13] && gameState[18] && gameState[23] === true)) {
      console.log('you are winner')
    } else if((gameState[4] && gameState[9] && gameState[14] && gameState[19] && gameState[14] === true)) {
      console.log('you are winner')
    } else if((gameState[5] && gameState[10] && gameState[15] && gameState[20] && gameState[25] === true)) {
      console.log('you are winner')
    } else if((gameState[1] && gameState[2] && gameState[3] && gameState[4] && gameState[5] === true)) {
      console.log('you are winner')
    } else if((gameState[6] && gameState[7] && gameState[8] && gameState[9] && gameState[10] === true)) {
      console.log('you are winner')
    } else if((gameState[11] && gameState[12] && gameState[13] && gameState[14] && gameState[15] === true)) {
      console.log('you are winner')
    } else if((gameState[16] && gameState[17] && gameState[18] && gameState[19] && gameState[20] === true)) {
      console.log('you are winner')
    } else if((gameState[21] && gameState[22] && gameState[23] && gameState[24] && gameState[25] === true)) {
      console.log('you are winner')
    }
  }

  render() {
    let card;
    if(this.props.breed !== "FREE") {
      card = <div className="square">
      <div className={!this.state.isToggleOn ? 'dog-name' : 'dog-name checked'}
      data-card-number={this.props.cardNumber} 
      onClick={this.handleClick.bind(this)}>{this.props.breed}</div>
      </div>;
    } else {
      card = <div className="square">
      <div className='dog-name checked free' 
      data-card-number={this.props.cardNumber}>{this.props.breed}</div>
      </div>;
    }
    return card;
  }

}

  export default Card;