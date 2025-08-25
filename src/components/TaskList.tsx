'use client'
import TaskBox from '@/components/TaskBox'
import NoTasks from '@/components/NoTasks'
import { Task, deleteTask, updateTask } from '@/utils/api/tasksApi'
import { useState } from 'react'
import Message from '@/components/Message'

type TaskListProps = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  onEditTask: (task: Task) => void
}

export default function TaskList({
  tasks,
  setTasks,
  onEditTask
}: TaskListProps) {
  const [message, setMessage] = useState<string | null>(null)

  const handleDelete = async (id: number) => {
    await deleteTask(id)
    setTasks(tasks.filter((t) => t.id !== id))
    setMessage('Task deleted!')
  }

  const handleToggle = async (id: number, completed: boolean) => {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    await updateTask(id, { title: task.title, color: task.color, completed })
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed } : t)))
  }

  return (
    <>
      {message && <Message text={message} onClose={() => setMessage(null)} />}
      <div className='list-container w-[736px] flex flex-col items-center bg-[color:var(--color-background)]'>
        <div className='task-number flex flex-row w-full justify-between mt-[50px] mb-[20px] p-[5px]'>
          <p className='text-[14px] font-bold text-[color:var(--color-primary)] flex items-center gap-[10px] cursor-default'>
            Tasks{' '}
            <span className='task-count inline-flex items-center justify-center rounded-full bg-[color:var(--color-message)] text-[color:var(--color-text-5)] text-xs w-[24px] h-[19px] px-2 py-[2px] opacity-100 cursor-default'>
              {tasks.length}
            </span>
          </p>
          <p className='text-[14px] font-bold leading-[140%] text-[color:var(--color-secondary)] flex items-center gap-[10px] cursor-default'>
            Completed{' '}
            <span className='completed-count inline-flex items-center justify-center rounded-full bg-[color:var(--color-message)] text-[color:var(--color-text-5)] text-xs w-[52px] h-[19px] px-2 py-[2px] opacity-100 cursor-default'>
              {tasks.filter((t) => t.completed).length} of {tasks.length}
            </span>
          </p>
        </div>
        <div className='tasks-container w-full border-t border-[color:var(--color-icon)] border-t-[1px] rounded-t-[8px] flex flex-col gap-[12px] max-h-[350px] overflow-y-auto'>
          {tasks.length === 0 ? (
            <NoTasks />
          ) : (
            tasks.map((task) => (
              <TaskBox
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onEdit={() => onEditTask(task)}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
