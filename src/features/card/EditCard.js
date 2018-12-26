import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTask } from '../../actions';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.title
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
      this.updateTask();
      e.preventDefault();
    }
  };

  handleMouseUp = e => {
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
      id: this.props.id,
      listId: this.props.listId,
      title: title,
      description: ''
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateTask
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(EditCard);
