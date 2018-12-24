import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, openCard } from './../../actions';
import './Card.scss';
import EditCard from './EditCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
    }
  }
  openCard = () => {
    console.log('openCard');
    this.props.openCard();
  };

  editCard = () => {
    console.log('editCard');
    this.setState({
      isEditMode: true
    });
  };

  handleChangeMode = bool => {
    this.setState({
      isEditMode: bool
    });
  }

  deleteCard = () => {
    this.props.deleteTask(this.props.id);
  };

  renderEditCard = () => {
    return <EditCard {...this.props} changeMode={this.handleChangeMode} />;
  };

  renderCard = () => {
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
  }

  render = () => {
    if (this.state.isEditMode) {
      return this.renderEditCard();
    }
    return this.renderCard();
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTask,
      openCard
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
