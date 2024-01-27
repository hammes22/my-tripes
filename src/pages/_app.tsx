import { AppProps } from 'next/app'

import GlobalStyles from '@/styles/global'
import StyledComponentsRegistry from '@/lib/registry'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </>
  )
}

export default App
