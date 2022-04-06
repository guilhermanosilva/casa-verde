import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type Environments = {
  serviceId: string
  templateId: string
  userId: string
}

type EnvironmentsType = {
  environments: Environments
  setEnvironments: Dispatch<SetStateAction<Environments>>
}

type EnvironmentProvider = {
  children: React.ReactNode
}

export const EnvironmentContext = createContext({} as EnvironmentsType)

export const EnvironmentProvider = ({ children }: EnvironmentProvider) => {
  const [environments, setEnvironments] = useState<Environments>(
    {} as Environments
  )

  return (
    <EnvironmentContext.Provider value={{ environments, setEnvironments }}>
      {children}
    </EnvironmentContext.Provider>
  )
}
