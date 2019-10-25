import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import SearchPage from './SearchPage';
import './App.css';
import Viewer from './viewer'

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route  path="/search" component = {SearchPage}/>
        <Route path="/read/:bookId" component = {Viewer} />

      </div>
    </Router>

  );
}

export default App;
