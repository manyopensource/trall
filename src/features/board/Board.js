import React, { Component } from 'react';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  getCardsByListId(id) {
    let cards = [];
    this.props.cards.forEach(card => {
      if (card.listId === id) {
        cards.push(card);
      }
    });
    return cards;
  }

  render() {
    const lists = this.props.lists.map((list, index) => {
      return (
        <List
          key={index}
          name={list.name}
          cards={this.getCardsByListId(list.id)}
        />
      );
    });
    return (
      <div className="board">
        <div className="board__name">Personal</div>
        <div className="board__lists clrfx">{lists}</div>
      </div>
    );
  }
}

export default Board;
