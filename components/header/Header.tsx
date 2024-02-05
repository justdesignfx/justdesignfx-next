import s from "./header.module.scss"

import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"

import logo from "@/public/img/jdfx-logo-menu.svg"

const Header = () => {
  return (
    <header className={cx(s.header, "flex items-center justify-between p-md")}>
      <Link className={cx(s.logo, "cursor-pointer")} href="/">
        <Img className="object-contain" alt="JUST DESIGN FX Logo" src={logo} />
      </Link>

      <nav className="flex gap-10">
        <Link className={s.link} href="/">
          Home
        </Link>

        <Link className={s.link} href="/works">
          Works
        </Link>

        <Link className={s.link} href="/about">
          About
        </Link>

        <Link className={s.link} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
