import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './../../trall.svg';
import './Header.scss';

class Header extends Component {
  render = () => {
    return (
      <header className="header clrfx">
        <div className="header__leftside">
          <a href="/" className="header__trademark">
            <img src={logo} className="header__logo" alt="Trall" />
            <b className="header__company">Trall</b>
          </a>
        </div>
        <div className="header__rightside">
          <div className="header__profile">
            {this.props.user ? this.props.user.name : 'Anonimous'}
          </div>
        </div>
      </header>
    );
  };
}

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
