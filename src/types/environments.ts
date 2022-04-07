import { Dispatch, SetStateAction } from 'react'

export type EnvironmentsType = {
  serviceId: string
  templateId: string
  userId: string
}

export type EnvironmentsContextType = {
  environments: EnvironmentsType
  setEnvironments: Dispatch<SetStateAction<EnvironmentsType>>
}

export type EnvironmentProviderType = {
  children: React.ReactNode
}
