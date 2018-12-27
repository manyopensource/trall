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
    this.modal.className = 'modal';
    setTimeout(() => {
      this.props.closeCard();
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }, 333);
  };

  render = () => {
    return (
      <div
        className={this.props.isOpen ? 'modal modal--active' : 'modal'}
        ref={modal => (this.modal = modal)}
      >
        <div className="modal__table">
          <div className="modal__row">
            <div className="modal__cell">
              <div className="modal__overlay" onClick={this.closeCard} />
              <div className="modal__inner">
                <div className="modal__body">{this.props.isOpen ? this.props.children : null}</div>
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
