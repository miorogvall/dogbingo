import React from 'react';
import Card from './card/Card'

class CardRow extends React.Component {
  render() {
  return <div className="card-row">
  <Card breed={this.props.data[0]} cardNumber={this.props.cardNumbers[0]}/>
  <Card breed={this.props.data[1]} cardNumber={this.props.cardNumbers[1]}/>
  <Card breed={this.props.data[2]} cardNumber={this.props.cardNumbers[2]}/>
  <Card breed={this.props.data[3]} cardNumber={this.props.cardNumbers[3]}/>
  <Card breed={this.props.data[4]} cardNumber={this.props.cardNumbers[4]}/>
  </div>;
  }
}

  export default CardRow;