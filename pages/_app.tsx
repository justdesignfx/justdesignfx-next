import "../styles/global.scss"

import { SmoothLayout } from "@/layouts/smooth"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothLayout>
      <Component {...pageProps} />
    </SmoothLayout>
  )
}
