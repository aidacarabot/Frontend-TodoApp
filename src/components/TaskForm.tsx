import { useState } from 'react'
import { ArrowLeft, Check, CirclePlus } from 'lucide-react'
import Button from '@/components/Button'


const COLORS = [
  { name: 'Red', color: '#FF3B30' },
  { name: 'Orange', color: '#FF9500' },
  { name: 'Yellow', color: '#FFCC00' },
  { name: 'Green', color: '#34C759' },
  { name: 'Blue', color: '#007AFF' },
  { name: 'Purple', color: '#5856D6' },
  { name: 'Violet', color: '#AF52DE' },
  { name: 'Pink', color: '#FF2D55' },
  { name: 'Brown', color: '#A2845E' }
]

type TaskFormProps = {
  onGoBack?: () => void
  onSubmit: (data: { title: string; color: string }) => void
  initialTask?: { title: string; color: string }
  isEdit?: boolean
}

export default function TaskForm({
  onGoBack,
  onSubmit,
  initialTask,
  isEdit
}: TaskFormProps) {
  const [selectedColor, setSelectedColor] = useState(
    initialTask?.color || COLORS[0].color
  )
  const [title, setTitle] = useState(initialTask?.title || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit({ title, color: selectedColor })
  }

  return (
    <form
      className='flex flex-col gap-6 w-[736px] mx-auto bg-[color:var(--color-background)] rounded'
      onSubmit={handleSubmit}
    >
      <Button
        type='button'
        className='w-fit mb-2 bg-transparent hover:bg-transparent shadow-none p-0'
        onClick={onGoBack}
      >
        <ArrowLeft />
      </Button>
      <label className='flex flex-col gap-2'>
        <span className='font-inter font-bold text-[14px] leading-[100%] text-[color:var(--color-primary)] mb-[10px]'>
          Title
        </span>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Ex. Brush your teeth'
          className='w-[736px] h-[52px] rounded-[8px] border border-[color:var(--color-border)] p-4 bg-[color:var(--color-message)] text-[color:var(--color-text-4)] font-inter font-normal text-[14px] leading-[140%] shadow-[0px_2px_8px_0px_#0000000F] focus:outline-none placeholder-[color:var(--color-text-4] placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-[140%]'
          required
        />
      </label>
      <label className='flex flex-col gap-2 mb-[20px]'>
        <span className='font-inter font-bold text-[14px] leading-[100%] text-[color:var(--color-primary)] mb-[10px]'>
          Color
        </span>
        <div className='flex items-center w-[596px] h-[52px] gap-4'>
          {COLORS.map((c) => (
            <button
              key={c.color}
              type='button'
              className={`w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center transition-all
                ${
                  selectedColor === c.color
                    ? 'border-white scale-110'
                    : 'border-transparent'
                }
                cursor-pointer
                mb-[2px]
              `}
              style={{ backgroundColor: c.color }}
              onClick={() => setSelectedColor(c.color)}
            />
          ))}
        </div>
      </label>
      <Button
        type='submit'
        className='w-full flex items-center justify-center gap-2 font-inter font-bold text-[14px] leading-[140%] text-[color:var(--color-text-1)] mb-[50px]'
      >
        {isEdit ? (
          <>
            Save <Check size={16} />
          </>
        ) : (
          <>
            Add Task <CirclePlus size={16} />
          </>
        )}
      </Button>
    </form>
  )
}
