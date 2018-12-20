import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, createTask } from './../../actions';
import './EditCard.scss';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    const {increment} = this.props;
    increment(this.props.counter + 1);
  }

  saveValue = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  hideTextarea = event => {
    this.setState({
      showFullCard: true
    });
  };

  createTask = () => {
    const { createTask } = this.props;
    createTask({
      id: this.props.counter,
      listId: this.props.listId,
      title: this.state.value,
      description: ''
    });
  }

  render = () => {
    return (
      <div className="edit-card">
        <label className="edit-card__label" data-value={this.state.value}>
          <Textarea
            className="edit-card__text"
            placeholder="Add title to this card"
            onChange={this.saveValue}
            onBlur={this.hideTextarea}
            defaultValue={this.state.value}
            autoFocus
          />
        </label>
        <div className="edit-card__bar">
          <div className="edit-card__btn" onClick={this.createTask}>Add task</div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment,
      createTask
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);
