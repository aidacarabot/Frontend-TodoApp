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
      className='formTask'
      onSubmit={handleSubmit}
    >
      <Button
        type='button'
        className='back-button'
        onClick={onGoBack}
      >
        <ArrowLeft />
      </Button>
      <label className='label-form'>
        <span className='span-form'>
          Title
        </span>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Ex. Brush your teeth'
          className='input-form'
          required
        />
      </label>
      <label className='label-form'>
        <span className='span-form'>
          Color
        </span>
        <div className='color-form-div'>
          {COLORS.map((c) => (
            <button
              key={c.color}
              type='button'
              className={`color-form
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
        className='submit-form-btn'
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
