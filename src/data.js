let localState;
if (typeof Storage !== 'undefined') {
  if (window.localStorage.getItem('localState')) {
    localState = JSON.parse(window.localStorage.getItem('localState'));
  }
}

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
  tasks: [
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
      taskId: 1,
      userId: 1,
      text: "That's right"
    },
    {
      id: 2,
      taskId: 1,
      userId: 1,
      text: "Some people does!"
    }
  ]
};

let data = defaultState;

if (localState) {
    data = localState;
} else {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem('localState', JSON.stringify(data));
  }
}

export default data;