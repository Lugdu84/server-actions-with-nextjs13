'use client'

import { addProductToDatabase } from "@/actions/serverActions"
import { FormEvent, useState } from "react"

export default function Form() {
  const [errors, setError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const result = await addProductToDatabase(formData)  
        
    setError(result.errors)
    setIsLoading(false)
  
  }

  console.log(isLoading)
  
  if (isLoading) return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
    
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input name="title" placeholder="Enter product name..." className="border border-gray-300 p-2 rounded-md" />
        <input name="description" placeholder="Enter price" className="border border-gray-300 p-2 rounded-md" />
        <label htmlFor="javascript">
          javascript
          <input type="checkbox" id="javascript" name="javascript" />
        </label>
        <label htmlFor="html">
          html
          <input type="checkbox" id="html" name="html" />
        </label>
        <label htmlFor="java">
          java
          <input type="checkbox" id="java" name="java" />
        </label>
        <label htmlFor="ruby">
          ruby
          <input type="checkbox" id="ruby" name="ruby" />
        </label>
        <label htmlFor="laravel">
          laravel (c&apos;est pourri comme framework)
          <input type="checkbox" id="laravel" name="laravel" />
          </label>
          {errors.length > 0 && errors.map((error) => (
              <p key={error} className="text-red-500">{error}</p>
            ))}
        {/* <input type="image" formAction={sumbitImage} /> */}
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>
    
  )
}
