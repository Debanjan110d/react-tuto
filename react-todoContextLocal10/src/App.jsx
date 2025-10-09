import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState("")

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(),...todo},...prevTodos ]);
  }  
  

  const updateTodo = (id,todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => t.id === id ? todo : t));
  }
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  }
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((t) => t.id === id ? {...t,completed: !t.completed} : t));
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleTodo}}>
      <h1 className='text-4xl text-center text-amber-500 bg-yellow-100 text-bold hover:bg-amber-300 flex items-center justify-center'>Hello TODO</h1>
    </TodoProvider>
  )
}

export default App
