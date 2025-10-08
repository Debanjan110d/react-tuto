import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState("")

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(), todo},...prevTodos ]);
  }  
  

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleTodo}}>
      <h1 className='text-4xl text-center text-amber-500 bg-yellow-100 text-bold hover:bg-amber-300 flex items-center justify-center'>Hello TODO</h1>
    </TodoProvider>
  )
}

export default App
