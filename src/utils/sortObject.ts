type SortObjectType = {
  items: any[]
  term: string
  desc?: 'asc' | 'desc'
}

export function sortObject({ items, term, desc = 'asc' }: SortObjectType) {
  return items.sort((x, y) => {
    if (desc === 'asc') {
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
