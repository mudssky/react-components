import React, { createContext } from 'react'

interface Props {
  globalPrefix?: string
  children?: React.ReactNode
}

export const configContext = createContext({
  globalPrefix: 'mud',
})

export default function ConfigContext(props: Props) {
  const { children, globalPrefix = 'mud' } = props
  return (
    <configContext.Provider value={{ globalPrefix: globalPrefix }}>
      {children}
    </configContext.Provider>
  )
}
