import CONFIG from './config'

export const fetchBooks = (searchQuery) => {
  let targetURL
  targetURL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${CONFIG.API_KEY}`

  return fetch(targetURL).then((data) => {return data.json()})
};
