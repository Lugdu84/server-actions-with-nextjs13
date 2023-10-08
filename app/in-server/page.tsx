import { addUser } from "@/actions/users"

async function getUsers() {
  const res = await fetch('https://64d660a22a017531bc12923b.mockapi.io/users', { cache: 'no-cache'} )
  const users = await res.json()
  return users
}

type User = {
  id: string
  firstName: string
  lastName: string
}

export default async function ServerPage() {
  const users: User[] = await getUsers()
  console.log('users', users)
  return (
    <div className="flex flex-col items-center gap-4 mt-3">
      <h2>Server Actions in Server Components</h2>
      <form className=" w-3/4 md:w-1/2 flex flex-col gap-4" action={addUser}>
        <div className="flex gap-3 items-center">
          <label className="w-1/5" htmlFor="firstName">Prénom : </label>
          <input
            className=" border border-gray-400 rounded-md p-1"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Prénom"
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/5" htmlFor="lastName">Nom : </label>
          <input
            className=" border border-gray-400 rounded-md p-1"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Nom"
          />
        </div>
        <button className="bg-green-400 rounded-md py-2" type="submit">Ajouter</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="p-5 shadow-xl rounded-md w-11/12">
          <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
        </div>
      ))}
    </div>
  )
}
