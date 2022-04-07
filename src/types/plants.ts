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
}

export type PlantsProviderType = {
  children: React.ReactNode
}
