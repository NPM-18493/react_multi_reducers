import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});

export default rootReducer;