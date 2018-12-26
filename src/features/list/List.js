import React, { Component } from 'react';
import Card from './../card/Card';
import AddCard from '../card/AddCard';
import Textarea from 'react-textarea-autosize';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBlockShown: false,
      isShielded: true,
      value: this.props.name
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

  handleMouseUp = e => {
    if (this.node.contains(e.target)) {
      this.textarea.focus();
      return false;
    }
    this.setState({
      isShielded: true
    });
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
    this.textarea.focus();
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
      this.textarea.focus();
      return false;
    }
    this.props.updateList({
      id: this.props.id,
      boardId: 1,
      name: name
    });
    this.setState({
      isShielded: true
    });
    this.textarea.blur();
  }

  handleClickOnShield = () => {
    this.setState({
      isShielded: false
    });
  };

  render = () => {
    const cards = this.props.tasks.map(task => {
      return (
        <Card
          key={task.id}
          listId={this.props.id}
          id={task.id}
          title={task.title}
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
            <Textarea
              inputRef={tag => (this.textarea = tag)}
              className="list__name-textarea"
              defaultValue={this.props.name}
              onChange={this.saveValue}
              spellCheck={false}
            />
          </div>
          <div className="list__cards">
            {cards}
            {this.state.isAddBlockShown && (
              <AddCard
                listId={this.props.id}
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

export default List;
