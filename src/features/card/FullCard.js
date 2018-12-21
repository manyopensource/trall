import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FullCard.scss';
import { bindActionCreators } from 'redux';
import { closeCard } from './../../actions';

class FullCard extends Component {
  closeCard = () => {
    console.log('closeCard');
    this.props.closeCard();
  };

  render = () => {
    return (
      <div className="full-card">
        <div className="full-card__inner">
          <div className="">full card</div>
          <button onClick={this.closeCard}>Close</button>
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

export default connect(null, mapDispatchToProps)(FullCard);
