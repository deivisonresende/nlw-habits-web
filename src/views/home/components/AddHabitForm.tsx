import { Check } from "phosphor-react";

export function AddHabitForm(){
  return (
    <form className="flex flex-col mt-6">
      <label 
        htmlFor='title'
        className="font-semibold leading-tight"
      >
        Qual seu comprometimento ?
      </label>
      <input 
        type="text" 
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="bg-zinc-800 rounded-lg placeholder:text-zinc-400 mt-3 p-4 outline-none"
        autoFocus
      />

      <label 
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrência ?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg flex items-center gap-3 justify-center font-semibold bg-green-600 p-4 hover:bg-green-500"
      >
        <Check size={20} weight='bold'/>
        Confirmar
      </button>
    </form>
  )
}