import { createContext, Dispatch, SetStateAction, useState } from 'react'

import {
  EnvironmentProviderType,
  EnvironmentsContextType,
  EnvironmentsType
} from 'types/environments'

export const EnvironmentContext = createContext({} as EnvironmentsContextType)

export const EnvironmentProvider = ({ children }: EnvironmentProviderType) => {
  const [environments, setEnvironments] = useState<EnvironmentsType>(
    {} as EnvironmentsType
  )

  return (
    <EnvironmentContext.Provider value={{ environments, setEnvironments }}>
      {children}
    </EnvironmentContext.Provider>
  )
}
