import { NotepadText } from 'lucide-react'

export default function NoTasks() {
  return (
    <div
      className='noTasks-div'
    >
      <NotepadText size={56} color='var(--color-icon)' />
      <p className='noTasks-p font-bold '>
        You do not have any tasks registered yet.
      </p>
      <p className='noTasks-p font-normal '>
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}
