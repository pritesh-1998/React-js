import React, { createContext, useReducer, useRef } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const TodoItemsContext = createContext();

function todoitemsReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export const TodoItemsProvider = ({ children }) => {
    const initialTodo = [
        { id: 1, name: "Todo Task 1", date: "05/05/2024" },
        { id: 2, name: "Todo Task 2", date: "05/05/2024" },
        { id: 3, name: "Todo Task 3", date: "05/05/2024" },
        { id: 4, name: "Todo Task 4", date: "05/05/2024" },
        { id: 5, name: "Todo Task 5", date: "05/05/2024" },
    ];

    const [todo, dispatchTodoItems] = useReducer(todoitemsReducer, initialTodo);

    let noOfUpdates = useRef(0);

    const addTask = (taskName, taskDate) => {
        if (taskName !== "" && taskDate !== "") {
            const newTodoItem = { id: todo.length + 1, name: taskName, date: taskDate };
            dispatchTodoItems({ type: 'ADD_TODO', payload: newTodoItem });
            Swal.fire({
                title: "Good job!",
                text: "You created a new Task!",
                icon: "success"
            });
            noOfUpdates.current += 1;
            console.log(noOfUpdates.current);
        }
    };

    const deleteTodo = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatchTodoItems({ type: 'DELETE_TODO', payload: id });
                MySwal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <TodoItemsContext.Provider value={{ todo, addTask, deleteTodo, noOfUpdates }}>
            {children}
        </TodoItemsContext.Provider>
    );
};
