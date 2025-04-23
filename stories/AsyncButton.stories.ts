import type { Meta, StoryObj } from '@storybook/react'
import { AsyncButton } from '@mudssky/react-components'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
const meta: Meta<typeof AsyncButton> = {
  title: 'Components/AsyncButton',
  component: AsyncButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onError: { action: 'error' },
  },
}

export default meta

type Story = StoryObj<typeof AsyncButton>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    onClick: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
  },
}

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    // loading状态点击事件不触发
    expect(args.onClick).toHaveBeenCalledTimes(0)
  },
}

export const WithError: Story = {
  args: {
    ...Primary.args,
    onClick: async () => {
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Failed')), 1000),
      )
    },
    onError: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    // 等待loading结束
    await waitFor(() => expect(button).not.toHaveClass('ant-btn-loading'))
    expect(args.onError).toHaveBeenCalled()
  },
}
