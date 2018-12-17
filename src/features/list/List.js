import React, { Component } from 'react';
import Card from './../card/Card';
import EditCard from './../card/EditCard';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingNew: false
    };
  }
  editListName() {
    console.log('editListName');
  }
  addCard() {
    console.log('addCard');
    this.setState({
      isAddingNew: true
    });
  }
  render() {
    const cards = this.props.cards.map((card, index) => {
      return <Card key={card.id} id={card.id} text={card.text} />;
    });
    return (
      <div className="list">
        <div className="list__inner">
          <div className="list__name" onDoubleClick={this.editListName.bind(this)}>{this.props.name}</div>
          <div className="list__cards">{cards}{this.state.isAddingNew && <EditCard/>}</div>
          <div className="list__adding-new" onClick={this.addCard.bind(this)}>Add new</div>
        </div>
      </div>
    );
  }
}

export default List;
