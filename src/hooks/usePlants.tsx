import { PlantsContext } from 'contexts/Plants'
import { useContext } from 'react'

export function usePlants() {
  const { plants, setPlants, orderByName, filterByRangePrice } =
    useContext(PlantsContext)

  return { plants, setPlants, orderByName, filterByRangePrice }
}
