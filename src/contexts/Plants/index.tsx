import { createContext, useState } from 'react'
import { PlantsContextType, PlantsProviderType, PlantsType } from 'types/plants'

export const PlantsContext = createContext({} as PlantsContextType)

export const PlantsProvider = ({ children }: PlantsProviderType) => {
  const [plants, setPlants] = useState<PlantsType[]>([])

  return (
    <PlantsContext.Provider value={{ plants, setPlants }}>
      {children}
    </PlantsContext.Provider>
  )
}
