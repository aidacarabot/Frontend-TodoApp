import { useEffect } from 'react'

type MessageProps = {
  text: string
  onClose: () => void
}

export default function Message({ text, onClose }: MessageProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className='message-div'>
      <div className='message-content'>
        {text}
      </div>
    </div>
  )
}
