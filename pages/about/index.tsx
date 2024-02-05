import React from "react"

import { DefaultLayout } from "@/layouts/default"

type Props = {}

const About = (props: Props) => {
  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
      }}
    >
      About
    </DefaultLayout>
  )
}

export default About
