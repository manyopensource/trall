import React, { Component } from 'react';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import FullCard from './features/card/FullCard';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullCard: false
    };
  }
  render() {
    return (
      <div className="global-space">
        <Header />
        <Board />
        <Footer />
        <FullCard isOpen={this.state.showFullCard} />
      </div>
    );
  }
}

export default App;
