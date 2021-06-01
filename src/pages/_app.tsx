import React from 'react'
import { AppProps } from 'next/app'

import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
