import React, { Component } from 'react';
import Header from './features/header/Header';
import List from './features/list/List';
import Footer from './features/footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    const data = [
      {
        name: 'Test1',
        cards: [
          {
            name: 'card1'
          },
          {
            name: 'card2'
          }
        ]
      },
      {
        name: 'Test2',
        cards: []
      },
      {
        name: 'Test3',
        cards: []
      },
      {
        name: 'Test4',
        cards: []
      }
    ];
    return (
      <div className="App">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
