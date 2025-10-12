import React from 'react'
import { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoText, setTodoText] = useState(todo.todo)
  const {removeTodo, updateTodo,toggleTodo} = useTodo()

  const editTodo =()=>{
    updateTodo(todo.id,{...todo, todo: todoText})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleTodo(todo.id)  
  }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-4 gap-x-3 shadow-sm shadow-white/50 duration-300 text-shadow-black text-black ${todo.completed ? "bg-green-500" : "bg-white" }`}
    >
      <input type="checkbox" 
      className='cursor-pointer'
      checked={todo.completed}
      onChange={toggleCompleted}
      />
      <input type="text" 
      className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/20 px-2" : "border-transparent px-0" }`}
      value={todoText}
      onChange={
        (e)=>{
          setTodoText(e.target.value)
        }
      }
      readOnly={!isTodoEditable}
      
      />
    </div>
  )
}

export default TodoItem