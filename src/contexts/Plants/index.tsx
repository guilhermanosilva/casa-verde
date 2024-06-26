import { createContext, useCallback, useState } from 'react'
import { filterPlantsByRangePrice } from 'utils/filterPlantsByRangePrice'
import { sortByName } from 'utils/sortObject'
import {
  FilterByRangePrice,
  PlantsContextType,
  PlantsProviderType,
  PlantsType
} from 'types/plants'

export const PlantsContext = createContext({} as PlantsContextType)

export const PlantsProvider = ({ children }: PlantsProviderType) => {
  const [plants, setPlants] = useState<PlantsType[]>([])

  const getPlants = useCallback(async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL || '')
    const res = await data.json()
    return res
  }, [])

  const orderByName = (order: 'asc' | 'desc') => {
    const plantsSorted = sortByName({
      items: plants,
      term: 'name',
      order
    })
    setPlants([...plantsSorted])
  }

  const filterByRangePrice = async ({
    maxPrice,
    minPrice
  }: FilterByRangePrice) => {
    const plants = await getPlants()

    const filteredByPricePlants = filterPlantsByRangePrice({
      maxPrice,
      minPrice,
      plants
    })

    if (filterByRangePrice.length > 0) setPlants(filteredByPricePlants)
  }

  return (
    <PlantsContext.Provider
      value={{ plants, setPlants, orderByName, filterByRangePrice }}
    >
      {children}
    </PlantsContext.Provider>
  )
}
