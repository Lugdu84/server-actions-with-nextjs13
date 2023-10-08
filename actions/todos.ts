'use server'

import { revalidatePath } from "next/cache"

export const addUser = async (form: FormData) => {
    const name = form.get('name') as string

    const user = await fetch('https://64d660a22a017531bc12923b.mockapi.io/todos', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    revalidatePath('/in-server')
}