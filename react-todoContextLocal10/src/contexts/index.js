import { createContext, useContext } from "react"


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            Todo: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleTodo: (id) => { }
})


export default function useTodo() {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
