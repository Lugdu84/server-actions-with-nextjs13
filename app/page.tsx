import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import { Product } from "@/typings";


export default async function Home() {

  const res = await fetch('https://64d660a22a017531bc12923b.mockapi.io//products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products']
      }
    }
  )

  const products: Product[] = await res.json()

  

  
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products warehouse</h1>
      <AddProductButton />
      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input name="name" placeholder="Enter product name..." className="border border-gray-300 p-2 rounded-md" />
        <input name="price" placeholder="Enter price" className="border border-gray-300 p-2 rounded-md" />
        {/* <input type="image" formAction={sumbitImage} /> */}
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>
      
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow rounded-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
            ))}
      </div>

      
    </main>
  )
}
