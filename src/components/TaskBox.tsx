import { Task } from '@/utils/api/tasksApi'
import { Circle, CircleCheck, Trash2 } from 'lucide-react'

type TaskBoxProps = {
  task: Task
  onDelete: (id: number) => void
  onToggle: (id: number, completed: boolean) => void
  onEdit: () => void
}

export default function TaskBox({
  task,
  onDelete,
  onToggle,
  onEdit
}: TaskBoxProps) {
  return (
    <div
      className='flex items-center justify-between w-[736px] h-[72px] gap-3 rounded-[8px] border border-[color:var(--color-border)] bg-[color:var(--color-message)] p-4 mb-2 opacity-100 cursor-pointer'
      style={{ borderLeftColor: task.color, borderLeftWidth: 4 }}
      onClick={onEdit}
    >
      <button
        className='mr-3 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation()
          onToggle(task.id, !task.completed)
        }}
      >
        {task.completed ? (
          <CircleCheck size={24} color='var(--color-text-1)' fill='var(--color-secondary)' />
        ) : (
          <Circle size={24} color='var(--color-primary)' />
        )}
      </button>
      <span
        className={`flex-1 ml-2 text-[color:var(--color-text-1)] cursor-default text-[14px] ${
          task.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {task.title}
      </span>
      <button
        className='ml-3 text-[color:var(--color-text-3)] hover:text-red-500 transition-colors cursor-pointer'
        onClick={(e) => {
          e.stopPropagation()
          onDelete(task.id)
        }}
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
