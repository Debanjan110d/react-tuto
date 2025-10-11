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
    <div>Todoform</div>
  )
}

export default Todoform