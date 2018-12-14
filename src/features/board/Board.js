import React, { Component } from 'react';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        name: 'Список дел',
        cards: [
          {
            text: 'Реализовать хранение данных в localStorage'
          },
          {
            text: 'Редактирование названия списка'
          },
          {
            text: 'Редактирование названия доски (необязательно)'
          },
          {
            text: 'Редактирование текста карточки'
          },
          {
            text: 'Добавление комметариев к карточке'
          },
          {
            text: 'Привязка данных к пользователям (тоже скорее всего необязательно)'
          }
        ]
      },
      {
        name: 'По работе',
        cards: [
          {
            text: 'card1'
          },
          {
            text: 'card2'
          },
          {
            text: 'card3'
          },
          {
            text: 'card4'
          },
          {
            text: 'card5'
          },
          {
            text: 'card6'
          }
        ]
      },
      {
        name: 'Что купить',
        cards: [
          {
            text: 'card1'
          },
          {
            text: 'card2'
          },
          {
            text: 'card3'
          },
          {
            text: 'card4'
          },
          {
            text: 'card5'
          },
          {
            text: 'card6'
          }
        ]
      },
      {
        name: 'Цели',
        cards: [
          {
            text: 'card1'
          },
          {
            text: 'card2'
          },
          {
            text: 'card3'
          },
          {
            text: 'card4'
          },
          {
            text: 'card5'
          },
          {
            text: 'card6'
          }
        ]
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
        <div className="board__lists clrfx">{lists}</div>
      </div>
    );
  }
}

export default Board;
