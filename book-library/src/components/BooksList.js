import React from 'react'
import {connect} from 'react-redux';

const BooksList = (props) => {
  return (
    <div className = "container">
      {props.booksList ?
        props.booksList.map((each, key) =>
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={each.volumeInfo.imageLinks.thumbnail ?
                each.volumeInfo.imageLinks.thumbnail :
              each.volumeInfo.imageLinks.smallThumbnail} className="card-img" alt={each.volumeInfo.previewLink}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{each.volumeInfo.title}</h6>
              <p className="card-text"><small className="text-muted">{each.volumeInfo.subtitle}</small></p>
              <p className="card-text">{each.volumeInfo.authors}</p>
              <p className="card-text"><small className="text-muted">{each.volumeInfo.infolink}</small></p>
            </div>
          </div>
        </div>
      </div>)
       : "Loading...."}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("Bookslist ===> mapStateToProps");
  console.log(state.booksReducer.booksList);
  return { booksList: state.booksReducer.booksList };
};

export default connect(mapStateToProps)(BooksList)