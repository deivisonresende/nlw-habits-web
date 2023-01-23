import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react'
import { api } from "../../../lib/axios";
import clsx from "clsx";

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
  const [submitted, setSubmitted] = useState(false)
  const [weekDays, setWeekDays] = useState<Number[]>([])

  const handleSubmitNewHabit = async (event: FormEvent) => {
    event.preventDefault()
    if(!title.length || !weekDays.length){
      return
    }

    setSubmitted(true)
    await api.post('habits', {
      title,
      weekDays
    })

    setSubmitted(false)
    setTitle('')
    setWeekDays([])
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
        className={
          clsx(
            'bg-zinc-800 rounded-lg placeholder:text-zinc-400 mt-3 p-4 outline-none',
            {
              'border border-red-500': !title.length && submitted
            }
          )
        }
        onChange={event => setTitle(event.target.value)}
        value={title}
        autoFocus
      />

      <label 
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrência ?
      </label>
      
      {
        submitted && !weekDays.length 
        ? <span className="font-thin text-sm text-red-500 mt-2"> Selecione pelo menos um dia da semana </span> 
        : null
      }

      <div className="mt-3 flex flex-col gap-2">
        {
          availableWeekDays.map((day, i) => (
            <Checkbox.Root 
              key={day}
              checked={weekDays.includes(i)}
              className='flex items-center gap-3 group'
              onCheckedChange={() => handleToggleWeekDays(i)}
            >
            <div 
              className= {
                clsx(
                  `h-8 w-8
                  rounded-lg 
                  flex items-center justify-center 
                  bg-zinc-900 border-2 
                  border-zinc-800 
                  group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500`,
                  {
                    'border border-red-600': !weekDays.length && submitted
                  }
                )
              }
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
        className={
          clsx(
            "mt-6 rounded-lg flex items-center gap-3 justify-center font-semibold bg-green-600 p-4 hover:bg-green-500",
            {
              'opacity-50 hover:bg-green-600 cursor-no-drop': !weekDays.length || !title.length
            }
          )
        }
      >
        <Check size={20} weight='bold'/>
        Confirmar
      </button>
    </form>
  )
}