import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task.title
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown, false);
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown, false);
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  handleKeyPress = e => {
    const { key, shiftKey } = e;
    if (key === 'Enter' && !shiftKey) {
      this.updateTask();
      e.preventDefault();
    }
  };

  handleMouseDown = e => {
    if (this.node.contains(e.target)) {
      this.textarea.focus();
      return false;
    }
    this.props.changeMode(false);
  };

  saveValue = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  updateTask = () => {
    let title = this.state.value.trim();
    if (title === '') {
      this.textarea.focus();
      return false;
    }
    this.props.updateTask({
      id: this.props.task.id,
      listId: this.props.task.listId,
      title: title,
      description: this.props.task.description
    });
    this.props.changeMode(false);
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
          <div className="edit-card__btn" onClick={this.updateTask}>
            Save
          </div>
        </div>
      </div>
    );
  };
}

EditCard.propTypes = {
  task: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired
};

export default EditCard;
