import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initData } from './actions';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import Modal from './features/modal/Modal';
import FullCard from './features/card/FullCard';
import './App.scss';
import { getUsers } from './selectors';
import data from './data';

class App extends Component {
  componentDidMount() {
    this.props.initData(data);
  }

  render = () => {
    return (
      <div className="global-space">
        <Header />
        <Board {...this.props} />
        <Footer />
        {this.props.global.isOpenTask && <Modal><FullCard tasks={this.props.tasks} /></Modal>}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    boards: state.boards,
    lists: state.lists,
    tasks: state.tasks,
    comments: state.comments,
    global: state.global,
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
