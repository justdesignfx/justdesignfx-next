import s from "./footer.module.scss"

import cx from "clsx"

import { FooterReveal } from "@/components/animations/footer-reveal"
import { Subscribe } from "@/components/footer/subscribe"
import { IconArrow } from "@/components/icons/icon-arrow"
import { IconBehance } from "@/components/icons/icon-behance"
import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { Link } from "@/components/utility/link"

const Footer = () => {
  return (
    <FooterReveal>
      <footer className={s.footer}>
        <Subscribe />

        <div className={cx(s.contact, "flex items-end justify-start")}>
          <div className={s.col}>
            <h5 className={s.sayHi}>SAY HI ! 👋</h5>
            <p className={s.text}>
              Start a conversation about new business opportunities,
              <br /> media inquiries or learn about our career options.
            </p>
            <div className={cx(s.buttons, "flex items-center gap-3")}>
              <Link
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                state={{ contactReason: "NEW_PROJECT" }}
                to="/contact"
              >
                <span>NEW PROJECT</span>
              </Link>
              <Link
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                state={{ contactReason: "MEDIA_INQUIRY" }}
                to="/contact"
              >
                <span>MEDIA INQUIRY</span>
              </Link>
              <Link
                className={cx(s.btn, "flex items-center justify-center cursor-pointer")}
                external
                href="mailto:career@justdesignfx.com"
              >
                <span>CAREER</span>
              </Link>
            </div>
          </div>

          <div className={s.col}>
            <h5 className={s.addressTitle}>ISTANBUL HQ</h5>
            <p className={s.textSm}>
              JUSTWork Office Campus Balkan Cad. <br />
              No:62, 34770, ISTANBUL / TURKEY
            </p>
            <div className="flex items-center gap-5">
              <Link
                className={cx(s.btnGetDirection, "flex items-center gap-5 cursor-pointer")}
                external={true}
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
            <h5 className={s.addressTitle}>NEW YORK HQ</h5>
            <p className={s.textSm}>
              44 W 47th St #22, New York, <br />
              NY 10036 USA
            </p>
            <div className={s.buttons}>
              <Link
                className={cx(s.btnGetDirection, "flex items-center gap-5 cursor-pointer")}
                external
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

        <div className={cx(s.copyright, "flex items-center justify-start")}>
          <small className={s.rights}>
            &#169; All work copyright of JUST DESIGN FX
            <sup>&reg;</sup>
            <span className={s.year}>2024</span>
          </small>

          <div className={cx(s.legal, "flex items-center gap-20")}>
            <Link href="/cookie-policy" className={cx(s.link, "cursor-pointer")}>
              Cookie Policy
            </Link>

            <Link href="/privacy-policy" className={cx(s.link, "cursor-pointer")}>
              Privacy Policy
            </Link>
          </div>

          <div className={s.col}>
            <div className={cx(s.social, "flex items-center gap-10")}>
              <Link className={s.iconC} external href="https://www.instagram.com/justdesignfx/">
                <IconInstagram fill="var(--white)" />
              </Link>
              <Link className={s.iconC} external href="https://www.behance.net/justdesign_fx">
                <IconBehance fill="var(--white)" />
              </Link>
              <Link className={s.iconC} external href="https://tr.linkedin.com/company/just-design-fx">
                <IconLinkedin fill="var(--white)" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </FooterReveal>
  )
}

export default Footer
