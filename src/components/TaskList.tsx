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
      <div className='list-container'>
        <div className='task-list-number'>
          <p className='p-tasks'>
            Tasks{' '}
            <span className='span-task-number'>
              {tasks.length}
            </span>
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
    </>
  )
}
