import React from 'react';
import Search from './search';
import Login from './login'
import { LogoutUser } from '../actions/loginactions';
import { connect } from 'react-redux'

class Navbar extends React.Component{
  render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="#">Bookley</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                    </div>
                </div>
                <Search />
                <Login />
                <button onClick={this.props.doLogout}>Logout</button>
            </nav>
        </div>
    )
  }
}


function mapActionToProps(dispatch){
    return{
      doLogout : function(){
        localStorage.removeItem('user')
        dispatch(LogoutUser())
      }
    }
}

export default connect(null,mapActionToProps)(Navbar);
