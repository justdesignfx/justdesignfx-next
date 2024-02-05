import { DefaultLayout } from "@/layouts/default"
import React from "react"

type Props = {}

const Contact = (props: Props) => {
  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
      }}
    >
      Contact
    </DefaultLayout>
  )
}

export default Contact
