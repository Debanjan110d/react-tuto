import { useEffect, useState } from 'react'

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
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  }
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((t) => t.id === id ? {...t,completed: !t.completed} : t));
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])//cause there is no dependency aray so this hook will work whenever the component is rendered
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleTodo}}>
      <h1 className='text-4xl text-center text-amber-500 bg-yellow-100 text-bold hover:bg-amber-300 flex items-center justify-center'>Hello TODO</h1>
    </TodoProvider>
  )
}

export default App
