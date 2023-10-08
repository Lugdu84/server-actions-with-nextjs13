'use server'

import { Product } from "@/typings"
import { revalidatePath, revalidateTag } from "next/cache"

const filterTags = (e: FormData) => {
  const tags = []
  for (const [key, value] of e.entries()) {
    if (!key.includes('$ACTION') && (value === 'on')) tags.push(key)
  }
  return tags
}

export const addProductToDatabase = async (form: FormData) => {

  const errors: string[] = []


  const title = form.get('title')?.toString()
  const description = form.get('description')?.toString()


  if (!title || !description) errors.push('Title and description are required')

  const tags = filterTags(form)

  if (!tags.length) errors.push('At least one tag is required')

  console.log('errors', errors)

  if (errors.length) return { success: false, errors }

    const newProduct: Product = {
      title: title as string,
      description: description as string,
      tags,
    }

  console.log('tags', tags)

  await fetch('https://64d660a22a017531bc12923b.mockapi.io//products',
      {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  // revalidateTag('products')
  revalidatePath('/')
  return { success: true, errors }
    
  }