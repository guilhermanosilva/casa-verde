import { Select } from 'components'
import { usePlants } from 'hooks'
import { ChangeEvent } from 'react'

export function FilterByRangePrice() {
  const { filterByRangePrice } = usePlants()

  const handleChangeRangeValueSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const [minValue, maxValue] = e.target.value.split('-')

    filterByRangePrice({
      maxPrice: Number(maxValue),
      minPrice: Number(minValue)
    })
  }

  return (
    <Select onChange={handleChangeRangeValueSelect} defaultValue='default'>
      <option value='default' disabled>
        Preço
      </option>
      <option value='0-20'>até R$ 20:00</option>
      <option value='20-40'>R$ 20:00 a R$ 40:00</option>
      <option value='40-60'>R$ 40:00 a R$ 60:00</option>
      <option value='60-80'>R$ 60:00 a R$ 80:00</option>
      <option value='80-100'>R$ 80:00 a R$ 100:00</option>
    </Select>
  )
}
