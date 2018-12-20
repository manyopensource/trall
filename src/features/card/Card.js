import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  openCard = () => {
    console.log('openCard');
  }

  editCard = () => {
    console.log('editCard');
  }

  deleteCard = () => {
    console.log('deleteCard');
  }

  render = () => {
    return (
      <div className="card">
        <div className="card__text">
          <b className="card__id">#{this.props.id}</b>
          {this.props.title}
        </div>
        <div className="card__btns">
          <b
            className="card__btn card__btn-open"
            onClick={this.openCard}
          >
            open
          </b>
          <b
            className="card__btn card__btn-edit"
            onClick={this.editCard}
          >
            edit
          </b>
          <b
            className="card__btn card__btn-delete"
            onClick={this.deleteCard}
          >
            delete
          </b>
        </div>
      </div>
    );
  }
}

export default Card;
