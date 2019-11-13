import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
    render() {
        console.log(this.props);
        return <div className="fluid-container" id='searchresult'>
            {this.props.booksList ?
                <ul className="card-deck" style={{listStyle:'none'}}>
                {this.props.booksList.map((item, i) =>
                    <li key={i.toString()} className="col-md-2" style={{backgroundColor:'lightgrey', margin:'10px'}}>
                        <Link to={'/read/' + (item.id.bookId || item.id)}>
                        {item.volumeInfo.imageLinks ? <img style={{marginTop:'10px'}} className="card-img-top" width="50px" height="235px" src={item.volumeInfo.imageLinks.thumbnail}/> : 
                        <img style={{marginTop:'10px'}} className="card-img-top" width="50px" height="235px" src='https://www.e-wef.org/Store/PersonifyScriptResource.axd?s=Personify.WebControls.Base-*-Personify.WebControls.Base.Images.not_available.gif&t=image/636917797480000000&v=gif'/>}
                        <div className="card-body">
                            <h6 className="card-title" >{item.volumeInfo.title.substring(0,20)}</h6>
                        </div>
                    </Link>
                    </li>
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