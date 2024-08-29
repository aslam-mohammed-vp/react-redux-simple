import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;