'use client'

import { addProductToDatabase } from "@/actions/products"
import { useTransition } from "react"

export default function AddProductButton() {
    const [isPending, startTransition] = useTransition()

    const formData = new FormData()
    formData.append('name', 'Macbook Pro M2')
    formData.append('price', '2000')
  return (
    <button className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-40" onClick={() => startTransition(() => addProductToDatabase(formData))}>{ isPending ? "Adding..." : "Add Macbook Pro"}</button>
  )
}
