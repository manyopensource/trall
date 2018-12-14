import React, { Component } from 'react';
import logo from './../../trall.svg';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__leftside">
          <a href="/" className="header__trademark">
            <img src={logo} className="header__logo" alt="Trall" />
            <b className="header__company">Trall</b>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
