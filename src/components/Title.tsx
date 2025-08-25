import { Rocket } from 'lucide-react'

export default function Title() {
  return (
    <header
      className='w-full h-[200px] flex items-center justify-center'
      style={{ background: '#0D0D0D' }}
    >
      <h1
        className='flex items-center gap-x-2 text-[40px] font-black leading-[100%] tracking-normal mb-4 cursor-default'
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Rocket size={32} color='#4EA8DE' />
        <span style={{ color: '#4EA8DE' }}>Todo</span>
        <span style={{ color: '#5E60CE' }}> App</span>
      </h1>
    </header>
  )
}
