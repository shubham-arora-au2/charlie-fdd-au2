import React from 'react'
import {connect} from 'react-redux';
import {fetchingBooks, loadedBooks} from '../actions/bookActions';
import {fetchBooks} from '../api';


const Search = (props) => {
  return (
    <div className="container"><br/>
    <div className="input-group mb-3">
      <input type="text" className="form-control" id="mySearch" placeholder="Enter your book search here" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-warning" onClick={props.handleClick} type="button" id="button-addon2">Search</button>
      </div>
    </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  console.log("Search ===> mapDispatchToProps");
  return {
    handleClick: (event) => {
      dispatch(fetchingBooks());
      console.log(document.getElementById('mySearch').value);
      let searchKey = document.getElementById('mySearch').value
      fetchBooks(searchKey).then(bookData => dispatch(loadedBooks(bookData)))
    }
  }
};

export default connect(null, mapDispatchToProps)(Search)
