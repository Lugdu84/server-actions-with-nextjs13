'use client'

import { deleteTodo } from "@/actions/todos"

type DeleteButtonProps = {
    id: string
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    
    const handleDelete = async () => {
        await deleteTodo(id)
    }
  return (
    <button onClick={handleDelete} className=" bg-red-400 py-2 px-3 rounded-md" type="button">Supprimer</button>
  )
}
