import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './EditCard.scss';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Новая задача'
    };
  }
  saveValue = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  }
  hideTextarea = event => {
    this.setState({
      showFullCard: true
    });
  }
  render() {
    return (
      <label className="edit-card" data-value={this.state.value}>
        <Textarea
          className="edit-card__text" 
          placeholder="Add title to this card"
          onChange={this.saveValue}
          onBlur={this.hideTextarea}
          defaultValue={this.state.value}
          autoFocus />
      </label>
    );
  }
}

export default EditCard;
