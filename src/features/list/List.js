import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './../card/CardContainer';
import AddCard from '../card/AddCardContainer';
import Textarea from 'react-textarea-autosize';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBlockShown: false,
      isShielded: true,
      value: this.props.list.name
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  handleDocumentClick = e => {
    if (!this.node.contains(e.target) && !this.state.isShielded) {
      this.updateList();
    } else {
      this.textarea.focus();
    }
  };

  handleKeyPress = e => {
    const { key } = e;
    if (key === 'Enter' && !this.state.isShielded) {
      this.updateList();
      e.preventDefault();
    }
  };

  addCard = () => {
    this.setState({
      isAddBlockShown: true
    });
  };

  handleChangeAddBlock = bool => {
    this.setState({
      isAddBlockShown: bool
    });
  };

  saveValue = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  updateList = () => {
    let name = this.state.value.trim();
    if (name === '') {
      name = this.props.list.name;
      this.setState({
        value: name
      });
    }
    this.props.updateList({
      id: this.props.list.id,
      boardId: 1,
      name: name
    });
    this.textarea.blur();
    this.setState({
      isShielded: true
    });
  };

  handleClickOnShield = () => {
    this.setState({
      isShielded: false
    });
    setTimeout(() => {
      this.textarea.focus();
      this.textarea.select();
    }, 0);
  };

  render = () => {
    const cards = this.props.tasks.map(task => {
      return (
        <Card
          key={task.id}
          task={task}
          nativeScrollbarWidth={this.props.nativeScrollbarWidth}
        />
      );
    });
    return (
      <div className="list">
        <div className="list__inner">
          <div className="list__header" ref={node => (this.node = node)}>
            <div
              className={
                this.state.isShielded
                  ? 'list__shield'
                  : 'list__shield list__shield--disabled'
              }
              onClick={this.handleClickOnShield}
            />
            <div
              className={
                !this.state.isShielded
                  ? 'list__name-textarea list__name-textarea--hidden'
                  : 'list__name-textarea'
              }
              ref={listname => (this.listname = listname)}
            >
              {this.props.list.name}
            </div>
            <Textarea
              className={
                this.state.isShielded
                  ? 'list__name-textarea list__name-textarea--hidden'
                  : 'list__name-textarea'
              }
              inputRef={tag => (this.textarea = tag)}
              onChange={this.saveValue}
              spellCheck={false}
              value={this.state.value}
              placeholder="Enter list name..."
            />
          </div>
          <div className="list__cards">
            {cards}
            {this.state.isAddBlockShown && (
              <AddCard
                listId={this.props.list.id}
                changeAddBlock={this.handleChangeAddBlock}
              />
            )}
          </div>
          {!this.state.isAddBlockShown && (
            <div className="list__adding-new" onClick={this.addCard}>
              Add new
            </div>
          )}
        </div>
      </div>
    );
  };
}

List.propTypes = {
  tasks: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
  updateList: PropTypes.func.isRequired,
  nativeScrollbarWidth: PropTypes.number
};

export default List;
