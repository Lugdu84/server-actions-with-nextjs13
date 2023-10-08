'use server'

import { revalidatePath } from "next/cache"

export const addUser = async (form: FormData) => {
    const firstName = form.get('firstName') as string
    const lastName = form.get('lastName') as string

    const user = await fetch('https://64d660a22a017531bc12923b.mockapi.io/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    revalidatePath('/in-server')
}