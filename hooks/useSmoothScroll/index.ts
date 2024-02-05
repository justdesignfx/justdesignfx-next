import { useLenisStore } from "@/lib/store/lenis"
import Lenis from "@studio-freight/lenis"
import { useRef } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const useSmoothScroll = () => {
  // const [lenis, setLenis] = useState<Lenis | null>()
  const { lenis, setLenis } = useLenisStore()
  const lenisStore = useLenisStore()
  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame>>()

  useIsomorphicLayoutEffect(() => {
    const animate = (time: DOMHighResTimeStamp) => {
      lenis?.raf(time)
      // lenis?.on("scroll", () => {
      //   ScrollTrigger.update()
      // })
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(reqIdRef.current as number)
  }, [lenis])

  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })
    setLenis(lenis)

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (lenisStore.isStopped) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenisStore.isStopped])

  useIsomorphicLayoutEffect(() => {
    if (lenisStore.reset) {
      lenis?.scrollTo(0, { immediate: true })
    }

    lenisStore.setReset(false)
  }, [lenisStore.reset])
}

export default useSmoothScroll
