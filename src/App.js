import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './features/header/Header';
import Board from './features/board/Board';
import Footer from './features/footer/Footer';
import FullCard from './features/card/FullCard';
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

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       initialState
//     },
//     dispatch
//   );
// };

class App extends Component {
  /* componentDidMount() {
    const { initialState } = this.props;
    initialState();
  } */

  render() {
    console.log(this.props);
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

export default connect(
  mapStateToProps,
  null
)(App);
