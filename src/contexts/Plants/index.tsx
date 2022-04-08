import { createContext, useState } from 'react'
import { PlantsContextType, PlantsProviderType, PlantsType } from 'types/plants'
import { sortObject } from 'utils/sortObject'

export const PlantsContext = createContext({} as PlantsContextType)

export const PlantsProvider = ({ children }: PlantsProviderType) => {
  const [plants, setPlants] = useState<PlantsType[]>([])

  const orderByName = (order: 'asc' | 'desc') => {
    const plantsSorted = sortObject({
      items: plants,
      term: 'name',
      desc: order
    })
    setPlants([...plantsSorted])
  }

  return (
    <PlantsContext.Provider value={{ plants, setPlants, orderByName }}>
      {children}
    </PlantsContext.Provider>
  )
}
