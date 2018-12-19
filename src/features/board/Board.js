import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    let localState;
    if (typeof Storage !== 'undefined') {
      if (window.localStorage.getItem('localState')) {
        localState = JSON.parse(window.localStorage.getItem('localState'));
      }
    }

    const defaultTasks = [
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

    const defaultState = {
      users: [
        {
          id: 1,
          name: 'Anonimous',
          login: 'nightfury',
          email: '2deserve@gmail.com'
        }
      ],
      boards: [
        {
          id: 1,
          userId: 1,
          name: 'Personal'
        }
      ],
      lists: [
        {
          id: 1,
          boardId: 1,
          name: 'Список дел'
        },
        {
          id: 2,
          boardId: 1,
          name: 'По работе'
        },
        {
          id: 3,
          boardId: 1,
          name: 'Что купить'
        },
        {
          id: 4,
          boardId: 1,
          name: 'Цели'
        }
      ],
      cards: [
        {
          id: 5,
          listId: 1,
          title: 'Реализовать хранение данных в localStorage',
          description: ''
        },
        {
          id: 2,
          listId: 1,
          title: 'Редактирование названия списка',
          description: ''
        },
        {
          id: 3,
          listId: 1,
          title: 'Редактирование названия доски (необязательно)',
          description: ''
        },
        {
          id: 4,
          listId: 1,
          title: 'Редактирование текста карточки',
          description: ''
        },
        {
          id: 1,
          listId: 1,
          title: 'Добавление комментариев к карточке',
          description: ''
        },
        {
          id: 6,
          listId: 1,
          title:
            'Привязка данных к пользователям (тоже скорее всего необязательно)',
          description: ''
        },
        {
          id: 8,
          listId: 2,
          title: 'card1',
          description: ''
        },
        {
          id: 9,
          listId: 3,
          title: 'card1',
          description: ''
        },
        {
          id: 7,
          listId: 4,
          title: 'card1',
          description: ''
        }
      ],
      comments: [
        {
          id: 1,
          cardId: 5,
          userId: 1,
          text: "That's right"
        }
      ]
    };

    this.state = localState ? localState : defaultState;
  }

  getCardsByListId(id) {
    let cards = [];
    this.state.cards.map((card, index) => {
      if (card.listId === id) {
        cards.push(card);
      }
    });
    return cards;
  }

  render() {
    const lists = this.state.lists.map((list, index) => {
      return <List key={index} name={list.name} cards={this.getCardsByListId(list.id)} />;
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
