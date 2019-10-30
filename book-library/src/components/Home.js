import React from 'react';
import { connect } from "react-redux";
import { clearBooks, fetchingBooks, retrievedBooks } from "../actions/booksAction";
import { fetchBooks } from '../api';
import SearchResults from './SearchResult';
import Jumbotron from './jumbotron'

class Home extends React.Component {
    componentDidMount() {
        this.props.getTrendingBooks();
    }

    componentWillUnmount() {
        this.props.clearBooks();
    }

    render() {
        return <main>
            <Jumbotron />
            <div className="container">
                <h4 className="my-5">Trending Books</h4>
            </div>
            <SearchResults />
        </main>
    }
}

function mapActionToProps(dispatch) {
    return {
        getTrendingBooks: function() {
            dispatch(fetchingBooks());
            fetchBooks(null)
                .then(result => dispatch(retrievedBooks(result)));
        },
        clearBooks: function() {
            dispatch(clearBooks());
        }
    }
}

export default connect(null, mapActionToProps)(Home);