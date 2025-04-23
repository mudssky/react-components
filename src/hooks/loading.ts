import type { PromiseFunction } from '@mudssky/jsutils'
import { useState, useCallback, useRef } from 'react'

export function useLock<T extends unknown[]>(
  asyncFn: PromiseFunction<T>,
  onError?: (error: unknown) => void,
): [boolean, (...args: T) => Promise<void>] {
  const [isLoading, setIsLoading] = useState(false)
  const asyncFnRef = useRef<PromiseFunction<T>>(asyncFn)

  const run = useCallback(
    async (...args: T) => {
      if (isLoading) return
      setIsLoading(true)
      try {
        await asyncFnRef.current(...args)
      } catch (error) {
        onError?.(error)
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading, onError],
  )

  return [isLoading, run]
}
