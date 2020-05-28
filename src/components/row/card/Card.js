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
        isToggleOn: !state.isToggleOn
      }));
    console.log(this.state.isToggleOn)
  }

  render() {
    let card;
    if(this.props.breed !== "FREE") {
      card = <div className="square">
      <div className={!this.state.isToggleOn ? 'dog-name' : 'dog-name checked'} onClick={this.handleClick.bind(this)}>{this.props.breed}</div>
      </div>;
    } else {
      card = <div className="square">
      <div className='dog-name checked'>{this.props.breed}</div>
      </div>;
    }
    return card;
  }

}

  export default Card;