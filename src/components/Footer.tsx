export default function Footer() {
  return (
    <footer className='footer-div'>
      <p className='text-[color:var(--color-text-2)] font-inter font-bold text-[14px] leading-[140%] text-center'>
        Made by Aida Carabot
      </p>
      <p className='text-[color:var(--color-text-2)] font-inter font-normal text-[14px] leading-[140%] text-center mt-1'>
        More projects in:{' '}
        <a
          href='https://aidacarabot.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-[color:var(--color-secondary)]'
        >
          Portfolio Website
        </a>
      </p>
    </footer>
  )
}
