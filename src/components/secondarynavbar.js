import React from 'react';
import { connect } from 'react-redux'
import { fetchingBooks, retrievedBooks } from "../actions/booksAction";
import { fetchBooksByCategory } from "../api";
import { Link } from 'react-router-dom';
import currentCategory from '../actions/categoryActions'

class SecondaryNavbar extends React.Component{
    render(){
        return(
            <div id='navigation' >
                <ul>
                <Link to={'/categories'}>
                <li onClick={this.props.handleClick}>Fiction</li>
                <li onClick={this.props.handleClick}>Religion</li>
                <li onClick={this.props.handleClick}>Health</li>
                <li onClick={this.props.handleClick}>Business&Economics</li>
                <li onClick={this.props.handleClick}>Computers</li>
                <li onClick={this.props.handleClick}>Science</li>
                </Link>
            </ul>
            </div>
        )
    }
}

function mapActionToProps(dispatch) {
  return {
    handleClick: function(e) {
      dispatch(currentCategory(e.target.innerText))  
      dispatch(fetchingBooks());
      fetchBooksByCategory(e.target.innerText).then(result =>
        dispatch(retrievedBooks(result))
      );
    }
  };
}

export default connect(null,mapActionToProps)(SecondaryNavbar);



