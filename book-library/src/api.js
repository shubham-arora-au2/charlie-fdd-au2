import CONFIG from './config.js';

export function fetchBooks(query) {
    let url;
    if(query === null)
        url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${CONFIG.API_KEY}`;
    else
        url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${CONFIG.API_KEY}&q=${query}`;

    console.log(url);
    return fetch(url)
        .then(function(data) {
            return data.json();
        });
}

export function fetchBookDetails(bookId) {
        let url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${CONFIG.API_KEY}&id=${bookId}`;

    console.log(url);
    return fetch(url, {credentials: 'include'})
        .then(function (data) {
            return data.json();
        });
}

