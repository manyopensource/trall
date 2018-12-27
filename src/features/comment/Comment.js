import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render = () => {
    const uri = '/user/' + this.props.user.login;
    return (
      <div className="comment">
        <div className="comment__user"><a href={uri}>{this.props.user.name}</a></div>
        <div className="comment_text">{this.props.text}</div>
      </div>
    );
  };
}

export default Comment;
