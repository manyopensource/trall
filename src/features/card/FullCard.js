import React, { Component } from 'react';
import './FullCard.scss';

class FullCard extends Component {
  render = () => {
    if (this.props.isOpen === true) {
      return (
        <div className="full-card">
          <div className="full-card__inner">
            <div className="">full card</div>
          </div>
        </div>
      );
    } else {
      return true;
    }
  }
}

export default FullCard;
