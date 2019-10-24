import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact={true} component={HomePage} />
        <Route  path="/search" component = {SearchPage}/>
      </div>
    </Router>

  );
}

export default App;
