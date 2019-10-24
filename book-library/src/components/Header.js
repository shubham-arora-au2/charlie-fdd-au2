import React from 'react'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand mb-0 h1" to='/'>bibliopub</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li>
                    <NavLink className="nav-link" to='/search' activeClassName="active">Search</NavLink>
                </li>
            </ul>
            <button  className="btn btn-outline-light ml-auto" onClick={props.doLogout}>Logout</button>
        </div>
    </nav>

  )
}


export default Header