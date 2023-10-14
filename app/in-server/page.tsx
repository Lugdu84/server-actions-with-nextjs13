import { addTodo } from "@/actions/todos"
import DeleteButton from "@/components/DeleteButton"
import Input from "@/components/Input"
import { Todo } from "@/typings"

async function getTodos() {
  const res = await fetch('https://64d660a22a017531bc12923b.mockapi.io/todos', {cache: "no-cache"} )
  const todos = await res.json()
  return todos
}

export default async function ServerPage() {
  const todos: Todo[] = await getTodos()
  console.log('todos', todos)
  return (
    <div className="flex flex-col items-center gap-4 mt-3">
      <h2>Server Actions in Server Components</h2>
      <form className=" w-3/4 md:w-1/2 flex flex-col gap-4" action={addTodo}>
        <div className="flex items-center gap-3">
          <label className="w-1/5" htmlFor="lastName">Nom : </label>
          <input
            required
            className=" w-4/5 border border-gray-400 rounded-md p-1"
            id="name"
            type="text"
            name="name"
            placeholder="Nom de la tâche"
          />
        </div>
        <button className="bg-green-400 rounded-md py-2" type="submit">Ajouter</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="p-5 shadow-xl rounded-md w-3/4 md:w-1/2 flex justify-between items-center">
          <div className="flex gap-2">
            <h3 className="text-xl font-bold">{todo.name}</h3>
            <Input todo={todo} />
          </div>
          <DeleteButton id={todo.id} />
        </div>
      ))}
    </div>
  )
}
