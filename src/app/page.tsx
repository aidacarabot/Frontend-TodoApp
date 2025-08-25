'use client'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
    getTasks().then(setTasks)
  }, [])

  const handleCreateTask = async (data: { title: string; color: string }) => {
    await createTask({ title: data.title, color: data.color, completed: false })
    const updatedTasks = await getTasks()
    setTasks(updatedTasks)
    setShowForm(false)
  }

  const handleEditTask = async (data: { title: string; color: string }) => {
    if (!editTask) return
    await updateTask(editTask.id, {
      title: data.title,
      color: data.color,
      completed: editTask.completed
    })
    const updatedTasks = await getTasks()
    setTasks(updatedTasks)
    setEditTask(null)
    setShowForm(false)
  }

  const handleEditClick = (task: Task) => {
    setEditTask(task)
    setShowForm(true)
  }

  return (
    <main className='min-h-screen flex flex-col bg-[#1a1a1a]'>
      <Title />
      <div className='flex-1 flex flex-col items-center'>
        <div className='main-container w-[736px] bg-black flex flex-col items-center'>
          {!showForm && (
            <>
              <Button
                className='w-full flex items-center justify-center gap-2 font-inter font-bold text-[14px] leading-[140%] text-[#F2F2F2]'
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
              />
            </>
          )}
          {showForm && (
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
    </main>
  )
}
