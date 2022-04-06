import { useEffect } from 'react'
import type { NextPage } from 'next'

import { Head } from 'components'
import { Layout } from 'patterns'

import { useEnvironments } from '../hooks/useEnvironments'
import { Environments } from '../contexts/Environment'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { light } from 'styles/Theme/light'

type HomeType = {
  environments: Environments
}

const Home: NextPage<HomeType> = ({ environments }: HomeType) => {
  const { setEnvironments } = useEnvironments()

  useEffect(() => {
    setEnvironments(environments)
  }, [environments, setEnvironments])

  return (
    <ThemeProvider theme={light}>
      <Head title='Casa Verde' />
      <Layout />
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
  return {
    props: { environments }
  }
}
