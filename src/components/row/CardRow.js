import React from 'react';
import Card from './card/Card'

class CardRow extends React.Component {
  render() {
  return <div class="card-row">
  <Card breed="Puppy"/>
  <Card breed="Puppy"/>
  <Card breed="Puppy"/>
  <Card breed="Puppy"/>
  <Card breed="Puppy"/>
  </div>;
  }
}

  export default CardRow;