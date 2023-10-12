'use client'

import { updateTodo } from '@/actions/todos'
import { Todo } from '@/typings'
import React from 'react'

type InputProps = {
    todo: Todo
}

export default function Input({ todo }: InputProps) {
    
    const handleChange = async () => {
        const updatedTodo = { ...todo, completed: !todo.completed }
        await updateTodo(updatedTodo)
    }
  return (
    <input className="mr-3" type="checkbox" checked={todo.completed} onChange={handleChange} />
  )
}
