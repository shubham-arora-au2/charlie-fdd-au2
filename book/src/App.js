import React from 'react';
import Navbar from './components/navbar';
import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    return(
      <div>
      <Navbar />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    LoggedIn : state.LoggedIn
  }
}


export default connect(mapStateToProps)(App);
