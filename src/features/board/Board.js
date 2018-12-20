import React, { Component } from 'react';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  getTasksByListId = id => {
    let tasks = [];
    this.props.tasks.forEach(task => {
      if (task.listId === id) {
        tasks.push(task);
      }
    });
    return tasks;
  }

  render = () => {
    const lists = this.props.lists.map((list, index) => {
      return (
        <List
          key={list.id}
          id={list.id}
          name={list.name}
          tasks={this.getTasksByListId(list.id)}
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
