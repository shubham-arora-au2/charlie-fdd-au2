import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import loginReducer from './loginreducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    booksReducer,
    loginReducer,
    categoryReducer

})