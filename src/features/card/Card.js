import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditCard from './EditCardContainer';
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false
    };
  }

  openCard = () => {
    this.props.openCard(this.props.task.id);
    const isScroll =
      document.body.clientHeight > document.documentElement.clientHeight;
    if (isScroll) {
      document.body.style.overflow = 'hidden';
      if (this.props.nativeScrollbarWidth) {
        document.body.style.paddingRight =
          this.props.nativeScrollbarWidth + 'px';
      }
    }
  };

  editCard = () => {
    this.setState({
      isEditMode: true
    });
  };

  handleChangeMode = bool => {
    this.setState({
      isEditMode: bool
    });
  };

  deleteCard = () => {
    this.props.deleteTask(this.props.task.id);
  };

  renderEditCard = () => {
    return (
      <EditCard
        task={this.props.task}
        changeMode={this.handleChangeMode}
      />
    );
  };

  renderCard = () => {
    return (
      <div className="card" onDoubleClick={this.editCard}>
        <div className="card__text">
          <span className="card__title">{this.props.task.title}</span>
        </div>
        <div className="card__btns">
          <b className="card__btn card__btn-open" onClick={this.openCard}>
            open
          </b>
          <b className="card__btn card__btn-edit" onClick={this.editCard}>
            edit
          </b>
          <b className="card__btn card__btn-delete" onClick={this.deleteCard}>
            delete
          </b>
        </div>
        <b className="card__id">#{this.props.task.id}</b>
      </div>
    );
  };

  render = () => {
    if (this.state.isEditMode) {
      return this.renderEditCard();
    }
    return this.renderCard();
  };
}

Card.propTypes = {
  task: PropTypes.object.isRequired,
  nativeScrollbarWidth: PropTypes.number,
  deleteTask: PropTypes.func.isRequired,
  openCard: PropTypes.func.isRequired
};

export default Card;
