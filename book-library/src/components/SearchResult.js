import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
    render() {
        console.log(this.props);
        return <div className="container search-results">
            {this.props.booksList ?
                <ul className="card-deck">
                {this.props.booksList.map((item, i) =>
                    <li key={i.toString()} className="card"><Link to={'/read/' + (item.id.bookId || item.id)}>
                        {/* <img className="card-img-top" src={item.snippet.thumbnails.medium.url} /> */}
                        <div className="card-body">
                            <h6 className="card-title">{item.snippet.title}</h6>
                        </div>
                        <p className="card-text">
                            <small className="text-muted">{item.snippet.channelTitle}</small>
                        </p>
                    </Link></li>
                )}
                </ul> :
                "Loading..."
            }
        </div> 
    }
}

function mapStateToProps(state) {
    return {booksList: state.booksReducer.booksList};
}

export default connect(mapStateToProps)(SearchResults);