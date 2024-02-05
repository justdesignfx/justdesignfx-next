import s from "./works.module.scss"

import cx from "clsx"

import { all } from "@/api/queries/works"
import { CardWork } from "@/components/card-work"
import { DefaultLayout } from "@/layouts/default"
import { WorkCardProps } from "@/types"

interface Props {
  works: WorkCardProps[]
}

const Works = ({ works }: Props) => {
  console.log(works)

  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
      }}
      theme="light"
    >
      <div className={cx(s.items, "grid grid-cols-3 p-md gap-y-xl gap-x-md")}>
        {works.map((item) => {
          return (
            <div className={cx(s.card, "cursor-pointer")} key={item.id}>
              <CardWork {...item} />
            </div>
          )
        })}
      </div>
    </DefaultLayout>
  )
}

export default Works

export async function getStaticProps() {
  const works = await all()

  return { props: { works } }
}
