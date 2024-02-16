import s from "./custom-cursor.module.scss"

import { useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { useRouter } from "next/router"

import useMousePosition from "@/hooks/use-mouse-position"
import { useCursorStore } from "@/lib/store/cursor"
import { CursorType } from "@/types"
import { useGSAP } from "@gsap/react"

const Cursor = () => {
  const ref = useRef(null)
  const cursorStore = useCursorStore()
  const mouse = useMousePosition()
  const [cursorUi, setCursorUi] = useState<CursorType>("default")
  const router = useRouter()

  // control visibility
  useIsomorphicLayoutEffect(() => {
    const handleMouseOver = () => {
      if (!cursorStore.visible) cursorStore.toggleVisibility()
    }

    const handleMouseEnter = () => {
      if (!cursorStore.visible) cursorStore.toggleVisibility()
    }

    const handleMouseLeave = () => {
      if (cursorStore.visible) cursorStore.toggleVisibility()
    }

    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseover", handleMouseOver)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseover", handleMouseOver)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorStore])

  useIsomorphicLayoutEffect(() => {
    cursorStore.setCursor("default")
  }, [router.pathname])

  useGSAP(
    () => {
      if (!cursorStore.visible) return

      gsap.to(ref.current, {
        x: mouse.x ?? 0,
        y: mouse.y ?? 0,
        duration: 0,
      })
    },
    {
      scope: ref,
      dependencies: [mouse, cursorStore],
    }
  )

  useGSAP(
    () => {
      if (!cursorStore.visible) return

      gsap.to(".c", {
        opacity: 0,
        scale: 0.5,
        duration: 0.05,
        onComplete: () => {
          setCursorUi(cursorStore.type)
          gsap.to(".c", {
            opacity: 1,
            scale: 1,
            duration: 0.1,
          })
        },
      })
    },
    {
      scope: ref,
      dependencies: [cursorStore],
    }
  )

  return (
    <div
      className={cn(s.cursor, {
        [s.visible]: cursorStore.visible,
      })}
      ref={ref}
    >
      <div className={cn(s.c, "c", "flex-center", [s[cursorUi]])}>
        <span className={cn({ [s.active]: cursorUi === "click" })}>Click</span>
      </div>
    </div>
  )
}

export default Cursor
