import { Rocket } from 'lucide-react'

export default function Title() {
  return (
    <header className='header'>
      <h1 className='h1'>
        <Rocket size={32} color='var(--color-primary)' />
        <span className='text-[color:var(--color-primary)]'>Todo</span>
        <span className='text-[color:var(--color-secondary)]'> App</span>
      </h1>
    </header>
  )
}
