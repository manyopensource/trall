import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__text">{this.props.text}</div>
        <b className="card__btn-edit">edit</b>
      </div>
    );
  }
}

export default Card;
