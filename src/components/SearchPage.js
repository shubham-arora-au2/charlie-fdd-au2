import React from 'react';
import SearchResults from './SearchResult';

class SearchPage extends React.Component {
    render() {
        return <div className='container' style={{paddingTop:'10%'}}>

            <SearchResults />
        </div>

    }
}

export default SearchPage;