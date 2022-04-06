import { useContext } from 'react'
import { EnvironmentContext } from '../contexts/Environment'

export function useEnvironments() {
  const { environments, setEnvironments } = useContext(EnvironmentContext)

  return { environments, setEnvironments }
}

