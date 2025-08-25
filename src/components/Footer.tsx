export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center justify-center py-6 bg-[#0d0d0d] mt-8'>
      <p className='text-[#6d6d6d] font-inter font-bold text-[14px] leading-[140%] text-center'>
        Made by Aida Carabot
      </p>
      <p className='text-[#6d6d6d] font-inter font-normal text-[14px] leading-[140%] text-center mt-1'>
        More projects in:{' '}
        <a
          href='https://aidacarabot.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-[#5E60CE]'
        >
          Portfolio Website
        </a>
      </p>
    </footer>
  )
}
