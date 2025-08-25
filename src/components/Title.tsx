import { Rocket } from 'lucide-react'

export default function Title() {
  return (
    <header
      className='w-full h-[200px] flex items-center justify-center bg-[color:var(--color-header)]'
    >
      <h1
        className='flex items-center gap-x-2 text-[40px] font-black leading-[100%] tracking-normal mb-4 cursor-default'
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Rocket size={32} color='var(--color-primary)' />
        <span className='text-[color:var(--color-primary)]'>Todo</span>
        <span className='text-[color:var(--color-secondary)]'> App</span>
      </h1>
    </header>
  )
}
