import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-center">Server Actions in Next.js</h1>
      <div className="flex gap-3">
        <Link className="bg-green-400 py-2 px-3 rounded-md" href="/in-client">In client component</Link>
        <Link className="bg-green-400 py-2 px-3 rounded-md" href="/in-server">In server component</Link>
      </div>
      
    </main>
  )
}
