import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react'

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export function AddHabitForm(){
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<Number[]>([])

  const handleSubmitNewHabit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleToggleWeekDays = (targetDay : number) => {
    const alreadySelected = weekDays.includes(targetDay)
    if(!alreadySelected) setWeekDays([...weekDays, targetDay])
    else setWeekDays(weekDays.filter(day => day !== targetDay))
  }

  return (
    <form onSubmit={handleSubmitNewHabit} className="flex flex-col mt-6">
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
        onChange={event => setTitle(event.target.value)}
        autoFocus
      />

      <label 
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrência ?
      </label>

      <div className="mt-3 flex flex-col gap-2">
        {
          availableWeekDays.map((day, i) => (
            <Checkbox.Root 
              key={day} 
              className='flex items-center gap-3 group'
              onCheckedChange={() => handleToggleWeekDays(i)}
            >
            <div 
              className='
                h-8 w-8
                rounded-lg 
                flex items-center justify-center 
                bg-zinc-900 border-2 
                border-zinc-800 
                group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'
            >
              <Checkbox.Indicator>
                <Check size={20}/>
              </Checkbox.Indicator>
            </div>
            <span className='leading-tight'> 
              { day }
            </span>
          </Checkbox.Root>
          ))
        }
      
      </div>

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