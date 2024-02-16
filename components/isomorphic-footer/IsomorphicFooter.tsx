import { useWindowSize } from "@uidotdev/usehooks"
import { useRouter } from "next/router"
import { memo } from "react"

import { FooterReveal } from "@/components/animations/footer-reveal"
import { Footer } from "@/components/footer"
import { ClientOnly } from "@/components/isomorphic"

import { routes } from "@/lib/constants"
import { breakpoints } from "@/lib/utils"

const IsomorphicFooter = () => {
  const router = useRouter()
  const { width } = useWindowSize()

  const footer = <Footer type={router.pathname === `/${routes.contact.path}` ? "contact" : "main"} />

  return <ClientOnly>{width && width > breakpoints.mobile ? <FooterReveal>{footer}</FooterReveal> : footer}</ClientOnly>
}

export default memo(IsomorphicFooter)
