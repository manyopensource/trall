import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './../list/ListContainer';
import './Board.scss';

class Board extends Component {
  render = () => {
    const lists = this.props.lists.map(list => {
      return (
        <List
          key={list.id}
          list={list}
          nativeScrollbarWidth={this.props.nativeScrollbarWidth}
        />
      );
    });
    return (
      <div className="board">
        <div className="board__name">Personal</div>
        <div className="board__lists clrfx">{lists}</div>
      </div>
    );
  };
}

Board.propTypes = {
  lists: PropTypes.array.isRequired,
  nativeScrollbarWidth: PropTypes.number
};

export default Board;
