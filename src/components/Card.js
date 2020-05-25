import React from 'react';

class Card extends React.Component {
  render() {
  return <h1>Hello, {this.props.name} and im a {this.props.dog}</h1>;
  }
}

  export default Card;