const BASE_URL = 'http://localhost:3001' //change here to localhost if the server is not working correctly 

export type Task = {
  id: number
  title: string
  color: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Couldnt obtain tasks')
  return res.json()
}

export async function createTask(
  taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData)
  })
  if (!res.ok) throw new Error('Couldnt create task')
  return res.json()
}

export async function updateTask(
  id: number,
  taskData: Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData)
  })
  if (!res.ok) throw new Error('Couldnt update task')
  return res.json()
}

export async function deleteTask(id: number): Promise<{ message: string }> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Couldnt delete task')
  return res.json()
}
