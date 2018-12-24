import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTask } from './../../actions';
import { getLastTaskId } from './../../selectors';
import './EditCard.scss';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      this.textarea.focus();
      return false;
    }
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
    this.textarea.value = '';
    this.textarea.focus();
  };

  render = () => {
    return (
      <div className="edit-card" ref={node => (this.node = node)}>
        <label className="edit-card__label" data-value={this.state.value}>
          <Textarea
            className="edit-card__text"
            placeholder="Add title to this card"
            inputRef={tag => (this.textarea = tag)}
            onChange={this.saveValue}
            defaultValue={this.state.value}
            autoFocus
          />
        </label>
        <div className="edit-card__bar">
          <div className="edit-card__btn" onClick={this.createTask}>
            Add task
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    global: state.global,
    counter: state.counter,
    lastTaskId: getLastTaskId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createTask
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);
