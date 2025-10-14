import React from 'react'
import { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'

function Todoform() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo,completed:false})
        setTodo('')
    }
  return (
        <form onSubmit={add} className="flex gap-2 mt-4">
            {/* Logic: Prevent empty todos from being added */}
            <input
                type="text"
                placeholder="Write your Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/20 rounded-lg px-4 py-2 outline-none duration-150 bg-gray-50 focus:border-amber-500 text-lg"
                maxLength={100}
            />
            <button
                type="submit"
                className="rounded-lg px-4 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-150 shrink-0"
                disabled={!todo.trim()}
            >
                Add
            </button>
        </form>
        )
}

export default Todoform