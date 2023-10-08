import { Product } from "@/typings";
import Form from "@/components/Form";

export default async function ClientPage() {

  const res = await fetch('https://64d660a22a017531bc12923b.mockapi.io//products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products']
      }
    }
  )

  const products: Product[] = await res.json()

  type tags = 'javascript' | 'html' | 'java' | 'ruby'
  
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products warehouse</h1>
      {/* <AddProductButton /> */}
      <Form />
      <div className="flex flex-wrap gap-5 m-2">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow-xl rounded-md w-full">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg font-bold">{product.description}</p>
            <div>
              {product.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-800 text-sm rounded-md px-2 py-1 m-1">{tag}</span>
              ))}
            </div>
          </div>
            ))}
      </div>
    </main>
  )
}
