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
        </div>
        <div className="comment__text">{this.props.text}</div>
      </div>
    );
  };
}

Comment.propTypes = {
  user: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;
