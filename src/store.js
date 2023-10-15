import { createSlice, configureStore } from "@reduxjs/toolkit";



// "срез" состояния

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        reset: state => {
            state.value = 0;
        }
    }
})

const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        mytodo: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.mytodo = [...state.mytodo, action.payload];
        },
        removeTodo: (state, action) => {
            const idLoad = action.payload;
            state.mytodo = state.mytodo.filter(t => t.uuid !== idLoad)
        },
        updateTodo: (state, action) => {
            const { index, updatedTodo } = action.payload;
            state.mytodo = state.mytodo.map((t, id) => {
              if (id === index) {
                return { ...t, ...updatedTodo };
              }
              return t;
            });
        },
    }
})

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todolist: todoSlice.reducer
    }
});

export const {increment, decrement, reset} = counterSlice.actions;
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
