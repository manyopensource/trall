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
            id: 5,
            text: 'Реализовать хранение данных в localStorage'
          },
          {
            id: 2,
            text: 'Редактирование названия списка'
          },
          {
            id: 3,
            text: 'Редактирование названия доски (необязательно)'
          },
          {
            id: 4,
            text: 'Редактирование текста карточки'
          },
          {
            id: 1,
            text: 'Добавление комметариев к карточке'
          },
          {
            id: 6,
            text: 'Привязка данных к пользователям (тоже скорее всего необязательно)'
          }
        ]
      },
      {
        name: 'По работе',
        cards: [
          {
            id: 9,
            text: 'card1'
          },
          {
            id: 8,
            text: 'card2'
          },
          {
            id: 12,
            text: 'card3'
          },
          {
            id: 7,
            text: 'card4'
          },
          {
            id: 14,
            text: 'card5'
          },
          {
            id: 16,
            text: 'card6'
          }
        ]
      },
      {
        name: 'Что купить',
        cards: [
          {
            id: 11,
            text: 'card1'
          },
          {
            id: 10,
            text: 'card2'
          },
          {
            id: 15,
            text: 'card3'
          },
          {
            id: 13,
            text: 'card4'
          },
          {
            id: 17,
            text: 'card5'
          },
          {
            id: 20,
            text: 'card6'
          }
        ]
      },
      {
        name: 'Цели',
        cards: [
          {
            id: 18,
            text: 'card1'
          },
          {
            id: 21,
            text: 'card2'
          },
          {
            id: 19,
            text: 'card3'
          },
          {
            id: 22,
            text: 'card4'
          },
          {
            id: 23,
            text: 'card5'
          },
          {
            id: 24,
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
    const lists = this.state.data.map((list, index) => {
      return <List key={index} name={list.name} cards={list.cards} />;
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
