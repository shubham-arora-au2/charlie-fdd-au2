function booksReducer(state = { booksList: [] }, action) {
    console.log("booksReducer()");
  
    switch (action.type) {
      case "FETCHING_BOOKS":
        return Object.assign({}, state, { booksList: null });
  
      case "RETRIEVED_BOOKS":
        return Object.assign({}, state, { booksList: action.booksList });
  
      default:
        return state;
    }
  }
  
  export default booksReducer;
  