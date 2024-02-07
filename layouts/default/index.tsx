import s from "./default-layout.module.scss"

import { useRouter } from "next/router"
import { ReactNode } from "react"

import cx from "clsx"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CustomHead } from "@/components/utility/custom-head"

import { Seo } from "@/types"

type Props = {
  children: ReactNode
  seo: Seo
  theme?: "dark" | "light"
}

const DefaultLayout = ({ children, seo, theme = "dark" }: Props) => {
  const router = useRouter()

  return (
    <div className={cx(s.defaultLayout, `theme-${theme}`)}>
      <Header />
      <CustomHead
        {...(seo &&
          Object.assign(seo, {
            canonical: `justdesignfx.com${router.pathname}`,
            keywords: [
              "venture capital",
              "startup",
              "investment",
              "chamaeleon",
              "silicon walley",
              "finance",
              "technology",
            ],
          }))}
      />
      <main className={cx(s.main, "main")}>{children}</main>
      <Footer />
    </div>
  )
}

export { DefaultLayout }
