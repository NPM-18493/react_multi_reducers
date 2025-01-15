import { Todo } from "@/Todo";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: Array<any>(),
    reducers:{
        addTodo: (state, action) => {
            state.push(action.payload);         
            return state;
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo != action.payload);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;