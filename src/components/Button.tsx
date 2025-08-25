import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[736px] h-[52px] flex items-center justify-center gap-2
        rounded-[8px]  opacity-100
        font-semibold transition-colors
        bg-[color:var(--color-button)] text-white hover:bg-[color:var(--color-button-hover)] disabled:opacity-50 hover:cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  )
}
