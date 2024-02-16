import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import { useEffect } from "react"

const ScrollToTop = () => {
  const { phase } = usePageTransitionState()

  useEffect(() => {
    console.log(phase)
  }, [phase])

  return null
}

export { ScrollToTop }
