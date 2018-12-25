import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Modal.scss';
import { bindActionCreators } from 'redux';
import { closeCard } from './../../actions';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.handleFunc, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleFunc, false);
  }

  handleFunc = event => {
    const { key } = event;
    if (key === 'Escape') {
      this.closeCard();
    }
  };

  closeCard = () => {
    this.props.closeCard();
  };

  render = () => {
    return (
      <div className="modal modal--active">
        <div className="modal__table">
          <div className="modal__row">
            <div className="modal__cell">
              <div className="modal__overlay" onClick={this.closeCard} />
              <div className="modal__inner">
                <div className="modal__body">{this.props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeCard
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Modal);
