import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.scss';

class Header extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Trall (similar to Trello)</h1>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      );
    }
  }
  
  export default Header;