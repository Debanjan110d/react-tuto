import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import { Todoform } from './components'
import { TodoItem } from './components'


function App() {
  const [todos, setTodos] = useState([])

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
    <TodoProvider value={{todos,addTodo,removeTodo,updateTodo,toggleTodo}}>
        <Todoform/>
        <div className="mt-6 flex flex-col gap-3">
          {/* Logic issue: The map function must return the component directly, not inside curly braces. */}
          {todos.length === 0 ? (
            <div className="text-center text-gray-400">No todos yet. Add one above!</div>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </div>
      </TodoProvider>
  )
}

export default App
