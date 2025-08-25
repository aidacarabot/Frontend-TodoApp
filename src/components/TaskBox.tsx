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
      className='task-item-div'
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
        className='btn-delete'
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
