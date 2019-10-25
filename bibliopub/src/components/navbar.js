import React from 'react';
import SearchBox from './SearchBox';
import Login from './login'
import { LogoutUser } from '../actions/loginactions';
import { connect } from 'react-redux'
import SecondaryNavbar from './secondarynavbar'

class Navbar extends React.Component{
  render(){
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="/">Bookley</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                        <a className="nav-item nav-link" href="/search">search</a>
                        {/* <a className="nav-item nav-link" href="#">Pricing</a> */}
                    </div>
                </div>
                {/* <Search /> */}
                {/* <Login />
                <button onClick={this.props.doLogout}>Logout</button> */}

    {localStorage.getItem('user') ?
    <button className="btn btn-outline-light ml-auto" onClick={this.props.doLogout}>logout</button> :
    <Login />}
            </nav>
            <SecondaryNavbar />
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

const mapStateToProps = (state) => {
  return { LoggedIn: localStorage.getItem('user') }
  }

export default connect(mapStateToProps,mapActionToProps)(Navbar);
