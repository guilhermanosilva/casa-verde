import { Select } from 'components'
import { usePlants } from 'hooks'

export function OrderByName() {
  const { orderByName } = usePlants()

  return (
    <Select
      onChange={(e) => orderByName(e.target.value === 'asc' ? 'asc' : 'desc')}
      defaultValue='default'
    >
      <option value='default' disabled>
        Nome
      </option>
      <option value='asc'>A - Z</option>
      <option value='desc'>Z - A</option>
    </Select>
  )
}
