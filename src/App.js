import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import FullCard from './features/card/FullCard';
import { initialState } from './actions';
import './App.scss';

const mapStateToProps = state => {
  return {
    users: state.users,
    boards: state.boards,
    lists: state.lists,
    cards: state.cards,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initialState
    },
    dispatch
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullCard: false
    };
  }

  componentDidMount() {
    const { initialState } = this.props;
    initialState();
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
