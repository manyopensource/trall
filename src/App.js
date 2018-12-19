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

  componentDidMount() {
    const {
      dispatch,
      selectedCategory,
      fetchCategories,
      fetchPosts
    } = this.props;
    //Call like this instead of fetchCategoriesIfNeeded/fetchPostsIfneeded
    //dispatch(fetchCategories(selectedCategory))
    //dispatch(fetchPosts(selectedCategory))
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
