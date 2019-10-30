import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './Home';
import SearchPage from './SearchPage';
import './App.css';
import Viewer from './viewer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact={true} component={HomePage} />
        <Route  path="/search" component = {SearchPage}/>
        <Route path="/read/:bookId" component = {Viewer} />
      </div>
    </Router>

  );
}

export default App;
