'use client'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Title from '../components/Title'
import TaskList from '@/components/TaskList'
import TaskForm from '@/components/TaskForm'
import Button from '@/components/Button'
import { CirclePlus } from 'lucide-react'
import { getTasks, createTask, updateTask, Task } from '@/utils/api/tasksApi'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [editTask, setEditTask] = useState<Task | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getTasks()
      .then(setTasks)
      .finally(() => setIsLoading(false))
  }, [])

  const handleCreateTask = async (data: { title: string; color: string }) => {
    setIsLoading(true)
    try {
      await createTask({
        title: data.title,
        color: data.color,
        completed: false
      })
      const updatedTasks = await getTasks()
      setTasks(updatedTasks)
      setShowForm(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditTask = async (data: { title: string; color: string }) => {
    if (!editTask) return
    setIsLoading(true)
    try {
      await updateTask(editTask.id, {
        title: data.title,
        color: data.color,
        completed: editTask.completed
      })
      const updatedTasks = await getTasks()
      setTasks(updatedTasks)
      setEditTask(null)
      setShowForm(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditClick = (task: Task) => {
    setEditTask(task)
    setShowForm(true)
  }

  return (
    <main className='main'>
      <Title />
      <div className='div-main-container'>
        <div className='div-s-main-container'>
          {!showForm ? (
            <>
              <Button
                className='btn-create'
                onClick={() => {
                  setEditTask(null)
                  setShowForm(true)
                }}
              >
                Create Task <CirclePlus size={16} />
              </Button>
              <TaskList
                tasks={tasks}
                setTasks={setTasks}
                onEditTask={handleEditClick}
                setIsLoading={setIsLoading}
              />
            </>
          ) : (
            <TaskForm
              onGoBack={() => {
                setEditTask(null)
                setShowForm(false)
              }}
              onSubmit={editTask ? handleEditTask : handleCreateTask}
              initialTask={
                editTask
                  ? { title: editTask.title, color: editTask.color }
                  : undefined
              }
              isEdit={!!editTask}
            />
          )}
        </div>
      </div>
      <Footer />
      {isLoading && <Loader />}
    </main>
  )
}
