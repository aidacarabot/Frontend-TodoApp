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
      className='flex items-center justify-between w-[736px] h-[72px] gap-3 rounded-[8px] border border-[#333333] bg-[#262626] p-4 mb-2 opacity-100 cursor-pointer'
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
          <CircleCheck size={24} color='#F2F2F2' fill='#5E60CE' />
        ) : (
          <Circle size={24} color='#4EA8DE' />
        )}
      </button>
      <span
        className={`flex-1 ml-2 text-[#F2F2F2] cursor-default text-[14px] ${
          task.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {task.title}
      </span>
      <button
        className='ml-3 text-[#808080] hover:text-red-500 transition-colors cursor-pointer'
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
