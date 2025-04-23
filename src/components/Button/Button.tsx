import './button.css'
import { cn } from '@mudssky/jsutils'
interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'demo-button--primary' : 'demo-button--secondary'
  return (
    <button
      type="button"
      className={cn('demo-button', `demo-button--${size}`, mode)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
