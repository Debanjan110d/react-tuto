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
    <form onSubmit={add} className='flex'>
        <input 
        type="text" 
        placeholder='Write your Todo'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} 
        className='w-full border border-black/10 rounded-lg px-4 py-2 oustline-none duration-150 bg-gray-50'/>
        <button type="submit" className='rounded-r-lg px-3 py-1 bg-amber-500 text-white shrink-0'>Add</button>
    </form>
        )
}

export default Todoform