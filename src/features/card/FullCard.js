import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTaskById, getCommentsByTaskId } from './../../selectors';
import Comment from './../comment/Comment';
import Textarea from 'react-textarea-autosize';
import './FullCard.scss';

class FullCard extends Component {
  render = () => {
    if (!this.props.isShown) return null;
    let comments = this.props.comments.map((comment, index) => {
      return <Comment key={index} {...comment} />;
    });
    return (
      <div className="full-card">
        <div className="full-card__title">{this.props.task.title}</div>
        <div className="full-card__description">
          {this.props.task.description}
        </div>
        <div className="full-card__comments-block">
          <div className="full-card__comments-block-title">Комментарии</div>
          <div className="full-card__comment-adding-block">
            <Textarea
              minRows={3}
              className="full-card__new-comment-textarea"
              placeholder="Leave a comment..."
            />
            <span className="full-card__add-comment-button">Add Comment</span>
          </div>
          <div className="full-card__comments">{comments}</div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    task: getTaskById(state),
    comments: getCommentsByTaskId(state)
  };
};

export default connect(mapStateToProps)(FullCard);
