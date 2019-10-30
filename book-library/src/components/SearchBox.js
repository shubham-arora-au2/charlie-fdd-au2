import React from "react";
import { connect } from "react-redux";
import { fetchingBooks, retrievedBooks } from "../actions/booksAction";
import { fetchBooks } from "../api";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">

          <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg" placeholder="What do you want to see?" />
            <div className="input-group-append">
              <button className="btn btn-danger" type="button" onClick={this.props.handleClick}>
                Search
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

function mapActionToProps(dispatch) {
  return {
    handleClick: function(e) {
      console.log(e.target.parentNode.previousSibling.value);
      dispatch(fetchingBooks());
      fetchBooks(e.target.parentNode.previousSibling.value).then(result =>
        dispatch(retrievedBooks(result))
      );
    }
  };
}

export default connect(
  null,
  mapActionToProps
)(SearchBox);