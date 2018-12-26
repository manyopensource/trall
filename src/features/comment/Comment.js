import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  closeCard = () => {
    this.props.closeCard();
  };

  render = () => {
    const uri = '/user/' + 'nightfury';
    return (
      <div className="comment">
        <div className="comment__user"><a href={uri}>Night Fury</a></div>
        <div className="comment_text">{this.props.text}</div>
      </div>
    );
  };
}

export default Comment;
