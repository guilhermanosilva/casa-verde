import { useEffect } from 'react'
import type { NextPage } from 'next'

import { Head } from 'components'
import { HomeLayout } from 'patterns'

import { useEnvironments, usePlants } from 'hooks'
import { HomeType } from 'types/home'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { light } from 'styles/Theme/light'

const Home: NextPage<HomeType> = ({ environments, plants }: HomeType) => {
  const { setEnvironments } = useEnvironments()
  const { setPlants } = usePlants()

  useEffect(() => {
    setEnvironments(environments)
    setPlants(plants)
  }, [environments, plants, setEnvironments, setPlants])

  return (
    <ThemeProvider theme={light}>
      <Head title='Casa Verde' />
      <HomeLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Home

export async function getStaticProps() {
  const environments = {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    userId: process.env.EMAILJS_USER_ID
  }

  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL || '')
  const plants = await data.json()

  return {
    props: { environments, plants }
  }
}
