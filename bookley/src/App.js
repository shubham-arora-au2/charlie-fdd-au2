import React from 'react';
import Navbar from './components/navbar'
import Home from './components/home'

class App extends React.Component{
  render(){
    return (
      <div>
      <Navbar />
      <Home />
      </div>
    )
  }
}

export default App;
