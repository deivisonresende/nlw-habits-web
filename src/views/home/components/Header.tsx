import { Plus } from 'phosphor-react'
import Logo from '../../../assets/logo.svg'

export function Header(){
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={Logo} alt="Habits" />
        <button
          type='button'
          className='border border-violet-300 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-500 hover:text-violet-400'
        >
          <Plus size={20} className='text-violet-300'/>
          Novo hábito
        </button>
      </div>
  )
}