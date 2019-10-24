import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './Search'
import Header from './Header'
import BooksList from './Bookslist'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Header />
      <Search />
      </header>
      <BooksList />
    </div>
    </Router>
  );
}

export default App;
