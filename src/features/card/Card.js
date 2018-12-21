import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, openTask } from './../../actions';
import './Card.scss';

class Card extends Component {
  openCard = () => {
    console.log('openCard');
    this.props.openTask();
  };

  editCard = () => {
    console.log('editCard');
  };

  deleteCard = () => {
    this.props.deleteTask(this.props.id);
  };

  render = () => {
    return (
      <div className="card">
        <div className="card__text">
          <b className="card__id">#{this.props.id}</b>
          {this.props.title}
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
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTask,
      openTask
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
