import React, { Component } from 'react';
import Card from './../card/Card';
import AddCard from '../card/AddCard';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBlockShown: false
    };
  }

  editListName = () => {
    console.log('editListName');
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

  render = () => {
    const cards = this.props.tasks.map((task, index) => {
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
          <div className="list__header" onClick={this.editListName}>
            <div className="list__name">
              {this.props.name}
            </div>
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
