import React from 'react';
import { connect } from "react-redux";
import { clearBooks, fetchingBooks, retrievedBooks } from "../actions/booksAction";
import { fetchBooks } from '../api';
import SearchResults from './SearchResult';

class Home extends React.Component {
    componentDidMount() {
        this.props.getTrendingBooks();
    }

    componentWillUnmount() {
        this.props.clearBooks();
    }

    render() {
        return <main>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple app, using YouTube Data API to fetch a list of videos.</p>
                </div>
            </div>
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