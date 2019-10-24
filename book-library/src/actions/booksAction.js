export function clearBooks() {
    console.log('action: CLEAR_BOOKS');
    return {
        type: 'CLEAR_VIDEOS'
    };
}

export function fetchingBooks() {
    console.log('action: FETCHING_BOOKS');
    return {
        type: 'FETCHING_BOOKS'
    };
}

export function retrievedBooks(result) {
    console.log('action: RETRIEVED_BOOKS');
    return {
        type: 'RETRIEVED_BOOKS',
        booksList: result.items
    };
}