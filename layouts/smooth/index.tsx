import { ReactNode } from "react"

import useSmoothScroll from "@/hooks/use-smooth-scroll"

type Props = {
  children: ReactNode
}

const SmoothLayout = ({ children }: Props) => {
  useSmoothScroll()

  return <>{children}</>
}

export { SmoothLayout }
