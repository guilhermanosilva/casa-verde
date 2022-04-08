import { PlantsType } from 'types/plants'

type FilterPlantsByRangePrice = {
  plants: PlantsType[]
  minPrice: number
  maxPrice: number
}

export function filterPlantsByRangePrice({
  plants,
  minPrice,
  maxPrice
}: FilterPlantsByRangePrice) {
  return plants.filter(
    (plant) => plant.preco >= minPrice && plant.preco <= maxPrice
  )
}

