import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import './AddCard.scss';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp, false);
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  handleKeyPress = e => {
    const { key, shiftKey } = e;
    if (key === 'Enter' && !shiftKey) {
      this.createTask();
      e.preventDefault();
    }
  };

  handleMouseUp = e => {
    if (this.node.contains(e.target)) {
      this.textarea.focus();
      return false;
    }
    this.createTask();
    this.hideAddBlock();
  };

  saveValue = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  hideAddBlock = () => {
    this.props.changeAddBlock(false);
  };

  createTask = () => {
    let title = this.state.value.trim();
    if (title === '') {
      this.textarea.focus();
      return false;
    }
    this.props.createTask({
      id: this.props.lastTaskId + 1,
      listId: this.props.listId,
      title: title,
      description: ''
    });
    this.setState({
      value: ''
    });
    this.textarea.focus();
  };

  render = () => {
    return (
      <div className="edit-card" ref={node => (this.node = node)}>
        <Textarea
          className="edit-card__textarea"
          placeholder="Add title to this card"
          inputRef={tag => (this.textarea = tag)}
          onChange={this.saveValue}
          value={this.state.value}
          autoFocus
        />
        <div className="edit-card__bar">
          <div className="edit-card__btn" onClick={this.createTask}>
            Add task
          </div>
        </div>
      </div>
    );
  };
}

AddCard.propTypes = {
  lastTaskId: PropTypes.number,
  listId: PropTypes.number.isRequired
}

export default AddCard;
