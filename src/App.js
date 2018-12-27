import React, { Component } from 'react';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import Modal from './features/modal/Modal';
import FullCard from './features/card/FullCardContainer';
import Register from './features/auth/Register';
import './App.scss';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nativeScrollbarWidth: null,
      loggedUser: null
    }
  }
  componentDidMount() {
    this.props.initData(data);

    var scrollbarElement = document.createElement('div');
    scrollbarElement.style.position = 'absolute';
    scrollbarElement.style.visibility = 'hidden';
    scrollbarElement.style.width = '100px';
    scrollbarElement.style.height = '100px';
    scrollbarElement.style.overflow = 'scroll';
    document.body.appendChild(scrollbarElement);

    this.setState(
      {
        nativeScrollbarWidth:
          scrollbarElement.offsetWidth - scrollbarElement.clientWidth
      },
      () => {
        document.body.removeChild(scrollbarElement);
      }
    );
  }

  render = () => {
    return (
      <div className="global-space">
        <Header />
        <Board {...this.props} {...this.state} />
        <Footer />
        <Modal isOpen={this.props.global.openTaskId}>
          <FullCard isShown={this.props.global.openTaskId} />
          <Register isShown={this.state.loggedUser} />
        </Modal>
      </div>
    );
  };
}

export default App;
