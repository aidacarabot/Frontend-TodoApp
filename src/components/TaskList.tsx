'use client'
import TaskBox from '@/components/TaskBox'
import NoTasks from '@/components/NoTasks'
import { Task, deleteTask, updateTask } from '@/utils/api/tasksApi'
import { useState } from 'react'
import Message from '@/components/Message'
import Loader from '@/components/Loader'

type TaskListProps = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  onEditTask: (task: Task) => void
  setIsLoading?: (loading: boolean) => void
}

export default function TaskList({
  tasks,
  setTasks,
  onEditTask,
  setIsLoading
}: TaskListProps) {
  const [message, setMessage] = useState<string | null>(null)
  const [isLocalLoading, setIsLocalLoading] = useState(false)

  const handleDelete = async (id: number) => {
    setIsLocalLoading(true)
    if (setIsLoading) setIsLoading(true)
    try {
      await deleteTask(id)
      setTasks(tasks.filter((t) => t.id !== id))
      setMessage('Task deleted!')
    } finally {
      setIsLocalLoading(false)
      if (setIsLoading) setIsLoading(false)
    }
  }

  const handleToggle = async (id: number, completed: boolean) => {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    setIsLocalLoading(true)
    if (setIsLoading) setIsLoading(true)
    try {
      await updateTask(id, { title: task.title, color: task.color, completed })
      setTasks(tasks.map((t) => (t.id === id ? { ...t, completed } : t)))
    } finally {
      setIsLocalLoading(false)
      if (setIsLoading) setIsLoading(false)
    }
  }

  return (
    <>
      {message && <Message text={message} onClose={() => setMessage(null)} />}
      <div className='list-container'>
        <div className='task-list-number'>
          <p className='p-tasks'>
            Tasks <span className='span-task-number'>{tasks.length}</span>
          </p>
          <p className='p-completed'>
            Completed{' '}
            <span className='span-task-completed'>
              {tasks.filter((t) => t.completed).length} of {tasks.length}
            </span>
          </p>
        </div>
        <div className='task-container'>
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
      {isLocalLoading && <Loader />}
    </>
  )
}
