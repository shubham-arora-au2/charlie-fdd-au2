function booksReducer(state = { booksList: [] }, action) {
    console.log('booksReducer()');

    switch (action.type) {
        case 'CLEAR_BOOKS':
            return Object.assign({}, state, { booksList: [] });

        case 'FETCHING_BOOKS':
            return Object.assign({}, state, { booksList: null });

        case 'RETRIEVED_BOOKS':
            return Object.assign({}, state, { booksList: action.booksList });

        default:
            return state;
    }
}

export default booksReducer;