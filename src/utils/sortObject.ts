import { PlantsType } from 'types/plants'

type SortByNameType = {
  items: any[]
  term: string
  order?: 'asc' | 'desc'
}

export function sortByName({ items, term, order = 'asc' }: SortByNameType) {
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
