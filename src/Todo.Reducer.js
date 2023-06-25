import { combineReducers } from "@reduxjs/toolkit";

const INIT_STATE = {list: ['Learn Redux']}

const todoReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo = action.payload;
            state.list.push(newTodo)
            return state
    }
        default:
            return state;
    }
}

export {todoReducer}