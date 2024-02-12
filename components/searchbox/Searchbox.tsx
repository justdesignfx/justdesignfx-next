import s from "./searchbox.module.scss"

import cx from "clsx"

import IconMagnifyingGlass from "@/components/icons/icon-magnifying-glass"

interface Props {
  keyword: string
  setKeyword: (keyword: string) => void
}

const Searchbox = (props: Props) => {
  const { keyword, setKeyword } = props
  return (
    <div className={s.searchbox}>
      <div className={s.field}>
        <div className={cx(s.inputC)}>
          <input
            autoComplete="off"
            id="search"
            name="search"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search works by client, type or keyword"
            type="text"
            value={keyword}
          />
        </div>
        <div className={cx(s.iconC, "flex-center")}>
          <IconMagnifyingGlass fill="var(--black)" />
        </div>
      </div>
    </div>
  )
}

export default Searchbox
