import React from 'react';
import Card from './card/Card'

class CardRow extends React.Component {
  render() {
    let listLength = Object.keys(this.props.data).length;
  return <div className="card-row">
  <Card breed={this.props.data[Math.floor(Math.random() * listLength)].dog}/>
  <Card breed={this.props.data[Math.floor(Math.random() * listLength)].dog}/>
  <Card breed={this.props.data[Math.floor(Math.random() * listLength)].dog}/>
  <Card breed={this.props.data[Math.floor(Math.random() * listLength)].dog}/>
  <Card breed={this.props.data[Math.floor(Math.random() * listLength)].dog}/>
  </div>;
  }
}

  export default CardRow;