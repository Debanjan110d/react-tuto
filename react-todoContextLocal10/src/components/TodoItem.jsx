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
      className={`flex items-center border border-black/10 rounded-lg px-3 py-3 gap-x-3 shadow-sm shadow-white/50 duration-300 text-shadow-black text-black ${todo.completed ? "bg-green-100" : "bg-white"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500 w-5 h-5"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-lg font-medium ${isTodoEditable ? "border-black/20 px-2 bg-white" : "border-transparent px-0"} ${todo.completed ? "line-through text-gray-400" : ""}`}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center transition-colors duration-150 ${isTodoEditable ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-50 hover:bg-gray-100"} shrink-0 disabled:opacity-50`}
        onClick={() => {
          // Logic: Prevent editing completed todos
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
        title={todo.completed ? "Completed todos cannot be edited" : isTodoEditable ? "Save changes" : "Edit todo"}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-100 hover:bg-red-200 text-red-600 shrink-0 ml-1"
        onClick={() => removeTodo(todo.id)}
        title="Delete todo"
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem