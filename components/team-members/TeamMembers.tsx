import s from "./team-members.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { useRef } from "react"

import { TeamMemberProps } from "@/types"

import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { Img } from "@/components/utility/img"

import emojiBg from "@/public/img/emoji-bg.png"

interface Props {
  items: TeamMemberProps[]
}

const TeamMembers = (props: Props) => {
  const { items } = props

  const ref = useRef(null)

  useGSAP(
    () => {
      let maxWidth = 0
      const container = ref.current

      const getMaxWidth = () => {
        maxWidth = 0
        gsap.utils.toArray<HTMLElement>(".item").forEach((section) => {
          maxWidth += section.clientWidth
        })
      }
      getMaxWidth()
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth)

      gsap.to(".item", {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          end: () => `+=${maxWidth * 2}`,
          onUpdate: (self) => {
            gsap.to(".progress-bar", {
              scaleX: self?.progress ?? 0,
              ease: "none",
            })

            gsap.to(".keep-scrolling", {
              opacity: self.progress === 0 || self.progress === 1 ? 0 : 1,
              xPercent: gsap.utils.mapRange(-10000, 10000, -1, 1, Math.abs(self.getVelocity())) * self.direction * -1,
              transform: () =>
                `skew(${gsap.utils.mapRange(-10000, 10000, -10, 10, Math.abs(self.getVelocity())) * self.direction}deg`,
            })

            gsap.to(".progress-bar", {
              opacity: self.progress === 0 || self.progress === 1 ? 0 : 1,
            })
          },
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: ref }
  )

  return (
    <section className={cx(s.horizontalScroll, "flex items-center")} ref={ref}>
      {items.map((member, i: number) => {
        return (
          <div className={cx(s.item, { [s.last]: i === items.length - 1 }, "item", "flex-shrink-0")} key={i}>
            <div className={cx(s.memberCard, "flex items-center gap-7")}>
              <div className={cx(s.imgC, "flex-shrink-0")}>
                <div className={s.emojiC}>
                  <Img
                    src={member.iconImage}
                    className={cx(s.emoji, "object-contain")}
                    alt="Team Member"
                    height={500}
                    width={500}
                  />
                </div>
                <div className={s.memberPic}>
                  <Img src={member.profileImage} alt="Team Member" height={500} width={500} />
                </div>
              </div>

              <div
                className={cx(s.info, "flex flex-col items-start")}
                //   style={{
                //     paddingRight: i === items.length - 1 && windowSize.width > breakpoints.tablet ? "25vw" : undefined,
                //   }}
              >
                <h6 className={s.credentials}>
                  {member.name}
                  <br /> {member.surname}
                </h6>

                {member?.role?.split("<br>").map((par: string, i: number) => {
                  return (
                    <small className={s.role} key={i}>
                      {par}
                    </small>
                  )
                })}

                {member.linkedin && (
                  <a className={cx(s.iconC, "cursor-pointer")} href={member.linkedin} target="_blank" rel="noreferrer">
                    <IconLinkedin fill="var(--white)" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      })}

      <div className={cx(s.progressBar, "progress-bar")}></div>

      <div className={cx(s.keepScrolling)}>
        <div className={cx(s.transform, "keep-scrolling flex")}>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
