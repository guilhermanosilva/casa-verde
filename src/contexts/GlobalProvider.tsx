import { EnvironmentProvider } from './Environment'
import { PlantsProvider } from './Plants'

type GlobalProvider = {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProvider) => {
  return (
    <EnvironmentProvider>
      <PlantsProvider>{children}</PlantsProvider>
    </EnvironmentProvider>
  )
}

