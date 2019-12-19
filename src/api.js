import CONFIG from './config.js';

export function fetchBooks(query) {
    let url;
    if(query === null)
        url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${CONFIG.API_KEY}&maxResults=40`;
        // url = 'https://www.googleapis.com/books/v1/volumes?q=finance'
    else
        url = `https://www.googleapis.com/books/v1/volumes?key=${CONFIG.API_KEY}&q=${query}&maxResults=40`;

    console.log(url);
    return fetch(url)
        .then(function(data) {
            return data.json();
        });
}

export function fetchBooksByCategory(category){
    let  url = `https://www.googleapis.com/books/v1/volumes?key=${CONFIG.API_KEY}&q=subject:${category}&maxResults=40`;
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

