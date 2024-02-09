import "../styles/global.scss"

import PageTransition, { useAsPathWithoutHash } from "@madeinhaus/nextjs-page-transition"
import { QueryClient, QueryClientProvider } from "react-query"
import "@madeinhaus/nextjs-page-transition/dist/index.css"

import { SmoothLayout } from "@/layouts/smooth"

import type { AppProps } from "next/app"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const key = useAsPathWithoutHash()

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothLayout>
        <PageTransition>
          <Component {...pageProps} key={key} />
        </PageTransition>
      </SmoothLayout>
    </QueryClientProvider>
  )
}
