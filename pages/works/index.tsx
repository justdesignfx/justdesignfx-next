import s from "./works.module.scss"

import cx from "clsx"
import { useState } from "react"

import { CardWork } from "@/components/card-work"
import { Searchbox } from "@/components/searchbox"
import { Dropdown } from "@/components/utility/dropdown"
import { DefaultLayout } from "@/layouts/default"
import { Filter } from "@/types"

import { all as getClientTypes } from "@/api/queries/filter-client-types"
import { all as getServices } from "@/api/queries/services"
import { useAll } from "@/api/queries/works"
import useDebounce from "@/hooks/use-debounce"

interface Props {
  clientTypes: Filter[]
  services: Filter[]
}

const Works = ({ clientTypes, services }: Props) => {
  const [service, setService] = useState("")
  const [clientType, setClientType] = useState("")
  const [keyword, setKeyword] = useState("")
  const debouncedKeyword = useDebounce(keyword, 500)
  const { isLoading, data } = useAll(debouncedKeyword, clientType, service)

  function getSelectedOption(options: Filter[], id: Filter["id"] | null) {
    return options.find((option) => {
      return option.id === id
    })
  }

  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX | Works",
        description: "Take a look at what we’ve done. View our selection of branding and website projects.",
      }}
      theme="light"
    >
      <section className={cx(s.filterC, "flex flex-col tablet:flex-row items-center justify-end gap-3 tablet:gap-5")}>
        <h1 className={cx("mr-0 tablet:mr-auto")}>OUR WORKS</h1>

        {services.length && (
          <div className={s.dropdownC}>
            <Dropdown
              options={services}
              onChange={setService}
              defaultValue={{ id: "", title: "Type of Work" }}
              selectedOption={getSelectedOption(services, service)}
            />
          </div>
        )}

        {clientTypes.length && (
          <div className={s.dropdownC}>
            <Dropdown
              options={clientTypes}
              onChange={setClientType}
              defaultValue={{ id: "", title: "Type of Client" }}
              selectedOption={getSelectedOption(clientTypes, clientType)}
            />
          </div>
        )}

        <Searchbox keyword={keyword} setKeyword={setKeyword} />
      </section>

      {isLoading ? (
        <div className={cx(s.loading, "flex items-center justify-center w-screen h-screen")}>LOADING</div>
      ) : (
        <section className={cx(s.items, "grid grid-cols-1 tablet:grid-cols-3 gap-y-lg tablet:gap-y-xl gap-x-md")}>
          {data &&
            Array.isArray(data) &&
            data.map((item) => {
              return (
                <div className={cx(s.card, "cursor-pointer")} key={item.id}>
                  <CardWork {...item} />
                </div>
              )
            })}
        </section>
      )}
    </DefaultLayout>
  )
}

export default Works

export async function getStaticProps() {
  const clientTypes = await getClientTypes()
  const services = await getServices()

  return { props: { clientTypes, services } }
}
