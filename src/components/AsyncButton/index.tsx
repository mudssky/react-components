import { Button, type ButtonProps } from 'antd'
import { useLock } from '@hooks'

interface AsyncButtonProps extends ButtonProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onClick?: (...args: any[]) => Promise<void>
  onError?: (error: unknown) => void
}

export function AsyncButton({
  onClick,
  onError,
  children,
  ...props
}: AsyncButtonProps) {
  const [isLoading, run] = useLock(onClick || (async () => {}), onError)

  return (
    <Button loading={isLoading} onClick={run} {...props}>
      {children}
    </Button>
  )
}
