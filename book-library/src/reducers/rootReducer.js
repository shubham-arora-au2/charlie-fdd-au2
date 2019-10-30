import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import loginReducer from './loginreducer'

export default combineReducers({
    booksReducer,
    loginReducer

})