import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from './actions';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import FullCard from './features/card/FullCard';
import './App.scss';
import {getUsers} from './selectors'

class App extends Component {
  constructor(props) {
    super(props);

    this.props.increment();
  }

  render = () => {
    return (
      <div className="global-space">
        <Header />
        <Board {...this.props} />
        <Footer />
        <FullCard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    boards: state.boards,
    lists: state.lists,
    tasks: state.tasks,
    comments: state.comments,
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
