import React from 'react';
import SearchResults from './SearchResult';
import { connect } from 'react-redux'

class CategoriesResult extends React.Component {
    
    render() {
        return <div className='container' style={{paddingTop:'10%'}}>
            { this.props.currentCategory ? 
            <h1>Relavant books in the category '{this.props.currentCategory}'</h1> : 
            <h1>Relavant books in the category</h1>
            }
            <SearchResults />
        </div>

    }
}

function mapStateToProps(state){
    return{
        currentCategory : state.categoryReducer.currentCategory
    }
}

export default connect(mapStateToProps)(CategoriesResult);