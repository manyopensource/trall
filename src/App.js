import React, { Component } from 'react';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
