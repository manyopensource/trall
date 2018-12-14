import React, { Component } from 'react';
import Card from './../card/Card';

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list__name">{this.props.name}</div>
        <Card />
      </div>
    );
  }
}

export default List;
