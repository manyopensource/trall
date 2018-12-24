import React, { Component } from 'react';
import List from './../list/ListContainer';
import './Board.scss';

class Board extends Component {
  render = () => {
    const lists = this.props.lists.map(list => {
      return <List key={list.id} id={list.id} name={list.name} />;
    });
    return (
      <div className="board">
        <div className="board__name">Personal</div>
        <div className="board__lists clrfx">{lists}</div>
      </div>
    );
  };
}

export default Board;
