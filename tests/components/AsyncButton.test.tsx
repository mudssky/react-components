import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import { AsyncButton } from '../../src/components/AsyncButton'

afterEach(() => {
  cleanup()
})
test('AsyncButton正常点击行为', async () => {
  const onClick = vi.fn().mockResolvedValue(undefined)
  render(<AsyncButton onClick={onClick}>Test Button</AsyncButton>)

  const button = screen.getByRole('button', { name: 'Test Button' })
  fireEvent.click(button)

  await waitFor(() => expect(onClick).toHaveBeenCalled())
})

test('AsyncButton加载状态', async () => {
  let resolveFn: () => void = () => {}
  const promise = new Promise<void>((resolve) => {
    resolveFn = resolve
  })

  const onClick = vi.fn().mockImplementation(() => promise)
  const { rerender } = render(
    <AsyncButton onClick={onClick}>Test Button</AsyncButton>,
  )

  const button = screen.getByRole('button', { name: 'Test Button' })
  fireEvent.click(button)

  expect(button).toHaveClass('ant-btn-loading')

  resolveFn?.()
  await waitFor(() => expect(button).not.toHaveClass('ant-btn-loading'))
})

test('AsyncButton错误处理', async () => {
  const error = new Error('Test Error')
  const onClick = vi.fn().mockRejectedValue(error)
  const onError = vi.fn()

  render(
    <AsyncButton onClick={onClick} onError={onError}>
      Test Button
    </AsyncButton>,
  )

  const button = screen.getByRole('button', { name: 'Test Button' })
  fireEvent.click(button)

  await waitFor(() => expect(onError).toHaveBeenCalledWith(error))
})
