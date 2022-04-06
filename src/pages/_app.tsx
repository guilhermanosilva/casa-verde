import type { AppProps } from 'next/app'
import { EnvironmentProvider } from '../contexts/Environment'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnvironmentProvider>
      <Component {...pageProps} />
    </EnvironmentProvider>
  )
}

export default MyApp
