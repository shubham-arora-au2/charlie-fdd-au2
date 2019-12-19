import React from "react";
import { connect } from "react-redux";
import { fetchingBooks, retrievedBooks } from "../actions/booksAction";
import { fetchBooks } from "../api";
import { Link } from 'react-router-dom';

class Search extends React.Component{
  render(){
    return (
        <div className='input-group' style={{paddingLeft:'25%'}}>
            <input id="search" placeholder='Search for books here !' className="form-control col-md-7" />
            <div className='input-group-append'>
            <Link to={'/search'}> 
            <button className='btn btn-secondary' onClick={this.props.handleClick}>
            Search
            </button>
            </Link>
            </div>
        </div>
    )
  }
}

function mapActionToProps(dispatch) {
  return {
    handleClick: function(e) {
      // console.log(e.target.parentNode.previousSibling.value);
      dispatch(fetchingBooks());
      fetchBooks(document.getElementById('search').value).then(result =>
        dispatch(retrievedBooks(result))
      );
    }
  };
}

export default connect(null,mapActionToProps)(Search);
