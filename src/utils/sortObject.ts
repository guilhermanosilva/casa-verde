import { PlantsType } from 'types/plants'

type SortObjectType = {
  items: any[]
  term: string
  order?: 'asc' | 'desc'
}

export function sortObject({ items, term, order = 'asc' }: SortObjectType) {
  return items.sort((x, y) => {
    if (order === 'desc') {
      if (x[term] > y[term]) return -1
      if (x[term] < y[term]) return 1
      return 0
    } else {
      if (x[term] < y[term]) return -1
      if (x[term] > y[term]) return 1
      return 0
    }
  })
}

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
