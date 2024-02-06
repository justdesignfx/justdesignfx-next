import "../styles/global.scss"

import PageTransition, { useAsPathWithoutHash } from "@madeinhaus/nextjs-page-transition"
import "@madeinhaus/nextjs-page-transition/dist/index.css"

import { SmoothLayout } from "@/layouts/smooth"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const key = useAsPathWithoutHash()

  return (
    <SmoothLayout>
      <PageTransition>
        <Component {...pageProps} key={key} />
      </PageTransition>
    </SmoothLayout>
  )
}
