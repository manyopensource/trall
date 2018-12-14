import React, { Component } from 'react';
import Card from './../card/Card';
import './List.scss';

class List extends Component {
  addingNew() {
    console.log('click');
  }
  render() {
    const cards = this.props.cards.map(card => {
      return <Card text={card.text} />;
    });
    return (
      <div className="list">
        <div className="list__inner">
          <div className="list__name">{this.props.name}</div>
          <div className="list__cards">{cards}</div>
          <div className="list__adding-new" onClick={this.addingNew}>Add new</div>
        </div>
      </div>
    );
  }
}

export default List;
