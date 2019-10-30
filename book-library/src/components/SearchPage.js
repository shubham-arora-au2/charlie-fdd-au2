import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResult';
import {connect} from 'react-redux';
import Home from './Home';

const SearchPage = (props) => {
  return (
    <main>
        <SearchBox />
        {props.LoggedIn ? <SearchResults /> : <Home />}
    </main>
  )
}

function mapStateToProps(state) {
    return {LoggedIn: localStorage.getItem('user')};
}

export default connect(mapStateToProps)(SearchPage);