import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  closeCard = () => {
    this.props.closeCard();
  };

  render = () => {
    return (
      <div className="comment">
        <div className="comment__user">Night Fury</div>
        <div className="comment_text">{this.props.text}</div>
      </div>
    );
  };
}

export default Comment;
