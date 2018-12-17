import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FullCard from './FullCard';
import EditCard from './EditCard';
import './Card.scss';

class Card extends Component {
  openCard() {
    console.log('openCard');
  }

  editCard() {
    console.log('editCard');
  }

  deleteCard() {
    console.log('deleteCard');
  }

  render() {
    return (
      <div className="card">
        <div className="card__text"><b className="card__id">#{this.props.id}</b>{this.props.text}</div>
        <div className="card__btns">
          <b className="card__btn card__btn-open" onClick={this.openCard.bind(this)}>
            open
          </b>
          <b className="card__btn card__btn-edit" onClick={this.editCard.bind(this)}>
            edit
          </b>
          <b className="card__btn card__btn-delete" onClick={this.deleteCard.bind(this)}>
            delete
          </b>
        </div>
      </div>
    );
  }
}

export default Card;
