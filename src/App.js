import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initData, increment } from './actions';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import FullCard from './features/card/FullCard';
import './App.scss';
import {getUsers} from './selectors';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.increment();
  }

  componentDidMount() {
    this.props.initData(data);
  }

  render = () => {
    return (
      <div className="global-space">
        <Header />
        <Board {...this.props} />
        <Footer />
        {!this.props.global.isOpenTask && <FullCard id={this.props.id} />}
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
    global: state.global,
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initData,
      increment
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
