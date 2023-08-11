'use server'

import { Product } from "@/typings"
import { revalidatePath, revalidateTag } from "next/cache"

export const addProductToDatabase = async (e: FormData) => {
    
    const name = e.get('name')?.toString()
    const price = e.get('price')?.toString()

    if (!name || !price) return

    const newProduct: Product = {
      name,
      price,
    }

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
  }