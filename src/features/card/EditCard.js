import React, { Component } from 'react';
import './EditCard.scss';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
        {/* <div className="card__text"><textarea>{this.props.text}</textarea></div> */}
        <textarea className="edit-card__text" placeholder="Add title to this card" onChange={this.saveValue} onBlur={this.hideTextarea}>{this.props.text}</textarea>
      </label>
    );
  }
}

export default EditCard;
