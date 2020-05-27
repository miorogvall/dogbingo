import React from 'react';

class Card extends React.Component {
  render() {
 /*  return <h1>Hello, {this.props.name} and im a {this.props.dog}</h1>; */
 return <div class="square">
   <div class="dog-name">{this.props.breed}</div>
   </div>;
  }
}

  export default Card;