import { renderHook, act } from '@testing-library/react'
import { useLock } from '../../src/hooks/loading'
import { describe, expect, it, vi } from 'vitest'

describe('useLock', () => {
  it('should handle normal async function', async () => {
    const mockFn = vi.fn().mockResolvedValue('success')
    const { result } = renderHook(() => useLock(mockFn))

    expect(result.current[0]).toBe(false)

    await act(async () => {
      await result.current[1]('arg1', 'arg2')
    })

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2')
    expect(result.current[0]).toBe(false)
  })

  it('should prevent concurrent calls', async () => {
    const mockFn = vi.fn(
      () => new Promise((resolve) => setTimeout(resolve, 100)),
    )
    const { result } = renderHook(() => useLock(mockFn))

    await act(async () => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(true)

    await act(async () => {
      result.current[1]()
    })

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should handle errors', async () => {
    const error = new Error('test error')
    const mockFn = vi.fn().mockRejectedValue(error)
    const onError = vi.fn()
    const { result } = renderHook(() => useLock(mockFn, onError))

    await act(async () => {
      await result.current[1]()
    })

    expect(onError).toHaveBeenCalledWith(error)
    expect(result.current[0]).toBe(false)
  })
})
