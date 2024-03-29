import s from "./footer.module.scss"

import cx from "clsx"
import NextLink from "next/link"

import { Subscribe } from "@/components/footer/subscribe"
import { IconArrow } from "@/components/icons/icon-arrow"
import { IconBehance } from "@/components/icons/icon-behance"
import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { Link } from "@/components/utility/link"

import { ContactReason } from "@/types"

interface Props {
  type: "main" | "contact"
}

const Footer = (props: Props) => {
  const { type } = props

  const variations = {
    main: (
      <>
        <Subscribe />

        <div className={cx(s.contactInfo, "flex flex-col tablet:flex-row items-center tablet:items-end justify-start")}>
          <div className={s.col}>
            <h5 className={s.sayHi}>SAY HI ! 👋</h5>
            <p className={s.text}>
              Start a conversation about new business opportunities,
              <br className={cx("hidden tablet:block")} /> media inquiries or learn about our career options.
            </p>
            <div className={cx(s.buttons, "flex flex-col tablet:flex-row items-center gap-3")}>
              <NextLink
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                href={{
                  pathname: "/contact",
                  query: {
                    contactReason: ContactReason.newProject,
                  },
                }}
                as={"/contact"}
              >
                <span>NEW PROJECT</span>
              </NextLink>

              <NextLink
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                href={{
                  pathname: "/contact",
                  query: {
                    contactReason: ContactReason.mediaInquiry,
                  },
                }}
                as={"/contact"}
              >
                <span>MEDIA INQUIRY</span>
              </NextLink>

              <Link
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                external="true"
                href="mailto:career@justdesignfx.com"
              >
                <span>CAREER</span>
              </Link>
            </div>
          </div>

          <div className={s.col}>
            <h5 className={s.title}>ISTANBUL HQ</h5>
            <p className={cx(s.text, s.sm)}>
              JUSTWork Office Campus Balkan Cad. <br className={cx("hidden tablet:block")} />
              No:62, 34770, ISTANBUL / TURKEY
            </p>
            <div className="flex items-center gap-5">
              <Link
                className={cx(s.btnGetDirection, "flex items-center gap-5 cursor-pointer")}
                external="true"
                href="https://www.google.com/maps/place/JUSTWork/@41.0234497,29.1265974,15z/data=!4m5!3m4!1s0x0:0x5af99b7e2004cb13!8m2!3d41.0234497!4d29.1265974"
              >
                <span>GET DIRECTION</span>
                <div className={s.iconC}>
                  <IconArrow fill="var(--white)" />
                </div>
              </Link>
            </div>
          </div>

          <div className={s.col}>
            <h5 className={s.title}>NEW YORK HQ</h5>
            <p className={cx(s.text, s.sm)}>
              44 W 47th St #22, New York, <br className={cx("hidden tablet:block")} />
              NY 10036 USA
            </p>
            <div className={s.buttons}>
              <Link
                className={cx(s.btnGetDirection, "flex items-center gap-5 cursor-pointer")}
                external="true"
                href="https://www.google.com/maps/place/44+W+47th+St+%2322,+New+York,+NY+10036,+USA/@40.757209,-73.9807804,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258ffa808b8d3:0x4aa58f11c530b90a!8m2!3d40.757209!4d-73.9807804"
              >
                <span>GET DIRECTION</span>
                <div className={s.iconC}>
                  <IconArrow fill="var(--white)" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    ),
    contact: (
      <div className={cx(s.footerContact, "flex flex-col tablet:flex-row items-center justify-between")}>
        <div className={s.col}>
          <h5 className={s.title}>ISTANBUL HQ</h5>
          <p className={cx(s.text, s.sm)}>
            JUSTWork Office Campus Balkan Cad. <br className={cx("hidden tablet:block")} />
            No:62, 34770, ISTANBUL / TURKEY
          </p>
          <div className="flex items-center gap-5">
            <Link
              className={cx(s.btnGetDirection, "cursor-pointer")}
              external="true"
              href="https://www.google.com/maps/place/JUSTWork/@41.0234497,29.1265974,15z/data=!4m5!3m4!1s0x0:0x5af99b7e2004cb13!8m2!3d41.0234497!4d29.1265974"
            >
              <span>GET DIRECTION</span>
              <div className={s.iconC}>
                <IconArrow fill="var(--white)" />
              </div>
            </Link>
          </div>
        </div>

        <div className={s.col}>
          <h5 className={s.title}>NEW YORK HQ</h5>
          <p className={cx(s.text, s.sm)}>
            44 W 47th St #22, New York, <br className={cx("hidden tablet:block")} />
            NY 10036 USA
          </p>
          <div className={s.buttons}>
            <Link
              className={cx(s.btnGetDirection, "cursor-pointer")}
              external="true"
              href="https://www.google.com/maps/place/44+W+47th+St+%2322,+New+York,+NY+10036,+USA/@40.757209,-73.9807804,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258ffa808b8d3:0x4aa58f11c530b90a!8m2!3d40.757209!4d-73.9807804"
            >
              <span>GET DIRECTION</span>
              <div className={s.iconC}>
                <IconArrow fill="var(--white)" />
              </div>
            </Link>
          </div>
        </div>

        <div className={s.col}>
          <h5 className={s.title}>JOIN THE TEAM</h5>
          <p className={cx(s.text, s.sm)}>
            Send us your CV, we are always
            <br className={cx("hidden tablet:block")} /> looking for new talents.
          </p>
          <div className={s.buttons}>
            <Link
              className={cx(s.btn, "flex items-center justify-center gap-5 cursor-pointer")}
              external="true"
              href="mailto:career@justdesignfx.com"
            >
              <span>CAREER</span>
            </Link>
          </div>
        </div>
      </div>
    ),
  }

  return (
    <footer className={s.footer}>
      {variations[type]}

      <div className={cx(s.copyright, "flex flex-col tablet:flex-row items-center justify-start")}>
        <small className={s.rights}>
          &#169; All work copyright of JUST DESIGN FX
          <sup>&reg;</sup>
          <span className={s.year}>2024</span>
        </small>

        <div className={cx(s.legal, "flex flex-col tablet:flex-row items-center gap-y-10 tablet:gap-x-20")}>
          <Link href="/cookie-policy" className={cx(s.link, "cursor-pointer")}>
            Cookie Policy
          </Link>

          <Link href="/privacy-policy" className={cx(s.link, "cursor-pointer")}>
            Privacy Policy
          </Link>
        </div>

        <div className={cx(s.social, "flex items-center")}>
          <Link
            className={cx(s.iconC, "cursor-pointer")}
            external="true"
            href="https://www.instagram.com/justdesignfx/"
          >
            <IconInstagram fill="var(--white)" />
          </Link>
          <Link className={cx(s.iconC, "cursor-pointer")} external="true" href="https://www.behance.net/justdesign_fx">
            <IconBehance fill="var(--white)" />
          </Link>
          <Link
            className={cx(s.iconC, "cursor-pointer")}
            external="true"
            href="https://tr.linkedin.com/company/just-design-fx"
          >
            <IconLinkedin fill="var(--white)" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
