import React from 'react'
import { AppProps } from 'next/app'

import 'bootstrap/scss/bootstrap.scss'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
