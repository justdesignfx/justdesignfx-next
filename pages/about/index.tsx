import s from "./about.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { Fragment, useRef } from "react"

import { all as getServices } from "@/api/queries/services"
import { all as getAwards } from "@/api/queries/awards"
import { all as getTeamMembers } from "@/api/queries/team-members"

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
import { TeamMembers } from "@/components/team-members"

interface Props {
  services: ServiceProps[]
  awards: AwardProps[]
  teamMembers: TeamMemberProps[]
}

const About = (props: Props) => {
  const { services, awards, teamMembers } = props

  const introRef = useRef(null)
  const preTeamRef = useRef(null)

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({ paused: true })

  //     // tl.from(".we-are", {
  //     //   duration: 0.8,
  //     //   rotationX: 75,
  //     //   stagger: 0.1,
  //     //   transformOrigin: "top center",
  //     //   z: -150,
  //     //   opacity: 0,
  //     // })
  //     //   .from(".relentless", {
  //     //     rotateY: -60,
  //     //     scale: 0.5,
  //     //     opacity: 0,
  //     //     delay: -0.1,
  //     //   })
  //     //   .from(".dreamers", {
  //     //     rotateY: -60,
  //     //     scale: 0.5,
  //     //     opacity: 0,
  //     //     delay: -0.1,
  //     //   })
  //     //   .from(".vertical-left", {
  //     //     opacity: 0,
  //     //   })

  //     // tl.play()

  //     const weAreLetters = gsap.utils.toArray(".we-are-letter")
  //     const justLetters = gsap.utils.toArray(".just-letter")
  //     const relentlessLetters = gsap.utils.toArray(".relentless-letter")
  //     const dreamersLetters = gsap.utils.toArray(".dreamers-letter")

  //     tl.from(".we-are", {
  //       duration: 0.8,

  //       opacity: 0,
  //     }).from(justLetters, {
  //       duration: 0.8,
  //       stagger: 0.1,
  //       opacity: 0,
  //     })
  //     tl.from(".relentless", {
  //       duration: 0.8,

  //       opacity: 0,
  //     })
  //       .from(dreamersLetters, {
  //         duration: 0.8,
  //         stagger: 0.1,
  //         opacity: 0,
  //       })
  //       .from(".vertical-left", {
  //         duration: 0.5,
  //         opacity: 0,
  //       })
  //     // .from(".blob", {
  //     //   duration: 0.5,
  //     //   opacity: 0,
  //     // })
  //     // .from(".smile", {
  //     //   duration: 0.5,
  //     //   opacity: 0,
  //     // })

  //     tl.play()
  //   },
  //   { scope: introRef }
  // )

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
      <section className={cx(s.intro, "flex flex-col items-center")} ref={introRef}>
        <h1>
          <span className="block we-are">
            <span className="we-are-letter">W</span>
            <span className="we-are-letter">E</span>
            <span className="we-are-letter invisible">E</span>
            <span className="we-are-letter">A</span>
            <span className="we-are-letter">R</span>
            <span className="we-are-letter">E</span>
            <span className="letter invisible">E</span>
            <span className={cx("inline", s.italic)}>
              <span className="just-letter">j</span>
              <span className="just-letter">u</span>
              <span className="just-letter">s</span>
              <span className="just-letter">t</span>
            </span>
          </span>
          <span className="block relentless">
            <span className="relentless-letter">R</span>
            <span className="relentless-letter">E</span>
            <span className="relentless-letter">L</span>
            <span className="relentless-letter">E</span>
            <span className="relentless-letter">N</span>
            <span className="relentless-letter">T</span>
            <span className="relentless-letter">L</span>
            <span className="relentless-letter">E</span>
            <span className="relentless-letter">S</span>
            <span className="relentless-letter">S</span>
          </span>
          <span className={cx("block", "dreamers", s.italic)}>
            <span className="dreamers-letter">d</span>
            <span className="dreamers-letter">r</span>
            <span className="dreamers-letter">e</span>
            <span className="dreamers-letter">a</span>
            <span className="dreamers-letter">m</span>
            <span className="dreamers-letter">e</span>
            <span className="dreamers-letter">r</span>
            <span className="dreamers-letter">s</span>
            <span className="dreamers-letter">.</span>
          </span>
        </h1>

        <div className={cx(s.flyingTextC, "flex items-center justify-between")}>
          <p className="text-left">
            <span>
              We design iconic brands with future impact.<span className={s.emoji}>🚀</span>
            </span>
            <span>
              JUST DESIGN FX
              <sup>®</sup> is a new generation awarded branding and web design agency that specializes in creating the
              best possible brand experience for business owners and target users.
            </span>
          </p>
          <p className="text-right">
            <span>
              At JUST DESIGN FX<sup>®</sup>, we work collaboratively with clients from all over the world. Our working
              methodology involves analyzing a brand’s current position, understanding its design and marketing needs,
              and envisioning its best future.
            </span>
            <span>Our offices are currently located in Istanbul and New York.</span>
          </p>
        </div>

        <div className={cx(s.verticalTextLeft, "vertical-left")}>
          <Img src={allServices} alt="A Full Services Creative Studio Text" />
        </div>

        <div className={s.verticalTextRight}>
          <small>THE FUTURE IS NEAR.</small>
          <div className={s.iconC}>
            <IconArrowDown fill="var(--white)" />
          </div>
        </div>

        <div className={s.downArrowMobile}>
          <IconArrowDown fill="var(--white)" />
        </div>

        <div className={cx(s.blob, "blob")}>
          <Parallax speedX={0} speedY={-0.5}>
            <Img src={teamBlob} alt="Water Blob" />
          </Parallax>
        </div>

        <div className={cx(s.smile, "smile")}>
          <Parallax speedX={0} speedY={-0.25}>
            <Img src={teamSmile} alt="Smiley" />
          </Parallax>
        </div>

        <div className={s.whatWeDo}>
          <Parallax speedX={0} speedY={-1.25}>
            <h2 className="text-center">
              WHAT
              <br /> WE DO.
            </h2>
          </Parallax>
        </div>
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

        <div className={cx(s.table, "desktop-only")}>
          <div className={cx(s.row, s.title)}>
            <h5 className={s.text}>Award</h5>
            <h5 className={s.text}>Project & Category</h5>
          </div>

          {awards.map((award) => {
            return (
              <Fragment key={award.id}>
                {award.url ? (
                  <Link className={cx(s.row, s.item)} href={award.url} target="_blank" rel="noreferrer">
                    <Img className={s.trophy} src={award.image} alt="Trophy" height={200} width={200} />
                    <h5 className={s.text}>{award.title}</h5>
                    <h5 className={s.text}>{award.category}</h5>
                    {award.url && <h5 className={s.link}>View Case</h5>}
                  </Link>
                ) : (
                  <div className={cx(s.row, s.item)}>
                    <Img className={s.trophy} src={award.image} alt="Trophy" height={200} width={200} />
                    <h5 className={s.text}>{award.title}</h5>
                    <h5 className={s.text}>{award.category}</h5>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>

        <div className={cx(s.tableMobile, "mobile-only")}>
          {awards?.map((award) => {
            return (
              <Fragment key={award.id}>
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noreferrer">
                    <Img className={s.trophy} src={award.image} alt="Trophy" height={200} width={200} />
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
                  <div>
                    <Img className={s.trophy} src={award.image} alt="Trophy" height={200} width={200} />
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
              </Fragment>
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

      <TeamMembers items={teamMembers} />
    </DefaultLayout>
  )
}

export default About

export async function getStaticProps() {
  const services = await getServices()
  const awards = await getAwards()
  const teamMembers = await getTeamMembers()

  return { props: { awards, services, teamMembers } }
}
