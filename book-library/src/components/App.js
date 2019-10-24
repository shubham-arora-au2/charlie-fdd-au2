import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './Search'
import Header from './Header'
import BooksList from './BooksList'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
      <Header />
      <Search />
    </div>
      <BooksList />
    </div>
    </Router>
  );
}

export default App;