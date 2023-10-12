'use server'

import { Todo } from "@/typings"
import { revalidatePath } from "next/cache"

export const addTodo = async (form: FormData) => {
    const name = form.get('name') as string

    try {
        const response = await fetch('https://64d660a22a017531bc12923b.mockapi.io/todos', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/in-server')
        
        const data = await response.json()
        return { message: `La todo ${data.name} a ajouté avec succès.`}
    }
    catch (err) {
        return { message: `Erreur lors de l'ajout de la todo : ${err}`}
    }
}

export const updateTodo = async (todo: Todo) => {

    try {
        const response = await fetch(`https://64d660a22a017531bc12923b.mockapi.io/todos/${todo.id}`, {
            method: 'PATCH',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/in-server')
        
        const data = await response.json()
        return { message: `La todo ${data.name} a modifié avec succès.`}
    }
    catch (err) {
        return { message: `Erreur lors de la modification de la todo : ${err}`}
    }
}