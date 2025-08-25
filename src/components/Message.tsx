import { useEffect } from 'react'

type MessageProps = {
  text: string
  onClose: () => void
}

export default function Message({ text, onClose }: MessageProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-[#262626] text-[#F2F2F2] px-6 py-3 rounded-[8px] shadow-lg font-inter font-bold text-[14px]'>
        {text}
      </div>
    </div>
  )
}
