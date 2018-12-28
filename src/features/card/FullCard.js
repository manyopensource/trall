import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './../comment/Comment';
import Textarea from 'react-textarea-autosize';
import './FullCard.scss';

class FullCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textvalue: ''
    };
  }

  componentDidMount() {
    document.body.addEventListener(
      'keydown',
      this.handleDocumentKeyPress,
      false
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener(
      'keydown',
      this.handleDocumentKeyPress,
      false
    );
  }

  handleDocumentKeyPress = e => {
    const { key, ctrlKey, metaKey } = e;
    if ((ctrlKey || metaKey) && key === 'Enter') {
      this.handleClick();
      e.preventDefault();
    }
  };

  handleSaveValue = event => {
    const value = event.target.value;
    this.setState({
      textvalue: value
    });
  };

  handleClick = event => {
    let textvalue = this.state.textvalue.trim();
    if (textvalue === '') {
      this.textarea.focus();
      return false;
    }
    this.props.createComment({
      id: this.props.lastCommentId + 1,
      taskId: this.props.taskId,
      userId: 1,
      text: textvalue
    });
    this.setState({
      textvalue: ''
    });
    this.textarea.focus();
  };

  render = () => {
    let comments = this.props.comments.map((comment, index) => {
      const user = this.props.users.find(user => user.id === comment.userId);
      return <Comment key={index} {...comment} user={user} />;
    });
    return (
      <div className="full-card">
        <div className="full-card__title">{this.props.task.title}</div>
        <Textarea
          class="full-card__title full-card__title--area"
          defaultValue={this.props.task.title}
        />
        <div className="full-card__subtitle">Description</div>
        <div className="full-card__description">
          <Textarea
            className="full-card__description-area"
            onChange={this.handleSaveDescription}
            placeholder="Add a more detailed description..."
            minRows={2}
            value={this.props.task.description}
          />
        </div>
        <div className="full-card__subtitle">Comments</div>
        <div className="full-card__comment-adding-block">
          <Textarea
            inputRef={tag => (this.textarea = tag)}
            minRows={3}
            className="full-card__new-comment-textarea"
            placeholder="Leave a comment..."
            onChange={this.handleSaveValue}
            value={this.state.textvalue}
          />
          <span
            className={
              this.state.textvalue.trim() === ''
                ? 'full-card__add-comment-button full-card__add-comment-button--disabled'
                : 'full-card__add-comment-button'
            }
            ref={btn => (this.btn = btn)}
            onClick={this.handleClick}
          >
            Add comment
          </span>
        </div>
        <div className="full-card__comments">{comments}</div>
      </div>
    );
  };
}

FullCard.propTypes = {
  task: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  isShown: PropTypes.number,
  lastCommentId: PropTypes.number,
  taskId: PropTypes.number
};

export default FullCard;
