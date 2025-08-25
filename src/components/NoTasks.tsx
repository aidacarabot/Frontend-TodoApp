import { NotepadText } from 'lucide-react'

export default function NoTasks() {
  return (
    <div
      className='no-tasks-div flex flex-col items-center justify-center
        w-[736px] h-[266px] gap-4 opacity-100 pt-[64px] pr-[24px] pb-[64px] pl-[24px] bg-[#1a1a1a] mt-[10px]'
    >
      <NotepadText size={56} color='#3d3d3d' />
      <p className='font-inter font-bold text-[16px] leading-[140%] text-center text-[#808080]'>
        You do not have any tasks registered yet.
      </p>
      <p className='font-inter font-normal text-[16px] leading-[140%] text-center text-[#808080]'>
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}
