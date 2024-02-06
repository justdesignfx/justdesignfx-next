import s from "./about.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { useRef } from "react"

import { all } from "@/api/queries/services"
import { Parallax } from "@/components/animations/parallax"
import { IconArrowDown } from "@/components/icons/icon-arrow-down"
import { Marquee } from "@/components/marquee"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"

import { AwardProps, ServiceProps, TeamMemberProps } from "@/types"

import allServices from "@/public/img/all-services.svg"
import companies from "@/public/img/companies.png"
import sun from "@/public/img/references-sun.svg"
import teamBlob from "@/public/img/team-blob.png"
import teamEyeUp from "@/public/img/team-eye-up.svg"
import teamSmile from "@/public/img/team-smile.png"

interface Props {
  services: ServiceProps[]
  awards: AwardProps[]
  teamMembers: TeamMemberProps[]
}

const About = (props: Props) => {
  const { services, awards, teamMembers } = props
  const preTeamRef = useRef(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".team-eye",
        start: "center center",
        end: "center center",
        onEnter: () => {
          gsap.to(".team-eye", {
            rotateX: -180,
            duration: 0,
          })
        },
        onEnterBack: () => {
          gsap.to(".team-eye", {
            rotateX: 0,
            duration: 0,
          })
        },
      })
    },
    { scope: preTeamRef }
  )

  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
      }}
    >
      <section className={s.intro}>
        <h1>
          <span className="block">
            WE ARE <span className={cx("inline", s.italic)}>just</span>
          </span>
          <span className="block">RELENTLESS</span>
          <span className={cx("block", s.italic)}>dreamers.</span>
        </h1>

        <div className={s.flyingTextWrapper}>
          <small>
            <span className={s.newLine}>
              We design iconic brands with future impact.<span className={s.emoji}>🚀</span>
            </span>
            JUST DESIGN FX
            <sup>®</sup> is a new generation awarded branding and web design agency that specializes in creating the
            best possible brand experience for business owners and target users.
          </small>
          <small>
            At JUST DESIGN FX<sup>®</sup>, we work collaboratively with clients from all over the world. Our working
            methodology involves analyzing a brand’s current position, understanding its design and marketing needs, and
            envisioning its best future.
            <span className={s.newLine}>Our offices are currently located in Istanbul and New York.</span>
          </small>
        </div>

        <div className={s.verticalTextLeft}>
          <Img src={allServices} alt="A Full Services Creative Studio Text" />
        </div>

        <div className={s.verticalTextRight}>
          <h6>THE FUTURE IS NEAR.</h6>
          <div className={s.iconC}>
            <IconArrowDown fill="var(--white)" />
          </div>
        </div>

        <div className={s.downArrowMobile}>
          <IconArrowDown fill="var(--white)" />
        </div>

        <Img className={s.teamBlob} src={teamBlob} alt="Water Blob" />

        <Img className={s.teamSmile} src={teamSmile} alt="Smiley" />

        <Parallax speedX={0} speedY={-1}>
          <div className={s.whatWeDo}>
            <h2>
              WHAT
              <br /> WE DO.
            </h2>
          </div>
        </Parallax>
      </section>

      <section className={s.fields}>
        <div className={cx(s.items, "grid grid-cols-2 mx-auto my-xl")}>
          {services.map((service: any, i: number) => {
            return (
              <div className={s.fieldCard} key={service.id}>
                <div className={cx(s.inner, "flex flex-col items-start justify-start cursor-pointer")}>
                  <Link
                    // onMouseDown={() => saveFilter(service.id)}
                    href="/works"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <small className={s.index}>{`0${i + 1}.`}</small>
                    {service.title.split("<br>").map((word: string, i: number) => {
                      return (
                        <h5 className={s.title} key={i}>
                          {word}
                        </h5>
                      )
                    })}
                    <p className={s.description}>{service.description}</p>
                    <p className={s.seeAllWorks}>SEE ALL WORKS.</p>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={s.awards}>
        <h3>AWARDS</h3>

        <div className={s.table}>
          <div className={cx(s.row, s.title)}>
            <h5 className={s.text}>Award</h5>
            <h5 className={s.text}>Project & Category</h5>
          </div>

          {awards.map((award) => {
            return (
              <>
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noreferrer" key={award.id}>
                    <div className={cx(s.row, s.item)} key={award.id}>
                      <Img className={s.trophy} src={award.image} alt="Trophy" />
                      <h5 className={s.text}>{award.title}</h5>
                      <h5 className={s.text}>{award.category}</h5>
                      {award.url && <h5 className={s.link}>View Case</h5>}
                    </div>
                  </a>
                ) : (
                  <div key={award.id}>
                    <div className={cx(s.row, s.item)} key={award.id}>
                      <Img className={s.trophy} src={award.image} alt="Trophy" />
                      <h5 className={s.text}>{award.title}</h5>
                      <h5 className={s.text}>{award.category}</h5>
                    </div>
                  </div>
                )}
              </>
            )
          })}
        </div>

        <div className={s.tableMobile}>
          {awards?.map((award) => {
            return (
              <>
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noreferrer" key={award.id}>
                    <Img className={s.trophy} src={award.image} alt="Trophy" />
                    <div className={cx(s.row, s.title)}>
                      <h5 className={s.text}>Award</h5>
                      <h5 className={s.text}>{award.title}</h5>
                    </div>
                    <div className={cx(s.row, s.item)}>
                      <h5 className={s.text}>Project & Category</h5>
                      <h5 className={s.text}>{award.category}</h5>
                    </div>
                    <div className={cx(s.row, s.item)}>
                      <div>{/* dummy */}</div>
                      <h5 className={s.link}>View Case</h5>
                    </div>
                  </a>
                ) : (
                  <div key={award.id}>
                    <Img className={s.trophy} src={award.image} alt="Trophy" />
                    <div className={cx(s.row, s.title)}>
                      <h5 className={s.text}>Award</h5>
                      <h5 className={s.text}>{award.title}</h5>
                    </div>
                    <div className={cx(s.row, s.item)}>
                      <h5 className={s.text}>Project & Category</h5>
                      <h5 className={s.text}>{award.category}</h5>
                    </div>
                  </div>
                )}
              </>
            )
          })}

          {/* <img className={s.pentawardsLogo} src={pentawards} alt="Pentawards Logo" /> */}
        </div>
      </section>

      <section className={s.references}>
        <h3 className={cx(s.textWrapper, "mx-auto")}>
          <span className="block">
            SOME OF <small className="inline">OUR</small>
          </span>
          <span className={cx(s.italic, "block")}>clients...</span>
        </h3>

        <div className={cx(s.imgC, s.referencesSun)}>
          <Img alt="Smiling Sun Sticker" className="object-contain" src={sun} />
        </div>

        <div className={cx(s.imgC, s.companies, "mx-auto")}>
          <Img alt="Company Logos" className="object-contain" src={companies} />
        </div>

        {/* <div className={s.companiesMobile}>
            <div className={s.logoWrapper}>
              <LogoWam className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoGais className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoMeydan className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoVoi className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoMado className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoCitys className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoBgood className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoJustwork className={s.companyLogo} />
            </div>
            <div className={s.logoWrapper}>
              <LogoCookshop className={s.companyLogo} />
            </div>
          </div> */}
      </section>

      <section className={s.preTeam} ref={preTeamRef}>
        <div className={cx(s.marqueeC, s.white)}>
          <Marquee>
            <h3>
              <span className={s.rightMargin}>
                OUR TEAM OF CREAT<span className={s.inlineO}>O</span>RS. OUR TEAM OF CREAT
                <span className={s.inlineO}>O</span>RS.
              </span>
            </h3>
          </Marquee>
        </div>

        <div className={cx(s.marqueeC, s.gray)}>
          <Marquee>
            <h3>
              <span className={s.rightMargin}>
                OUR TEAM OF CREAT<span className={s.inlineO}>O</span>RS. OUR TEAM OF CREAT
                <span className={s.inlineO}>O</span>RS.
              </span>
            </h3>
          </Marquee>
        </div>

        <div className={cx(s.eyeC, "flex flex-col items-center")}>
          <div className={s.imgC}>
            <Img alt="Eyes" className={cx(s.teamEye, "team-eye")} src={teamEyeUp} />
          </div>
          <small>CHECK OUT OUR TEAM</small>
        </div>

        {/* <div className={s.rocketWrapper}>
          <Rocket className={s.rocket} />
        </div> */}
      </section>
    </DefaultLayout>
  )
}

export default About

export async function getStaticProps() {
  const services = await all()
  const awards = await all()
  const teamMembers = await all()

  return { props: { awards, services, teamMembers } }
}
