import React, { Component } from 'react';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    let tasks;
    if (typeof Storage !== 'undefined') {
      tasks = window.localStorage.getItem('tasks');
    }

    const tasks = [
      {
        name: 'Список дел',
        cards: [
          {
            id: 5,
            title: 'Реализовать хранение данных в localStorage',
            description: '',
            comments: [
              {
                user_id: 1,
                user_name: 'Anonimous',
                user_login: 'nightfury',
                text: "That's right"
              }
            ]
          },
          {
            id: 2,
            title: 'Редактирование названия списка',
            description: '',
            comments: []
          },
          {
            id: 3,
            title: 'Редактирование названия доски (необязательно)',
            description: '',
            comments: []
          },
          {
            id: 4,
            title: 'Редактирование текста карточки',
            description: '',
            comments: []
          },
          {
            id: 1,
            title: 'Добавление комментариев к карточке',
            description: '',
            comments: []
          },
          {
            id: 6,
            title:
              'Привязка данных к пользователям (тоже скорее всего необязательно)',
            description: '',
            comments: []
          }
        ]
      },
      {
        name: 'По работе',
        cards: [
          {
            id: 8,
            title: 'card1',
            description: '',
            comments: []
          }
        ]
      },
      {
        name: 'Что купить',
        cards: [
          {
            id: 9,
            title: 'card1',
            description: '',
            comments: []
          }
        ]
      },
      {
        name: 'Цели',
        cards: [
          {
            id: 7,
            title: 'card1',
            description: '',
            comments: []
          }
        ]
      }
    ];
    this.state = {
      tasks: tasks
    };
  }
  render() {
    const lists = this.state.tasks.map((list, index) => {
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
