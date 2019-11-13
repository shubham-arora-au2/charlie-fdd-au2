import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './Home';
import SearchPage from './SearchPage';
import './App.css';
import Viewer from './viewer'
import CategoriesResult from './categoriesresult';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact={true} component={HomePage} />
        <Route  path="/search" component = {SearchPage}/>
        <Route path="/read/:bookId" component = {Viewer} />
        <Route path="/categories" component = {CategoriesResult} />
      </div>
    </Router>

  );
}

export default App;
