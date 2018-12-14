import React, { Component } from 'react';
import Card from './../card/Card';

class List extends Component {
  render() {
    const cards = this.props.cards.map(card => {
      return <Card text={card.text} />;
    })
    return (
      <div className="list">
        <div className="list__name">{this.props.name}</div>
        <div className="list__cards">{cards}</div>
      </div>
    );
  }
}

export default List;
