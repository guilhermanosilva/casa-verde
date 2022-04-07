import { PlantsContext } from 'contexts/Plants'
import { useContext } from 'react'

export function usePlants() {
  const { plants, setPlants } = useContext(PlantsContext)

  return { plants, setPlants }
}

