import React from 'react';
import {combineReducers} from 'redux';
import booksReducer from './bookReducer';

const comboReducer = combineReducers({
  booksReducer
})

export default comboReducer;
