export function clearBooks(){
  console.log("CLEARING BOOKS");
  return {
    type: "CLEAR_BOOKS"
  }
}

export function fetchingBooks(){
  return {
    type: "FETCHING_BOOKS"
  }
}

export function loadedBooks(result){
  console.log(result.items);
  return {
    type: "LOADED_BOOKS",
    booksList: result.items
  }
}
