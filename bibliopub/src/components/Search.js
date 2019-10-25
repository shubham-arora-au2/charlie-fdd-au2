import React from 'react';

class Search extends React.Component{
  render(){
    return (
        <div className='input-group' style={{paddingLeft:'15%'}}>
            <input id="search" placeholder='Search for books here !' className="form-control col-md-5" />
            <div className='input-group-append'>
            <button className='btn btn-secondary'>Search</button>
            </div>
        </div>
    )
  }
}

export default Search;
