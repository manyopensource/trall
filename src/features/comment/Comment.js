import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

class Comment extends Component {
  render = () => {
    const uri = '/user/' + this.props.user.login;
    return (
      <div className="comment">
        <div className="comment__user">
          <a href={uri} className="comment__user-link">{this.props.user.name}</a>
          <span className="comment__user-email">{this.props.user.email}</span>
        </div>
        <div className="comment__text">{this.props.comment.text}</div>
      </div>
    );
  };
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Comment;
