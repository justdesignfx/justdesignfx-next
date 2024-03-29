import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"

import { SmoothLayout } from "@/layouts/smooth"

import type { AppProps } from "next/app"
import { Modal } from "@/components/utility/modal"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothLayout>
        <Component {...pageProps} />
        <Modal />
      </SmoothLayout>
    </QueryClientProvider>
  )
}
