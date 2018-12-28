import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './../comment/Comment';
import Textarea from 'react-textarea-autosize';
import './FullCard.scss';

class FullCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textvalue: '',
      title: this.props.task.title,
      description: this.props.task.description,
      isTitleEditable: false,
      isDescriptionEditable: false
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

  handleSaveTitle = e => {
    const title = e.target.value;
    this.setState({
      title: title
    });
  };

  handleSaveDescription = e => {
    const description = e.target.value;
    this.setState({
      description: description
    });
  };

  handleClickOnTitle = e => {
    this.setState(
      {
        isTitleEditable: true
      },
      () => {
        this.Title.focus();
      }
    );
  };

  handleClickOnDescription = e => {
    this.setState(
      {
        isDescriptionEditable: true
      },
      () => {
        this.Description.focus();
      }
    );
  };

  handleBlurOnTitle = e => {
    this.setState({
      isTitleEditable: false
    });
    this.props.updateTask({
      id: this.props.task.id,
      listId: this.props.task.listId,
      title: this.state.title,
      description: this.state.description,
    });
  };

  handleBlurOnDescription = e => {
    this.setState({
      isDescriptionEditable: false
    });
    this.props.updateTask({
      id: this.props.task.id,
      listId: this.props.task.listId,
      title: this.state.title,
      description: this.state.description,
    });
  };

  render = () => {
    let comments = this.props.comments.map((comment, index) => {
      const user = this.props.users.find(user => user.id === comment.userId);
      return <Comment key={index} {...comment} user={user} />;
    });
    return (
      <div className="full-card">
        <div
          className={
            !this.state.isTitleEditable
              ? 'full-card__title'
              : 'full-card__title full-card__title--hidden'
          }
          onClick={this.handleClickOnTitle}
        >
          {this.props.task.title}
        </div>
        <Textarea
          className={
            this.state.isTitleEditable
              ? 'full-card__title full-card__title--area'
              : 'full-card__title full-card__title--area full-card__title--hidden'
          }
          inputRef={tag => (this.Title = tag)}
          onChange={this.handleSaveTitle}
          onBlur={this.handleBlurOnTitle}
          value={this.state.title}
        />
        <div className="full-card__subtitle">Description</div>
        <div
          className={
            !this.state.isDescriptionEditable
              ? 'full-card__description'
              : 'full-card__description full-card__description--hidden'
          }
          onClick={this.handleClickOnDescription}
        >
          {this.props.task.description}
          <span
            className={
              this.props.task.description !== ''
                ? 'full-card__description-empty full-card__description-empty--hidden'
                : 'full-card__description-empty'
            }
          >
            Add a more detailed description...
          </span>
        </div>
        <Textarea
          className={
            this.state.isDescriptionEditable
              ? 'full-card__description full-card__description--area'
              : 'full-card__description full-card__description--area full-card__description--hidden'
          }
          inputRef={tag => (this.Description = tag)}
          onChange={this.handleSaveDescription}
          onBlur={this.handleBlurOnDescription}
          placeholder="Add a more detailed description..."
          minRows={4}
          defaultValue={this.state.description}
        />
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
