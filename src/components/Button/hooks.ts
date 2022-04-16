import { useContext } from 'react'
import { configContext } from '../config-provider'

export interface Props {
  /**
   * 背景色
   */
  backgroundColor?: string
  /**
   * 内容
   */
  children?: React.ReactNode
  /**
   * 大小
   */
  size?: 'small' | 'middle' | 'large'
  /**
   * 类型
   */
  type?: 'primary' | 'default' | 'danger'
  /**
   * 点击事件
   */
  onClick?: () => void
}

export default function useHook() {
  const { globalPrefix } = useContext(configContext)
  return { globalPrefix }
}
