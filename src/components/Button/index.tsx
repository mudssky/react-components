import useHook, { Props } from './hooks'
import './style/index.scss'

export default function Button(props: Props) {
  const {
    backgroundColor,
    children,
    type = 'default',
    size = 'middle',
    ...restProps
  } = props
  const { globalPrefix } = useHook()
  return (
    <button
      {...restProps}
      className={[
        `${globalPrefix}-btn`,
        `${globalPrefix}-btn-type-${type}`,
        `${globalPrefix}-btn-size-${size}`,
      ].join(' ')}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </button>
  )
}
