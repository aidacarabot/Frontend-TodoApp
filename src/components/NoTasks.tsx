import { NotepadText } from 'lucide-react'

export default function NoTasks() {
  return (
    <div
      className='no-tasks-div flex flex-col items-center justify-center
        w-[736px] h-[266px] gap-4 opacity-100 pt-[64px] pr-[24px] pb-[64px] pl-[24px] bg-[color:var(--color-background)] mt-[10px]'
    >
      <NotepadText size={56} color='var(--color-icon)' />
      <p className='font-inter font-bold text-[16px] leading-[140%] text-center text-[color:var(--color-text-2)]'>
        You do not have any tasks registered yet.
      </p>
      <p className='font-inter font-normal text-[16px] leading-[140%] text-center text-[color:var(--color-text-2)]'>
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}
