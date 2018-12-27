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
    this.props.openCard(this.props.id);
    const isScroll = document.body.clientHeight > document.documentElement.clientHeight;
    if (isScroll) {
      document.body.style.overflow = 'hidden';
      if (this.props.nativeScrollbarWidth) {
        document.body.style.paddingRight = this.props.nativeScrollbarWidth + 'px';
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
  }

  deleteCard = () => {
    this.props.deleteTask(this.props.id);
  };

  renderEditCard = () => {
    return <EditCard {...this.props} changeMode={this.handleChangeMode} />;
  };

  renderCard = () => {
    return (
      <div className="card" onDoubleClick={this.editCard}>
        <div className="card__text">
          <b className="card__id">#{this.props.id}</b>
          <span className="card__title">{this.props.title}</span>
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
