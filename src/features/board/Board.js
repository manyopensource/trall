import React, { Component } from 'react';
import List from './../list/List';

class Board extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        name: 'Список дел',
        cards: [
          {
            text: 'card1'
          },
          {
            text: 'card2'
          }
        ]
      },
      {
        name: 'По работе',
        cards: []
      },
      {
        name: 'Что купить',
        cards: []
      },
      {
        name: 'Цели',
        cards: []
      }
    ];
    this.state = {
      data: data
    };
  }
  render() {
    const lists = this.state.data.map(list => {
      return <List name={list.name} cards={list.cards} />;
    });
    return (
      <div className="board">
        <div className="board__name">Personal</div>
        <div className="board__lists">{lists}</div>
      </div>
    );
  }
}

export default Board;
