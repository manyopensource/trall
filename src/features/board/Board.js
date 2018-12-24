import React, { Component } from 'react';
import List from './../list/List';
import './Board.scss';

class Board extends Component {
  render = () => {
    const lists = this.props.lists.map((list, index) => {
      return (
        <List
          key={list.id}
          id={list.id}
          name={list.name}
          tasks={this.props.tasks.filter(row => row.listId === list.id)}
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
