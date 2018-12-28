import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import Modal from './features/modal/Modal';
import FullCard from './features/card/FullCardContainer';
import Register from './features/auth/RegisterContainer';
import './App.scss';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nativeScrollbarWidth: null,
      isUserLogged: false,
      user: null
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

  handleChangeAuthState = (bool, user) => {
    this.setState({
      isUserLogged: bool,
      user: user
    });
  }

  render = () => {
    return (
      <div className="global-space">
        <Header user={this.state.user} />
        <Board {...this.props} {...this.state} />
        <Footer />
        <Modal isOpen={this.props.global.openTaskId}>
          <FullCard user={this.state.user} />
        </Modal>
        <Modal closeDisabled={!this.state.isUserLogged} isOpen={!this.state.isUserLogged}>
          <Register changeAuthState={this.handleChangeAuthState} />
        </Modal>
      </div>
    );
  };
}

App.propTypes = {
  initData: PropTypes.func.isRequired,
  global: PropTypes.number
}

export default App;
