import { Dispatch, SetStateAction } from 'react'

export type PlantsType = {
  name: string
  preco: number
  img: string
  ordem: number
}

export type PlantsContextType = {
  plants: PlantsType[]
  setPlants: Dispatch<SetStateAction<PlantsType[]>>
  orderByName: (order: 'asc' | 'desc') => void
}

export type PlantsProviderType = {
  children: React.ReactNode
}
